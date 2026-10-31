'use strict';

const translations = {
  az: {
    navDiscover: 'Kəşf et', navCategories: 'Kateqoriyalar', navFavorites: 'Sevimlilər', shoppingList: 'Alış-veriş siyahısı',
    heroEyebrow: 'YAXŞI YEMƏK, GÖZƏL ANLAR', heroTitle: 'Hər günə bir az<br /><em>dad</em> qat.',
    heroText: 'Sınanmış reseptlər, sadə addımlar və mətbəxdə ilham axtaranlar üçün bir ünvan.', exploreRecipes: 'Reseptləri kəşf et', heroNote: 'Hər süfrəyə uyğun dadlar', freshIdeas: 'Təzə ideyalar', everyWeek: 'Hər həftə yeni reseptlər', madeWithLove: 'Sevgi ilə bişir', goodFoodGoodMood: 'Yaxşı yemək, yaxşı əhval',
    statRecipes: 'dadlı resept', statLanguages: 'dil seçimi', statInspiration: 'mətbəx ilhamı', statsQuote: '“Ən gözəl xatirələr süfrə ətrafında yaranır.”',
    curatedForYou: 'SİZİN ÜÇÜN SEÇİLDİ', discoverTitle: 'Nə bişirək <em>bu gün?</em>', discoverText: 'Əhvalına uyğun resepti tap və mətbəxdə sehr yarat.', surpriseMe: 'Məni təəccübləndir', searchPlaceholder: 'Resept və ya inqrediyent axtar...', sortLabel: 'Sırala:', sortPopular: 'Populyar', sortQuick: 'Ən tez', sortName: 'Ada görə',
    all: 'Hamısı', catAzeri: 'Milli mətbəx', catMain: 'Əsas yemək', catSalad: 'Salat', catDessert: 'Desert', catBreakfast: 'Səhər yeməyi', catSoup: 'Şorba', favoritesOnly: 'Sevimlilər', addRecipe: 'Resept əlavə et', clearFilters: 'Filtrləri təmizlə ↗', resultCount: 'resept göstərilir', resultOne: 'resept göstərilir', emptyTitle: 'Resept tapılmadı', emptyText: 'Axtarış sözünü və ya kateqoriyanı dəyişməyi yoxla.', quoteText: 'Yemək bişirmək sadəcə inqrediyentləri qarışdırmaq deyil. Bir az səbir, bir çimdik sevgi və bol dad qatmaqdır.', quoteAuthor: '— Dadlı mətbəx qeydləri',
    newsletterKicker: 'MƏTBƏXDƏN MƏKTUBLAR', newsletterTitle: 'Yeni dadlardan <em>xəbərin olsun.</em>', newsletterText: 'Ən maraqlı reseptlər və mövsümi ideyalar bir yerdə.', newsletterBadge: 'Hər zaman<br />ilhamlı qal', footerText: 'Dadlı yeməklər, unudulmaz anlar.', allRights: 'Bütün hüquqlar qorunur.', backToTop: 'Yuxarı qayıt ↑',
    yourKitchen: 'SİZİN MƏTBƏXİNİZ', addModalTitle: 'Öz reseptini <em>əlavə et.</em>', addModalText: 'Sevdiyin yeməyi Dadlı kolleksiyasına əlavə et. Resept serverdə saxlanacaq və bütün ziyarətçilərə görünəcək.', fieldName: 'Reseptin adı (AZ)', fieldNameEn: 'Reseptin adı (EN)', fieldDescriptionEn: 'Qısa təsvir (EN)', fieldStepsEn: 'Hazırlanma qaydası (EN — hər addım yeni sətirdə)', fieldCategory: 'Kateqoriya', fieldTime: 'Hazırlanma vaxtı (dəq.)', fieldDescription: 'Qısa təsvir (AZ)', fieldIngredients: 'İnqrediyentlər (AZ — hər sətirdə biri)', fieldIngredientsEn: 'İnqrediyentlər (EN — hər sətirdə biri)', fieldSteps: 'Hazırlanma qaydası (AZ — hər addım yeni sətirdə)', fieldImage: 'Şəkil linki (istəyə bağlı)', saveRecipe: 'Resepti saxla',
    forTheMarket: 'BAZARLIQ ÜÇÜN', shoppingTitle: 'Alış-veriş <em>siyahısı.</em>', shoppingDescription: 'Reseptlərindən əlavə etdiyin inqrediyentlər burada görünəcək.', shoppingEmpty: 'Siyahın hələ boşdur. Resept aç və inqrediyentləri əlavə et.', clearList: 'Siyahını təmizlə', copyList: 'Siyahını köçür',
    time: 'dəq.', minutes: 'dəqiqə', servings: 'porsiya', ingredients: 'İnqrediyentlər', method: 'Hazırlanma qaydası', addToShopping: 'Alış-veriş siyahısına əlavə et', shareRecipe: 'Resepti paylaş', addedToList: 'İnqrediyentlər siyahıya əlavə olundu!', removedFromFavorites: 'Sevimlilərdən silindi', addedToFavorites: 'Sevimlilərə əlavə edildi', favoriteEmpty: 'Hələ sevimli reseptin yoxdur.', searchEmpty: 'Axtarışa uyğun nəticə yoxdur.', copied: 'Siyahı köçürüldü!', copyFailed: 'Köçürmək mümkün olmadı.', listCleared: 'Alış-veriş siyahısı təmizləndi.', recipeSaved: 'Resept uğurla əlavə edildi!', deleteRecipe: 'Resepti sil', confirmDelete: 'Bu resepti silmək istədiyinizə əminsiniz?', recipeDeleted: 'Resept silindi.', deleteFailed: 'Resepti silmək mümkün olmadı.', serverLoadFailed: 'Serverdəki reseptləri yükləmək mümkün olmadı.', serverSaveFailed: 'Resepti serverdə saxlamaq mümkün olmadı.', ingredientLinesMismatch: 'AZ və EN inqrediyent siyahılarında sətirlərin sayı eyni olmalıdır.', recipeRequired: 'Zəhmət olmasa bütün vacib xanaları doldur.', customRecipe: 'Sənin reseptin', surpriseToast: 'Bu gün bunu sınamağa nə deyirsən?',
    catMainShort: 'Əsas yemək', catSaladShort: 'Salat', catDessertShort: 'Desert', catBreakfastShort: 'Səhər yeməyi', catSoupShort: 'Şorba', catAzeriShort: 'Milli mətbəx',
    difficultyEasy: 'Asan', difficultyMedium: 'Orta', difficultyHard: 'Çətin', rating: 'Reytinq', close: 'Bağla'
  },
  en: {
    navDiscover: 'Discover', navCategories: 'Categories', navFavorites: 'Favorites', shoppingList: 'Shopping list',
    heroEyebrow: 'GOOD FOOD, BEAUTIFUL MOMENTS', heroTitle: 'Add a little<br /><em>flavour</em> to every day.',
    heroText: 'Tried-and-loved recipes, simple steps, and a little inspiration for your kitchen.', exploreRecipes: 'Explore recipes', heroNote: 'Something for every table', freshIdeas: 'Fresh ideas', everyWeek: 'New recipes every week', madeWithLove: 'Made with love', goodFoodGoodMood: 'Good food, good mood',
    statRecipes: 'delicious recipes', statLanguages: 'language options', statInspiration: 'kitchen inspiration', statsQuote: '“The best memories are made around the table.”',
    curatedForYou: 'A LITTLE SOMETHING FOR YOU', discoverTitle: 'What shall we cook <em>today?</em>', discoverText: 'Find a recipe for your mood and make a little kitchen magic.', surpriseMe: 'Surprise me', searchPlaceholder: 'Search recipes or ingredients...', sortLabel: 'Sort:', sortPopular: 'Popular', sortQuick: 'Quickest', sortName: 'Name',
    all: 'All recipes', catAzeri: 'Azerbaijani', catMain: 'Main course', catSalad: 'Salad', catDessert: 'Dessert', catBreakfast: 'Breakfast', catSoup: 'Soup', favoritesOnly: 'Favorites', addRecipe: 'Add a recipe', clearFilters: 'Clear filters ↗', resultCount: 'recipes shown', resultOne: 'recipe shown', emptyTitle: 'No recipes found', emptyText: 'Try changing your search or choosing another category.', quoteText: 'Cooking is about more than mixing ingredients. Add a little patience, a pinch of love, and plenty of flavour.', quoteAuthor: '— Notes from the Dadlı kitchen',
    newsletterKicker: 'LETTERS FROM THE KITCHEN', newsletterTitle: 'Stay hungry for <em>new flavours.</em>', newsletterText: 'Interesting recipes and seasonal ideas, all in one place.', newsletterBadge: 'Stay<br />inspired', footerText: 'Delicious food, unforgettable moments.', allRights: 'All rights reserved.', backToTop: 'Back to top ↑',
    yourKitchen: 'YOUR KITCHEN', addModalTitle: 'Add your own <em>recipe.</em>', addModalText: 'Add a favourite dish to the Dadlı collection. It will be stored on the server and visible to all visitors.', fieldName: 'Recipe name (AZ)', fieldNameEn: 'Recipe name (EN)', fieldDescriptionEn: 'Short description (EN)', fieldStepsEn: 'Method (EN — one step per line)', fieldCategory: 'Category', fieldTime: 'Preparation time (min.)', fieldDescription: 'Short description (AZ)', fieldIngredients: 'Ingredients (AZ — one per line)', fieldIngredientsEn: 'Ingredients (EN — one per line)', fieldSteps: 'Method (AZ — one step per line)', fieldImage: 'Image URL (optional)', saveRecipe: 'Save recipe',
    forTheMarket: 'YOUR MARKET LIST', shoppingTitle: 'Shopping <em>list.</em>', shoppingDescription: 'Ingredients you add from recipes will appear here.', shoppingEmpty: 'Your list is empty for now. Open a recipe and add its ingredients.', clearList: 'Clear list', copyList: 'Copy list',
    time: 'min', minutes: 'minutes', servings: 'servings', ingredients: 'Ingredients', method: 'Method', addToShopping: 'Add to shopping list', shareRecipe: 'Share recipe', addedToList: 'Ingredients added to your list!', removedFromFavorites: 'Removed from favorites', addedToFavorites: 'Added to favorites', favoriteEmpty: 'You have no favourite recipes yet.', searchEmpty: 'No results match your search.', copied: 'List copied!', copyFailed: 'Could not copy the list.', listCleared: 'Shopping list cleared.', recipeSaved: 'Recipe added successfully!', deleteRecipe: 'Delete recipe', confirmDelete: 'Are you sure you want to delete this recipe?', recipeDeleted: 'Recipe deleted.', deleteFailed: 'Could not delete this recipe.', serverLoadFailed: 'Could not load recipes from the server.', serverSaveFailed: 'Could not save the recipe on the server.', ingredientLinesMismatch: 'The AZ and EN ingredient lists must have the same number of lines.', recipeRequired: 'Please complete all required fields.', customRecipe: 'Your recipe', surpriseToast: 'How about trying this today?',
    catMainShort: 'Main course', catSaladShort: 'Salad', catDessertShort: 'Dessert', catBreakfastShort: 'Breakfast', catSoupShort: 'Soup', catAzeriShort: 'Azerbaijani',
    difficultyEasy: 'Easy', difficultyMedium: 'Medium', difficultyHard: 'Hard', rating: 'Rating', close: 'Close'
  }
};

const categoryKeys = ['all', 'azeri', 'main', 'salad', 'dessert', 'breakfast', 'soup'];
const categoryIcons = { all: '✳', azeri: '♨', main: '🍽', salad: '🥗', dessert: '🍰', breakfast: '☀', soup: '🥣' };
const categoryTranslationKey = { all: 'all', azeri: 'catAzeri', main: 'catMain', salad: 'catSalad', dessert: 'catDessert', breakfast: 'catBreakfast', soup: 'catSoup' };
const defaultRecipes = [
  {
    id: 'qutab', category: 'azeri', time: 35, servings: 4, rating: 4.9, difficulty: 'medium', popular: 98,
    title: { az: 'Göyərti qutabı', en: 'Herb Qutab' }, description: { az: 'Nazik xəmir, bol göyərti və qatıqla mükəmməl milli dad.', en: 'Thin dough filled with fresh herbs, best served with yoghurt.' },
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=82',
    ingredients: [
      { amount: 300, unit: 'g', az: 'un', en: 'flour' }, { amount: 160, unit: 'ml', az: 'ilıq su', en: 'warm water' }, { amount: 1, unit: 'ç.q.', az: 'duz', en: 'salt' }, { amount: 250, unit: 'g', az: 'qarışıq göyərti', en: 'mixed fresh herbs' }, { amount: 1, unit: 'ədəd', az: 'soğan', en: 'onion' }, { amount: 2, unit: 'x.q.', az: 'kərə yağı', en: 'butter' }
    ],
    steps: { az: ['Unu duzla qarışdır. Suyu az-az əlavə edib yumşaq xəmir yoğur və 15 dəqiqə dincə qoy.', 'Göyərtini və soğanı xırda doğra, bir az duz və istiotla qarışdır.', 'Xəmiri kiçik kündələrə böl, nazik yay və yarısına içlik qoy.', 'Digər yarısını üzərinə qatla, kənarlarını bərk bas və quru tavada hər iki üzünü bişir.', 'İsti qutabların üzərinə kərə yağı çək və qatıqla süfrəyə ver.'], en: ['Mix the flour and salt. Gradually add water, knead into a soft dough, and rest for 15 minutes.', 'Finely chop the herbs and onion; season with a little salt and pepper.', 'Divide the dough into small balls, roll thinly, and place filling on one half.', 'Fold over, seal the edges, and cook both sides in a dry pan.', 'Brush with butter and serve warm with yoghurt.'] }
  },
  {
    id: 'plov', category: 'azeri', time: 75, servings: 5, rating: 5.0, difficulty: 'hard', popular: 100,
    title: { az: 'Şah plov', en: 'Shah Plov' }, description: { az: 'Xırtıldayan lavaş qabığında zəfəranlı düyü və zəngin içlik.', en: 'Saffron rice and a rich filling wrapped in a crisp lavash crust.' },
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=82',
    ingredients: [
      { amount: 500, unit: 'g', az: 'basmati düyü', en: 'basmati rice' }, { amount: 400, unit: 'g', az: 'quzu əti', en: 'lamb' }, { amount: 100, unit: 'g', az: 'quru ərik', en: 'dried apricots' }, { amount: 80, unit: 'g', az: 'kişmiş', en: 'raisins' }, { amount: 2, unit: 'ədəd', az: 'soğan', en: 'onions' }, { amount: 1, unit: 'paket', az: 'nazik lavaş', en: 'thin lavash sheets' }, { amount: 80, unit: 'g', az: 'kərə yağı', en: 'butter' }, { amount: 1, unit: 'çimdik', az: 'zəfəran', en: 'saffron' }
    ],
    steps: { az: ['Düyünü yuyub duzlu suda yarıbişmiş hala gələnədək qaynat və süz.', 'Quzu ətini və soğanı doğra, tavada qızılı rəng alanadək bişir.', 'Quru ərik və kişmişi əlavə et, bir neçə dəqiqə birlikdə qovur.', 'Qazana yağlanmış lavaşları kənarlardan sallanacaq şəkildə düz.', 'Düyü və içliyi lay-lay əlavə et. Zəfəranlı su və əridilmiş yağ gəzdir.', 'Qapağı bağla, zəif odda 45–50 dəqiqə dəmə qoy. Süfrəyə çevrilmiş şəkildə ver.'], en: ['Rinse the rice, boil in salted water until partly cooked, then drain.', 'Cut the lamb and onions; sauté until the meat is golden.', 'Add dried apricots and raisins, and cook together for a few minutes.', 'Line a greased pot with lavash sheets, leaving the edges hanging over the sides.', 'Layer in the rice and filling. Drizzle with saffron water and melted butter.', 'Cover and steam over low heat for 45–50 minutes. Turn out carefully to serve.'] }
  },
  {
    id: 'dolma', category: 'azeri', time: 60, servings: 4, rating: 4.9, difficulty: 'medium', popular: 96,
    title: { az: 'Yarpaq dolması', en: 'Stuffed Grape Leaves' }, description: { az: 'Ətirli düyü, göyərti və qiymə ilə hazırlanan klassik dolma.', en: 'A classic combination of fragrant rice, herbs, and minced meat.' },
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=82',
    ingredients: [
      { amount: 400, unit: 'g', az: 'üzüm yarpağı', en: 'grape leaves' }, { amount: 300, unit: 'g', az: 'mal və ya quzu qiyməsi', en: 'beef or lamb mince' }, { amount: 100, unit: 'g', az: 'düyü', en: 'rice' }, { amount: 1, unit: 'ədəd', az: 'soğan', en: 'onion' }, { amount: 30, unit: 'g', az: 'təzə keşniş və şüyüd', en: 'fresh coriander and dill' }, { amount: 150, unit: 'ml', az: 'su', en: 'water' }, { amount: 2, unit: 'x.q.', az: 'bitki yağı', en: 'vegetable oil' }
    ],
    steps: { az: ['Düyünü yuyub süz. Soğanı və göyərtini xırda doğra.', 'Qiyməni düyü, soğan, göyərti, duz və istiotla qarışdır.', 'Üzüm yarpağının ortasına az miqdarda içlik qoy və səliqə ilə bük.', 'Dolmaları sıx şəkildə qazana düz, üzərinə yağ və su əlavə et.', 'Üzərinə kiçik boşqab qoyaraq zəif odda 40–45 dəqiqə bişir.', 'Sarımsaqlı qatıqla isti süfrəyə ver.'], en: ['Rinse and drain the rice. Finely chop the onion and herbs.', 'Mix the mince with rice, onion, herbs, salt, and pepper.', 'Place a little filling in the centre of each grape leaf and roll neatly.', 'Arrange the dolma snugly in a pot; add oil and water.', 'Place a small plate on top and simmer gently for 40–45 minutes.', 'Serve warm with garlic yoghurt.'] }
  },
  {
    id: 'salad', category: 'salad', time: 15, servings: 2, rating: 4.8, difficulty: 'easy', popular: 89,
    title: { az: 'Avokadolu yaşıl salat', en: 'Green Avocado Salad' }, description: { az: 'Təravətli tərəvəzlər, avokado və limonlu yüngül sous.', en: 'Fresh greens, creamy avocado, and a bright lemon dressing.' },
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=82',
    ingredients: [
      { amount: 1, unit: 'ədəd', az: 'avokado', en: 'avocado' }, { amount: 120, unit: 'g', az: 'qarışıq kahı', en: 'mixed lettuce' }, { amount: 150, unit: 'g', az: 'çerri pomidor', en: 'cherry tomatoes' }, { amount: 0.5, unit: 'ədəd', az: 'xiyar', en: 'cucumber' }, { amount: 1, unit: 'ədəd', az: 'limon', en: 'lemon' }, { amount: 2, unit: 'x.q.', az: 'zeytun yağı', en: 'olive oil' }, { amount: 30, unit: 'g', az: 'feta pendiri', en: 'feta cheese' }
    ],
    steps: { az: ['Kahını yuyub qurula, pomidorları ikiyə böl.', 'Xiyarı dilimlə, avokadonu soyub kub şəklində doğra.', 'Limon suyu, zeytun yağı, duz və istiotu qarışdır.', 'Bütün tərəvəzləri sousla qarışdır, üzərinə feta pendiri səp.'], en: ['Wash and dry the lettuce; halve the cherry tomatoes.', 'Slice the cucumber and dice the peeled avocado.', 'Whisk lemon juice, olive oil, salt, and pepper.', 'Toss the vegetables with the dressing and crumble feta on top.'] }
  },
  {
    id: 'pasta', category: 'main', time: 25, servings: 2, rating: 4.7, difficulty: 'easy', popular: 92,
    title: { az: 'Kremli göbələkli pasta', en: 'Creamy Mushroom Pasta' }, description: { az: 'İpək kimi sous, qızardılmış göbələk və sevdiyin makaron.', en: 'Silky sauce, golden mushrooms, and your favourite pasta.' },
    image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=82',
    ingredients: [
      { amount: 200, unit: 'g', az: 'makaron', en: 'pasta' }, { amount: 180, unit: 'g', az: 'göbələk', en: 'mushrooms' }, { amount: 150, unit: 'ml', az: 'qaymaq', en: 'cream' }, { amount: 2, unit: 'diş', az: 'sarımsaq', en: 'garlic cloves' }, { amount: 30, unit: 'g', az: 'parmezan', en: 'parmesan' }, { amount: 1, unit: 'x.q.', az: 'zeytun yağı', en: 'olive oil' }, { amount: 10, unit: 'g', az: 'cəfəri', en: 'parsley' }
    ],
    steps: { az: ['Makaronu duzlu qaynar suda qablaşdırmadakı vaxta uyğun bişir.', 'Göbələkləri dilimlə və zeytun yağında qızılı rəng alanadək qovur.', 'Sarımsağı əlavə et, 30 saniyə qarışdır, sonra qaymağı tök.', 'Sousu 3–4 dəqiqə zəif odda qatılaşdır, parmezan əlavə et.', 'Makaronu sousa qat, bir az makaron suyu ilə istədiyin konsistensiyanı al.', 'Cəfəri və əlavə parmezanla süfrəyə ver.'], en: ['Cook the pasta in salted boiling water according to the packet instructions.', 'Slice the mushrooms and sauté in olive oil until golden.', 'Add garlic, stir for 30 seconds, then pour in the cream.', 'Simmer for 3–4 minutes until slightly thickened; add parmesan.', 'Toss the pasta into the sauce, adding a splash of pasta water if needed.', 'Serve with parsley and extra parmesan.'] }
  },
  {
    id: 'pancakes', category: 'breakfast', time: 20, servings: 3, rating: 4.8, difficulty: 'easy', popular: 90,
    title: { az: 'Yumşaq səhər pankeykləri', en: 'Fluffy Breakfast Pancakes' }, description: { az: 'Bal, meyvə və ya sevdiyin mürəbbə ilə bulud kimi pankeyklər.', en: 'Cloud-soft pancakes made for honey, fresh fruit, or jam.' },
    image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=900&q=82',
    ingredients: [
      { amount: 200, unit: 'g', az: 'un', en: 'flour' }, { amount: 1, unit: 'ədəd', az: 'yumurta', en: 'egg' }, { amount: 250, unit: 'ml', az: 'süd', en: 'milk' }, { amount: 2, unit: 'x.q.', az: 'şəkər', en: 'sugar' }, { amount: 1, unit: 'ç.q.', az: 'qabartma tozu', en: 'baking powder' }, { amount: 30, unit: 'g', az: 'əridilmiş kərə yağı', en: 'melted butter' }, { amount: 1, unit: 'çimdik', az: 'duz', en: 'salt' }
    ],
    steps: { az: ['Un, şəkər, qabartma tozu və duzu bir qabda qarışdır.', 'Başqa qabda yumurta, süd və əridilmiş yağı çal.', 'Maye qarışığı quru ərzaqlara əlavə et, çox qarışdırmadan birləşdir.', 'Yapışmayan tavada orta odda kiçik pankeyklər bişir; üzündə qabarcıqlar yarananda çevir.', 'Bal, meyvə və ya mürəbbə ilə servis et.'], en: ['Whisk flour, sugar, baking powder, and salt in a bowl.', 'In another bowl, whisk the egg, milk, and melted butter.', 'Add the wet mixture to the dry ingredients and stir just until combined.', 'Cook small pancakes in a non-stick pan over medium heat; flip when bubbles appear.', 'Serve with honey, fruit, or jam.'] }
  },
  {
    id: 'soup', category: 'soup', time: 30, servings: 4, rating: 4.6, difficulty: 'easy', popular: 84,
    title: { az: 'Mərcimək şorbası', en: 'Red Lentil Soup' }, description: { az: 'İsti, doyumlu və limonla daha da gözəlləşən ev şorbası.', en: 'A comforting, hearty soup made brighter with a squeeze of lemon.' },
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=82',
    ingredients: [
      { amount: 200, unit: 'g', az: 'qırmızı mərcimək', en: 'red lentils' }, { amount: 1, unit: 'ədəd', az: 'soğan', en: 'onion' }, { amount: 1, unit: 'ədəd', az: 'kök', en: 'carrot' }, { amount: 1, unit: 'ədəd', az: 'kartof', en: 'potato' }, { amount: 1, unit: 'x.q.', az: 'tomat pastası', en: 'tomato paste' }, { amount: 1, 'unit': 'l', az: 'su və ya tərəvəz bulyonu', en: 'water or vegetable stock' }, { amount: 1, unit: 'ç.q.', az: 'zirə', en: 'cumin' }
    ],
    steps: { az: ['Mərciməyi yuyub süz. Soğan, kök və kartofu xırda doğra.', 'Soğanı az yağda yumşalana qədər qovur, tomat pastası və zirə əlavə et.', 'Kök, kartof, mərcimək və suyu qazana əlavə et.', 'Tərəvəzlər yumşalana qədər təxminən 20 dəqiqə bişir.', 'Blenderlə hamarlaşdır, duz-istiot vur və limonla servis et.'], en: ['Rinse and drain the lentils. Finely chop the onion, carrot, and potato.', 'Soften the onion in a little oil, then stir in tomato paste and cumin.', 'Add the carrot, potato, lentils, and stock or water.', 'Simmer for about 20 minutes until the vegetables are tender.', 'Blend until smooth, season, and serve with lemon.'] }
  },
  {
    id: 'cake', category: 'dessert', time: 50, servings: 8, rating: 4.9, difficulty: 'medium', popular: 94,
    title: { az: 'Limonlu yumşaq keks', en: 'Soft Lemon Cake' }, description: { az: 'Limon qabığının ətri və yüngül şirinliyi ilə ev keksinin dadı.', en: 'A tender homemade cake with fragrant lemon zest and a light sweetness.' },
    image: 'https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=900&q=82',
    ingredients: [
      { amount: 220, unit: 'g', az: 'un', en: 'flour' }, { amount: 150, unit: 'g', az: 'şəkər', en: 'sugar' }, { amount: 2, unit: 'ədəd', az: 'yumurta', en: 'eggs' }, { amount: 120, unit: 'g', az: 'kərə yağı', en: 'butter' }, { amount: 100, unit: 'ml', az: 'süd', en: 'milk' }, { amount: 1, unit: 'ədəd', az: 'limonun qabığı və suyu', en: 'lemon zest and juice' }, { amount: 1, unit: 'ç.q.', az: 'qabartma tozu', en: 'baking powder' }
    ],
    steps: { az: ['Sobanı 175°C-yə qədər qızdır, keks qəlibini yağla.', 'Yumşaq kərə yağı və şəkəri açıq rəng alana qədər çal.', 'Yumurtaları bir-bir əlavə et, sonra limon qabığı və suyunu qat.', 'Unu qabartma tozu ilə qarışdırıb süd ilə növbəli şəkildə xəmirə əlavə et.', 'Qarışığı qəlibə tök və 35–40 dəqiqə bişir. Diş çöpü təmiz çıxmalıdır.', 'Soyuduqdan sonra dilimlə və servis et.'], en: ['Preheat the oven to 175°C / 350°F and grease a loaf tin.', 'Beat the softened butter and sugar until pale and fluffy.', 'Add the eggs one at a time, then mix in the lemon zest and juice.', 'Fold in the flour and baking powder alternately with the milk.', 'Pour into the tin and bake for 35–40 minutes, until a skewer comes out clean.', 'Cool, slice, and serve.'] }
  }
];

const STORAGE = {
  language: 'dadli-language', theme: 'dadli-theme', favorites: 'dadli-favorites', shopping: 'dadli-shopping'
};
const state = {
  language: localStorage.getItem(STORAGE.language) || 'az',
  theme: localStorage.getItem(STORAGE.theme) || 'light',
  category: 'all', favoritesOnly: false, search: '', sort: 'popular', selectedRecipe: null, servings: 1,
  favorites: readJSON(STORAGE.favorites, []), shopping: readJSON(STORAGE.shopping, []), customRecipes: []
};
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const t = key => translations[state.language][key] || key;
const recipes = () => [...defaultRecipes, ...state.customRecipes];

function readJSON(key, fallback) {
  try { const value = JSON.parse(localStorage.getItem(key)); return Array.isArray(value) ? value : fallback; }
  catch { return fallback; }
}
function persist(key, value) { localStorage.setItem(key, JSON.stringify(value)); }
const API_URL = 'api.php';
function csrfToken() { return document.querySelector('meta[name="csrf-token"]')?.content || ''; }
async function apiRequest(method, payload = null) {
  const options = { method, credentials: 'same-origin', headers: { 'Accept': 'application/json' } };
  if (payload !== null) {
    options.headers['Content-Type'] = 'application/json';
    options.headers['X-CSRF-Token'] = csrfToken();
    options.body = JSON.stringify(payload);
  }
  const response = await fetch(API_URL, options);
  const result = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(result.error || `HTTP ${response.status}`);
  return result;
}
async function loadCustomRecipes() {
  try {
    const result = await apiRequest('GET');
    state.customRecipes = Array.isArray(result.recipes) ? result.recipes : [];
    renderCategories();
    renderRecipes();
  } catch (error) {
    console.error('Dadlı recipe API:', error);
    showToast(t('serverLoadFailed'));
  }
}
function escapeHTML(value = '') {
  return String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
}
function safeImage(url) {
  try { const parsed = new URL(url); return ['https:', 'http:'].includes(parsed.protocol) ? parsed.href : ''; }
  catch { return ''; }
}
function titleOf(recipe) { return typeof recipe.title === 'string' ? recipe.title : (recipe.title[state.language] || recipe.title.az || recipe.title.en); }
function descriptionOf(recipe) { return typeof recipe.description === 'string' ? recipe.description : (recipe.description[state.language] || recipe.description.az || recipe.description.en); }
function categoryName(category) { return t(categoryTranslationKey[category] || 'catMain'); }
function difficultyName(level) { return t(`difficulty${level[0].toUpperCase()}${level.slice(1)}`); }
function showToast(message) {
  const toast = $('#toast'); toast.textContent = message; toast.classList.add('show');
  clearTimeout(showToast.timer); showToast.timer = setTimeout(() => toast.classList.remove('show'), 2600);
}
function setLanguage(language) {
  state.language = language; localStorage.setItem(STORAGE.language, language);
  document.documentElement.lang = language;
  $('#languageToggle').textContent = language === 'az' ? 'EN' : 'AZ';
  document.title = language === 'az' ? 'Dadlı — Reseptlərin dadlı ünvanı' : 'Dadlı — Your home for good recipes';
  $$('[data-i18n]').forEach(el => { const key = el.dataset.i18n; if (translations[language][key]) el.innerHTML = translations[language][key]; });
  $$('[data-i18n-placeholder]').forEach(el => { const key = el.dataset.i18nPlaceholder; el.placeholder = t(key); });
  renderCategories(); renderRecipes(); renderShopping();
  if (state.selectedRecipe) renderRecipeModal(state.selectedRecipe);
}
function setTheme(theme) {
  state.theme = theme; document.body.classList.toggle('dark-theme', theme === 'dark');
  $('#themeToggle').textContent = theme === 'dark' ? '☀' : '☾';
  localStorage.setItem(STORAGE.theme, theme);
}
function renderCategories() {
  const keys = [...categoryKeys];
  if (state.favoritesOnly) keys.push('favorites');
  $('#categoryPills').innerHTML = keys.map(key => {
    const label = key === 'favorites' ? `♥ ${t('favoritesOnly')}` : `${categoryIcons[key]} ${t(categoryTranslationKey[key])}`;
    const active = key === 'favorites' ? state.favoritesOnly : (!state.favoritesOnly && state.category === key);
    return `<button class="category-pill ${active ? 'active' : ''}" data-category="${key}" type="button">${label}</button>`;
  }).join('');
}
function filteredRecipes() {
  let list = recipes();
  if (state.favoritesOnly) list = list.filter(recipe => state.favorites.includes(recipe.id));
  else if (state.category !== 'all') list = list.filter(recipe => recipe.category === state.category);
  const query = state.search.trim().toLocaleLowerCase(state.language === 'az' ? 'az' : 'en');
  if (query) list = list.filter(recipe => {
    const title = titleOf(recipe).toLocaleLowerCase(); const desc = descriptionOf(recipe).toLocaleLowerCase();
    const ingredients = (recipe.ingredients || []).map(item => `${item.az || ''} ${item.en || ''} ${typeof item.text === 'string' ? item.text : `${item.text?.az || ''} ${item.text?.en || ''}`}`).join(' ').toLocaleLowerCase();
    return `${title} ${desc} ${ingredients}`.includes(query);
  });
  if (state.sort === 'quick') list.sort((a, b) => a.time - b.time);
  else if (state.sort === 'name') list.sort((a, b) => titleOf(a).localeCompare(titleOf(b), state.language));
  else list.sort((a, b) => (b.popular || b.rating || 0) - (a.popular || a.rating || 0));
  return list;
}
function renderRecipes() {
  const list = filteredRecipes();
  $('#recipeTotal').textContent = String(recipes().length).padStart(2, '0');
  $('#resultsLabel').textContent = `${list.length} ${list.length === 1 ? t('resultOne') : t('resultCount')}`;
  $('#recipeGrid').innerHTML = list.map(recipe => {
    const image = safeImage(recipe.image) || 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=80';
    const favorite = state.favorites.includes(recipe.id);
    return `<article class="recipe-card" data-open-recipe="${escapeHTML(recipe.id)}" tabindex="0" role="button" aria-label="${escapeHTML(titleOf(recipe))}">
      <div class="card-image-wrap"><img class="card-image" src="${escapeHTML(image)}" alt="${escapeHTML(titleOf(recipe))}" loading="lazy" /><span class="card-category">${escapeHTML(categoryName(recipe.category))}</span><button class="favorite-button ${favorite ? 'active' : ''}" data-favorite="${escapeHTML(recipe.id)}" type="button" aria-label="${favorite ? 'Remove favorite' : 'Add favorite'}">${favorite ? '♥' : '♡'}</button></div>
      <div class="card-body"><h3 class="card-title">${escapeHTML(titleOf(recipe))}</h3><p class="card-description">${escapeHTML(descriptionOf(recipe))}</p><div class="card-meta"><span class="card-time">◷ ${recipe.time} ${t('time')}</span><span>${escapeHTML(difficultyName(recipe.difficulty || 'easy'))}</span><span class="card-rating">★ ${Number(recipe.rating || 4.8).toFixed(1)}</span></div></div>
    </article>`;
  }).join('');
  const empty = list.length === 0;
  $('#emptyState').hidden = !empty; $('#recipeGrid').hidden = empty;
  if (empty) $('#emptyState p').textContent = state.favoritesOnly ? t('favoriteEmpty') : t('emptyText');
}
function toggleFavorite(id) {
  if (state.favorites.includes(id)) { state.favorites = state.favorites.filter(item => item !== id); showToast(t('removedFromFavorites')); }
  else { state.favorites.push(id); showToast(t('addedToFavorites')); }
  persist(STORAGE.favorites, state.favorites); renderCategories(); renderRecipes();
  if (state.selectedRecipe) $('#modalFavorite').textContent = state.favorites.includes(id) ? '♥' : '♡';
}
function formatAmount(amount, multiplier) {
  const value = amount * multiplier;
  if (Number.isInteger(value)) return String(value);
  return String(Math.round(value * 100) / 100).replace(/\.0+$/, '');
}
function ingredientText(item, multiplier = 1) {
  if (typeof item.text === 'string') return item.text;
  if (item.text && typeof item.text === 'object') return item.text[state.language] || item.text.az || item.text.en || '';
  const amount = item.amount ? `${formatAmount(item.amount, multiplier)} ` : '';
  const unit = item.unit ? `${item.unit} ` : '';
  const name = item[state.language] || item.az || item.en || '';
  return `${amount}${unit}${name}`.trim();
}
function renderRecipeModal(recipe) {
  if (!recipe) return;
  const baseServings = recipe.servings || 2;
  const multiplier = state.servings / baseServings;
  const image = safeImage(recipe.image) || 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=80';
  const steps = Array.isArray(recipe.steps) ? recipe.steps : (recipe.steps[state.language] || recipe.steps.az || recipe.steps.en || []);
  const customNote = recipe.custom ? `<span> · ${t('customRecipe')}</span>` : '';
  const deleteButton = recipe.custom && recipe.canManage ? `<button class="secondary-button" id="deleteRecipeButton" type="button">${t('deleteRecipe')}</button>` : '';
  $('#recipeModalContent').innerHTML = `
    <div class="recipe-modal-hero"><img src="${escapeHTML(image)}" alt="${escapeHTML(titleOf(recipe))}" /><span class="modal-recipe-category">${escapeHTML(categoryName(recipe.category))}${customNote}</span></div>
    <div class="recipe-modal-content">
      <div class="modal-title-row"><div><h2 id="modalRecipeTitle">${escapeHTML(titleOf(recipe))}</h2><p>${escapeHTML(descriptionOf(recipe))}</p></div><button class="modal-favorite" id="modalFavorite" type="button" aria-label="Toggle favorite">${state.favorites.includes(recipe.id) ? '♥' : '♡'}</button></div>
      <div class="modal-meta"><span>◷ <strong>${recipe.time} ${t('minutes')}</strong></span><span>✦ <strong>${escapeHTML(difficultyName(recipe.difficulty || 'easy'))}</strong></span><span>★ <strong>${Number(recipe.rating || 4.8).toFixed(1)} ${t('rating')}</strong></span></div>
      <div class="recipe-detail-grid"><div><h3>${t('ingredients')}</h3><div class="servings-control"><span>${t('servings')}:</span><button id="servingsDown" type="button" aria-label="Decrease servings">−</button><strong id="servingValue">${state.servings}</strong><button id="servingsUp" type="button" aria-label="Increase servings">＋</button></div><ul class="ingredient-list">${(recipe.ingredients || []).map(item => `<li>${escapeHTML(ingredientText(item, multiplier))}</li>`).join('')}</ul></div><div><h3>${t('method')}</h3><ol class="step-list">${steps.map(step => `<li>${escapeHTML(step)}</li>`).join('')}</ol></div></div>
      <div class="modal-actions"><button class="primary-button" id="addIngredientsButton" type="button">${t('addToShopping')} <span>↗</span></button><button class="secondary-button" id="shareRecipeButton" type="button">${t('shareRecipe')} ↗</button>${deleteButton}</div>
    </div>`;
  $('#modalFavorite').addEventListener('click', () => toggleFavorite(recipe.id));
  $('#servingsDown').addEventListener('click', () => changeServings(-1));
  $('#servingsUp').addEventListener('click', () => changeServings(1));
  $('#addIngredientsButton').addEventListener('click', () => addRecipeIngredients(recipe));
  $('#shareRecipeButton').addEventListener('click', () => shareRecipe(recipe));
  const deleteButtonElement = $('#deleteRecipeButton');
  if (deleteButtonElement) deleteButtonElement.addEventListener('click', () => deleteCustomRecipe(recipe));
}
function openRecipe(id) {
  const recipe = recipes().find(item => item.id === id); if (!recipe) return;
  state.selectedRecipe = recipe; state.servings = recipe.servings || 2;
  renderRecipeModal(recipe); $('#recipeBackdrop').hidden = false; document.body.classList.add('no-scroll');
}
function closeRecipe() { $('#recipeBackdrop').hidden = true; state.selectedRecipe = null; document.body.classList.remove('no-scroll'); }
function changeServings(delta) {
  state.servings = Math.min(20, Math.max(1, state.servings + delta));
  renderRecipeModal(state.selectedRecipe);
}
function addRecipeIngredients(recipe) {
  const multiplier = state.servings / (recipe.servings || 2);
  const additions = recipe.ingredients.map(item => ingredientText(item, multiplier));
  const existing = new Set(state.shopping.map(item => item.text.toLocaleLowerCase()));
  additions.forEach(text => { if (!existing.has(text.toLocaleLowerCase())) state.shopping.push({ id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`, text, done: false }); });
  persist(STORAGE.shopping, state.shopping); renderShopping(); showToast(t('addedToList'));
}
function renderShopping() {
  const count = state.shopping.length;
  const done = state.shopping.filter(item => item.done).length;
  $('#shoppingCount').textContent = count;
  $('#shoppingItems').innerHTML = state.shopping.map(item => `<li class="${item.done ? 'done' : ''}"><label><input type="checkbox" data-check-shopping="${escapeHTML(item.id)}" ${item.done ? 'checked' : ''} /><span class="shopping-item-text">${escapeHTML(item.text)}</span></label><button class="remove-shopping-item" data-remove-shopping="${escapeHTML(item.id)}" type="button" aria-label="Remove item">×</button></li>`).join('');
  $('#shoppingEmpty').hidden = count !== 0; $('#shoppingItems').hidden = count === 0;
  $('#shoppingProgressText').textContent = `${done} / ${count}`;
  $('#shoppingProgressBar').style.width = count ? `${(done / count) * 100}%` : '0%';
  $('#clearShopping').disabled = count === 0; $('#copyShopping').disabled = count === 0;
}
function openShopping() { $('#shoppingBackdrop').hidden = false; document.body.classList.add('no-scroll'); }
function closeShopping() { $('#shoppingBackdrop').hidden = true; document.body.classList.remove('no-scroll'); }
function shareRecipe(recipe) {
  const steps = Array.isArray(recipe.steps) ? recipe.steps : (recipe.steps[state.language] || recipe.steps.az || recipe.steps.en || []);
  const text = `${titleOf(recipe)}\n\n${descriptionOf(recipe)}\n\n${t('ingredients')}:\n${recipe.ingredients.map(item => `• ${ingredientText(item, state.servings / (recipe.servings || 2))}`).join('\n')}\n\n${t('method')}:\n${steps.map((step, index) => `${index + 1}. ${step}`).join('\n')}`;
  if (navigator.share) navigator.share({ title: titleOf(recipe), text }).catch(() => {});
  else if (navigator.clipboard?.writeText) navigator.clipboard.writeText(text).then(() => showToast(t('copied'))).catch(() => showToast(t('copyFailed')));
  else showToast(t('copyFailed'));
}
function openAddRecipe() { $('#addBackdrop').hidden = false; document.body.classList.add('no-scroll'); }
function closeAddRecipe() { $('#addBackdrop').hidden = true; document.body.classList.remove('no-scroll'); }
async function addCustomRecipe(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const nameAz = String(data.get('nameAz') || '').trim();
  const nameEn = String(data.get('nameEn') || '').trim();
  const descriptionAz = String(data.get('descriptionAz') || '').trim();
  const descriptionEn = String(data.get('descriptionEn') || '').trim();
  const ingredientsAz = String(data.get('ingredientsAz') || '').split('\n').map(line => line.trim()).filter(Boolean);
  const ingredientsEn = String(data.get('ingredientsEn') || '').split('\n').map(line => line.trim()).filter(Boolean);
  const ingredients = ingredientsAz.map((az, index) => ({ text: { az, en: ingredientsEn[index] || '' } }));
  const stepsAz = String(data.get('stepsAz') || '').split('\n').map(line => line.trim()).filter(Boolean);
  const stepsEn = String(data.get('stepsEn') || '').split('\n').map(line => line.trim()).filter(Boolean);
  const time = Number(data.get('time'));
  const ingredientCountMismatch = ingredientsAz.length !== ingredientsEn.length && (ingredientsAz.length > 0 || ingredientsEn.length > 0);
  if (!nameAz || !nameEn || !descriptionAz || !descriptionEn || ingredients.length === 0 || ingredientCountMismatch || stepsAz.length === 0 || stepsEn.length === 0 || !Number.isFinite(time) || time < 1 || time > 600) {
    showToast(ingredientCountMismatch ? t('ingredientLinesMismatch') : t('recipeRequired'));
    return;
  }

  const image = safeImage(String(data.get('image') || ''));
  const recipePayload = {
    title: { az: nameAz, en: nameEn },
    description: { az: descriptionAz, en: descriptionEn },
    category: String(data.get('category')),
    time,
    servings: 2,
    image,
    ingredients,
    steps: { az: stepsAz, en: stepsEn }
  };

  const submitButton = form.querySelector('button[type="submit"]');
  if (submitButton) submitButton.disabled = true;
  try {
    const result = await apiRequest('POST', recipePayload);
    const recipe = result.recipe;
    state.customRecipes.unshift(recipe);
    form.reset();
    closeAddRecipe();
    state.category = 'all';
    state.favoritesOnly = false;
    state.search = '';
    $('#recipeSearch').value = '';
    renderCategories();
    renderRecipes();
    showToast(t('recipeSaved'));
    openRecipe(recipe.id);
  } catch (error) {
    console.error('Dadlı recipe save:', error);
    showToast(error.message ? `${t('serverSaveFailed')} ${error.message}` : t('serverSaveFailed'));
  } finally {
    if (submitButton) submitButton.disabled = false;
  }
}

async function deleteCustomRecipe(recipe) {
  if (!recipe || !recipe.canManage || !window.confirm(t('confirmDelete'))) return;
  try {
    await apiRequest('DELETE', { id: recipe.id });
    state.customRecipes = state.customRecipes.filter(item => item.id !== recipe.id);
    closeRecipe();
    renderCategories();
    renderRecipes();
    showToast(t('recipeDeleted'));
  } catch (error) {
    console.error('Dadlı recipe delete:', error);
    showToast(error.message ? `${t('deleteFailed')} ${error.message}` : t('deleteFailed'));
  }
}
function closeAllOverlays() {
  if (!$('#recipeBackdrop').hidden) closeRecipe();
  if (!$('#addBackdrop').hidden) closeAddRecipe();
  if (!$('#shoppingBackdrop').hidden) closeShopping();
}

// Event delegation keeps card controls working after every re-render.
$('#categoryPills').addEventListener('click', event => {
  const button = event.target.closest('[data-category]'); if (!button) return;
  if (button.dataset.category === 'favorites') { state.favoritesOnly = true; state.category = 'all'; }
  else { state.favoritesOnly = false; state.category = button.dataset.category; }
  renderCategories(); renderRecipes();
});
$('#recipeGrid').addEventListener('click', event => {
  const favorite = event.target.closest('[data-favorite]');
  if (favorite) { event.stopPropagation(); toggleFavorite(favorite.dataset.favorite); return; }
  const card = event.target.closest('[data-open-recipe]'); if (card) openRecipe(card.dataset.openRecipe);
});
$('#recipeGrid').addEventListener('keydown', event => { if ((event.key === 'Enter' || event.key === ' ') && event.target.matches('[data-open-recipe]')) { event.preventDefault(); openRecipe(event.target.dataset.openRecipe); } });
$('#shoppingItems').addEventListener('change', event => {
  const id = event.target.dataset.checkShopping; if (!id) return;
  const item = state.shopping.find(entry => entry.id === id); if (item) item.done = event.target.checked;
  persist(STORAGE.shopping, state.shopping); renderShopping();
});
$('#shoppingItems').addEventListener('click', event => {
  const button = event.target.closest('[data-remove-shopping]'); if (!button) return;
  state.shopping = state.shopping.filter(item => item.id !== button.dataset.removeShopping); persist(STORAGE.shopping, state.shopping); renderShopping();
});
$('#recipeSearch').addEventListener('input', event => { state.search = event.target.value; renderRecipes(); });
$('#sortSelect').addEventListener('change', event => { state.sort = event.target.value; renderRecipes(); });
$('#languageToggle').addEventListener('click', () => setLanguage(state.language === 'az' ? 'en' : 'az'));
$('#themeToggle').addEventListener('click', () => setTheme(state.theme === 'light' ? 'dark' : 'light'));
$('#showFavorites').addEventListener('click', () => { state.favoritesOnly = true; state.category = 'all'; renderCategories(); renderRecipes(); $('#discover').scrollIntoView({ behavior: 'smooth' }); });
$('#openShopping').addEventListener('click', openShopping);
$('#openAddRecipe').addEventListener('click', openAddRecipe);
$('#surpriseMe').addEventListener('click', () => { const list = filteredRecipes(); const pool = list.length ? list : recipes(); const chosen = pool[Math.floor(Math.random() * pool.length)]; showToast(t('surpriseToast')); openRecipe(chosen.id); });
$('#clearFilters').addEventListener('click', resetFilters);
$('#emptyReset').addEventListener('click', resetFilters);
function resetFilters() { state.category = 'all'; state.favoritesOnly = false; state.search = ''; state.sort = 'popular'; $('#recipeSearch').value = ''; $('#sortSelect').value = 'popular'; renderCategories(); renderRecipes(); }
$('#clearShopping').addEventListener('click', () => { state.shopping = []; persist(STORAGE.shopping, state.shopping); renderShopping(); showToast(t('listCleared')); });
$('#copyShopping').addEventListener('click', async () => {
  const text = state.shopping.map(item => `${item.done ? '[x]' : '[ ]'} ${item.text}`).join('\n');
  try { await navigator.clipboard.writeText(text); showToast(t('copied')); }
  catch { const area = document.createElement('textarea'); area.value = text; document.body.append(area); area.select(); const ok = document.execCommand('copy'); area.remove(); showToast(ok ? t('copied') : t('copyFailed')); }
});
$('#addRecipeForm').addEventListener('submit', addCustomRecipe);
$$('[data-close]').forEach(button => button.addEventListener('click', () => {
  if (button.dataset.close === 'recipe') closeRecipe();
  if (button.dataset.close === 'add') closeAddRecipe();
  if (button.dataset.close === 'shopping') closeShopping();
}));
$('#recipeBackdrop').addEventListener('click', event => { if (event.target === $('#recipeBackdrop')) closeRecipe(); });
$('#addBackdrop').addEventListener('click', event => { if (event.target === $('#addBackdrop')) closeAddRecipe(); });
$('#shoppingBackdrop').addEventListener('click', event => { if (event.target === $('#shoppingBackdrop')) closeShopping(); });
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeAllOverlays();
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); $('#recipeSearch').focus(); }
});
$('#mobileMenuToggle').addEventListener('click', () => $('.main-nav').classList.toggle('open'));
$$('.main-nav a, .main-nav button').forEach(link => link.addEventListener('click', () => $('.main-nav').classList.remove('open')));

// Initial setup
setTheme(state.theme);
setLanguage(state.language);
renderShopping();
loadCustomRecipes();
