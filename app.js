// 職人マーケット - メインアプリケーション

// 商品・職人・カテゴリーデータ
const appData = {
  // カテゴリー一覧（6種類の工芸品分類）
  "categories": [
    {
      "id": 1,
      "name": "陶芸",
      "image": "https://pplx-res.cloudinary.com/image/upload/v1749937565/pplx_project_search_images/17b15be7cbc90ad6919f29f27e2d7697d6e91196.jpg",
      "count": 28,
      "description": "伝統的な技法で作られた美しい陶器と磁器"
    },
    {
      "id": 2,
      "name": "織物・染物",
      "image": "https://pplx-res.cloudinary.com/image/upload/v1749937565/pplx_project_search_images/67e3c4e8236485f6a5aa62bf7c27e26c89243b0a.jpg",
      "count": 22,
      "description": "藍染めやさしこなど日本の伝統的な染織技術"
    },
    {
      "id": 3,
      "name": "ジュエリー",
      "image": "https://pplx-res.cloudinary.com/image/upload/v1749937565/pplx_project_search_images/c29ee9cf28a1cf8428e61dcc78f8101983a88102.jpg",
      "count": 35,
      "description": "職人による手作りアクセサリーと装身具"
    },
    {
      "id": 4,
      "name": "絵画・アート",
      "image": "https://pplx-res.cloudinary.com/image/upload/v1749937565/pplx_project_search_images/e30e66e4d654437a873fd6970340b03b0258be5d.jpg",
      "count": 18,
      "description": "現代と伝統が融合した美しい日本の芸術作品"
    },
    {
      "id": 5,
      "name": "木工品",
      "image": "https://pplx-res.cloudinary.com/image/upload/v1749937616/gpt4o_images/wkawaqrrovkixafzbvat.png",
      "count": 31,
      "description": "日本の木材を使った手作り家具と小物"
    },
    {
      "id": 6,
      "name": "その他工芸",
      "image": "https://pplx-res.cloudinary.com/image/upload/v1749937565/pplx_project_search_images/aa9d00539b13e4e6304d61c3ef972dccef2444bb.jpg",
      "count": 24,
      "description": "竹細工、和紙、漆器など多様な伝統工芸"
    }
  ],
  
  // 商品データ（6商品）
  "products": [
    {
      "id": 101,
      "name": "備前焼 花器",
      "price": 12800,
      "originalPrice": 15600,
      "artist": "田中 一郎",
      "category": "陶芸",
      "image": "https://pplx-res.cloudinary.com/image/upload/v1749937565/pplx_project_search_images/17b15be7cbc90ad6919f29f27e2d7697d6e91196.jpg",
      "rating": 4.9,
      "reviews": 31,
      "inStock": true,
      "description": "岡山県の伝統的な備前焼技法で丁寧に作られた花器です。土の自然な風合いと火色の美しさが特徴で、どんな花も美しく引き立てます。"
    },
    {
      "id": 102,
      "name": "藍染め手ぬぐい",
      "price": 3200,
      "artist": "佐藤 美子",
      "category": "織物・染物",
      "image": "https://pplx-res.cloudinary.com/image/upload/v1749937565/pplx_project_search_images/67e3c4e8236485f6a5aa62bf7c27e26c89243b0a.jpg",
      "rating": 4.8,
      "reviews": 45,
      "inStock": true,
      "description": "徳島の天然藍を使用して染められた美しい手ぬぐいです。日本古来の染色技法により、深い藍色の美しさをお楽しみいただけます。"
    },
    {
      "id": 103,
      "name": "純銀製 桜モチーフピアス",
      "price": 18500,
      "artist": "鈴木 雅美",
      "category": "ジュエリー",
      "image": "https://pplx-res.cloudinary.com/image/upload/v1749937565/pplx_project_search_images/c29ee9cf28a1cf8428e61dcc78f8101983a88102.jpg",
      "rating": 5.0,
      "reviews": 22,
      "inStock": true,
      "description": "日本の春を象徴する桜をモチーフにした純銀製のピアスです。繊細な彫金技術により、桜の花びらの美しさを表現しました。"
    },
    {
      "id": 104,
      "name": "現代水彩画「月夜の侍」",
      "price": 42000,
      "artist": "山田 健治",
      "category": "絵画・アート",
      "image": "https://pplx-res.cloudinary.com/image/upload/v1749937565/pplx_project_search_images/e30e66e4d654437a873fd6970340b03b0258be5d.jpg",
      "rating": 4.7,
      "reviews": 18,
      "inStock": true,
      "description": "伝統的な日本画の技法と現代的な感覚を融合させた水彩画作品です。満月の夜に佇む侍の姿を幻想的に描いています。"
    },
    {
      "id": 105,
      "name": "欅材 茶托セット",
      "price": 8900,
      "originalPrice": 11200,
      "artist": "伊藤 健太郎",
      "category": "木工品",
      "image": "https://pplx-res.cloudinary.com/image/upload/v1749937616/gpt4o_images/wkawaqrrovkixafzbvat.png",
      "rating": 4.6,
      "reviews": 38,
      "inStock": true,
      "description": "日本の銘木である欅材を使用した茶托のセットです。木目の美しさと手触りの良さをお楽しみいただける逸品です。"
    },
    {
      "id": 106,
      "name": "手編み竹かご",
      "price": 6800,
      "artist": "中村 幸子",
      "category": "その他工芸",
      "image": "https://pplx-res.cloudinary.com/image/upload/v1749937565/pplx_project_search_images/aa9d00539b13e4e6304d61c3ef972dccef2444bb.jpg",
      "rating": 4.8,
      "reviews": 29,
      "inStock": true,
      "description": "九州産の良質な竹を使用して手編みで作られたかごです。収納やインテリアとして幅広くご利用いただけます。"
    }
  ],
  
  // 職人プロフィール（3名）
  "artists": [
    {
      "id": 1,
      "name": "田中 一郎",
      "specialty": "陶芸（備前焼）",
      "location": "岡山県 備前市",
      "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      "description": "備前焼の伝統技法を受け継ぐ陶芸家。40年以上の経験を持ち、土と火の対話から生まれる作品を制作しています。",
      "experience": "40年",
      "awards": ["岡山県文化賞", "備前焼まつり大賞"]
    },
    {
      "id": 2,
      "name": "佐藤 美子",
      "specialty": "染織（藍染め）",
      "location": "徳島県 美馬市",
      "avatar": "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&h=150&fit=crop&crop=face",
      "description": "徳島の藍を使った伝統的な染色技法の継承者。天然藍にこだわり、美しい藍色の世界を表現しています。",
      "experience": "25年",
      "awards": ["徳島県伝統工芸士", "藍染め技術保存会会長"]
    },
    {
      "id": 3,
      "name": "鈴木 雅美",
      "specialty": "彫金・ジュエリー",
      "location": "東京都 台東区",
      "avatar": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      "description": "現代的なデザインと伝統的な彫金技術を融合させたジュエリー作家。一つ一つ手作りで制作しています。",
      "experience": "15年",
      "awards": ["東京都優秀技能者", "ジャパンジュエリーフェア大賞"]
    }
  ]
};

// カート状態管理
let cart = {
  items: [],        // カート内商品
  total: 0,         // 合計金額
  itemCount: 0      // 商品点数
};

// フィルター済み商品リスト（検索・絞り込み用）
let filteredProducts = [...appData.products];

// DOM要素の取得
const categoriesGrid = document.getElementById('categories-grid');
const featuredProductsGrid = document.getElementById('featured-products-grid');
const allProductsGrid = document.getElementById('all-products-grid');
const artistsGrid = document.getElementById('artists-grid');
const productModal = document.getElementById('product-modal');
const cartModal = document.getElementById('cart-modal');
const cartCount = document.getElementById('cart-count');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const searchInput = document.getElementById('search-input');
const categoryFilter = document.getElementById('category-filter');
const priceFilter = document.getElementById('price-filter');
const sortFilter = document.getElementById('sort-filter');

// ページ読み込み完了時の初期化
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
  setupEventListeners();
});

// アプリ初期化処理
function initializeApp() {
  renderCategories();      // カテゴリー表示
  renderFeaturedProducts(); // おすすめ商品表示
  renderAllProducts();     // 全商品表示
  renderArtists();         // 職人紹介表示
  populateFilters();       // フィルター設定
  updateCartDisplay();     // カート表示更新
}

// イベントリスナー設定
function setupEventListeners() {
  // カートボタンクリック
  document.getElementById('cart-btn').addEventListener('click', openCartModal);
  
  // 検索入力
  if (searchInput) {
    searchInput.addEventListener('input', handleSearch);
  }
  
  // フィルター変更
  if (categoryFilter) {
    categoryFilter.addEventListener('change', handleFilters);
  }
  if (priceFilter) {
    priceFilter.addEventListener('change', handleFilters);
  }
  if (sortFilter) {
    sortFilter.addEventListener('change', handleFilters);
  }
  
  // ナビゲーションリンク
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', handleNavigation);
  });
  
  // メルマガ登録ボタン
  const newsletterBtn = document.querySelector('.newsletter-btn');
  if (newsletterBtn) {
    newsletterBtn.addEventListener('click', handleNewsletter);
  }
  
  // チェックアウトボタン
  const checkoutBtn = document.getElementById('checkout-btn');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', handleCheckout);
  }
}

// カテゴリー一覧の表示
function renderCategories() {
  if (!categoriesGrid) return;
  
  categoriesGrid.innerHTML = appData.categories.map(category => `
    <div class="category-card" onclick="filterByCategory(${category.id})">
      <img src="${category.image}" alt="${category.name}" class="category-card__image">
      <div class="category-card__content">
        <h3 class="category-card__name">${category.name}</h3>
        <p class="category-card__count">${category.count}点</p>
        <p class="category-card__description">${category.description}</p>
      </div>
    </div>
  `).join('');
}

// おすすめ商品（最初の4商品）の表示
function renderFeaturedProducts() {
  if (!featuredProductsGrid) return;
  
  const featuredProducts = appData.products.slice(0, 4);
  featuredProductsGrid.innerHTML = featuredProducts.map(product => `
    <div class="product-card" onclick="openProductModal(${product.id})">
      <img src="${product.image}" alt="${product.name}" class="product-card__image">
      <div class="product-card__content">
        <h3 class="product-card__name">${product.name}</h3>
        <p class="product-card__artist">作: ${product.artist}</p>
        <div class="product-card__price">
          <span class="product-card__current-price">¥${product.price.toLocaleString()}</span>
          ${product.originalPrice ? `<span class="product-card__original-price">¥${product.originalPrice.toLocaleString()}</span>` : ''}
        </div>
        <div class="product-card__rating">
          <span class="rating-stars">${'★'.repeat(Math.floor(product.rating))}</span>
          <span>${product.rating} (${product.reviews}件)</span>
        </div>
      </div>
    </div>
  `).join('');
}

// 全商品一覧の表示（フィルター適用済み）
function renderAllProducts() {
  if (!allProductsGrid) return;
  
  allProductsGrid.innerHTML = filteredProducts.map(product => `
    <div class="product-card" onclick="openProductModal(${product.id})">
      <img src="${product.image}" alt="${product.name}" class="product-card__image">
      <div class="product-card__content">
        <h3 class="product-card__name">${product.name}</h3>
        <p class="product-card__artist">作: ${product.artist}</p>
        <div class="product-card__price">
          <span class="product-card__current-price">¥${product.price.toLocaleString()}</span>
          ${product.originalPrice ? `<span class="product-card__original-price">¥${product.originalPrice.toLocaleString()}</span>` : ''}
        </div>
        <div class="product-card__rating">
          <span class="rating-stars">${'★'.repeat(Math.floor(product.rating))}</span>
          <span>${product.rating} (${product.reviews}件)</span>
        </div>
      </div>
    </div>
  `).join('');
}

// 職人紹介セクションの表示
function renderArtists() {
  if (!artistsGrid) return;
  
  artistsGrid.innerHTML = appData.artists.map(artist => `
    <div class="artist-card">
      <img src="${artist.avatar}" alt="${artist.name}" class="artist-card__avatar">
      <h3 class="artist-card__name">${artist.name}</h3>
      <p class="artist-card__specialty">${artist.specialty}</p>
      <p class="artist-card__location">${artist.location}</p>
      <p class="artist-card__description">${artist.description}</p>
      <p class="artist-card__experience">経験: ${artist.experience}</p>
      <p class="artist-card__awards">受賞: ${artist.awards.join(', ')}</p>
    </div>
  `).join('');
}

// フィルター選択肢の設定
function populateFilters() {
  if (categoryFilter) {
    categoryFilter.innerHTML = '<option value="">すべてのカテゴリー</option>' +
      appData.categories.map(category => 
        `<option value="${category.name}">${category.name}</option>`
      ).join('');
  }
}

// 商品詳細モーダルを開く
function openProductModal(productId) {
  const product = appData.products.find(p => p.id === productId);
  if (!product) return;
  
  const modalContent = `
    <div class="product-detail">
      <div class="product-detail__content">
        <img src="${product.image}" alt="${product.name}" class="product-detail__image">
        <div class="product-detail__info">
          <h3>${product.name}</h3>
          <p class="product-detail__artist">作: ${product.artist}</p>
          <p class="product-detail__price">¥${product.price.toLocaleString()}</p>
          <p class="product-detail__description">${product.description}</p>
          <div class="product-detail__actions">
            <button class="btn btn--primary" onclick="addToCart(${product.id})">カートに追加</button>
            <button class="btn btn--secondary" onclick="closeModal()">閉じる</button>
          </div>
        </div>
      </div>
    </div>
  `;
  
  showModal(modalContent, 'product-modal');
}

// カートモーダルを開く
function openCartModal() {
  const cartContent = `
    <div class="cart-content">
      <h2 class="cart-title">ショッピングカート</h2>
      <div id="cart-items">
        ${cart.items.length === 0 ? 
          '<p class="empty-cart">カートは空です</p>' : 
          cart.items.map(item => `
            <div class="cart-item">
              <img src="${item.image}" alt="${item.name}" class="cart-item__image">
              <div class="cart-item__info">
                <h4 class="cart-item__name">${item.name}</h4>
                <p class="cart-item__artist">作: ${item.artist}</p>
                <p class="cart-item__price">¥${item.price.toLocaleString()}</p>
              </div>
              <div class="cart-item__controls">
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                <input type="number" value="${item.quantity}" class="quantity-input" onchange="updateQuantity(${item.id}, this.value)">
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                <button class="remove-btn" onclick="removeFromCart(${item.id})">削除</button>
              </div>
            </div>
          `).join('')
        }
      </div>
      ${cart.items.length > 0 ? `
        <div class="cart-footer">
          <p class="cart-total">合計: ¥${cart.total.toLocaleString()}</p>
          <button class="btn btn--primary btn--full-width" onclick="handleCheckout()">お会計に進む</button>
        </div>
      ` : ''}
    </div>
  `;
  
  showModal(cartContent, 'cart-modal');
}

// モーダル表示の共通処理
function showModal(content, modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  
  modal.querySelector('.modal__content').innerHTML = `
    <button class="modal__close" onclick="closeModal()">&times;</button>
    ${content}
  `;
  modal.classList.add('active');
}

// モーダルを閉じる
function closeModal() {
  document.querySelectorAll('.modal').forEach(modal => {
    modal.classList.remove('active');
  });
}

// カートに商品を追加
function addToCart(productId) {
  const product = appData.products.find(p => p.id === productId);
  if (!product) return;
  
  // 既にカートにある商品かチェック
  const existingItem = cart.items.find(item => item.id === productId);
  
  if (existingItem) {
    // 数量を増やす
    existingItem.quantity += 1;
  } else {
    // 新規追加
    cart.items.push({
      ...product,
      quantity: 1
    });
  }
  
  updateCartDisplay();
  closeModal();
}

// カート内商品の数量変更
function updateQuantity(productId, newQuantity) {
  const quantity = Math.max(0, parseInt(newQuantity));
  
  if (quantity === 0) {
    removeFromCart(productId);
    return;
  }
  
  const item = cart.items.find(item => item.id === productId);
  if (item) {
    item.quantity = quantity;
    updateCartDisplay();
    openCartModal(); // カートモーダルを再表示
  }
}

// カートから商品を削除
function removeFromCart(productId) {
  cart.items = cart.items.filter(item => item.id !== productId);
  updateCartDisplay();
  openCartModal(); // カートモーダルを再表示
}

// カート表示の更新（ヘッダーのカウンターなど）
function updateCartDisplay() {
  cart.itemCount = cart.items.reduce((total, item) => total + item.quantity, 0);
  cart.total = cart.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  
  if (cartCount) {
    cartCount.textContent = cart.itemCount;
    cartCount.style.display = cart.itemCount > 0 ? 'flex' : 'none';
  }
}

// 検索処理
function handleSearch() {
  if (!searchInput) return;
  
  const searchTerm = searchInput.value.toLowerCase();
  filteredProducts = appData.products.filter(product =>
    product.name.toLowerCase().includes(searchTerm) ||
    product.artist.toLowerCase().includes(searchTerm) ||
    product.category.toLowerCase().includes(searchTerm)
  );
  
  applyFilters();
}

// フィルター処理（カテゴリー・価格・ソート）
function handleFilters() {
  const categoryValue = categoryFilter ? categoryFilter.value : '';
  const priceValue = priceFilter ? priceFilter.value : '';
  const sortValue = sortFilter ? sortFilter.value : '';
  
  // カテゴリーフィルター
  let filtered = [...appData.products];
  
  if (categoryValue) {
    filtered = filtered.filter(product => product.category === categoryValue);
  }
  
  // 価格フィルター
  if (priceValue) {
    switch (priceValue) {
      case 'under-5000':
        filtered = filtered.filter(product => product.price < 5000);
        break;
      case '5000-15000':
        filtered = filtered.filter(product => product.price >= 5000 && product.price <= 15000);
        break;
      case '15000-30000':
        filtered = filtered.filter(product => product.price >= 15000 && product.price <= 30000);
        break;
      case 'over-30000':
        filtered = filtered.filter(product => product.price > 30000);
        break;
    }
  }
  
  // 検索条件も適用
  if (searchInput) {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.artist.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
      );
    }
  }
  
  // ソート処理
  switch (sortValue) {
    case 'price-low':
      filtered.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      filtered.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      filtered.sort((a, b) => b.rating - a.rating);
      break;
    default:
      // おすすめ順（元の順序を維持）
      break;
  }
  
  filteredProducts = filtered;
  renderAllProducts();
}

// フィルター適用の汎用関数
function applyFilters() {
  handleFilters();
}

// カテゴリーカードクリック時の処理
function filterByCategory(categoryId) {
  const category = appData.categories.find(c => c.id === categoryId);
  if (category && categoryFilter) {
    categoryFilter.value = category.name;
    handleFilters();
    
    // 商品セクションまでスクロール
    const allProductsSection = document.getElementById('all-products');
    if (allProductsSection) {
      allProductsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

// ナビゲーションリンクのクリック処理
function handleNavigation(e) {
  e.preventDefault();
  const targetId = e.target.getAttribute('href').substring(1);
  const targetElement = document.getElementById(targetId);
  
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
  
  // アクティブ状態の更新
  document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
  e.target.classList.add('active');
}

// メルマガ登録処理
function handleNewsletter() {
  const newsletterInput = document.querySelector('.newsletter-input');
  if (newsletterInput) {
    const email = newsletterInput.value;
    if (email) {
      alert('メルマガ登録ありがとうございます！');
      newsletterInput.value = '';
    }
  }
}

// チェックアウト処理
function handleCheckout() {
  if (cart.items.length === 0) {
    alert('カートが空です');
    return;
  }
  
  alert('お買い上げありがとうございます！\n決済画面に移動します。');
  
  // チェックアウト後はカートをクリア
  cart.items = [];
  updateCartDisplay();
  closeModal();
}

// クリックイベント：モーダルの背景クリックで閉じる
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('modal__overlay')) {
    closeModal();
  }
});

// キーボードイベント：Escapeキーでモーダルを閉じる
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeModal();
  }
});

// グローバル関数の設定（HTMLのonclick属性用）
window.openProductModal = openProductModal;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.closeModal = closeModal;
window.handleCheckout = handleCheckout;
window.filterByCategory = filterByCategory;
