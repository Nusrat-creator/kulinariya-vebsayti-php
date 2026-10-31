# Dadlı — PHP Recipe Website

Dadlı is a bilingual Azerbaijani/English recipe website built with PHP, HTML, CSS and vanilla JavaScript.

## Files

- `index.php` — website page and secure session token.
- `api.php` — PHP endpoint for listing, adding and deleting recipes.
- `script.js` — search, category filters, language switch, favorites, shopping list, recipe details and API calls.
- `style.css` — responsive visual design and dark mode.
- `data/custom-recipes.json` — server-side storage for recipes added through the website.
- `data/.htaccess` — blocks public access to the JSON data file on Apache hosting.

## Run locally

You need PHP 7.4 or newer.

1. Extract the ZIP file.
2. Open a terminal in the extracted `dadli-php` folder.
3. Run:

   ```bash
   php -S localhost:8000
   ```

4. Open `http://localhost:8000` in your browser.

Do not open `index.php` by double-clicking it; PHP must run through a PHP-enabled web server.

## Deploy to Alwaysdata or another PHP host

1. Upload the contents of this folder into your website's document root.
2. Make sure the website is configured to run PHP 7.4+.
3. Make sure the `data` folder is writable by the PHP process. On most shared hosting, `755` is a good starting permission; use the hosting panel's recommended ownership/permissions if writing fails.
4. Visit your domain and test adding a recipe in both languages.

Keep `api.php`, `index.php`, `script.js` and `style.css` in the same directory. Keep the `data` folder beside them. The included `data/.htaccess` prevents browsers from directly opening the JSON data file on Apache servers.

## How the dynamic part works

- The eight starter recipes are included with the front-end project.
- Recipes added through the form are sent to `api.php` and saved in `data/custom-recipes.json` on the server.
- New recipes are visible to other visitors and remain available after a browser is closed.
- Recipe names, descriptions and cooking instructions are stored in both Azerbaijani and English.
- The creator's current PHP session can delete their own added recipe.
- Favorites, shopping lists, language choice and theme choice remain in each visitor's browser using `localStorage`.

## Important deployment note

This project uses a JSON file as a small, file-based data store. It does not require MySQL. For a larger public site with many contributors, user accounts, moderation, backups and an administrator dashboard, move recipe storage to MySQL/MariaDB and add authentication/approval controls. At present, anyone who can access the site can submit a recipe; only the creating browser session can delete that recipe.
