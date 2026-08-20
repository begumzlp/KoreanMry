```javascript
// =====================================================
// MIRIYSUUU DATA (Onarılmış Sürüm)
// =====================================================

let allWords = {};
let kdramaData = [];
let actorPhotos = {};
let actorDetails = {};

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

        console.log("✅ Veriler başarıyla yüklendi");
    } catch (error) {
        console.error("❌ Veri yüklenemedi:", error);

        const grid = document.getElementById("wordGrid");

        if (grid) {
            grid.innerHTML = `
                <div style="padding:30px;text-align:center;">
                    <h2>⚠️ Veri Yüklenemedi</h2>
                    <p>kelimeler.json dosyasını kontrol et.</p>
                </div>
            `;
        }
    }
}

document.addEventListener("DOMContentLoaded", async () => {

    await loadData();

    const wordGrid = document.getElementById("wordGrid");
    const searchWrapper = document.getElementById("searchWrapper");
    const searchInput = document.getElementById("searchInput");
    const categoryButtons = document.getElementById("categoryButtons");
    const mainMenu = document.getElementById("mainMenu");

    // =====================================================
    // MODÜL BAŞLATICI
    // =====================================================

    window.startModule = function(moduleType) {

        mainMenu.style.display = "none";

        searchWrapper.style.display =
            moduleType === "words"
                ? "flex"
                : "none";

        wordGrid.innerHTML = "";
        searchInput.value = "";

        if (moduleType === "alphabet") {
            window.displayWords("", "🇰🇷 HANGUL ALFABESİ");
        }

        else if (moduleType === "words") {
            displayCategoryMenu();
        }

        else if (moduleType === "numbers") {
            window.displayWords("", "🔢 SAYILAR");
        }

        else if (moduleType === "random") {
            window.displayRandomWords();
        }

        else if (moduleType === "kdrama") {
            window.displayKdramas();
        }

        else if (moduleType === "kpop") {
            window.displayKpop();
        }
    };

    // =====================================================
    // KATEGORİ MENÜSÜ
    // =====================================================

    function displayCategoryMenu() {

        wordGrid.innerHTML = "";
        wordGrid.className = "category-grid-layout";

        categoryButtons.innerHTML = `
            <button class="cat-btn" onclick="goHome()">
                ⬅️ Ana Menü
            </button>
        `;

        for (const cat in allWords) {

            if (
                cat === "🇰🇷 HANGUL ALFABESİ" ||
                cat === "🔢 SAYILAR"
            ) continue;

            const card = document.createElement("div");

            card.className = "menu-card animate-in";

            card.innerHTML = `
                <h3>${cat}</h3>
                <p style="font-size:.8rem;opacity:.7;">
                    ${allWords[cat].length} Kelime
                </p>
            `;

            card.onclick = () => {
                window.displayWords("", cat);
            };

            wordGrid.appendChild(card);
        }
    }

    // =====================================================
    // KELİME GÖSTER
    // =====================================================

    window.displayWords = function (
        searchTerm = "",
        selectedCategory
    ) {

        wordGrid.innerHTML = "";
        wordGrid.className = "word-grid";

        searchWrapper.style.display = "flex";

        const term =
            searchTerm.toLowerCase().trim();

        const backAction =
            selectedCategory === "🇰🇷 HANGUL ALFABESİ" ||
            selectedCategory === "🔢 SAYILAR"
                ? "goHome()"
                : "startModule('words')";

        categoryButtons.innerHTML = `
            <button
                class="cat-btn"
                onclick="${backAction}">
                ⬅️ Geri Dön
            </button>

            <h2>${selectedCategory}</h2>
        `;

        const words =
            allWords[selectedCategory] || [];

        words.forEach(item => {

            const trMatch =
                item.turkce &&
                item.turkce
                    .toLowerCase()
                    .includes(term);

            const korMatch =
                item.korece &&
                item.korece
                    .toLowerCase()
                    .includes(term);

            if (
                term === "" ||
                trMatch ||
                korMatch
            ) {
                createCard(item);
            }
        });
    };

    // =====================================================
    // KELİME KARTI (HTML Yapısı Düzeltildi)
    // =====================================================

    function createCard(item) {

        const card = document.createElement("div");

        card.className = "word-card animate-in";

        const cleanKor =
            (item.korece || "")
                .replace(/[^\uAC00-\uD7A3]/g, "");

        const korHighlighted =
            item.ornek
                ? item.ornek.replace(
                    new RegExp(`(${cleanKor})`, "g"),
                    `<span class="highlight-white">$1</span>`
                  )
                : "";

        let okunusHighlighted =
            item.ornekOkunus || "";

        if (
            item.okunus &&
            okunusHighlighted
        ) {

            const root =
                item.okunus
                    .toLowerCase()
                    .replace(/[^a-z]/g, "")
                    .substring(0, 3);

            if (root.length >= 2) {

                okunusHighlighted =
                    okunusHighlighted.replace(
                        new RegExp(
                            `(${root}[a-z]*)`,
                            "gi"
                        ),
                        `<span class="highlight-pink-soft">$1</span>`
                    );
            }
        }

        card.innerHTML = `
            <div class="card-inner">

                <div class="card-front">

                    <h3 style="font-size:2.2rem; color:var(--primary-color);">
                        ${item.korece || ""}
                    </h3>

                    <div class="pronunciation">
                        [${item.okunus || ""}]
                    </div>

                    <span style="font-weight:800; border-top:1px dashed var(--accent-color); padding-top:10px; width:85%;">
                        ${item.turkce || ""}
                    </span>

                </div>

                <div class="card-back">

                    <p style="font-weight:900; font-size:1.4rem;">
                        ${korHighlighted}
                    </p>

                    <p style="font-size:1.1rem; color:#fff; background:rgba(255,255,255,.2); padding:5px 12px; border-radius:10px;">
                        ${okunusHighlighted}
                    </p>

                </div>

            </div>
        `;

        card.onclick = () => {
            card.classList.toggle("is-flipped");
        };

        wordGrid.appendChild(card);
    }

    // =====================================================
    // KDRAMA ANA MENÜ
    // =====================================================

    window.displayKdramas = function () {

        wordGrid.innerHTML = "";
        wordGrid.className = "category-grid-layout";

        searchWrapper.style.display = "none";

        const totalDramas = kdramaData.length;

        categoryButtons.innerHTML = `
            <button
                class="cat-btn"
                onclick="goHome()">
                ⬅️ Ana Menü
            </button>

            <h2>🎬 KDRAMA DÜNYASI</h2>

            <div class="stats-bar animate-in">
                📊 <b>${totalDramas}</b> Dizi Kayıtlı
            </div>
        `;

        const menus = [
            { id: "all", icon: "📺", title: "Tüm Diziler" },
            { id: "genre", icon: "🎭", title: "Türlere Göre" },
            { id: "actor", icon: "🌟", title: "Koreli Oyuncular" },
            { id: "year", icon: "📅", title: "Yıllara Göre" },
            { id: "fav", icon: "❤️", title: "Favoriler" }
        ];

        menus.forEach(menu => {

            const card = document.createElement("div");

            card.className = "menu-card animate-in";

            card.innerHTML = `
                <div style="font-size:3rem; margin-bottom:10px;">
                    ${menu.icon}
                </div>
                <h3>${menu.title}</h3>
            `;

            card.onclick = () => {
                if (menu.id === "all") window.showAllDramas();
                else if (menu.id === "genre") window.showGenresMenu();
                else if (menu.id === "actor") window.showActorsMenu();
                else if (menu.id === "year") window.showYearsMenu();
                else if (menu.id === "fav") window.showFavorites();
            };

            wordGrid.appendChild(card);
        });
    };

    // =====================================================
    // TÜM DİZİLER
    // =====================================================

    window.showAllDramas = function (searchTerm = "") {

        wordGrid.innerHTML = "";
        wordGrid.className = "category-grid-layout";
        searchWrapper.style.display = "flex";

        categoryButtons.innerHTML = `
            <button
                class="cat-btn"
                onclick="window.displayKdramas()">
                ⬅️ Geri Dön
            </button>
            <h2>📺 TÜM DİZİLER</h2>
        `;

        const term = searchTerm.toLowerCase().trim();

        kdramaData
            .filter(drama => {
                return (
                    (drama.title || "").toLowerCase().includes(term) ||
                    (drama.cast || "").toLowerCase().includes(term)
                );
            })
            .forEach(drama => {
                window.createDramaCard(drama);
            });
    };

    // =====================================================
    // TÜRLER
    // =====================================================

    window.showGenresMenu = function () {

        wordGrid.innerHTML = "";
        wordGrid.className = "category-grid-layout";
        searchWrapper.style.display = "none";

        categoryButtons.innerHTML = `
            <button
                class="cat-btn"
                onclick="window.displayKdramas()">
                ⬅️ Geri Dön
            </button>
            <h2>🎭 TÜRLER</h2>
        `;

        let genres = [];

        kdramaData.forEach(drama => {
            if (!drama.genre) return;
            genres.push(
                ...drama.genre.split(",").map(g => g.trim())
            );
        });

        [...new Set(genres)]
            .sort()
            .forEach(genre => {

                const card = document.createElement("div");

                card.className = "menu-card animate-in";

                card.innerHTML = `
                    <div style="font-size:2rem;">🎭</div>
                    <h3>${genre}</h3>
                `;

                card.onclick = () => {
                    window.showFilteredDramas(genre, "genre");
                };

                wordGrid.appendChild(card);
            });
    };

    // =====================================================
    // YILLAR
    // =====================================================

    window.showYearsMenu = function () {

        wordGrid.innerHTML = "";
        wordGrid.className = "category-grid-layout";
        searchWrapper.style.display = "none";

        categoryButtons.innerHTML = `
            <button
                class="cat-btn"
                onclick="window.displayKdramas()">
                ⬅️ Geri Dön
            </button>
            <h2>📅 YILLAR</h2>
        `;

        const years = [
            ...new Set(kdramaData.map(drama => drama.year))
        ].sort((a, b) => b - a);

        years.forEach(year => {

            const card = document.createElement("div");

            card.className = "menu-card animate-in";

            card.innerHTML = `
                <div style="font-size:2rem;">📅</div>
                <h3>${year}</h3>
            `;

            card.onclick = () => {
                window.showFilteredDramas(year, "year");
            };

            wordGrid.appendChild(card);
        });
    };

    // =====================================================
    // OYUNCULAR (HTML ve Resim Etiketi Düzeltildi)
    // =====================================================

    window.showActorsMenu = function (searchTerm = "") {

        wordGrid.innerHTML = "";
        wordGrid.className = "category-grid-layout";
        searchWrapper.style.display = "flex";

        categoryButtons.innerHTML = `
            <button
                class="cat-btn"
                onclick="window.displayKdramas()">
                ⬅️ Geri Dön
            </button>
            <h2>🌟 KORELİ OYUNCULAR</h2>
        `;

        function calculateAge(bday) {
            if (!bday) return "?";
            try {
                const parts = bday.split(" ");
                const year = Number(parts[parts.length - 1]);
                return new Date().getFullYear() - year;
            } catch {
                return "?";
            }
        }

        let allActors = [];

        kdramaData.forEach(drama => {
            if (!drama.cast) return;
            allActors.push(
                ...drama.cast.split(",").map(actor => actor.trim())
            );
        });

        const actorCounts = {};
        allActors.forEach(actor => {
            actorCounts[actor] = (actorCounts[actor] || 0) + 1;
        });

        const actorList = Object.keys(actorCounts).sort(
            (a, b) => actorCounts[b] - actorCounts[a]
        );

        const term = searchTerm.toLowerCase();

        actorList
            .filter(actor => actor.toLowerCase().includes(term))
            .forEach(actor => {

                const info = actorPhotos[actor] || {
                    photo: "https://via.placeholder.com/150",
                    bday: "Bilinmiyor"
                };

                const age = calculateAge(info.bday);
                const card = document.createElement("div");

                card.className = "menu-card actor-card animate-in";

                // Hatalı `${info.photo}actor-menu-photo` ifadesi düzeltildi:
                card.innerHTML = `
                    <img src="${info.photo}" class="actor-menu-photo" alt="${actor}">
                    <h3>${actor}</h3>
                    <p>🎂 ${info.bday}</p>
                    <p>(${age} Yaşında)</p>
                    <p>🎬 ${actorCounts[actor]} Dizi</p>
                `;

                card.onclick = () => {
                    window.showFilteredDramas(actor, "actor");
                };

                wordGrid.appendChild(card);
            });
    };

    // =====================================================
    // FİLTRELENMİŞ DİZİLER
    // =====================================================

    window.showFilteredDramas = function (value, type) {

        wordGrid.innerHTML = "";
        wordGrid.className = "category-grid-layout";
        searchWrapper.style.display = "none";

        categoryButtons.innerHTML = `
            <button
                class="cat-btn"
                onclick="window.displayKdramas()">
                ⬅️ Geri Dön
            </button>
            <h2>${value}</h2>
        `;

        kdramaData
            .filter(drama => {
                if (type === "year") return drama.year === value;
                if (type === "genre") return drama.genre && drama.genre.includes(value);
                if (type === "actor") return drama.cast && drama.cast.includes(value);
                return false;
            })
            .forEach(drama => {
                window.createDramaCard(drama);
            });
    };

    // =====================================================
    // DİZİ KARTI
    // =====================================================

    window.createDramaCard = function (drama) {

        const card = document.createElement("div");
        card.className = "kdrama-card animate-in";

        let favorites = JSON.parse(
            localStorage.getItem("kdramaFavs")
        ) || [];

        const isFav = favorites.includes(drama.title);
        const poster = drama.afis || "https://via.placeholder.com/300x450";

        card.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    <div class="poster-container">
                        <img src="${poster}" alt="${drama.title}" style="width:100%; height:100%; object-fit:cover;">
                        <button
                            class="fav-btn ${isFav ? "active" : ""}"
                            onclick="event.stopPropagation();window.toggleFavorite('${drama.title}')">
                            ${isFav ? "❤️" : "🤍"}
                        </button>
                    </div>
                    <div class="card-info">
                        <h3>${drama.title}</h3>
                    </div>
                </div>
                <div class="card-back">
                    <h3>${drama.title}</h3>
                    <p>${drama.ozet || ""}</p>
                    <p>⭐ ${drama.puan || "?"}</p>
                    <p>🎭 ${drama.genre || ""}</p>
                    <p>🎬 ${drama.cast || ""}</p>
                </div>
            </div>
        `;

        card.onclick = e => {
            if (!e.target.closest(".fav-btn")) {
                card.classList.toggle("is-flipped");
            }
        };

        wordGrid.appendChild(card);
    };

    // =====================================================
    // FAVORİLER
    // =====================================================

    window.showFavorites = function () {

        wordGrid.innerHTML = "";
        wordGrid.className = "category-grid-layout";
        searchWrapper.style.display = "none";

        categoryButtons.innerHTML = `
            <button
                class="cat-btn"
                onclick="window.displayKdramas()">
                ⬅️ Geri Dön
            </button>
            <h2>❤️ FAVORİLER</h2>
        `;

        const favorites = JSON.parse(
            localStorage.getItem("kdramaFavs")
        ) || [];

        if (!favorites.length) {
            wordGrid.innerHTML = `
                <div style="text-align:center; padding:50px; grid-column:1/-1;">
                    Henüz favori eklenmedi ❤️
                </div>
            `;
            return;
        }

        kdramaData
            .filter(drama => favorites.includes(drama.title))
            .forEach(drama => window.createDramaCard(drama));
    };

    // =====================================================
    // FAVORİ EKLE / ÇIKAR
    // =====================================================

    window.toggleFavorite = function(title) {

        let favorites = JSON.parse(
            localStorage.getItem("kdramaFavs")
        ) || [];

        if (favorites.includes(title)) {
            favorites = favorites.filter(item => item !== title);
        } else {
            favorites.push(title);
        }

        localStorage.setItem(
            "kdramaFavs",
            JSON.stringify(favorites)
        );

        const currentTitle = categoryButtons.querySelector("h2");
        if (!currentTitle) return;

        if (currentTitle.innerText === "❤️ FAVORİLER") {
            window.showFavorites();
        }
    };

    // =====================================================
    // ANA SAYFA
    // =====================================================

    window.goHome = function() {
        mainMenu.style.display = "block";
        searchWrapper.style.display = "none";
        wordGrid.innerHTML = "";
        wordGrid.className = "word-grid";
        categoryButtons.innerHTML = "";
        searchInput.value = "";
    };

    // =====================================================
    // RANDOM KELİMELER
    // =====================================================

    window.displayRandomWords = function() {

        wordGrid.innerHTML = "";
        wordGrid.className = "word-grid";

        categoryButtons.innerHTML = `
            <button
                class="cat-btn"
                onclick="goHome()">
                ⬅️ Ana Menü
            </button>
            <h2>🎲 HIZLI PRATİK</h2>
            <button
                class="cat-btn"
                onclick="window.displayRandomWords()">
                🔄 Yeniden Karıştır
            </button>
        `;

        let pool = [];

        for (const cat in allWords) {
            if (cat === "🇰🇷 HANGUL ALFABESİ") continue;
            pool.push(...allWords[cat]);
        }

        pool
            .sort(() => Math.random() - 0.5)
            .slice(0, 12)
            .forEach(item => {
                createCard(item);
            });
    };

    // =====================================================
    // KPOP
    // =====================================================

    window.displayKpop = function() {

        categoryButtons.innerHTML = `
            <button
                class="cat-btn"
                onclick="goHome()">
                ⬅️ Geri Dön
            </button>
            <h2>🎤 K-POP AREA</h2>
        `;

        wordGrid.innerHTML = `
            <div style="text-align:center; padding:40px; grid-column:1/-1;">
                <h2>🎤 K-POP</h2>
                <p style="margin-top:10px;">
                    Bu bölüm yakında eklenecek.
                </p>
            </div>
        `;
    };

    // =====================================================
    // ARAMA
    // =====================================================

    searchInput.addEventListener("input", e => {

        const value = e.target.value;
        const h2 = categoryButtons.querySelector("h2");

        if (!h2) return;

        const title = h2.innerText;

        if (title === "📺 TÜM DİZİLER") {
            window.showAllDramas(value);
            return;
        }

        if (title === "🌟 KORELİ OYUNCULAR") {
            window.showActorsMenu(value);
            return;
        }

        if (mainMenu.style.display === "none") {
            window.displayWords(value, title);
        }
    });

    // =====================================================
    // TEMA
    // =====================================================

    const themeToggle = document.getElementById("themeToggle");
    const currentTheme = localStorage.getItem("theme") || "light";

    document.documentElement.setAttribute("data-theme", currentTheme);
    themeToggle.textContent = currentTheme === "dark" ? "☀️" : "🌙";

    themeToggle.addEventListener("click", () => {
        const current = document.documentElement.getAttribute("data-theme");
        const next = current === "dark" ? "light" : "dark";

        document.documentElement.setAttribute("data-theme", next);
        localStorage.setItem("theme", next);
        themeToggle.textContent = next === "dark" ? "☀️" : "🌙";
    });

});

```
