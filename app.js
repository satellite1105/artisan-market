// アプリケーションデータ
const appData = {
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
  "artists": [
    {
      "id": 1,
      "name": "田中 一郎",
      "specialty": "陶芸（備前焼）",
      "location": "岡山県 備前市",
      "avatar": "https://via.placeholder.com/150x150/8B4513/ffffff?text=田中",
      "description": "備前焼の伝統技法を受け継ぐ陶芸家。40年以上の経験を持ち、土と火の対話から生まれる作品を制作しています。",
      "experience": "40年",
      "awards": ["岡山県文化賞", "備前焼まつり大賞"]
    },
    {
      "id": 2,
      "name": "佐藤 美子",
      "specialty": "染織（藍染め）",
      "location": "徳島県 美馬市",
      "avatar": "https://via.placeholder.com/150x150/4169E1/ffffff?text=佐藤",
      "description": "徳島の藍を使った伝統的な染色技法の継承者。天然藍にこだわり、美しい藍色の世界を表現しています。",
      "experience": "25年",
      "awards": ["徳島県伝統工芸士", "藍染め技術保存会会長"]
    },
    {
      "id": 3,
      "name": "鈴木 雅美",
      "specialty": "彫金・ジュエリー",
      "location": "東京都 台東区",
      "avatar": "https://via.placeholder.com/150x150/C0C0C0/000000?text=鈴木",
      "description": "現代的なデザインと伝統的な彫金技術を融合させたジュエリー作家。一つ一つ手作りで制作しています。",
      "experience": "15年",
      "awards": ["東京都優秀技能者", "ジャパンジュエリーフェア大賞"]
    }
  ]
};

// アプリケーション状態
let cart = {
  items: [],
  total: 0,
  itemCount: 0
};

let filteredProducts = [...appData.products];

// DOM要素
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

// アプリケーションの初期化
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
});

function initializeApp() {
    renderCategories();
    renderFeaturedProducts();
    renderAllProducts();
    renderArtists();
    populateFilters();
    updateCartDisplay();
}

function setupEventListeners() {
    // カートボタン
    document.getElementById('cart-btn').addEventListener('click', openCartModal);
    
    // 検索機能
    searchInput.addEventListener('input', handleSearch);
    
    // フィルター機能
    categoryFilter.addEventListener('change', handleFilters);
    priceFilter.addEventListener('change', handleFilters);
    sortFilter.addEventListener('change', handleFilters);
    
    // ナビゲーション
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', handleNavigation);
    });
    
    // メルマガ登録
    document.querySelector('.newsletter-btn').addEventListener('click', handleNewsletter);
    
    // チェックアウトボタン
    document.getElementById('checkout-btn').addEventListener('click', handleCheckout);
}

function renderCategories() {
    categoriesGrid.innerHTML = appData.categories.map(category => `
        <div class="category-card" onclick="filterByCategory('${category.name}')">
            <img src="${category.image}" alt="${category.name}" class="category-card__image">
            <div class="category-card__content">
                <h3 class="category-card__name">${category.name}</h3>
                <p class="category-card__count">${category.count}点</p>
                <p style="font-size: var(--font-size-sm); color: var(--color-text-secondary); margin-top: var(--space-8);">${category.description}</p>
            </div>
        </div>
    `).join('');
}

function renderFeaturedProducts() {
    featuredProductsGrid.innerHTML = appData.products.map(product => 
        createProductCard(product)
    ).join('');
}

function renderAllProducts() {
    allProductsGrid.innerHTML = filteredProducts.map(product => 
        createProductCard(product)
    ).join('');
}

function createProductCard(product) {
    const originalPriceHtml = product.originalPrice ? 
        `<span class="product-card__original-price">¥${product.originalPrice.toLocaleString()}</span>` : '';
    
    const stars = '★'.repeat(Math.floor(product.rating)) + '☆'.repeat(5 - Math.floor(product.rating));
    
    return `
        <div class="product-card" onclick="openProductModal(${product.id})">
            <img src="${product.image}" alt="${product.name}" class="product-card__image">
            <div class="product-card__content">
                <h3 class="product-card__name">${product.name}</h3>
                <p class="product-card__artist">作: ${product.artist}</p>
                <div class="product-card__price">
                    <span class="product-card__current-price">¥${product.price.toLocaleString()}</span>
                    ${originalPriceHtml}
                </div>
                <div class="product-card__rating">
                    <span class="rating-stars">${stars}</span>
                    <span>(${product.reviews}件)</span>
                </div>
            </div>
        </div>
    `;
}

function renderArtists() {
    artistsGrid.innerHTML = appData.artists.map(artist => `
        <div class="artist-card">
            <img src="${artist.avatar}" alt="${artist.name}" class="artist-card__avatar">
            <h3 class="artist-card__name">${artist.name}</h3>
            <p class="artist-card__specialty">${artist.specialty}</p>
            <p class="artist-card__location">${artist.location}</p>
            <p class="artist-card__description">${artist.description}</p>
            <div class="artist-card__experience">経験: ${artist.experience}</div>
            <div class="artist-card__awards">受賞歴: ${artist.awards.join('、')}</div>
        </div>
    `).join('');
}

function populateFilters() {
    // カテゴリーフィルターの設定
    const categories = [...new Set(appData.products.map(p => p.category))];
    categoryFilter.innerHTML = '<option value="">すべてのカテゴリー</option>' + 
        categories.map(cat => `<option value="${cat}">${cat}</option>`).join('');
}

function openProductModal(productId) {
    const product = appData.products.find(p => p.id === productId);
    if (!product) return;
    
    const originalPriceHtml = product.originalPrice ? 
        `<span style="text-decoration: line-through; color: var(--color-text-secondary); margin-left: 8px;">¥${product.originalPrice.toLocaleString()}</span>` : '';
    
    const stars = '★'.repeat(Math.floor(product.rating)) + '☆'.repeat(5 - Math.floor(product.rating));
    
    document.getElementById('product-detail').innerHTML = `
        <div class="product-detail__content">
            <div class="product-detail__image-container">
                <img src="${product.image}" alt="${product.name}" class="product-detail__image">
            </div>
            <div class="product-detail__info">
                <h3>${product.name}</h3>
                <p class="product-detail__artist">作: ${product.artist}</p>
                <div class="product-detail__price">
                    ¥${product.price.toLocaleString()}
                    ${originalPriceHtml}
                </div>
                <div class="product-detail__rating" style="margin-bottom: 16px;">
                    <span style="color: #FFD700;">${stars}</span>
                    <span style="margin-left: 8px;">${product.rating} (${product.reviews}件のレビュー)</span>
                </div>
                <p class="product-detail__description">${product.description}</p>
                <div class="product-detail__actions">
                    <button class="btn btn--primary" onclick="addToCart(${product.id})">カートに追加</button>
                    <button class="btn btn--secondary" onclick="closeProductModal()">閉じる</button>
                </div>
            </div>
        </div>
    `;
    
    productModal.classList.add('active');
}

function closeProductModal() {
    productModal.classList.remove('active');
}

function openCartModal() {
    renderCartItems();
    cartModal.classList.add('active');
}

function closeCartModal() {
    cartModal.classList.remove('active');
}

function addToCart(productId) {
    const product = appData.products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.items.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.items.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCartTotals();
    updateCartDisplay();
    
    // 成功メッセージの表示
    showNotification('商品をカートに追加しました！', 'success');
    
    // 商品詳細モーダルを閉じる
    closeProductModal();
}

function removeFromCart(productId) {
    cart.items = cart.items.filter(item => item.id !== productId);
    updateCartTotals();
    updateCartDisplay();
    renderCartItems();
}

function updateQuantity(productId, change) {
    const item = cart.items.find(item => item.id === productId);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        updateCartTotals();
        updateCartDisplay();
        renderCartItems();
    }
}

function updateCartTotals() {
    cart.itemCount = cart.items.reduce((total, item) => total + item.quantity, 0);
    cart.total = cart.items.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function updateCartDisplay() {
    cartCount.textContent = cart.itemCount;
    cartTotal.textContent = cart.total.toLocaleString();
}

function renderCartItems() {
    if (cart.items.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <p>カートは空です</p>
                <button class="btn btn--primary" onclick="closeCartModal()">買い物を続ける</button>
            </div>
        `;
        return;
    }
    
    cartItems.innerHTML = cart.items.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item__image">
            <div class="cart-item__info">
                <h4 class="cart-item__name">${item.name}</h4>
                <p class="cart-item__artist">作: ${item.artist}</p>
                <p class="cart-item__price">¥${item.price.toLocaleString()}</p>
            </div>
            <div class="cart-item__controls">
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                <input type="number" value="${item.quantity}" class="quantity-input" readonly>
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                <button class="remove-btn" onclick="removeFromCart(${item.id})">削除</button>
            </div>
        </div>
    `).join('');
}

function handleSearch() {
    applyFilters();
}

function handleFilters() {
    applyFilters();
}

function applyFilters() {
    const query = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;
    const selectedPriceRange = priceFilter.value;
    const selectedSort = sortFilter.value;
    
    // 全商品から開始
    filteredProducts = [...appData.products];
    
    // 検索フィルターの適用
    if (query) {
        filteredProducts = filteredProducts.filter(product => 
            product.name.toLowerCase().includes(query) ||
            product.artist.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query)
        );
    }
    
    // カテゴリーフィルターの適用
    if (selectedCategory) {
        filteredProducts = filteredProducts.filter(product => 
            product.category === selectedCategory
        );
    }
    
    // 価格フィルターの適用
    if (selectedPriceRange) {
        filteredProducts = filteredProducts.filter(product => {
            const price = product.price;
            switch (selectedPriceRange) {
                case '0-5000': return price < 5000;
                case '5000-15000': return price >= 5000 && price < 15000;
                case '15000-30000': return price >= 15000 && price < 30000;
                case '30000+': return price >= 30000;
                default: return true;
            }
        });
    }
    
    // ソート機能の適用
    switch (selectedSort) {
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            filteredProducts.sort((a, b) => b.rating - a.rating);
            break;
        default:
            // おすすめ順は元の順序を保持
            break;
    }
    
    renderAllProducts();
}

function filterByCategory(categoryName) {
    categoryFilter.value = categoryName;
    applyFilters();
    scrollToProducts();
}

function handleNavigation(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute('href');
    
    // アクティブなナビゲーションリンクの更新
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
    event.target.classList.add('active');
    
    // スムーズスクロール
    if (targetId.startsWith('#')) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
}

function scrollToProducts() {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

function handleNewsletter() {
    const email = document.querySelector('.newsletter-input').value;
    if (email) {
        showNotification('メルマガのご登録ありがとうございます！', 'success');
        document.querySelector('.newsletter-input').value = '';
    } else {
        showNotification('有効なメールアドレスを入力してください。', 'error');
    }
}

function handleCheckout() {
    if (cart.items.length === 0) {
        showNotification('カートが空です！', 'error');
        return;
    }
    
    showNotification('お会計に進んでいます...（デモモード）', 'info');
    // 実際のアプリケーションでは、ここでチェックアウトページにリダイレクトします
}

function showNotification(message, type = 'info') {
    // 通知要素の作成
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.textContent = message;
    
    // 通知のスタイル設定
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 16px 24px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        font-family: var(--font-family-base);
    `;
    
    // タイプに応じた背景色の設定
    switch (type) {
        case 'success':
            notification.style.backgroundColor = '#10B981';
            break;
        case 'error':
            notification.style.backgroundColor = '#EF4444';
            break;
        case 'warning':
            notification.style.backgroundColor = '#F59E0B';
            break;
        default:
            notification.style.backgroundColor = '#3B82F6';
    }
    
    // DOMに追加
    document.body.appendChild(notification);
    
    // アニメーション開始
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    // 3秒後に削除
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// モーダルの外側をクリックして閉じる
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal__overlay')) {
        closeProductModal();
        closeCartModal();
    }
});

// Escapeキーでモーダルを閉じる
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeProductModal();
        closeCartModal();
    }
});

// スムーズスクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 画像の読み込みアニメーション
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        img.addEventListener('error', function() {
            this.style.opacity = '0.5';
            this.alt = '画像が利用できません';
        });
        
        // 初期の透明度設定
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });
});