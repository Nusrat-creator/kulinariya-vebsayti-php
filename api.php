<?php
declare(strict_types=1);

// Dadlı recipe API. Uses a JSON file as a lightweight shared data store,
// so it works on ordinary PHP hosting without a database installation.
$https = !empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off';
session_set_cookie_params([
    'httponly' => true,
    'samesite' => 'Lax',
    'secure' => $https,
]);
session_start();

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
header('X-Content-Type-Options: nosniff');

$dataDirectory = __DIR__ . '/data';
$dataFile = $dataDirectory . '/custom-recipes.json';

function respond(int $status, array $payload): void
{
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function ensureDataFile(string $directory, string $file): void
{
    if (!is_dir($directory) && !mkdir($directory, 0755, true) && !is_dir($directory)) {
        respond(500, ['error' => 'The recipe data directory could not be created.']);
    }
    if (!file_exists($file) && file_put_contents($file, "[]\n", LOCK_EX) === false) {
        respond(500, ['error' => 'The recipe data file could not be created. Check folder permissions.']);
    }
}

/** Run a read or update while holding a file lock. */
function withRecipeStore(string $file, callable $callback, bool $write = false)
{
    $handle = fopen($file, 'c+');
    if ($handle === false) {
        respond(500, ['error' => 'The recipe data file could not be opened.']);
    }

    if (!flock($handle, $write ? LOCK_EX : LOCK_SH)) {
        fclose($handle);
        respond(500, ['error' => 'Could not lock the recipe data file.']);
    }

    rewind($handle);
    $contents = stream_get_contents($handle);
    $recipes = json_decode($contents ?: '[]', true);
    if (!is_array($recipes)) {
        flock($handle, LOCK_UN);
        fclose($handle);
        respond(500, ['error' => 'The recipe data file contains invalid JSON.']);
    }

    $result = $callback($recipes);

    if ($write) {
        $json = json_encode($recipes, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
        if ($json === false) {
            flock($handle, LOCK_UN);
            fclose($handle);
            respond(500, ['error' => 'The recipe could not be encoded.']);
        }
        rewind($handle);
        if (!ftruncate($handle, 0) || fwrite($handle, $json . "\n") === false || !fflush($handle)) {
            flock($handle, LOCK_UN);
            fclose($handle);
            respond(500, ['error' => 'The recipe data could not be saved. Check folder permissions.']);
        }
    }

    flock($handle, LOCK_UN);
    fclose($handle);
    return $result;
}

function cleanText($value, int $maxLength): string
{
    if (!is_string($value)) {
        return '';
    }
    $value = trim($value);
    $value = preg_replace('/\s+/u', ' ', $value) ?? $value;
    if (function_exists('mb_substr')) {
        return mb_substr($value, 0, $maxLength, 'UTF-8');
    }
    $characters = preg_split('//u', $value, -1, PREG_SPLIT_NO_EMPTY);
    return $characters === false ? '' : implode('', array_slice($characters, 0, $maxLength));
}

function cleanLines($value, int $maxLines, int $maxLength): array
{
    if (!is_string($value)) {
        return [];
    }
    $lines = preg_split('/\r\n|\r|\n/', $value) ?: [];
    $clean = [];
    foreach ($lines as $line) {
        $line = trim($line);
        if ($line !== '') {
            $clean[] = cleanText($line, $maxLength);
        }
        if (count($clean) >= $maxLines) {
            break;
        }
    }
    return $clean;
}

function csrfIsValid(): bool
{
    $sent = $_SERVER['HTTP_X_CSRF_TOKEN'] ?? '';
    $saved = $_SESSION['csrf_token'] ?? '';
    return is_string($sent) && is_string($saved) && $sent !== '' && hash_equals($saved, $sent);
}

ensureDataFile($dataDirectory, $dataFile);
$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';

if ($method === 'GET') {
    $sessionOwner = hash('sha256', session_id());
    $recipes = withRecipeStore($dataFile, static function (array $items) use ($sessionOwner): array {
        return array_map(static function ($recipe) use ($sessionOwner): array {
            if (!is_array($recipe)) {
                return [];
            }
            $recipe['canManage'] = isset($recipe['ownerHash']) && hash_equals((string)$recipe['ownerHash'], $sessionOwner);
            unset($recipe['ownerHash']);
            return $recipe;
        }, $items);
    });
    respond(200, ['recipes' => array_values(array_filter($recipes))]);
}

if (!in_array($method, ['POST', 'DELETE'], true)) {
    header('Allow: GET, POST, DELETE');
    respond(405, ['error' => 'Method not allowed.']);
}

if (!csrfIsValid()) {
    respond(403, ['error' => 'Security token expired. Refresh the page and try again.']);
}

$rawBody = file_get_contents('php://input');
if ($rawBody === false || strlen($rawBody) > 1024 * 1024) {
    respond(413, ['error' => 'Request is too large.']);
}
$body = json_decode($rawBody ?: '{}', true);
if (!is_array($body)) {
    respond(400, ['error' => 'Invalid JSON request.']);
}

if ($method === 'POST') {
    $title = $body['title'] ?? [];
    $description = $body['description'] ?? [];
    $category = cleanText($body['category'] ?? '', 20);
    $allowedCategories = ['main', 'salad', 'dessert', 'breakfast', 'soup', 'azeri'];
    $time = filter_var($body['time'] ?? null, FILTER_VALIDATE_INT);
    $servings = filter_var($body['servings'] ?? 2, FILTER_VALIDATE_INT);
    $nameAz = cleanText(is_array($title) ? ($title['az'] ?? '') : '', 60);
    $nameEn = cleanText(is_array($title) ? ($title['en'] ?? '') : '', 60);
    $descriptionAz = cleanText(is_array($description) ? ($description['az'] ?? '') : '', 180);
    $descriptionEn = cleanText(is_array($description) ? ($description['en'] ?? '') : '', 180);

    $ingredientInput = $body['ingredients'] ?? [];
    $ingredients = [];
    if (is_array($ingredientInput)) {
        foreach (array_slice($ingredientInput, 0, 60) as $ingredient) {
            $textValue = is_array($ingredient) ? ($ingredient['text'] ?? '') : $ingredient;
            if (is_array($textValue)) {
                $textAz = cleanText($textValue['az'] ?? '', 160);
                $textEn = cleanText($textValue['en'] ?? '', 160);
                if ($textAz !== '' && $textEn !== '') {
                    $ingredients[] = ['text' => ['az' => $textAz, 'en' => $textEn]];
                }
            } else {
                $text = cleanText($textValue, 160);
                if ($text !== '') {
                    $ingredients[] = ['text' => ['az' => $text, 'en' => $text]];
                }
            }
        }
    }

    $stepsInput = $body['steps'] ?? [];
    $stepsAz = cleanLines(is_array($stepsInput) ? implode("\n", is_array($stepsInput['az'] ?? null) ? $stepsInput['az'] : []) : '', 30, 500);
    $stepsEn = cleanLines(is_array($stepsInput) ? implode("\n", is_array($stepsInput['en'] ?? null) ? $stepsInput['en'] : []) : '', 30, 500);

    if ($nameAz === '' || $nameEn === '' || $descriptionAz === '' || $descriptionEn === '' ||
        !in_array($category, $allowedCategories, true) || $time === false || $time < 1 || $time > 600 ||
        $servings === false || $servings < 1 || $servings > 30 || count($ingredients) === 0 ||
        count($stepsAz) === 0 || count($stepsEn) === 0) {
        respond(422, ['error' => 'Complete both languages and all required recipe fields.']);
    }

    $image = cleanText($body['image'] ?? '', 500);
    if ($image !== '') {
        $parsed = filter_var($image, FILTER_VALIDATE_URL) ? parse_url($image) : false;
        if (!$parsed || !in_array(strtolower($parsed['scheme'] ?? ''), ['http', 'https'], true)) {
            respond(422, ['error' => 'The image must use a valid HTTP or HTTPS URL.']);
        }
    } else {
        $image = 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=80';
    }

    $recipe = [
        'id' => 'custom-' . bin2hex(random_bytes(8)),
        'custom' => true,
        'category' => $category,
        'time' => $time,
        'servings' => $servings,
        'rating' => 5,
        'difficulty' => 'easy',
        'popular' => 1,
        'title' => ['az' => $nameAz, 'en' => $nameEn],
        'description' => ['az' => $descriptionAz, 'en' => $descriptionEn],
        'image' => $image,
        'ingredients' => $ingredients,
        'steps' => ['az' => $stepsAz, 'en' => $stepsEn],
        'createdAt' => gmdate('c'),
        'ownerHash' => hash('sha256', session_id()),
    ];

    withRecipeStore($dataFile, static function (array &$items) use ($recipe): bool {
        if (count($items) >= 500) {
            respond(429, ['error' => 'The recipe collection has reached its limit.']);
        }
        array_unshift($items, $recipe);
        return true;
    }, true);

    unset($recipe['ownerHash']);
    $recipe['canManage'] = true;
    respond(201, ['recipe' => $recipe]);
}

// DELETE is limited to the browser session that originally created the recipe.
$id = cleanText($body['id'] ?? '', 80);
if (!preg_match('/^custom-[a-f0-9]{16}$/', $id)) {
    respond(400, ['error' => 'Invalid recipe ID.']);
}
$sessionOwner = hash('sha256', session_id());
$deleted = withRecipeStore($dataFile, static function (array &$items) use ($id, $sessionOwner): bool {
    foreach ($items as $index => $recipe) {
        if (($recipe['id'] ?? '') === $id) {
            if (!isset($recipe['ownerHash']) || !hash_equals((string)$recipe['ownerHash'], $sessionOwner)) {
                respond(403, ['error' => 'You can only delete recipes you added in this browser session.']);
            }
            array_splice($items, $index, 1);
            return true;
        }
    }
    return false;
}, true);

if (!$deleted) {
    respond(404, ['error' => 'Recipe not found.']);
}
respond(200, ['success' => true, 'id' => $id]);
