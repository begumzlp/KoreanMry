let allWords = {};
let kdramaData = [];
let actorPhotos = {};
let actorDetails = {};
let kpopData = [];

async function loadData() {
    try {
        const response = await fetch("kelimeler.json");

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();

        allWords = data.allWords || {};
        kdramaData = data.kdramaData || [];
        actorPhotos = data.actorPhotos || {};
        actorDetails = data.actorDetails || {};
        kpopData = data.kpopData || [];
        
    } catch (error) {
        console.error(error);
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    await loadData();
    const wordGrid = document.getElementById('wordGrid');
    const searchWrapper = document.getElementById('searchWrapper');
    const searchInput = document.getElementById('searchInput');
    const categoryButtons = document.getElementById('categoryButtons');
    const mainMenu = document.getElementById('mainMenu');

    // --- 1. MODÜL BAŞLATICI ✨ ---
    window.startModule = function(moduleType) {
        mainMenu.style.display = "none";
        searchWrapper.style.display = (moduleType === 'words') ? "flex" : "none";
        wordGrid.innerHTML = "";
        searchInput.value = ""; 
        
        if (moduleType === 'alphabet') displayWords("", "🇰🇷 HANGUL ALFABESİ");
        else if (moduleType === 'words') displayCategoryMenu();
        else if (moduleType === 'numbers') displayWords("", "🔢 SAYILAR");
        else if (moduleType === 'random') displayRandomWords(); 
        else if (moduleType === 'kdrama') window.displayKdramas();
        else if (moduleType === 'kpop') displayKpop();
    };

    // --- 2. KELİME KATEGORİ MENÜSÜ ✨ ---
    function displayCategoryMenu() {
        wordGrid.innerHTML = "";
        wordGrid.className = "category-grid-layout"; 
        categoryButtons.innerHTML = `<button class="cat-btn" onclick="goHome()">⬅️ Ana Menü</button>`;
        
        for (const cat in allWords) {
            if (cat === "🇰🇷 HANGUL ALFABESİ" || cat === "🔢 SAYILAR") continue;
            const catCard = document.createElement('div');
            catCard.className = 'menu-card animate-in';
            catCard.innerHTML = `<h3>${cat}</h3><p style="font-size:0.8rem; opacity:0.7; margin-top:5px;">${allWords[cat].length} Kelime</p>`;
            catCard.onclick = () => {
                wordGrid.className = "word-grid";
                displayWords("", cat);
            };
            wordGrid.appendChild(catCard);
        }
    }

    // --- 3. KELİME GÖSTERİMİ ✨ ---
    window.displayWords = function(searchTerm = "", selectedCategory) {
        wordGrid.innerHTML = "";
        wordGrid.className = "word-grid";
        searchWrapper.style.display = "flex";
        const term = searchTerm.toLowerCase().trim();
        const backAction = (selectedCategory === "🇰🇷 HANGUL ALFABESİ" || selectedCategory === "🔢 SAYILAR") ? "goHome()" : "startModule('words')";
        
        categoryButtons.innerHTML = `
            <button class="cat-btn" onclick="${backAction}">⬅️ Geri Dön</button>
            <h2>${selectedCategory}</h2>
        `;

        const words = allWords[selectedCategory] || [];
        words.forEach(item => {
            if (term === "" || item.turkce.toLowerCase().includes(term) || item.korece.includes(term)) {
                createCard(item);
            }
        });
    };

    // --- 4. KDRAMA ANA MENÜSÜ ✨ ---
    window.displayKdramas = function() {
        wordGrid.innerHTML = "";
        wordGrid.className = "category-grid-layout"; 
        searchWrapper.style.display = "none";
        
        const totalDramas = kdramaData.length;
        categoryButtons.innerHTML = `
            <button class="cat-btn" onclick="goHome()">⬅️ Ana Menü</button>
            <h2>🎬 KDRAMA DÜNYASI</h2>
            <div class="stats-bar animate-in">📊 <b>${totalDramas}</b> Dizi Kayıtlı</div>
        `;

        const subCategories = [
            { id: 'all_dramas', title: '🎬 Tüm Diziler', icon: '📺' },
            { id: 'actors', title: '👤 Koreli Oyuncular', icon: '🌟' },
            { id: 'years', title: '📅 Yıllara Göre', icon: '⏳' },
            { id: 'favs', title: '❤️ Favorilerim', icon: '💖' }
        ];

        subCategories.forEach(sub => {
            const card = document.createElement('div');
            card.className = 'menu-card animate-in';
            card.innerHTML = `<div style="font-size: 3rem; margin-bottom: 15px;">${sub.icon}</div><h3 style="color: var(--primary-color);">${sub.title}</h3>`;
            
            card.onclick = () => {
                if (sub.id === 'all_dramas') window.showAllDramas();
                else if (sub.id === 'actors') window.showActorsMenu();
                else if (sub.id === 'years') window.showYearsMenu();
                else if (sub.id === 'favs') window.showFavorites();
            };
            wordGrid.appendChild(card);
        });
    };

    // --- 5. KDRAMA ALT MODÜLLERİ ✨ ---
    window.showAllDramas = function(searchTerm = "") {
        wordGrid.innerHTML = "";
        wordGrid.className = "category-grid-layout";
        searchWrapper.style.display = "flex";
        categoryButtons.innerHTML = `<button class="cat-btn" onclick="window.displayKdramas()">⬅️ Geri Dön</button><h2>📺 TÜM DİZİLER</h2>`;

        const term = searchTerm.toLowerCase().trim();
        kdramaData.filter(d => (d.title || "").toLowerCase().includes(term) || (d.cast || "").toLowerCase().includes(term))
                  .forEach(drama => window.createDramaCard(drama));
    };

    window.showActorsMenu = function(searchTerm = "") {
        wordGrid.innerHTML = "";
        wordGrid.className = "category-grid-layout";
        searchWrapper.style.display = "flex";
        categoryButtons.innerHTML = `<button class="cat-btn" onclick="window.displayKdramas()">⬅️ Geri Dön</button><h2>🌟 KORELİ OYUNCULAR</h2>`;

        let allActors = [];
        kdramaData.forEach(d => { if(d.cast) allActors.push(...d.cast.split(',').map(a => a.trim())); });
        const uniqueActors = [...new Set(allActors)].sort();
        const term = searchTerm.toLowerCase().trim();

        uniqueActors.filter(a => a.toLowerCase().includes(term)).forEach(actor => {
            const card = document.createElement('div');
            card.className = 'menu-card animate-in';
            card.style.padding = "20px";

            const actorPhoto = actorPhotos[actor]?.photo || "https://via.placeholder.com/150x150?text=Actor";

            card.innerHTML = `
                <div class="actor-photo-container">
                    <img src="${actorPhoto}" alt="${actor}" style="width: 100px; height: 100px; border-radius: 50%; object-fit: cover; margin-bottom: 10px;">
                </div>
                <h3>${actor}</h3>
            `;
            
            card.onclick = () => window.showFilteredDramas(actor, 'actor');
            wordGrid.appendChild(card);
        });
    };

    window.showYearsMenu = function() {
        wordGrid.innerHTML = "";
        wordGrid.className = "category-grid-layout";
        searchWrapper.style.display = "none";
        categoryButtons.innerHTML = `<button class="cat-btn" onclick="window.displayKdramas()">⬅️ Geri Dön</button><h2>📅 YILLARA GÖRE DİZİLER</h2>`;
        const years = [...new Set(kdramaData.map(d => d.year))].sort((a,b) => b - a);
        years.forEach(year => {
            const card = document.createElement('div');
            card.className = 'menu-card animate-in';
            card.style.padding = "20px";
            card.innerHTML = `<div style="font-size:1.5rem;">📅</div><h3 style="font-size: 1.5rem;">${year}</h3>`;
            card.onclick = () => window.showFilteredDramas(year, 'year');
            wordGrid.appendChild(card);
        });
    };

    window.showFilteredDramas = function(value, type) {
        wordGrid.innerHTML = "";
        wordGrid.className = "category-grid-layout";
        searchWrapper.style.display = "none";
        
        const backFunc = type === 'actor' ? "window.showActorsMenu()" : "window.showYearsMenu()";
        
        let actorHeaderHTML = "";
        if (type === 'actor') {
            const actorInfo = actorDetails[value] || {};
            const actorPhotoSrc = actorPhotos[value]?.photo || "https://via.placeholder.com/150x150?text=Actor";

            actorHeaderHTML = `
                <div class="actor-profile-card animate-in" style="display: flex; gap: 20px; align-items: center; margin-bottom: 20px;">
                    <img src="${actorPhotoSrc}" alt="${value}" style="width: 120px; height: 120px; border-radius: 50%; object-fit: cover;">
                    <div class="actor-info-text">
                        <h2>${value}</h2>
                        <p>${actorInfo.bio || ""}</p>
                        <span class="insta-tag">
                            📱 ${actorInfo.insta || ""}
                        </span>
                    </div>
                </div>

                <h3 style="margin:30px 0 15px 0;color:var(--primary-color);">
                    Dizileri (${kdramaData.filter(d => d.cast && d.cast.includes(value)).length})
                </h3>
            `;
        }

        categoryButtons.innerHTML = `
            <button class="cat-btn" onclick="${backFunc}">⬅️ Geri Dön</button>
            ${actorHeaderHTML}
        `;

        kdramaData.filter(d => type === 'year' ? d.year === value : (d.cast && d.cast.includes(value)))
                  .forEach(drama => window.createDramaCard(drama));
    };

    // --- 6. YARDIMCI KART OLUŞTURUCULAR ---
    window.createDramaCard = function(drama) {
        const card = document.createElement('div');
        card.className = 'kdrama-card animate-in';
        const imageSrc = drama.afis || "https://via.placeholder.com/300x450?text=No+Image";
        const favorites = JSON.parse(localStorage.getItem('kdramaFavs')) || [];
        const isFav = favorites.includes(drama.title);

        card.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    <div class="poster-container" style="position: relative;">
                        <img src="${imageSrc}" alt="${drama.title}" style="width: 100%; height: auto; border-radius: 8px;">
                        <span class="episode-badge" style="position: absolute; top: 10px; left: 10px; background: rgba(0,0,0,0.6); color: #fff; padding: 4px 8px; border-radius: 4px;">
                            ${drama.episodes || "?"} Bölüm
                        </span>

                        <button class="fav-btn ${isFav ? 'active' : ''}" style="position: absolute; top: 10px; right: 10px; background: none; border: none; font-size: 1.5rem; cursor: pointer;"
                            onclick="event.stopPropagation(); window.toggleFavorite('${drama.title}')">
                            ${isFav ? '❤️' : '🤍'}
                        </button>
                    </div>
                    <div class="card-info">
                        <h3>${drama.title}</h3>
                        <p>📅 ${drama.year}</p>
                    </div>
                </div>
                <div class="card-back">
                    <h2>${drama.title}</h2>
                    <p>📅 ${drama.year}</p>
                    <p>🎭 ${drama.cast}</p>
                    <p>🎬 ${drama.episodes} Bölüm</p>
                </div>
            </div>
        `;

        card.onclick = () => {
            card.classList.toggle('is-flipped');
        };

        wordGrid.appendChild(card);
    };

    window.toggleFavorite = function(title) {
        let favorites = JSON.parse(localStorage.getItem('kdramaFavs')) || [];
        if (favorites.includes(title)) {
            favorites = favorites.filter(f => f !== title);
        } else {
            favorites.push(title);
        }
        localStorage.setItem('kdramaFavs', JSON.stringify(favorites));
        
        const h2Elem = categoryButtons.querySelector('h2');
        if (!h2Elem) return;
        const currentTitle = h2Elem.innerText;
        
        if (currentTitle === "💖 FAVORİ DİZİLERİM") {
            window.showFavorites();
        } else if (currentTitle === "📺 TÜM DİZİLER") {
            window.showAllDramas(searchInput.value);
        }
    };

    function createCard(item) {
        const card = document.createElement('div');
        card.className = 'word-card animate-in';
        const korH = item.ornek ? item.ornek.replace(new RegExp(`(${item.korece.replace(/[^\uAC00-\uD7A3]/g, '')})`, 'g'), `<span class="highlight-white">$1</span>`) : "";
        let okunusH = item.ornekOkunus || "";
        if (item.okunus && okunusH) {
            const root = item.okunus.toLowerCase().split('/')[0].trim().substring(0, 2);
            okunusH = okunusH.replace(new RegExp(`(${root}[a-z-]*)`, 'gi'), `<span class="highlight-pink-soft">$1</span>`);
        }
        card.innerHTML = `<div class="card-inner"><div class="card-front"><h3 style="font-size:2.2rem; color:var(--primary-color);">${item.korece}</h3><div class="pronunciation">[${item.okunus}]</div><span style="font-weight:800; border-top:1px dashed var(--accent-color); padding-top:10px; width:85%;">${item.turkce}</span></div><div class="card-back"><p style="font-weight:900; font-size:1.4rem;">${korH}</p><p style="font-size:1.1rem; color:#fff; background:rgba(255,255,255,0.2); padding:5px 12px; border-radius:10px;">[${okunusH}]</p><p class="sentence-tr">${item.ornekTr}</p></div></div>`;
        card.onclick = () => card.classList.toggle('is-flipped');
        wordGrid.appendChild(card);
    }

    // --- 7. ARAMA VE NAVİGASYON ---
    searchInput.addEventListener('input', (e) => {
        const val = e.target.value;
        const h2 = categoryButtons.querySelector('h2');
        if (!h2) return;
        const title = h2.innerText;
        
        if (title === "📺 TÜM DİZİLER") window.showAllDramas(val);
        else if (title === "🌟 KORELİ OYUNCULAR") window.showActorsMenu(val);
        else if (title !== "🎬 KDRAMA DÜNYASI") window.displayWords(val, title);
    });

    window.goHome = function() {
        mainMenu.style.display = "block";
        searchWrapper.style.display = "none";
        wordGrid.innerHTML = "";
        wordGrid.className = "word-grid";
        categoryButtons.innerHTML = "";
        searchInput.value = "";
    };

    window.displayKpop = function() {
        wordGrid.innerHTML = "";
        wordGrid.className = "category-grid-layout";

        categoryButtons.innerHTML = `
            <button class="cat-btn" onclick="goHome()">
                ⬅️ Ana Menü
            </button>
            <h2>🎤 K-POP GROUPS</h2>
        `;

        kpopData.forEach(group => {
            const card = document.createElement("div");
            card.className = "menu-card animate-in";

            card.innerHTML = `
                <h3>${group.group}</h3>
                <p>🎉 ${group.debut}</p>
                <p>💜 ${group.fandom}</p>
            `;

            wordGrid.appendChild(card);
        });
    };

    // --- 8. GECE MODU ---
    const themeToggle = document.getElementById('themeToggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    themeToggle.textContent = (currentTheme === 'dark') ? '☀️' : '🌙';

    themeToggle.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        let newTheme = theme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    });

    // --- FAVORİ DİZİLERİ GÖSTEREN FONKSİYON ✨ ---
    window.showFavorites = function() {
        wordGrid.innerHTML = "";
        wordGrid.className = "category-grid-layout";
        searchWrapper.style.display = "none"; 
        
        categoryButtons.innerHTML = `
            <button class="cat-btn" onclick="window.displayKdramas()">⬅️ Geri Dön</button>
            <h2>💖 FAVORİ DİZİLERİM</h2>
        `;

        const favorites = JSON.parse(localStorage.getItem('kdramaFavs')) || [];

        if (favorites.length === 0) {
            wordGrid.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; padding: 50px;">
                    <p style="font-size: 1.2rem; opacity: 0.7;">Henüz hiçbir diziyi kalplemedin... ❤️</p>
                </div>
            `;
            return;
        }

        const favList = kdramaData.filter(drama => favorites.includes(drama.title));
        favList.forEach(drama => window.createDramaCard(drama));
    };
});
