<?php
$https = !empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off';
session_set_cookie_params([
    'httponly' => true,
    'samesite' => 'Lax',
    'secure' => $https,
]);
session_start();
if (empty($_SESSION['csrf_token'])) {
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
}
$csrfToken = $_SESSION['csrf_token'];
?>
<!DOCTYPE html>
<html lang="az">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="theme-color" content="#f7f4ed" />
  <meta name="csrf-token" content="<?php echo htmlspecialchars($csrfToken, ENT_QUOTES, 'UTF-8'); ?>" />
  <meta name="description" content="Dadlı — explore, save and cook delicious recipes. Reseptləri kəşf et, yadda saxla və bişir." />
  <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
  <title>Dadlı — Reseptlərin dadlı ünvanı</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Playfair+Display:wght@500;600;700;800&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="site-shell">
    <header class="site-header">
      <a class="brand" href="#home" aria-label="Dadlı home">
        <span class="brand-mark">D<span>·</span></span>
        <span class="brand-name">dadlı<span class="brand-dot">.</span><small>THE RECIPE JOURNAL</small></span>
      </a>

      <nav class="main-nav" aria-label="Main navigation">
        <a href="#discover" data-i18n="navDiscover">Kəşf et</a>
        <a href="#categories" data-i18n="navCategories">Kateqoriyalar</a>
        <button class="nav-favorites" id="showFavorites" type="button" data-i18n="navFavorites">Sevimlilər</button>
      </nav>

      <div class="header-actions">
        <button class="icon-button" id="themeToggle" type="button" aria-label="Toggle color theme" title="Theme">☾</button>
        <button class="language-toggle" id="languageToggle" type="button" aria-label="Switch language">EN</button>
        <button class="shopping-button" id="openShopping" type="button">
          <span class="basket-icon">▤</span>
          <span data-i18n="shoppingList">Alış-veriş siyahısı</span>
          <span class="shopping-count" id="shoppingCount">0</span>
        </button>
        <button class="mobile-menu-button" id="mobileMenuToggle" aria-label="Open navigation" type="button">☰</button>
      </div>
    </header>

    <main id="home">
      <section class="hero" aria-labelledby="heroTitle">
        <div class="hero-content">
          <div class="eyebrow"><span class="eyebrow-line"></span><span data-i18n="heroEyebrow">YAXŞI YEMƏK, GÖZƏL ANLAR</span></div>
          <h1 id="heroTitle" data-i18n="heroTitle">Hər günə bir az<br /><em>dad</em> qat.</h1>
          <p data-i18n="heroText">Sınanmış reseptlər, sadə addımlar və mətbəxdə ilham axtaranlar üçün bir ünvan.</p>
          <a class="primary-button hero-cta" href="#discover"><span data-i18n="exploreRecipes">Reseptləri kəşf et</span><span aria-hidden="true">↗</span></a>
          <div class="hero-note"><span class="note-stars">★★★★★</span><span data-i18n="heroNote">Hər süfrəyə uyğun dadlar</span></div>
        </div>
        <div class="hero-visual">
          <div class="hero-photo-wrap">
            <img class="hero-photo" src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85" alt="Fresh colourful food in a serving bowl" />
          </div>
          <div class="floating-card floating-card-top"><span class="floating-icon">✳</span><span><strong data-i18n="freshIdeas">Təzə ideyalar</strong><small data-i18n="everyWeek">Hər həftə yeni reseptlər</small></span></div>
          <div class="floating-card floating-card-bottom"><div class="mini-avatars"><i>🍋</i><i>🥑</i><i>🍅</i></div><span><strong data-i18n="madeWithLove">Sevgi ilə bişir</strong><small data-i18n="goodFoodGoodMood">Yaxşı yemək, yaxşı əhval</small></span></div>
          <div class="hero-stamp"><span>EST.</span><strong>2026</strong><small>BAKU · AZ</small></div>
        </div>
        <div class="hero-decoration decoration-one">✳</div>
        <div class="hero-decoration decoration-two">✳</div>
      </section>

      <section class="quick-stats" aria-label="Website highlights">
        <div><strong id="recipeTotal">08</strong><span data-i18n="statRecipes">dadlı resept</span></div>
        <div><strong>02</strong><span data-i18n="statLanguages">dil seçimi</span></div>
        <div><strong>100%</strong><span data-i18n="statInspiration">mətbəx ilhamı</span></div>
        <p data-i18n="statsQuote">“Ən gözəl xatirələr süfrə ətrafında yaranır.”</p>
      </section>

      <section class="recipes-section" id="discover">
        <div class="section-heading">
          <div>
            <div class="eyebrow section-eyebrow"><span class="eyebrow-line"></span><span data-i18n="curatedForYou">SİZİN ÜÇÜN SEÇİLDİ</span></div>
            <h2 data-i18n="discoverTitle">Nə bişirək <em>bu gün?</em></h2>
            <p data-i18n="discoverText">Əhvalına uyğun resepti tap və mətbəxdə sehr yarat.</p>
          </div>
          <button class="text-button" id="surpriseMe" type="button"><span>✳</span><span data-i18n="surpriseMe">Məni təəccübləndir</span><b>↗</b></button>
        </div>

        <div class="toolbar">
          <label class="search-box" for="recipeSearch"><span class="search-icon">⌕</span><input id="recipeSearch" type="search" autocomplete="off" data-i18n-placeholder="searchPlaceholder" placeholder="Resept və ya inqrediyent axtar..." /><kbd>⌘ K</kbd></label>
          <label class="sort-control"><span data-i18n="sortLabel">Sırala:</span><select id="sortSelect"><option value="popular" data-i18n="sortPopular">Populyar</option><option value="quick" data-i18n="sortQuick">Ən tez</option><option value="name" data-i18n="sortName">Ada görə</option></select></label>
        </div>

        <div class="category-row" id="categories">
          <div class="category-pills" id="categoryPills" aria-label="Recipe categories"></div>
          <button class="add-recipe-button" id="openAddRecipe" type="button"><span>＋</span><span data-i18n="addRecipe">Resept əlavə et</span></button>
        </div>

        <div class="results-line"><p id="resultsLabel" aria-live="polite"></p><button class="clear-filter" id="clearFilters" type="button" data-i18n="clearFilters">Filtrləri təmizlə ↗</button></div>
        <div class="recipe-grid" id="recipeGrid" aria-live="polite"></div>
        <div class="empty-state" id="emptyState" hidden>
          <span>🥣</span><h3 data-i18n="emptyTitle">Resept tapılmadı</h3><p data-i18n="emptyText">Axtarış sözünü və ya kateqoriyanı dəyişməyi yoxla.</p>
          <button class="secondary-button" id="emptyReset" type="button" data-i18n="clearFilters">Filtrləri təmizlə</button>
        </div>
      </section>

      <section class="quote-banner">
        <div class="quote-mark">“</div>
        <p data-i18n="quoteText">Yemək bişirmək sadəcə inqrediyentləri qarışdırmaq deyil. Bir az səbir, bir çimdik sevgi və bol dad qatmaqdır.</p>
        <span data-i18n="quoteAuthor">— Dadlı mətbəx qeydləri</span>
        <div class="quote-leaf">✳</div>
      </section>

      <section class="newsletter-strip">
        <div><span class="newsletter-kicker" data-i18n="newsletterKicker">MƏTBƏXDƏN MƏKTUBLAR</span><h2 data-i18n="newsletterTitle">Yeni dadlardan <em>xəbərin olsun.</em></h2><p data-i18n="newsletterText">Ən maraqlı reseptlər və mövsümi ideyalar bir yerdə.</p></div>
        <div class="newsletter-badge"><span>✉</span><span data-i18n="newsletterBadge">Hər zaman<br />ilhamlı qal</span></div>
      </section>
    </main>

    <footer class="site-footer">
      <a class="brand footer-brand" href="#home"><span class="brand-mark">D<span>·</span></span><span class="brand-name">dadlı<span class="brand-dot">.</span><small>THE RECIPE JOURNAL</small></span></a>
      <p data-i18n="footerText">Dadlı yeməklər, unudulmaz anlar.</p>
      <span>© 2026 DADLI. <span data-i18n="allRights">Bütün hüquqlar qorunur.</span></span>
      <a href="#home" class="back-top" data-i18n="backToTop">Yuxarı qayıt ↑</a>
    </footer>
  </div>

  <div class="modal-backdrop" id="recipeBackdrop" hidden>
    <section class="recipe-modal" role="dialog" aria-modal="true" aria-labelledby="modalRecipeTitle">
      <button class="modal-close" data-close="recipe" type="button" aria-label="Close">×</button>
      <div id="recipeModalContent"></div>
    </section>
  </div>

  <div class="modal-backdrop" id="addBackdrop" hidden>
    <section class="form-modal" role="dialog" aria-modal="true" aria-labelledby="addModalTitle">
      <button class="modal-close" data-close="add" type="button" aria-label="Close">×</button>
      <div class="eyebrow"><span class="eyebrow-line"></span><span data-i18n="yourKitchen">SİZİN MƏTBƏXİNİZ</span></div>
      <h2 id="addModalTitle" data-i18n="addModalTitle">Öz reseptini <em>əlavə et.</em></h2>
      <p class="form-intro" data-i18n="addModalText">Sevdiyin yeməyi Dadlı kolleksiyasına əlavə et. Resept serverdə saxlanacaq və bütün ziyarətçilərə görünəcək.</p>
      <form id="addRecipeForm">
        <label><span data-i18n="fieldName">Reseptin adı (AZ)</span><input name="nameAz" required maxlength="60" placeholder="Məsələn: Ev sayağı pasta" /></label>
        <label><span data-i18n="fieldNameEn">Recipe name (EN)</span><input name="nameEn" required maxlength="60" placeholder="E.g. Homemade pasta" /></label>
        <div class="form-row">
          <label><span data-i18n="fieldCategory">Kateqoriya</span><select name="category"><option value="main" data-i18n="catMain">Əsas yemək</option><option value="salad" data-i18n="catSalad">Salat</option><option value="dessert" data-i18n="catDessert">Desert</option><option value="breakfast" data-i18n="catBreakfast">Səhər yeməyi</option><option value="soup" data-i18n="catSoup">Şorba</option></select></label>
          <label><span data-i18n="fieldTime">Hazırlanma vaxtı (dəq.)</span><input name="time" type="number" min="1" max="600" value="30" required /></label>
        </div>
        <label><span data-i18n="fieldDescription">Qısa təsvir (AZ)</span><textarea name="descriptionAz" rows="2" maxlength="180" required></textarea></label>
        <label><span data-i18n="fieldDescriptionEn">Short description (EN)</span><textarea name="descriptionEn" rows="2" maxlength="180" required></textarea></label>
        <label><span data-i18n="fieldIngredients">İnqrediyentlər (AZ — hər sətirdə biri)</span><textarea name="ingredientsAz" rows="4" placeholder="2 stəkan un&#10;1 yumurta&#10;200 ml süd" required></textarea></label>
        <label><span data-i18n="fieldIngredientsEn">Ingredients (EN — one per line)</span><textarea name="ingredientsEn" rows="4" placeholder="2 cups flour&#10;1 egg&#10;200 ml milk" required></textarea></label>
        <label><span data-i18n="fieldSteps">Hazırlanma qaydası — AZ (hər addım yeni sətirdə)</span><textarea name="stepsAz" rows="4" required></textarea></label>
        <label><span data-i18n="fieldStepsEn">Method — EN (one step per line)</span><textarea name="stepsEn" rows="4" required></textarea></label>
        <label><span data-i18n="fieldImage">Şəkil linki (istəyə bağlı)</span><input name="image" type="url" placeholder="https://..." /></label>
        <button class="primary-button form-submit" type="submit"><span data-i18n="saveRecipe">Resepti saxla</span><span>↗</span></button>
      </form>
    </section>
  </div>

  <div class="drawer-backdrop" id="shoppingBackdrop" hidden>
    <aside class="shopping-drawer" role="dialog" aria-modal="true" aria-labelledby="shoppingTitle">
      <div class="drawer-header"><div><span class="eyebrow"><span class="eyebrow-line"></span><span data-i18n="forTheMarket">BAZARLIQ ÜÇÜN</span></span><h2 id="shoppingTitle" data-i18n="shoppingTitle">Alış-veriş <em>siyahısı.</em></h2></div><button class="modal-close" data-close="shopping" type="button" aria-label="Close">×</button></div>
      <p class="drawer-description" data-i18n="shoppingDescription">Reseptlərindən əlavə etdiyin inqrediyentlər burada görünəcək.</p>
      <div class="shopping-progress"><div class="progress-track"><span id="shoppingProgressBar"></span></div><small id="shoppingProgressText">0 / 0</small></div>
      <ul class="shopping-items" id="shoppingItems"></ul>
      <div class="shopping-empty" id="shoppingEmpty"><span>🧺</span><p data-i18n="shoppingEmpty">Siyahın hələ boşdur. Resept aç və inqrediyentləri əlavə et.</p></div>
      <div class="drawer-actions"><button class="secondary-button" id="clearShopping" type="button" data-i18n="clearList">Siyahını təmizlə</button><button class="primary-button" id="copyShopping" type="button"><span data-i18n="copyList">Siyahını köçür</span> ↗</button></div>
    </aside>
  </div>

  <div class="toast" id="toast" role="status" aria-live="polite"></div>
  <script src="script.js"></script>
</body>
</html>
