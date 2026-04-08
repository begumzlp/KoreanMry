const allWords = {

"🇰🇷 HANGUL ALFABESİ": [
    // 1. ÜNLÜLER (Vowels)
    { "korece": "ㅏ", "okunus": "a", "turkce": "A", "ornek": "아", "ornekOkunus": "a", "ornekTr": "Bildiğimiz 'A' sesi.", "subCat": "Ünlüler" },
    { "korece": "ㅑ", "okunus": "ya", "turkce": "Ya", "ornek": "야구", "ornekOkunus": "ya-gu", "ornekTr": "'Ya' sesi çıkarır.", "subCat": "Ünlüler" },
    { "korece": "ㅓ", "okunus": "eo", "turkce": "O (Açık)", "ornek": "어머니", "ornekOkunus": "eo-meo-ni", "ornekTr": "A ve O arası açık bir ses.", "subCat": "Ünlüler" },
    { "korece": "ㅕ", "okunus": "yeo", "turkce": "Yeo", "ornek": "여자", "ornekOkunus": "yeo-ja", "ornekTr": "Açık bir 'Yeo' sesi.", "subCat": "Ünlüler" },
    { "korece": "ㅗ", "okunus": "o", "turkce": "O (Kapalı)", "ornek": "오이", "ornekOkunus": "o-i", "ornekTr": "Dudaklar yuvarlanarak söylenir.", "subCat": "Ünlüler" },
    { "korece": "ㅛ", "okunus": "yo", "turkce": "Yo", "ornek": "요리", "ornekOkunus": "yo-ri", "ornekTr": "Kapalı 'Yo' sesi.", "subCat": "Ünlüler" },
    { "korece": "ㅜ", "okunus": "u", "turkce": "U", "ornek": "우유", "ornekOkunus": "u-yu", "ornekTr": "Bildiğimiz 'U' sesi.", "subCat": "Ünlüler" },
    { "korece": "ㅠ", "okunus": "yu", "turkce": "Yu", "ornek": "유리", "ornekOkunus": "yu-ri", "ornekTr": "Bildiğimiz 'Yu' sesi.", "subCat": "Ünlüler" },
    { "korece": "ㅡ", "okunus": "eu", "turkce": "I", "ornek": "음식", "ornekOkunus": "eum-sik", "ornekTr": "Türkçedeki 'I' sesine yakındır.", "subCat": "Ünlüler" },
    { "korece": "ㅣ", "okunus": "i", "turkce": "İ", "ornek": "이", "ornekOkunus": "i", "ornekTr": "Bildiğimiz 'İ' sesi.", "subCat": "Ünlüler" },

    // 2. ÜNSÜZLER (Consonants)
    { "korece": "ㄱ", "okunus": "g/k", "turkce": "G/K", "ornek": "가구", "ornekOkunus": "ga-gu", "ornekTr": "Kelime başında hafif 'k' gibi duyulur.", "subCat": "Ünsüzler" },
    { "korece": "ㄴ", "okunus": "n", "turkce": "N", "ornek": "나비", "ornekOkunus": "na-bi", "ornekTr": "Bildiğimiz 'N' sesi.", "subCat": "Ünsüzler" },
    { "korece": "ㄷ", "okunus": "d/t", "turkce": "D/T", "ornek": "다리", "ornekOkunus": "da-ri", "ornekTr": "D ve T arası bir sestir.", "subCat": "Ünsüzler" },
    { "korece": "ㄹ", "okunus": "r/l", "turkce": "R/L", "ornek": "라디오", "ornekOkunus": "ra-di-o", "ornekTr": "Dil ucuyla söylenen hafif bir R.", "subCat": "Ünsüzler" },
    { "korece": "ㅁ", "okunus": "m", "turkce": "M", "ornek": "마음", "ornekOkunus": "ma-eum", "ornekTr": "Bildiğimiz 'M' sesi.", "subCat": "Ünsüzler" },
    { "korece": "ㅂ", "okunus": "b/p", "turkce": "B/P", "ornek": "바보", "ornekOkunus": "ba-bo", "ornekTr": "B ve P arası bir sestir.", "subCat": "Ünsüzler" },
    { "korece": "ㅅ", "okunus": "s", "turkce": "S", "ornek": "사과", "ornekOkunus": "sa-gwa", "ornekTr": "Bildiğimiz 'S' sesi.", "subCat": "Ünsüzler" },
    { "korece": "ㅇ", "okunus": "ng/sessiz", "turkce": "NG/Sessiz", "ornek": "안녕", "ornekOkunus": "an-nyeong", "ornekTr": "Başta okunmaz, sonda 'ng' olur.", "subCat": "Ünsüzler" },
    { "korece": "ㅈ", "okunus": "j", "turkce": "C/J", "ornek": "지도", "ornekOkunus": "ji-do", "ornekTr": "'C' sesine yakın bir 'J'.", "subCat": "Ünsüzler" },
    { "korece": "ㅊ", "okunus": "ch", "turkce": "Ç", "ornek": "차", "ornekOkunus": "cha", "ornekTr": "Sert bir 'Ç' sesi.", "subCat": "Ünsüzler" },
    { "korece": "ㅋ", "okunus": "kh", "turkce": "K (Sert)", "ornek": "커피", "ornekOkunus": "keo-phi", "ornekTr": "Nefesli, sert bir 'K'.", "subCat": "Ünsüzler" },
    { "korece": "ㅌ", "okunus": "th", "turkce": "T (Sert)", "ornek": "토마토", "ornekOkunus": "tho-ma-tho", "ornekTr": "Nefesli, sert bir 'T'.", "subCat": "Ünsüzler" },
    { "korece": "ㅍ", "okunus": "ph", "turkce": "P (Sert)", "ornek": "피아노", "ornekOkunus": "phi-a-no", "ornekTr": "Nefesli, sert bir 'P'.", "subCat": "Ünsüzler" },
    { "korece": "ㅎ", "okunus": "h", "turkce": "H", "ornek": "하늘", "ornekOkunus": "ha-neul", "ornekTr": "Bildiğimiz 'H' sesi.", "subCat": "Ünsüzler" },

    // 3. BİRLEŞİK HARFLER (Complex Letters)
    { "korece": "ㅐ", "okunus": "ae", "turkce": "E", "ornek": "새", "ornekOkunus": "sae", "ornekTr": "Türkçedeki 'E' sesine benzer.", "subCat": "Birleşik Harfler" },
    { "korece": "ㅔ", "okunus": "e", "turkce": "E", "ornek": "에너지", "ornekOkunus": "e-neo-ji", "ornekTr": "Kısa ve net bir 'E' sesi.", "subCat": "Birleşik Harfler" },
    { "korece": "ㅒ", "okunus": "yae", "turkce": "Ye", "ornek": "얘기", "ornekOkunus": "yae-gi", "ornekTr": "'Y' ve 'E' birleşimi.", "subCat": "Birleşik Harfler" },
    { "korece": "ㅖ", "okunus": "ye", "turkce": "Ye", "ornek": "예의", "ornekOkunus": "ye-ui", "ornekTr": "Bildiğimiz 'Ye' sesi.", "subCat": "Birleşik Harfler" },
    { "korece": "ㅘ", "okunus": "wa", "turkce": "Va/Wa", "ornek": "와인", "ornekOkunus": "wa-in", "ornekTr": "'O' ve 'A' hızlı birleşir: Wa.", "subCat": "Birleşik Harfler" },
    { "korece": "ㅝ", "okunus": "wo", "turkce": "Vo/Wo", "ornek": "원", "ornekOkunus": "won", "ornekTr": "'U' ve 'Eo' hızlı birleşir: Wo.", "subCat": "Birleşik Harfler" },
    { "korece": "ㅙ", "okunus": "wae", "turkce": "Ve/Wae", "ornek": "왜", "ornekOkunus": "wae", "ornekTr": "'Wa' ve 'E' birleşimi.", "subCat": "Birleşik Harfler" },
    { "korece": "ㅞ", "okunus": "we", "turkce": "Ve/We", "ornek": "웨딩", "ornekOkunus": "we-ding", "ornekTr": "'Wo' ve 'E' birleşimi.", "subCat": "Birleşik Harfler" },
    { "korece": "ㅚ", "okunus": "oe", "turkce": "Ve/Ö", "ornek": "외국", "ornekOkunus": "oe-guk", "ornekTr": "Aslında 'Ve' gibi okunur.", "subCat": "Birleşik Harfler" },
    { "korece": "ㅟ", "okunus": "wi", "turkce": "Vi/Wi", "ornek": "위", "ornekOkunus": "wi", "ornekTr": "Bildiğimiz 'Wi' (Üst demek).", "subCat": "Birleşik Harfler" },
    { "korece": "ㅢ", "okunus": "ui", "turkce": "Iy/Ui", "ornek": "의사", "ornekOkunus": "ui-sa", "ornekTr": "'I' ve 'İ' arası bir sestir.", "subCat": "Birleşik Harfler" },

    // 4. ÇİFT ÜNSÜZLER (Double Consonants)
    { "korece": "ㄲ", "okunus": "kk", "turkce": "K (Vurgulu)", "ornek": "꼬리", "ornekOkunus": "kko-ri", "ornekTr": "Gırtlaktan sert bir 'K'.", "subCat": "Birleşik Harfler" },
    { "korece": "ㄸ", "okunus": "tt", "turkce": "T (Vurgulu)", "ornek": "따뜻하다", "ornekOkunus": "tta-tteut-ha-da", "ornekTr": "Sert ve vurgulu bir 'T'.", "subCat": "Birleşik Harfler" },
    { "korece": "ㅃ", "okunus": "pp", "turkce": "P (Vurgulu)", "ornek": "빵", "ornekOkunus": "ppang", "ornekTr": "Sert ve vurgulu bir 'P'.", "subCat": "Birleşik Harfler" },
    { "korece": "ㅆ", "okunus": "ss", "turkce": "S (Vurgulu)", "ornek": "씨앗", "ornekOkunus": "ssi-at", "ornekTr": "Keskin ve vurgulu bir 'S'.", "subCat": "Birleşik Harfler" },
    { "korece": "ㅉ", "okunus": "jj", "turkce": "C (Vurgulu)", "ornek": "짜다", "ornekOkunus": "jja-da", "ornekTr": "Sert ve vurgulu bir 'C'.", "subCat": "Birleşik Harfler" }
],

"🍕 YEMEK VE İÇECEK": [

    { "korece": "밥 🍚", "okunus": "bap", "turkce": "yemek, pirinç", "ornek": "밥을 먹어요.", "ornekOkunus": "ba-beul meo-geo-yo", "ornekTr": "Yemek yiyorum. 🍚" },
    { "korece": "식사 🍴", "okunus": "sik-sa", "turkce": "öğün, yemek", "ornek": "식사 하셨어요?", "ornekOkunus": "sik-sa ha-syeot-seo-yo", "ornekTr": "Yemek yediniz mi? ✨" },
    { "korece": "저녁 🌆🍽️", "okunus": "jeo-nyeok", "turkce": "akşam yemeği", "ornek": "저녁을 요리해요.", "ornekOkunus": "jeo-nyeo-geul yo-ri-hae-yo", "ornekTr": "Akşam yemeği pişiriyorum. 🥘" },
    { "korece": "떡볶이 🌶️🍢", "okunus": "ddeok-bok-ki", "turkce": "tteokbokki", "ornek": "떡볶이가 매워요.", "ornekOkunus": "ddeok-bok-ki-ga mae-wo-yo", "ornekTr": "Tteokbokki acı. 🌶️" },
    { "korece": "라면 🍜", "okunus": "ra-myeon", "turkce": "ramyeon", "ornek": "라면을 좋아해요.", "ornekOkunus": "ra-myeo-neul jo-a-hae-yo", "ornekTr": "Ramyeon seviyorum. 🍜" },
    { "korece": "계란 🥚", "okunus": "gye-ran", "turkce": "yumurta", "ornek": "계란이 맛있어요.", "ornekOkunus": "gye-ra-ni ma-sit-seo-yo", "ornekTr": "Yumurta lezzetli. 🥚" },
    { "korece": "파스타 🍝", "okunus": "pa-seu-ta", "turkce": "makarna", "ornek": "파스타를 만들어요.", "ornekOkunus": "pa-seu-tha-reul man-deu-leo-yo", "ornekTr": "Makarna yapıyorum. 🍝" },
    { "korece": "고기 🥩", "okunus": "go-gi", "turkce": "et", "ornek": "고기를 구워요.", "ornekOkunus": "go-gi-reul gu-wo-yo", "ornekTr": "Et pişiriyorum. 🥩" },
    { "korece": "두부 🍥", "okunus": "du-bu", "turkce": "tofu", "ornek": "두부는 건강해요.", "ornekOkunus": "du-bu-neun geon-gang-hae-yo", "ornekTr": "Tofu sağlıklıdır. 🍥" },
    { "korece": "김치 🥬", "okunus": "gim-chi", "turkce": "kimchi", "ornek": "김치를 먹어봐요.", "ornekOkunus": "gim-chi-reul meo-geo-bwa-yo", "ornekTr": "Kimchi'yi dene. 🥬" },
    { "korece": "음식 🍲", "okunus": "eum-sik", "turkce": "yemek", "ornek": "한국 음식을 좋아해요.", "ornekOkunus": "han-guk eum-si-geul jo-a-hae-yo", "ornekTr": "Kore yemeklerini seviyorum. 🍲" },
    { "korece": "물 🫗", "okunus": "mul", "turkce": "su", "ornek": "물 좀 주세요.", "ornekOkunus": "mul jom ju-se-yo", "ornekTr": "Lütfen biraz su verin. 💧" },
    { "korece": "차 🍵", "okunus": "cha", "turkce": "çay", "ornek": "녹차를 마셔요.", "ornekOkunus": "nok-cha-reul ma-syeo-yo", "ornekTr": "Yeşil çay içiyorum. 🍵" },
    { "korece": "커피 ☕️", "okunus": "keo-pi", "turkce": "kahve", "ornek": "커피가 써요.", "ornekOkunus": "keo-phi-ga sseo-yo", "ornekTr": "Kahve acı. ☕" },
    { "korece": "주스 🧃", "okunus": "ju-seu", "turkce": "meyve suyu", "ornek": "오렌지 주스예요.", "ornekOkunus": "o-ren-ji ju-seu-ye-yo", "ornekTr": "Portakal suyudur. 🧃" },
    { "korece": "우유 🥛", "okunus": "u-yu", "turkce": "süt", "ornek": "우유를 사요.", "ornekOkunus": "u-yu-reul sa-yo", "ornekTr": "Süt satın alıyorum. 🥛" },
    { "korece": "술 🍷", "okunus": "sul", "turkce": "içki", "ornek": "술을 안 마셔요.", "ornekOkunus": "su-reul an ma-syeo-yo", "ornekTr": "İçki içmiyorum. 🍷" },
    { "korece": "소주 🍶", "okunus": "so-ju", "turkce": "soju", "ornek": "소주가 유명해요.", "ornekOkunus": "so-ju-ga yu-myeong-hae-yo", "ornekTr": "Soju ünlüdür. 🍶" },
    { "korece": "맥주 🍺", "okunus": "maek-ju", "turkce": "bira", "ornek": "시원한 맥주예요.", "ornekOkunus": "si-won-han maek-ju-ye-yo", "ornekTr": "Soğuk bir bira. 🍺" },
    { "korece": "콜라 🥤", "okunus": "kol-la", "turkce": "kola", "ornek": "콜라를 마셔요.", "ornekOkunus": "kol-la-reul ma-syeo-yo", "ornekTr": "Kola içiyorum. 🥤" },
    { "korece": "사이다 🫧", "okunus": "sa-i-da", "turkce": "gazoz", "ornek": "사이다가 달아요.", "ornekOkunus": "sa-i-da-ga da-ra-yo", "ornekTr": "Gazoz tatlıdır. 🫧" },
    { "korece": "밀크티 🧋", "okunus": "mil-keu-ti", "turkce": "milk tea", "ornek": "밀크티를 주문해요.", "ornekOkunus": "mil-keu-thi-reul ju-mun-hae-yo", "ornekTr": "Milk tea sipariş ediyorum. 🧋" },
    { "korece": "핫초코 🍫☕️", "okunus": "hat-cho-ko", "turkce": "sıcak çikolata", "ornek": "핫초코가 따뜻해요.", "ornekOkunus": "hat-cho-kho-ga dda-tteut-hae-yo", "ornekTr": "Sıcak çikolata ılık. ☕" },
    { "korece": "스무디 🍓🥤", "okunus": "seu-mu-di", "turkce": "smoothie", "ornek": "딸기 스무디예요.", "ornekOkunus": "ttal-gi seu-mu-di-ye-yo", "ornekTr": "Çilekli smoothie. 🍓" },
    { "korece": "탄산음료 🥤", "okunus": "tan-san-eum-ryo", "turkce": "gazlı içecek", "ornek": "탄산음료가 톡 쏴요.", "ornekOkunus": "tan-san-eum-ryo-ga thok sswa-yo", "ornekTr": "Gazlı içecek köpürüyor. 🥤" },
    { "korece": "요구르트", "okunus": "yo-gu-reu-teu", "turkce": "yoğurt içeceği", "ornek": "요구르트를 마셔요.", "ornekOkunus": "yo-gu-reu-theu-reul ma-syeo-yo", "ornekTr": "Yoğurt içeceği içiyorum. ✨" },
    { "korece": "식당 🍽️", "okunus": "sik-dang", "turkce": "restoran", "ornek": "식당에 가요.", "ornekOkunus": "sik-dang-e ga-yo", "ornekTr": "Restorana gidiyorum. 🍽️" },
    { "korece": "맛집 😋", "okunus": "mat-jip", "turkce": "lezzetli mekan", "ornek": "여기가 맛집이에요.", "ornekOkunus": "yeo-gi-ga mat-ji-bi-ye-yo", "ornekTr": "Burası lezzetli bir mekan. 😋" },
    { "korece": "빵집 🍩", "okunus": "ppang-jip", "turkce": "pastane", "ornek": "빵집에 빵이 많아요.", "ornekOkunus": "ppang-ji-be ppang-i ma-na-yo", "ornekTr": "Pastanede çok ekmek var. 🍩" },
    { "korece": "커피숍 / 카페 ☕", "okunus": "keo-pi-syop", "turkce": "kafe", "ornek": "카페에서 만나요.", "ornekOkunus": "kha-phe-e-seo man-na-yo", "ornekTr": "Kafede buluşalım. ☕" }
],

"🥨 TATLI VE ATIŞTIRMALIK": [

    { "korece": "케이크 🍰", "okunus": "ke-i-keu", "turkce": "kek, pasta", "ornek": "생일 케이크를 사요.", "ornekOkunus": "saeng-il khe-i-kheu-reul sa-yo", "ornekTr": "Doğum günü pastası satın alıyorum. 🎂" },
    { "korece": "사탕 🍬", "okunus": "sa-tang", "turkce": "şeker", "ornek": "사탕이 정말 달아요.", "ornekOkunus": "sa-thang-i jeong-mal da-ra-yo", "ornekTr": "Şeker gerçekten çok tatlı. 🍬" },
    { "korece": "초콜릿 🍫", "okunus": "cho-kol-lit", "turkce": "çikolata", "ornek": "초콜릿을 좋아해요.", "ornekOkunus": "cho-kol-li-seul jo-a-hae-yo", "ornekTr": "Çikolata seviyorum. 🍫" },
    { "korece": "아이스크림 🍦", "okunus": "a-i-seu-keu-rim", "turkce": "dondurma", "ornek": "아이스크림을 먹을래요?", "ornekOkunus": "a-i-seu-kheu-ri-meul meo-geul-lae-yo", "ornekTr": "Dondurma yemek ister misin? 🍦" },
    { "korece": "과자 🍪", "okunus": "gwa-ja", "turkce": "atıştırmalık", "ornek": "이 과자가 바삭해요.", "ornekOkunus": "i gwa-ja-ga ba-sak-hae-yo", "ornekTr": "Bu atıştırmalık gevrek. 🍪" },
    { "korece": "간식 🍩", "okunus": "gan-sik", "turkce": "atıştırmalık", "ornek": "간식을 준비해요.", "ornekOkunus": "gan-si-geul jun-bi-hae-yo", "ornekTr": "Atıştırmalık hazırlıyorum. 🍩" },
    { "korece": "팝콘 🍿", "okunus": "pap-khon", "turkce": "popcorn", "ornek": "팝콘이 고소해요.", "ornekOkunus": "pap-kho-ni go-so-hae-yo", "ornekTr": "Popcorn lezzetli/kavrulmuş gibi. 🍿" }

],

"🍇 MEYVE VE SEBZE": [

    { "korece": "과일", "okunus": "gwa-il", "turkce": "meyve", "ornek": "과일이 아주 신선해요.", "ornekOkunus": "gwa-i-ri a-ju sin-seon-hae-yo", "ornekTr": "Meyve çok taze. 🍓" },
    { "korece": "딸기 🍓", "okunus": "ddal-gi", "turkce": "çilek", "ornek": "딸기를 씻어요.", "ornekOkunus": "ttal-gi-reul ssi-seo-yo", "ornekTr": "Çilekleri yıkıyorum. 🍓" },
    { "korece": "사과 🍎", "okunus": "sa-gwa", "turkce": "elma", "ornek": "사과가 달콤해요.", "ornekOkunus": "sa-gwa-ga dal-khom-hae-yo", "ornekTr": "Elma tatlı. 🍎" },
    { "korece": "귤 🍊", "okunus": "gyul", "turkce": "mandalina", "ornek": "귤을 까먹어요.", "ornekOkunus": "gyu-reul kka-meo-geo-yo", "ornekTr": "Mandalina soyup yiyorum. 🍊" },
    { "korece": "복숭아 🍑", "okunus": "bok-sung-a", "turkce": "şeftali", "ornek": "복숭아가 맛있어요.", "ornekOkunus": "bok-sung-a-ga ma-sit-seo-yo", "ornekTr": "Şeftali lezzetli. 🍑" },
    { "korece": "바나나 🍌", "okunus": "ba-na-na", "turkce": "muz", "ornek": "바나나를 사요.", "ornekOkunus": "ba-na-na-reul sa-yo", "ornekTr": "Muz satın alıyorum. 🍌" },
    { "korece": "포도 🍇", "okunus": "po-do", "turkce": "üzüm", "ornek": "포도를 씻어주세요.", "ornekOkunus": "pho-do-reul ssi-seo-ju-se-yo", "ornekTr": "Lütfen üzümleri yıkayın. 🍇" },
    { "korece": "수박 🍉", "okunus": "su-bak", "turkce": "karpuz", "ornek": "수박을 잘라요.", "ornekOkunus": "su-ba-geul jal-la-yo", "ornekTr": "Karpuzu kesiyorum. 🍉" },
    { "korece": "오렌지 🍊", "okunus": "o-ren-ji", "turkce": "portakal", "ornek": "오렌지 주스예요.", "ornekOkunus": "o-ren-ji ju-seu-ye-yo", "ornekTr": "Portakal suyudur. 🍊" },
    { "korece": "레몬 🍋", "okunus": "le-mon", "turkce": "limon", "ornek": "레몬이 아주셔요.", "ornekOkunus": "le-mo-ni a-ju-syeo-yo", "ornekTr": "Limon çok ekşi. 🍋" },
    { "korece": "야채", "okunus": "ya-chae", "turkce": "sebze", "ornek": "야채를 많이 먹어요.", "ornekOkunus": "ya-chae-reul ma-ni meo-geo-yo", "ornekTr": "Çok sebze yiyorum. 🥗" },
    { "korece": "당근 🥕", "okunus": "dang-geun", "turkce": "havuç", "ornek": "당근이 주황색이에요.", "ornekOkunus": "dang-geu-ni ju-hwang-sae-gi-ye-yo", "ornekTr": "Havuç turuncu renklidir. 🥕" },
    { "korece": "오이 🥒", "okunus": "o-i", "turkce": "salatalık", "ornek": "오이가 아삭해요.", "ornekOkunus": "o-i-ga a-sak-hae-yo", "ornekTr": "Salatalık kıtır kıtır. 🥒" },
    { "korece": "양파 🧅", "okunus": "yang-pa", "turkce": "soğan", "ornek": "양파를 썰어요.", "ornekOkunus": "yang-pha-reul sseo-leo-yo", "ornekTr": "Soğan doğruyorum. 🧅" },
    { "korece": "마늘 🧄", "okunus": "ma-neul", "turkce": "sarımsak", "ornek": "마늘 향이 강해요.", "ornekOkunus": "ma-neul hya-ngi gang-hae-yo", "ornekTr": "Sarımsak kokusu güçlü. 🧄" },
    { "korece": "감자 🥔", "okunus": "gam-ja", "turkce": "patates", "ornek": "감자를 굽고 있어요.", "ornekOkunus": "gam-ja-reul gup-go it-seo-yo", "ornekTr": "Patatesleri fırınlıyorum. 🥔" },
    { "korece": "고구마 🍠", "okunus": "go-gu-ma", "turkce": "tatlı patates", "ornek": "고구마가 달아요.", "ornekOkunus": "go-gu-ma-ga da-ra-yo", "ornekTr": "Tatlı patates tatlıdır. 🍠" },
    { "korece": "브로콜리 🥦", "okunus": "beu-ro-kol-li", "turkce": "brokoli", "ornek": "브로콜리를 삶아요.", "ornekOkunus": "beu-ro-kol-li-reul sal-ma-yo", "ornekTr": "Brokoliyi haşlıyorum. 🥦" },
    { "korece": "상추 🥬", "okunus": "sang-chu", "turkce": "marul", "ornek": "상추에 싸 먹어요.", "ornekOkunus": "sang-chu-e ssa meo-geo-yo", "ornekTr": "Marula sarıp yiyorum. 🥬" },
    { "korece": "토마토 🍅", "okunus": "to-ma-to", "turkce": "domates", "ornek": "토마토가 빨개요.", "ornekOkunus": "tho-ma-tho-ga ppal-gae-yo", "ornekTr": "Domates kırmızıdır. 🍅" },
    { "korece": "버섯 🍄", "okunus": "beo-seot", "turkce": "mantar", "ornek": "버섯이 쫄깃해요.", "ornekOkunus": "beo-seo-si jjol-git-hae-yo", "ornekTr": "Mantar çiğnenebilir/esnek. 🍄" }

],

"🏠 EV VE MUTFAK EŞYALARI": [

    { "korece": "집 🏠", "okunus": "jip", "turkce": "ev", "ornek": "우리 집은 따뜻해요.", "ornekOkunus": "u-ri ji-beun tta-tteut-hae-yo", "ornekTr": "Evimiz sıcacıktır. 🏠" },
    { "korece": "방 🚪", "okunus": "bang", "turkce": "oda", "ornek": "내 방은 깨끗해요.", "ornekOkunus": "nae ba-ngeun kkae-kkeut-hae-yo", "ornekTr": "Odam temizdir. ✨" },
    { "korece": "크기 📏", "okunus": "keu-gi", "turkce": "boyut", "ornek": "방 크기가 작아요.", "ornekOkunus": "bang kheu-gi-ga ja-ga-yo", "ornekTr": "Odanın boyutu küçük. 📏" },
    { "korece": "부엌 🍳", "okunus": "bu-eok", "turkce": "mutfak", "ornek": "부엌에서 요리해요.", "ornekOkunus": "bu-eo-ge-seo yo-ri-hae-yo", "ornekTr": "Mutfakta yemek pişiriyorum. 🍳" },
    { "korece": "냉장고 🧊🧯", "okunus": "naeng-jang-go", "turkce": "buzdolabı", "ornek": "냉장고에 물이 있어요.", "ornekOkunus": "naeng-jang-go-e mu-ri it-seo-yo", "ornekTr": "Buzdolabında su var. 🧊" },
    { "korece": "침실 🛏️", "okunus": "chim-sil", "turkce": "yatak odası", "ornek": "침실이 아늑해요.", "ornekOkunus": "chim-si-ri a-neuk-hae-yo", "ornekTr": "Yatak odası huzurlu/rahat. 🛏️" },
    { "korece": "침대 🛏️", "okunus": "chim-dae", "turkce": "yatak", "ornek": "침대가 아주 넓어요.", "ornekOkunus": "chim-dae-ga a-ju neol-beo-yo", "ornekTr": "Yatak çok geniş. 🛌" },
    { "korece": "거실 🛋️", "okunus": "geo-sil", "turkce": "oturma odası", "ornek": "거실에서 쉬어요.", "ornekOkunus": "geo-si-re-seo swi-eo-yo", "ornekTr": "Oturma odasında dinleniyorum. 🛋️" },
    { "korece": "소파 🛋️", "okunus": "so-pha", "turkce": "kanepe", "ornek": "소파가 편안해요.", "ornekOkunus": "so-pha-ga phyeon-an-hae-yo", "ornekTr": "Kanepe rahattır. 😊" },
    { "korece": "텔레비전 📺", "okunus": "thel-le-bi-jeon", "turkce": "televizyon", "ornek": "텔레비전을 봐요.", "ornekOkunus": "thel-le-bi-jeo-neul bwa-yo", "ornekTr": "Televizyon izliyorum. 📺" },
    { "korece": "에어컨 ❄️", "okunus": "e-eo-khon", "turkce": "air conditioner", "ornek": "에어컨을 켜요.", "ornekOkunus": "e-eo-kho-neul khyeo-yo", "ornekTr": "Klimayı açıyorum. ❄️" },
    { "korece": "책상 🧑‍💻📚", "okunus": "chaek-sang", "turkce": "çalışma masası", "ornek": "책상에서 공부해요.", "ornekOkunus": "chaek-sa-nge-seo gong-bu-hae-yo", "ornekTr": "Masada ders çalışıyorum. 📚" },
    { "korece": "의자 🪑", "okunus": "ui-ja", "turkce": "sandalye", "ornek": "의자에 앉으세요.", "ornekOkunus": "ui-ja-e an-jeu-se-yo", "ornekTr": "Sandalyeye oturun lütfen. 🪑" },
    { "korece": "화장실 🚽", "okunus": "hwa-jang-sil", "turkce": "tuvalet", "ornek": "화장실이 어디예요?", "ornekOkunus": "hwa-jang-si-ri eo-di-ye-yo", "ornekTr": "Tuvalet nerede? 🚽" },
    { "korece": "샤워기 🚿", "okunus": "sya-wo-gi", "turkce": "duş başlığı", "ornek": "샤워기가 고장 났어요.", "ornekOkunus": "sya-wo-gi-ga go-jang nat-seo-yo", "ornekTr": "Duş başlığı bozuldu. 🚿" },
    { "korece": "쓰레기통 🗑️", "okunus": "sseu-re-gi-thong", "turkce": "çöp kutusu", "ornek": "쓰레기통을 비워요.", "ornekOkunus": "sseu-re-gi-tho-neul bi-wo-yo", "ornekTr": "Çöp kutusunu boşaltıyorum. 🗑️" },
    { "korece": "수건 🧻", "okunus": "su-geon", "turkce": "havlu", "ornek": "수건이 부드러워요.", "ornekOkunus": "su-geo-ni bu-deu-reo-wo-yo", "ornekTr": "Havlu yumuşacık. 🧻" },
    { "korece": "창문 🪟", "okunus": "chang-mun", "turkce": "pencere", "ornek": "창문을 열어주세요.", "ornekOkunus": "chang-mu-neul yeol-eo-ju-se-yo", "ornekTr": "Pencereyi açar mısın? 🪟" },
    { "korece": "커튼 🪟🩵", "okunus": "kheo-theun", "turkce": "perde", "ornek": "커튼이 예뻐요.", "ornekOkunus": "kheo-theu-ni ye-ppeo-yo", "ornekTr": "Perde güzel. 🎀" },
    { "korece": "전등 💡", "okunus": "jeon-deung", "turkce": "lamba, ışık", "ornek": "전등을 꺼요.", "ornekOkunus": "jeon-deu-neul kkeo-yo", "ornekTr": "Lambayı kapatıyorum. 💡" },
    { "korece": "벽 🧱", "okunus": "byeok", "turkce": "duvar", "ornek": "벽이 하얀색이에요.", "ornekOkunus": "byeo-gi ha-yan-sae-gi-ye-yo", "ornekTr": "Duvar beyaz renklidir. 🧱" },
    { "korece": "바닥 🪨", "okunus": "ba-dak", "turkce": "zemin, yer", "ornek": "바닥이 차가워요.", "ornekOkunus": "ba-da-gi cha-ga-wo-yo", "ornekTr": "Zemin soğuk. ❄️" },
    { "korece": "아파트 🏢", "okunus": "a-pha-theu", "turkce": "apartman", "ornek": "아파트에 살아요.", "ornekOkunus": "a-pha-theu-e sa-ra-yo", "ornekTr": "Apartmanda yaşıyorum. 🏢" },
    { "korece": "마당 🪴", "okunus": "ma-dang", "turkce": "bahçe", "ornek": "마당에 꽃이 많아요.", "ornekOkunus": "ma-da-nge kkot-i ma-na-yo", "ornekTr": "Bahçede çok çiçek var. 🌸" },
    { "korece": "베란다 🌇", "okunus": "be-ran-da", "turkce": "balkon", "ornek": "베란다에서 커피를 마셔요.", "ornekOkunus": "be-ran-da-e-seo kheo-phi-reul ma-syeo-yo", "ornekTr": "Balkonda kahve içiyorum. ☕" },
    { "korece": "동네 🏘️", "okunus": "dong-ne", "turkce": "mahalle", "ornek": "조용한 동네예요.", "ornekOkunus": "jo-yong-han dong-ne-ye-yo", "ornekTr": "Sessiz bir mahalle. 🏘️" },
    { "korece": "잔 🥛", "okunus": "jan", "turkce": "bardak", "ornek": "물 한 잔 주세요.", "ornekOkunus": "mul han jan ju-se-yo", "ornekTr": "Bir bardak su verin lütfen. 🥛" },
    { "korece": "접시 🍽️", "okunus": "jeop-si", "turkce": "tabak", "ornek": "접시가 깨졌어요.", "ornekOkunus": "jeop-si-ga kkae-jyeot-seo-yo", "ornekTr": "Tabak kırıldı. 🍽️" },
    { "korece": "컵", "okunus": "keop", "turkce": "kupa, bardak", "ornek": "커피 컵이에요.", "ornekOkunus": "kheo-phi kheop-i-ye-yo", "ornekTr": "Kahve kupasıdır. ☕" },
    { "korece": "수저 🍴🥄", "okunus": "su-jeo", "turkce": "kaşık ve çubuklar", "ornek": "수저를 놓아요.", "ornekOkunus": "su-jeo-reul no-a-yo", "ornekTr": "Kaşık ve çubukları koyuyorum. 🥢" },
    { "korece": "냄비", "okunus": "naem-bi", "turkce": "tencere", "ornek": "냄비가 뜨거워요.", "ornekOkunus": "naem-bi-ga tteu-geo-wo-yo", "ornekTr": "Tencere sıcak. 🔥" },
    { "korece": "포크 🍴", "okunus": "pho-keu", "turkce": "çatal", "ornek": "포크를 사용해요.", "ornekOkunus": "pho-kheu-reul sa-yong-hae-yo", "ornekTr": "Çatal kullanıyorum. 🍴" },
    { "korece": "프라이팬 🍳", "okunus": "pheu-ra-i-phaen", "turkce": "tava", "ornek": "프라이팬에 계란을 구워요.", "ornekOkunus": "pheu-ra-i-phae-ne gye-ra-neul gu-wo-yo", "ornekTr": "Tavada yumurta pişiriyorum. 🍳" },
    { "korece": "칼 🔪", "okunus": "khal", "turkce": "bıçak", "ornek": "칼로 고기를 잘라요.", "ornekOkunus": "khal-lo go-gi-reul jal-la-yo", "ornekTr": "Bıçakla et kesiyorum. 🔪" },
    { "korece": "도마 ⬜️🔪", "okunus": "do-ma", "turkce": "kesme tahtası", "ornek": "도마 위에서 채소를 썰어요.", "ornekOkunus": "do-ma wi-e-seo chae-so-reul sseo-leo-yo", "ornekTr": "Kesme tahtasında sebze doğruyorum. 🥗" },
    { "korece": "전자레인지 ⚡️", "okunus": "jeon-ja-re-in-ji", "turkce": "mikrodalga fırın", "ornek": "전자레인지로 데워요.", "ornekOkunus": "jeon-ja-re-in-ji-ro de-wo-yo", "ornekTr": "Mikrodalgada ısıtıyorum. ⚡" },
    { "korece": "밥솥 🍚", "okunus": "bap-sot", "turkce": "pilav pişirici", "ornek": "밥솥에 밥이 있어요.", "ornekOkunus": "bap-so-the ba-bi it-seo-yo", "ornekTr": "Pilav pişiricide pilav var. 🍚" },
    { "korece": "믹서기 ⚙️", "okunus": "mik-seo-gi", "turkce": "blender", "ornek": "믹서기로 주스를 만들어요.", "ornekOkunus": "mik-seo-gi-ro ju-seu-reul man-deu-leo-yo", "ornekTr": "Blenderla meyve suyu yapıyorum. 🧃" },
    { "korece": "오븐 🔥", "okunus": "o-beun", "turkce": "fırın", "ornek": "오븐에서 쿠키를 구워요.", "ornekOkunus": "o-beu-ne-seo khu-khi-reul gu-wo-yo", "ornekTr": "Fırında kurabiye pişiriyorum. 🍪" },
    { "korece": "그릇 🥣", "okunus": "geu-reut", "turkce": "kâse", "ornek": "국그릇이 필요해요.", "ornekOkunus": "guk-geu-reu-si phi-ryo-hae-yo", "ornekTr": "Çorba kâsesi lazım. 🥣" },
    { "korece": "식탁 🍽️🪑", "okunus": "sik-thak", "turkce": "yemek masası", "ornek": "식탁에 앉아요.", "ornekOkunus": "sik-tha-ge an-ja-yo", "ornekTr": "Yemek masasına oturuyorum. 🍽️" },
    { "korece": "행주 🧻", "okunus": "haeng-ju", "turkce": "mutfak bezi", "ornek": "행주로 식탁을 닦아요.", "ornekOkunus": "haeng-ju-ro sik-tha-geul dda-kka-yo", "ornekTr": "Mutfak beziyle masayı siliyorum. 🧻" },
    { "korece": "병 🍾", "okunus": "byeong", "turkce": "şişe", "ornek": "병이 무거워요.", "ornekOkunus": "byeo-ngi mu-geo-wo-yo", "ornekTr": "Şişe ağır. 🍾" },
    { "korece": "뚜껑 🛑", "okunus": "ddu-kkeong", "turkce": "kapak", "ornek": "뚜껑을 닫아주세요.", "ornekOkunus": "ddu-kkeo-ngeul da-da-ju-se-yo", "ornekTr": "Kapağı kapatın lütfen. 🛑" }

],

"🧍‍♀️ VÜCUT VE SAĞLIK": [
    { "korece": "손 🖐️", "okunus": "son", "turkce": "el", "ornek": "손을 씻어요.", "ornekOkunus": "so-neul ssi-seo-yo", "ornekTr": "Ellerimi yıkıyorum. 🧼" },
    { "korece": "손가락 👆", "okunus": "son-ga-rak", "turkce": "parmak", "ornek": "손가락이 길어요.", "ornekOkunus": "son-ga-ra-gi gi-reo-yo", "ornekTr": "Parmakları uzun. 👆" },
    { "korece": "팔 💪", "okunus": "phal", "turkce": "kol", "ornek": "팔이 아파요.", "ornekOkunus": "pha-ri a-pha-yo", "ornekTr": "Kolum ağrıyor. 💪" },
    { "korece": "다리 🦵", "okunus": "da-ri", "turkce": "bacak", "ornek": "다리가 길어요.", "ornekOkunus": "da-ri-ga gi-reo-yo", "ornekTr": "Bacakları uzun. 🦵" },
    { "korece": "발 🦶", "okunus": "bal", "turkce": "ayak", "ornek": "발이 커요.", "ornekOkunus": "ba-ri kheo-yo", "ornekTr": "Ayakları büyük. 🦶" },
    { "korece": "발가락 🦶🏻", "okunus": "bal-ga-rak", "turkce": "ayak parmağı", "ornek": "발가락을 다쳤어요.", "ornekOkunus": "bal-ga-ra-geul da-chyeot-seo-yo", "ornekTr": "Ayak parmağımı incittim. 🩹" },
    { "korece": "어깨 🤸‍♂️", "okunus": "eo-kke", "turkce": "omuz", "ornek": "어깨가 넓어요.", "ornekOkunus": "eo-kke-ga neol-beo-yo", "ornekTr": "Omuzları geniş. 💪" },
    { "korece": "허리 🦵", "okunus": "heo-ri", "turkce": "bel", "ornek": "허리가 날씬해요.", "ornekOkunus": "heo-ri-ga nal-ssin-hae-yo", "ornekTr": "Beli ince. ✨" },
    { "korece": "등 🦴", "okunus": "deung", "turkce": "sırt", "ornek": "등이 가려워요.", "ornekOkunus": "deu-ngi ga-ryeo-wo-yo", "ornekTr": "Sırtım kaşınıyor. 🦴" },
    { "korece": "가슴 💓", "okunus": "ga-seum", "turkce": "göğüs", "ornek": "가슴이 두근거려요.", "ornekOkunus": "ga-seu-mi du-geun-geo-ryeo-yo", "ornekTr": "Kalbim (göğsüm) küt küt atıyor. 💓" },
    { "korece": "배 🤰", "okunus": "bae", "turkce": "karın", "ornek": "배가 고파요.", "ornekOkunus": "bae-ga go-pha-yo", "ornekTr": "Karnım aç. 😋" },
    { "korece": "심장 🫀", "okunus": "sim-jang", "turkce": "kalp", "ornek": "심장이 뛰어요.", "ornekOkunus": "sim-ja-ngi ttwi-eo-yo", "ornekTr": "Kalbim atıyor. 🫀" },
    { "korece": "목 🦒", "okunus": "mok", "turkce": "boyun", "ornek": "목이 길어요.", "ornekOkunus": "mo-gi gi-reo-yo", "ornekTr": "Boynu uzun. 🦒" },
    { "korece": "무릎 🦵🏻", "okunus": "mu-reup", "turkce": "diz", "ornek": "무릎을 꿇어요.", "ornekOkunus": "mu-reu-peul kkul-eo-yo", "ornekTr": "Diz çöküyorum. 🦵" },
    { "korece": "발뒤꿈치 👣", "okunus": "bal-dwi-kkum-chi", "turkce": "topuk", "ornek": "발뒤꿈치가 아파요.", "ornekOkunus": "bal-dwi-kkum-chi-ga a-pha-yo", "ornekTr": "Topuğum ağrıyor. 👣" },
    { "korece": "손목 ⌚", "okunus": "son-mok", "turkce": "bilek", "ornek": "손목시계를 차요.", "ornekOkunus": "son-mok-si-gye-reul cha-yo", "ornekTr": "Kol saati takıyorum. ⌚" },
    { "korece": "허벅지 🦵", "okunus": "heo-beok-ji", "turkce": "uyluk", "ornek": "허벅지 근육이 많아요.", "ornekOkunus": "heo-beok-ji geun-yu-gi ma-na-yo", "ornekTr": "Uyluk kası çok. 🦵" },
    { "korece": "팔꿈치 💪", "okunus": "phal-kkum-chi", "turkce": "dirsek", "ornek": "팔꿈치를 다쳤어요.", "ornekOkunus": "phal-kkum-chi-reul da-chyeot-seo-yo", "ornekTr": "Dirseğimi incittim. 💪" },
    { "korece": "손톱 💅", "okunus": "son-thop", "turkce": "tırnak", "ornek": "손톱을 깎아요.", "ornekOkunus": "son-tho-peul kka-kka-yo", "ornekTr": "Tırnaklarımı kesiyorum. 💅" },
    { "korece": "머리 🤯", "okunus": "meo-ri", "turkce": "kafa, baş", "ornek": "머리가 아파요.", "ornekOkunus": "meo-ri-ga a-pha-yo", "ornekTr": "Başım ağrıyor. 🤯" },
    { "korece": "얼굴 🙂", "okunus": "eol-gul", "turkce": "yüz", "ornek": "얼굴을 씻어요.", "ornekOkunus": "eol-gu-reul ssi-seo-yo", "ornekTr": "Yüzümü yıkıyorum. 🙂" },
    { "korece": "눈 👀", "okunus": "nun", "turkce": "göz", "ornek": "눈이 커요.", "ornekOkunus": "nu-ni kheo-yo", "ornekTr": "Gözleri büyük. 👀" },
    { "korece": "코 👃", "okunus": "kho", "turkce": "burun", "ornek": "코가 높아요.", "ornekOkunus": "kho-ga no-pha-yo", "ornekTr": "Burnu yüksek (dik). 👃" },
    { "korece": "입 👄", "okunus": "ip", "turkce": "ağız", "ornek": "입을 벌려요.", "ornekOkunus": "i-beul beol-lyeo-yo", "ornekTr": "Ağzını açıyor. 👄" },
    { "korece": "귀 👂", "okunus": "gwi", "turkce": "kulak", "ornek": "귀가 밝아요.", "ornekOkunus": "gwi-ga bal-ga-yo", "ornekTr": "Kulağı keskin (iyi duyuyor). 👂" },
    { "korece": "이 🦷", "okunus": "i", "turkce": "diş", "ornek": "이를 닦아요.", "ornekOkunus": "i-reul dda-kka-yo", "ornekTr": "Dişlerimi fırçalıyorum. 🦷" },
    { "korece": "혀 👅", "okunus": "hyeo", "turkce": "dil", "ornek": "혀가 짧아요.", "ornekOkunus": "hyeo-ga jjal-ba-yo", "ornekTr": "Dili kısa. 👅" },
    { "korece": "머리카락 💇‍♀️", "okunus": "meo-ri-kha-rak", "turkce": "saç", "ornek": "머리카락이 길어요.", "ornekOkunus": "meo-ri-kha-ra-gi gi-reo-yo", "ornekTr": "Saçları uzun. 💇‍♀️" },
    { "korece": "미소 😊", "okunus": "mi-so", "turkce": "gülümseme", "ornek": "미소가 예뻐요.", "ornekOkunus": "mi-so-ga ye-ppeo-yo", "ornekTr": "Gülümsemesi güzel. 😊" },
    { "korece": "목소리 🗣️", "okunus": "mok-so-ri", "turkce": "ses", "ornek": "목소리가 커요.", "ornekOkunus": "mok-so-ri-ga kheo-yo", "ornekTr": "Sesi yüksek. 🗣️" },
    { "korece": "눈썹 👁️‍🗨️", "okunus": "nun-sseop", "turkce": "kaş", "ornek": "눈썹이 진해요.", "ornekOkunus": "nun-sseo-bi jin-hae-yo", "ornekTr": "Kaşları gür. 👁️‍🗨️" },
    { "korece": "속눈썹 👁️", "okunus": "sok-nun-sseop", "turkce": "kirpik", "ornek": "속눈썹이 길어요.", "ornekOkunus": "sok-nun-sseo-bi gi-reo-yo", "ornekTr": "Kirpikleri uzun. 👁️" },
    { "korece": "턱 👤", "okunus": "theok", "turkce": "çene", "ornek": "턱이 뾰족해요.", "ornekOkunus": "theo-gi ppyo-jok-hae-yo", "ornekTr": "Çenesi sivri. 👤" },
    { "korece": "뺨 😊", "okunus": "ppyam", "turkce": "yanak", "ornek": "뺨이 빨개요.", "ornekOkunus": "ppya-mi ppal-gae-yo", "ornekTr": "Yanakları kırmızı. 😊" },
    { "korece": "약 💊", "okunus": "yak", "turkce": "ilaç", "ornek": "약을 먹어요.", "ornekOkunus": "ya-geul meo-geo-yo", "ornekTr": "İlaç içiyorum. 💊" }
],

"🦜 HAYVAN ALEMİ": [
    { "korece": "동물 🐾", "okunus": "dong-mul", "turkce": "hayvan", "ornek": "동물을 사랑해요.", "ornekOkunus": "dong-mu-reul sa-rang-hae-yo", "ornekTr": "Hayvanları seviyorum. 🐾" },
    { "korece": "게 🦀", "okunus": "ge", "turkce": "yengeç", "ornek": "게가 옆으로 걸어요.", "ornekOkunus": "ge-ga yeo-pheu-ro geo-reo-yo", "ornekTr": "Yengeç yan yan yürür. 🦀" },
    { "korece": "말 🐎", "okunus": "mal", "turkce": "at", "ornek": "말을 타요.", "ornekOkunus": "ma-reul tha-yo", "ornekTr": "Ata biniyorum. 🐎" },
    { "korece": "벌 🐝", "okunus": "beol", "turkce": "arı", "ornek": "벌이 꿀을 만들어요.", "ornekOkunus": "beo-ri kku-reul man-deu-leo-yo", "ornekTr": "Arı bal yapar. 🐝" },
    { "korece": "곰 🐻", "okunus": "gom", "turkce": "ayı", "ornek": "곰이 잠을 자요.", "ornekOkunus": "go-mi ja-meul ja-yo", "ornekTr": "Ayı uyuyor. 🐻" },
    { "korece": "새 🐦", "okunus": "sae", "turkce": "kuş", "ornek": "새가 하늘을 날아요.", "ornekOkunus": "sae-ga ha-neu-reul na-ra-yo", "ornekTr": "Kuş gökyüzünde uçar. 🐦" },
    { "korece": "개 🐕", "okunus": "gae", "turkce": "köpek", "ornek": "개가 짖어요.", "ornekOkunus": "gae-ga ji-jeo-yo", "ornekTr": "Köpek havlıyor. 🐕" },
    { "korece": "돼지 🐷", "okunus": "dwae-ji", "turkce": "domuz", "ornek": "돼지가 뚱뚱해요.", "ornekOkunus": "dwae-ji-ga ttung-ttung-hae-yo", "ornekTr": "Domuz şişman. 🐷" },
    { "korece": "고양이 🐱", "okunus": "go-yang-i", "turkce": "kedi", "ornek": "고양이가 귀여워요.", "ornekOkunus": "go-ya-ngi-ga gwi-yeo-wo-yo", "ornekTr": "Kedi sevimli. 🐱" },
    { "korece": "야옹 😺", "okunus": "ya-ong", "turkce": "miyav", "ornek": "고양이가 야옹 해요.", "ornekOkunus": "go-ya-ngi-ga ya-ong hae-yo", "ornekTr": "Kedi miyav diyor. 😺" },
    { "korece": "강아지 🐶", "okunus": "gang-a-ji", "turkce": "yavru köpek", "ornek": "강아지가 달려요.", "ornekOkunus": "ga-nga-ji-ga dal-lyeo-yo", "ornekTr": "Yavru köpek koşuyor. 🐶" },
    { "korece": "모기 🦟", "okunus": "mo-gi", "turkce": "sivrisinek", "ornek": "모기가 물었어요.", "ornekOkunus": "mo-gi-ga mu-reot-seo-yo", "ornekTr": "Sivrisinek ısırdı. 🦟" },
    { "korece": "나비 🦋", "okunus": "na-bi", "turkce": "kelebek", "ornek": "나비가 예뻐요.", "ornekOkunus": "na-bi-ga ye-ppeo-yo", "ornekTr": "Kelebek güzel. 🦋" },
    { "korece": "사자 🦁", "okunus": "sa-ja", "turkce": "aslan", "ornek": "사자는 동물의 왕이에요.", "ornekOkunus": "sa-ja-neun dong-mu-reul wa-ngi-ye-yo", "ornekTr": "Aslan hayvanların kralıdır. 🦁" },
    { "korece": "호랑이 🐯", "okunus": "ho-rang-i", "turkce": "kaplan", "ornek": "호랑이가 무서워요.", "ornekOkunus": "ho-ra-ngi-ga mu-seo-wo-yo", "ornekTr": "Kaplan korkunç. 🐯" },
    { "korece": "코끼리 🐘", "okunus": "ko-kki-ri", "turkce": "fil", "ornek": "코끼리는 코가 길어요.", "ornekOkunus": "kho-kki-ri-neun kho-ga gi-reo-yo", "ornekTr": "Filin hortumu uzun. 🐘" },
    { "korece": "토끼 🐰", "okunus": "tho-kki", "turkce": "tavşan", "ornek": "토끼가 당근을 먹어요.", "ornekOkunus": "tho-kki-ga dang-geu-neul meo-geo-yo", "ornekTr": "Tavşan havuç yiyor. 🐰" },
    { "korece": "물고기 🐟", "okunus": "mul-go-gi", "turkce": "balık", "ornek": "물고기가 헤엄쳐요.", "ornekOkunus": "mul-go-gi-ga he-eom-chyeo-yo", "ornekTr": "Balık yüzüyor. 🐟" },
    { "korece": "거북이 🐢", "okunus": "geo-bu-gi", "turkce": "kaplumbağa", "ornek": "거북이는 느려요.", "ornekOkunus": "geo-bu-gi-neun neu-ryeo-yo", "ornekTr": "Kaplumbağa yavaştır. 🐢" },
    { "korece": "양 🐑", "okunus": "yang", "turkce": "koyun", "ornek": "양이 풀을 먹어요.", "ornekOkunus": "ya-ngi phu-reul meo-geo-yo", "ornekTr": "Koyun ot yiyor. 🐑" },
    { "korece": "염소 🐐", "okunus": "yeom-so", "turkce": "keçi", "ornek": "염소가 울어요.", "ornekOkunus": "yeom-so-ga u-reo-yo", "ornekTr": "Keçi meliyor. 🐐" },
    { "korece": "닭 🐔", "okunus": "dak", "turkce": "tavuk", "ornek": "닭이 알을 낳아요.", "ornekOkunus": "da-gi a-reul na-a-yo", "ornekTr": "Tavuk yumurtluyor. 🐔" },
    { "korece": "병아리 🐥", "okunus": "byeong-a-ri", "turkce": "civciv", "ornek": "병아리가 삐약삐약 해요.", "ornekOkunus": "byeo-nga-ri-ga ppi-yak-ppi-yak hae-yo", "ornekTr": "Civciv cik cik diyor. 🐥" },
    { "korece": "쥐 🐭", "okunus": "jwi", "turkce": "fare", "ornek": "쥐가 치즈를 먹어요.", "ornekOkunus": "jwi-ga chi-jeu-reul meo-geo-yo", "ornekTr": "Fare peynir yiyor. 🐭" },
    { "korece": "여우 🦊", "okunus": "yeo-u", "turkce": "tilki", "ornek": "여우가 똑똑해요.", "ornekOkunus": "yeo-u-ga ttok-ttok-hae-yo", "ornekTr": "Tilki akıllı. 🦊" },
    { "korece": "늑대 🐺", "okunus": "neuk-dae", "turkce": "kurt", "ornek": "늑대가 밤에 울어요.", "ornekOkunus": "neuk-dae-ga ba-me u-reo-yo", "ornekTr": "Kurt gece uluyor. 🐺" },
    { "korece": "캥거루 🦘", "okunus": "khaeng-ge-ru", "turkce": "kanguru", "ornek": "캥거루가 뛰어요.", "ornekOkunus": "khaeng-ge-ru-ga ttwi-eo-yo", "ornekTr": "Kanguru zıplıyor. 🦘" },
    { "korece": "판다 🐼", "okunus": "phan-da", "turkce": "panda", "ornek": "판다가 대나무를 먹어요.", "ornekOkunus": "phan-da-ga dae-na-mu-reul meo-geo-yo", "ornekTr": "Panda bambu yiyor. 🐼" },
    { "korece": "하마 🦛", "okunus": "ha-ma", "turkce": "su aygırı", "ornek": "하마가 입이 커요.", "ornekOkunus": "ha-ma-ga i-bi kheo-yo", "ornekTr": "Su aygırının ağzı büyük. 🦛" },
    { "korece": "악어 🐊", "okunus": "ag-eo", "turkce": "timsah", "ornek": "악어가 무서워요.", "ornekOkunus": "a-geo-ga mu-seo-wo-yo", "ornekTr": "Timsah korkunç. 🐊" },
    { "korece": "독수리 🦅", "okunus": "dok-su-ri", "turkce": "kartal", "ornek": "독수리가 높이 날아요.", "ornekOkunus": "dok-su-ri-ga no-phi na-ra-yo", "ornekTr": "Kartal yüksekte uçar. 🦅" }
],

"🚌 ULAŞıM VE GENEL YERLER": [
    { "korece": "버스 정류장 🚏", "okunus": "beo-seu jeong-ryu-jang", "turkce": "otobüs durağı", "ornek": "버스 정류장에서 기다려요.", "ornekOkunus": "beo-seu jeong-ryu-ja-nge-seo gi-da-ryeo-yo", "ornekTr": "Otobüs durağında bekliyorum. 🚏" },
    { "korece": "전철역 🚉", "okunus": "jeon-cheol-yeok", "turkce": "metro istasyonu", "ornek": "전철역이 가까워요.", "ornekOkunus": "jeon-cheol-yeo-gi ga-kka-wo-yo", "ornekTr": "Metro istasyonu yakın. 🚉" },
    { "korece": "고속터미널 🚌", "okunus": "go-sok theo-mi-neol", "turkce": "otobüs terminali", "ornek": "고속터미널에 가요.", "ornekOkunus": "go-sok theo-mi-neo-re ga-yo", "ornekTr": "Otobüs terminaline gidiyorum. 🚌" },
    { "korece": "기차역 🚆", "okunus": "gi-cha-yeok", "turkce": "tren istasyonu", "ornek": "기차역에서 만나요.", "ornekOkunus": "gi-cha-yeo-ge-seo man-na-yo", "ornekTr": "Tren istasyonunda buluşalım. 🚆" },
    { "korece": "공항 🛫", "okunus": "gong-hang", "turkce": "havaalanı", "ornek": "공항에 사람이 많아요.", "ornekOkunus": "gong-ha-nge sa-ra-mi ma-na-yo", "ornekTr": "Havaalanında çok insan var. 🛫" },
    { "korece": "주차장 🅿️", "okunus": "ju-cha-jang", "turkce": "otopark", "ornek": "주차장이 넓어요.", "ornekOkunus": "ju-cha-ja-ngi neol-beo-yo", "ornekTr": "Otopark geniş. 🅿️" },
    { "korece": "택시 정류장 🚖", "okunus": "thaek-si jeong-ryu-jang", "turkce": "taksi durağı", "ornek": "택시 정류장이 어디예요?", "ornekOkunus": "thaek-si jeong-ryu-ja-ngi eo-di-ye-yo", "ornekTr": "Taksi durağı nerede? 🚖" },
    { "korece": "지하철 🚇", "okunus": "ji-ha-cheol", "turkce": "metro", "ornek": "지하철을 타요.", "ornekOkunus": "ji-ha-cheo-reul tha-yo", "ornekTr": "Metreye biniyorum. 🚇" },
    { "korece": "도로 🛣️", "okunus": "do-ro", "turkce": "yol", "ornek": "도로에 차가 많아요.", "ornekOkunus": "do-ro-e cha-ga ma-na-yo", "ornekTr": "Yolda çok araba var. 🛣️" },
    { "korece": "길 🛤️", "okunus": "gil", "turkce": "sokak, cadde", "ornek": "길을 잃었어요.", "ornekOkunus": "gi-reul i-reot-seo-yo", "ornekTr": "Yolu kaybettim. 🛤️" },
    { "korece": "광장 ⛲", "okunus": "gwang-jang", "turkce": "meydan", "ornek": "광장에서 만나요.", "ornekOkunus": "gwang-ja-nge-seo man-na-yo", "ornekTr": "Meydanda buluşalım. ⛲" },
    { "korece": "시장 🛒", "okunus": "si-jang", "turkce": "pazar", "ornek": "시장에서 과일을 사요.", "ornekOkunus": "si-ja-nge-seo gwa-i-reul sa-yo", "ornekTr": "Pazardan meyve alıyorum. 🛒" },
    { "korece": "입구 🚪⬅️", "okunus": "ip-gu", "turkce": "giriş", "ornek": "입구가 어디예요?", "ornekOkunus": "ip-gu-ga eo-di-ye-yo", "ornekTr": "Giriş nerede? 🚪⬅️" },
    { "korece": "출구 🚪➡️", "okunus": "chul-gu", "turkce": "çıkış", "ornek": "출구로 나가요.", "ornekOkunus": "chul-gu-ro na-ga-yo", "ornekTr": "Çıkıştan dışarı çıkıyorum. 🚪➡️" },
    { "korece": "시내 🏙️", "okunus": "si-nae", "turkce": "şehir merkezi", "ornek": "시내에 가요.", "ornekOkunus": "si-nae-e ga-yo", "ornekTr": "Şehir merkezine gidiyorum. 🏙️" },
    { "korece": "고향 🏡", "okunus": "go-hyang", "turkce": "memleket", "ornek": "제 고향은 부산이에요.", "ornekOkunus": "je go-hya-ngeun bu-sa-ni-ye-yo", "ornekTr": "Memleketim Busan'dır. 🏡" }
],

"🏳️‍🌈 RENKLER": [
    { "korece": "색", "okunus": "saek", "turkce": "renk", "ornek": "무슨 색을 좋아해요?", "ornekOkunus": "mu-seun sae-geul jo-a-hae-yo", "ornekTr": "Hangi rengi seviyorsun? 🌈" },
    { "korece": "빨간색❤️", "okunus": "ppal-gan-saek", "turkce": "kırmızı", "ornek": "사과는 빨간색이에요.", "ornekOkunus": "sa-gwa-neun ppal-gan-sae-gi-ye-yo", "ornekTr": "Elma kırmızıdır. ❤️" },
    { "korece": "파란색💙", "okunus": "pa-ran-saek", "turkce": "mavi", "ornek": "하늘이 파란색이에요.", "ornekOkunus": "ha-neu-ri pa-ran-sae-gi-ye-yo", "ornekTr": "Gökyüzü mavidir. 💙" },
    { "korece": "노랑색💛", "okunus": "no-rang-saek", "turkce": "sarı", "ornek": "바나나는 노란색이에요.", "ornekOkunus": "ba-na-na-neun no-ran-sae-gi-ye-yo", "ornekTr": "Muz sarıdır. 💛" },
    { "korece": "초록색💚", "okunus": "cho-rok-saek", "turkce": "yeşil", "ornek": "나뭇잎이 초록색이에요.", "ornekOkunus": "na-mun-ni-phi cho-rok-sae-gi-ye-yo", "ornekTr": "Yaprak yeşildir. 💚" },
    { "korece": "검은색🖤", "okunus": "geo-meun-saek", "turkce": "siyah", "ornek": "머리카락이 검은색이에요.", "ornekOkunus": "meo-ri-kha-ra-gi geo-meun-sae-gi-ye-yo", "ornekTr": "Saçları siyahtır. 🖤" },
    { "korece": "분홍색🩷", "okunus": "bun-hong-saek", "turkce": "pembe", "ornek": "꽃이 분홍색이에요.", "ornekOkunus": "kko-thi bun-hong-sae-gi-ye-yo", "ornekTr": "Çiçek pembedir. 🩷" },
    { "korece": "보라색💜", "okunus": "bo-ra-saek", "turkce": "mor", "ornek": "포도가 보라색이에요.", "ornekOkunus": "pho-do-ga bo-ra-sae-gi-ye-yo", "ornekTr": "Üzüm mordur. 💜" },
    { "korece": "하얀색🤍", "okunus": "ha-yan-saek", "turkce": "beyaz", "ornek": "구름이 하얀색이에요.", "ornekOkunus": "gu-reu-mi ha-yan-sae-gi-ye-yo", "ornekTr": "Bulut beyazdır. 🤍" },
    { "korece": "주황색🧡", "okunus": "ju-hwang-saek", "turkce": "turuncu", "ornek": "오렌지가 주황색이에요.", "ornekOkunus": "o-ren-ji-ga ju-hwang-sae-gi-ye-yo", "ornekTr": "Portakal turuncudur. 🧡" },
    { "korece": "갈색🤎", "okunus": "gal-saek", "turkce": "kahverengi", "ornek": "나무가 갈색이에요.", "ornekOkunus": "na-mu-ga gal-sae-gi-ye-yo", "ornekTr": "Ağaç kahverengidir. 🤎" },
    { "korece": "회색🩶", "okunus": "hoe-saek", "turkce": "gri", "ornek": "구름이 회색이에요.", "ornekOkunus": "gu-reu-mi hoe-sae-gi-ye-yo", "ornekTr": "Bulut gridir. 🩶" },
    { "korece": "연한", "okunus": "yeon-han", "turkce": "açık", "ornek": "연한 파란색을 좋아해요.", "ornekOkunus": "yeon-han pa-ran-sae-geul jo-a-hae-yo", "ornekTr": "Açık maviyi severim. 🩵" },
    { "korece": "짙은", "okunus": "ji-teun", "turkce": "koyu", "ornek": "짙은 빨간색이에요.", "ornekOkunus": "ji-teun ppal-gan-sae-gi-ye-yo", "ornekTr": "Koyu kırmızıdır. ❤️" },
    { "korece": "연한 파란색🩵", "okunus": "yeon-han pa-ran-saek", "turkce": "açık mavi", "ornek": "바다가 연한 파란색이에요.", "ornekOkunus": "ba-da-ga yeon-han pa-ran-sae-gi-ye-yo", "ornekTr": "Deniz açık mavidir. 🩵" },
    { "korece": "짙은 빨간색", "okunus": "ji-teun ppal-gan-saek", "turkce": "koyu kırmızı", "ornek": "입술이 짙은 빨간색이에요.", "ornekOkunus": "ip-su-ri ji-teun ppal-gan-sae-gi-ye-yo", "ornekTr": "Dudakları koyu kırmızıdır. ❤️" }
],

"🦺 KIYAFET VE AKSESUAR": [
    { "korece": "티셔츠 👚", "okunus": "thi-syeo-theu", "turkce": "tişört", "ornek": "티셔츠를 입어요.", "ornekOkunus": "thi-syeo-theu-reul i-beo-yo", "ornekTr": "Tişört giyiyorum. 👚" },
    { "korece": "신발 👞", "okunus": "sin-bal", "turkce": "ayakkabı", "ornek": "신발을 신어요.", "ornekOkunus": "sin-ba-reul si-neo-yo", "ornekTr": "Ayakkabı giyiyorum. 👞" },
    { "korece": "운동화 👟", "okunus": "un-dong-hwa", "turkce": "spor ayakkabı", "ornek": "운동화가 편해요.", "ornekOkunus": "un-dong-hwa-ga phyeon-hae-yo", "ornekTr": "Spor ayakkabı rahattır. 👟" },
    { "korece": "바지 👖", "okunus": "ba-ji", "turkce": "pantolon", "ornek": "청바지를 입어요.", "ornekOkunus": "cheong-ba-ji-reul i-beo-yo", "ornekTr": "Kot pantolon giyiyorum. 👖" },
    { "korece": "치마 👗", "okunus": "chi-ma", "turkce": "etek", "ornek": "치마가 예뻐요.", "ornekOkunus": "chi-ma-ga ye-ppeo-yo", "ornekTr": "Etek güzel. 👗" },
    { "korece": "셔츠 👔", "okunus": "syeo-theu", "turkce": "gömlek", "ornek": "셔츠를 다려요.", "ornekOkunus": "syeo-theu-reul da-ryeo-yo", "ornekTr": "Gömleği ütülüyorum. 👔" },
    { "korece": "재킷 🧥", "okunus": "jae-khit", "turkce": "ceket", "ornek": "재킷을 입으세요.", "ornekOkunus": "jae-khi-seul i-beu-se-yo", "ornekTr": "Ceketi giyin lütfen. 🧥" },
    { "korece": "코트 🧥", "okunus": "kho-theu", "turkce": "palto, kaban", "ornek": "겨울에는 코트를 입어요.", "ornekOkunus": "gyeo-u-re-neun kho-theu-reul i-beo-yo", "ornekTr": "Kışın kaban giyerim. 🧥" },
    { "korece": "원피스 👗", "okunus": "won-phi-seu", "turkce": "elbise", "ornek": "원피스가 잘 어울려요.", "ornekOkunus": "won-phi-seu-ga jal eo-ul-lyeo-yo", "ornekTr": "Elbise sana yakıştı. 👗" },
    { "korece": "양말 🧦", "okunus": "yang-mal", "turkce": "çorap", "ornek": "양말을 신어요.", "ornekOkunus": "yang-ma-reul si-neo-yo", "ornekTr": "Çorap giyiyorum. 🧦" },
    { "korece": "모자 🧢", "okunus": "mo-ja", "turkce": "şapka", "ornek": "모자를 써요.", "ornekOkunus": "mo-ja-reul sseo-yo", "ornekTr": "Şapka takıyorum. 🧢" },
    { "korece": "장갑 🧤", "okunus": "jang-gap", "turkce": "eldiven", "ornek": "장갑을 껴요.", "ornekOkunus": "jang-ga-beul kkyeo-yo", "ornekTr": "Eldiven takıyorum. 🧤" },
    { "korece": "넥타이 👔", "okunus": "nek-tha-i", "turkce": "kravat", "ornek": "넥타이를 매요.", "ornekOkunus": "nek-tha-i-reul mae-yo", "ornekTr": "Kravat bağlıyorum. 👔" },
    { "korece": "잠옷 🛌", "okunus": "jam-ot", "turkce": "pijama", "ornek": "잠옷을 입고 자요.", "ornekOkunus": "ja-mo-seul ip-go ja-yo", "ornekTr": "Pijama giyip uyuyorum. 🛌" },
    { "korece": "수영복 🩱", "okunus": "su-yeong-bok", "turkce": "mayo", "ornek": "수영복을 준비해요.", "ornekOkunus": "su-yeong-bo-geul jun-bi-hae-yo", "ornekTr": "Mayoyu hazırlıyorum. 🩱" },
    { "korece": "청바지 👖", "okunus": "cheong-ba-ji", "turkce": "kot pantolon", "ornek": "청바지가 멋져요.", "ornekOkunus": "cheong-ba-ji-ga meot-jyeo-yo", "ornekTr": "Kot pantolon havalı. 👖" },
    { "korece": "반지 💍", "okunus": "ban-ji", "turkce": "yüzük", "ornek": "반지를 껴요.", "ornekOkunus": "ban-ji-reul kkyeo-yo", "ornekTr": "Yüzük takıyorum. 💍" },
    { "korece": "목걸이 📿", "okunus": "mok-geol-i", "turkce": "kolye", "ornek": "목걸이가 예뻐요.", "ornekOkunus": "mok-geol-i-ga ye-ppeo-yo", "ornekTr": "Kolye güzel. 📿" }
],

"🌿 DOĞA VE GÖKYÜZÜ": [
    { "korece": "세상 🌍", "okunus": "se-sang", "turkce": "dünya", "ornek": "세상은 넓어요.", "ornekOkunus": "se-sa-ngeun neol-beo-yo", "ornekTr": "Dünya geniştir. 🌍" },
    { "korece": "하늘 ☁️", "okunus": "ha-neul", "turkce": "gökyüzü", "ornek": "하늘이 높아요.", "ornekOkunus": "ha-neu-ri no-pha-yo", "ornekTr": "Gökyüzü yüksektir. ☁️" },
    { "korece": "바다 🌊", "okunus": "ba-da", "turkce": "okyanus, deniz", "ornek": "바다가 깊어요.", "ornekOkunus": "ba-da-ga gi-pheo-yo", "ornekTr": "Deniz derindir. 🌊" },
    { "korece": "산 ⛰️", "okunus": "san", "turkce": "dağ", "ornek": "산에 올라가요.", "ornekOkunus": "sa-ne ol-la-ga-yo", "ornekTr": "Dağa çıkıyorum. ⛰️" },
    { "korece": "나무 🌳", "okunus": "na-mu", "turkce": "ağaç", "ornek": "나무 밑에서 쉬어요.", "ornekOkunus": "na-mu mi-the-seo swi-eo-yo", "ornekTr": "Ağacın altında dinleniyorum. 🌳" },
    { "korece": "꽃 🌼", "okunus": "kkot", "turkce": "çiçek", "ornek": "꽃 향기가 좋아요.", "ornekOkunus": "kkot hya-ngi-ga jo-a-hae-yo", "ornekTr": "Çiçek kokusu güzel. 🌼" },
    { "korece": "호수 🏞️", "okunus": "ho-su", "turkce": "göl", "ornek": "호수가 아름다워요.", "ornekOkunus": "ho-su-ga a-reum-da-wo-yo", "ornekTr": "Göl çok güzel. 🏞️" },
    { "korece": "빛 💡", "okunus": "bit", "turkce": "ışık", "ornek": "빛이 환해요.", "ornekOkunus": "bi-chi hwan-hae-yo", "ornekTr": "Işık parlak. 💡" },
    { "korece": "얼음 🧊", "okunus": "eol-eum", "turkce": "buz", "ornek": "얼음이 차가워요.", "ornekOkunus": "eol-eu-mi cha-ga-wo-yo", "ornekTr": "Buz soğuktur. 🧊" },
    { "korece": "무지개 🌈", "okunus": "mu-ji-gae", "turkce": "gökkuşağı", "ornek": "무지개가 떴어요.", "ornekOkunus": "mu-ji-gae-ga tteot-seo-yo", "ornekTr": "Gökkuşağı çıktı. 🌈" },
    { "korece": "해 🌞", "okunus": "hae", "turkce": "güneş", "ornek": "해가 뜨거워요.", "ornekOkunus": "hae-ga tteu-geo-wo-yo", "ornekTr": "Güneş sıcaktır. 🌞" },
    { "korece": "달 🌙", "okunus": "dal", "turkce": "ay", "ornek": "달이 밝아요.", "ornekOkunus": "da-ri bal-ga-yo", "ornekTr": "Ay parlaktır. 🌙" },
    { "korece": "별 ⭐", "okunus": "byeol", "turkce": "yıldız", "ornek": "별이 반짝여요.", "ornekOkunus": "byeo-ri ban-jja-gye-yo", "ornekTr": "Yıldız parlıyor. ⭐" },
    { "korece": "우주 🌌", "okunus": "u-ju", "turkce": "uzay", "ornek": "우주는 끝이 없어요.", "ornekOkunus": "u-ju-neun kkeu-thi eop-seo-yo", "ornekTr": "Uzayın sonu yoktur. 🌌" }
],

"🌤️ HAVA VE MEVSİMLER": [
    { "korece": "춥다 🥶", "okunus": "chup-da", "turkce": "soğuk, üşümek", "ornek": "오늘 너무 추워요.", "ornekOkunus": "o-neul neo-mu chu-wo-yo", "ornekTr": "Bugün hava çok soğuk. 🥶" },
    { "korece": "뜨거운 🔥", "okunus": "tteu-geo-un", "turkce": "sıcak", "ornek": "뜨거운 커피예요.", "ornekOkunus": "tteu-geo-un kheo-phi-ye-yo", "ornekTr": "Sıcak bir kahvedir. 🔥" },
    { "korece": "시원하다 🍃", "okunus": "si-won-ha-da", "turkce": "serin", "ornek": "바람이 시원해요.", "ornekOkunus": "ba-ra-mi si-won-hae-yo", "ornekTr": "Rüzgar serin. 🍃" },
    { "korece": "따뜻하다 🌞", "okunus": "tta-tteut-ha-da", "turkce": "ılık, sıcak", "ornek": "날씨가 따뜻해요.", "ornekOkunus": "nal-ssi-ga tta-tteut-hae-yo", "ornekTr": "Hava ılık. 🌞" },
    { "korece": "어두워 🌑", "okunus": "eo-du-wo", "turkce": "karanlık", "ornek": "방이 어두워요.", "ornekOkunus": "ba-ngi eo-du-wo-yo", "ornekTr": "Oda karanlık. 🌑" },
    { "korece": "밝다 💡", "okunus": "bak-da", "turkce": "aydınlık", "ornek": "거실이 밝아요.", "ornekOkunus": "geo-si-ri bal-ga-yo", "ornekTr": "Oturma odası aydınlık. 💡" },
    { "korece": "번개 🌩️", "okunus": "beon-gae", "turkce": "şimşek", "ornek": "번개가 쳐요.", "ornekOkunus": "beon-gae-ga chyeo-yo", "ornekTr": "Şimşek çakıyor. 🌩️" },
    { "korece": "천둥 ⚡", "okunus": "cheon-dung", "turkce": "gök gürültüsü", "ornek": "천둥 소리가 들려요.", "ornekOkunus": "cheon-dung so-ri-ga deul-lyeo-yo", "ornekTr": "Gök gürültüsü sesi duyuluyor. ⚡" }
],

"⌛ ZAMAN VE MİKTAR": [
    { "korece": "어제", "okunus": "eo-je", "turkce": "dün", "ornek": "어제 영화를 봤어요.", "ornekOkunus": "eo-je yeong-hwa-reul bwat-seo-yo", "ornekTr": "Dün film izledim. 🎬" },
    { "korece": "오늘", "okunus": "o-neul", "turkce": "bugün", "ornek": "오늘 날씨가 좋아요.", "ornekOkunus": "o-neul nal-ssi-ga jo-a-yo", "ornekTr": "Bugün hava güzel. ☀️" },
    { "korece": "내일", "okunus": "nae-il", "turkce": "yarın", "ornek": "내일 만나요.", "ornekOkunus": "nae-il man-na-yo", "ornekTr": "Yarın buluşalım. 👋" },
    { "korece": "아침 🌅", "okunus": "a-chim", "turkce": "sabah", "ornek": "아침을 먹어요.", "ornekOkunus": "a-chi-meul meo-geo-yo", "ornekTr": "Kahvaltı (sabah yemeği) yapıyorum. 🌅" },
    { "korece": "밤 🌙", "okunus": "bam", "turkce": "gece", "ornek": "밤에 잠을 자요.", "ornekOkunus": "ba-me ja-meul ja-yo", "ornekTr": "Gece uyuyorum. 🌙" },
    { "korece": "낮 🌞", "okunus": "nat", "turkce": "gündüz", "ornek": "낮에는 더워요.", "ornekOkunus": "na-je-neun deo-wo-yo", "ornekTr": "Gündüz hava sıcak. 🌞" },
    { "korece": "시간", "okunus": "si-gan", "turkce": "zaman", "ornek": "시간이 없어요.", "ornekOkunus": "si-ga-ni eop-seo-yo", "ornekTr": "Zamanım yok. ⌛" },
    { "korece": "지금", "okunus": "ji-geum", "turkce": "şimdi", "ornek": "지금 가요.", "ornekOkunus": "ji-geum ga-yo", "ornekTr": "Şimdi gidiyorum. 👋" },
    { "korece": "매주", "okunus": "mae-ju", "turkce": "her hafta", "ornek": "매주 수영해요.", "ornekOkunus": "mae-ju su-yeong-hae-yo", "ornekTr": "Her hafta yüzüyorum. 🏊" },
    { "korece": "가끔", "okunus": "ga-kkeum", "turkce": "bazen", "ornek": "가끔 커피를 마셔요.", "ornekOkunus": "ga-kkeum kheo-phi-reul ma-syeo-yo", "ornekTr": "Bazen kahve içerim. ☕" },
    { "korece": "자주", "okunus": "ja-ju", "turkce": "sık sık", "ornek": "한국 요리를 자주 해요.", "ornekOkunus": "han-guk yo-ri-reul ja-ju hae-yo", "ornekTr": "Sık sık Kore yemeği yaparım. 🍲" },
    { "korece": "다시", "okunus": "da-si", "turkce": "tekrar", "ornek": "다시 말해 주세요.", "ornekOkunus": "da-si mal-hae ju-se-yo", "ornekTr": "Lütfen tekrar söyleyin. 🗣️" },
    { "korece": "다음", "okunus": "da-eum", "turkce": "sonraki", "ornek": "다음 역에서 내려요.", "ornekOkunus": "da-eum yeo-ge-seo nae-ryeo-yo", "ornekTr": "Bir sonraki istasyonda iniyorum. 🚉" },
    { "korece": "아직", "okunus": "a-jik", "turkce": "henüz", "ornek": "아직 안 왔어요.", "ornekOkunus": "a-jik an wat-seo-yo", "ornekTr": "Henüz gelmedi. 👋" },
    { "korece": "조금", "okunus": "jo-geum", "turkce": "biraz", "ornek": "조금만 기다려 주세요.", "ornekOkunus": "jo-geum-man gi-da-ryeo ju-se-yo", "ornekTr": "Lütfen birazcık bekleyin. 👋" },
    { "korece": "엄청", "okunus": "eom-cheong", "turkce": "çok fazla", "ornek": "오늘 엄청 바빠요.", "ornekOkunus": "o-neul eom-cheong ba-ppa-yo", "ornekTr": "Bugün aşırı derecede meşgulüm. 👋" },
    { "korece": "많이", "okunus": "ma-ni", "turkce": "çok", "ornek": "많이 드세요.", "ornekOkunus": "ma-ni deu-se-yo", "ornekTr": "Afiyet olsun (Çokça yiyin). 😋" },
    { "korece": "작은", "okunus": "ja-geun", "turkce": "az", "ornek": "작은 선물이 들어있어요.", "ornekOkunus": "ja-geun seon-mu-ri deu-reo-it-seo-yo", "ornekTr": "İçinde küçük bir hediye var. 🎁" }
],

"✂️ EŞYA VE TEKNOLOJİ": [
    { "korece": "돈 💵", "okunus": "don", "turkce": "para", "ornek": "돈이 필요해요.", "ornekOkunus": "do-ni phi-ryo-hae-yo", "ornekTr": "Paraya ihtiyacım var. 💵" },
    { "korece": "빚 📉", "okunus": "bit", "turkce": "borç", "ornek": "빚을 다 갚았어요.", "ornekOkunus": "bi-cheul da ga-phat-seo-yo", "ornekTr": "Borcu tamamen ödedim. 📉" },
    { "korece": "차 🚗", "okunus": "cha", "turkce": "araba", "ornek": "제 차는 하얀색이에요.", "ornekOkunus": "je cha-neun ha-yan-sae-gi-ye-yo", "ornekTr": "Arabam beyaz renklidir. 🚗" },
    { "korece": "가방 🎒", "okunus": "ga-bang", "turkce": "çanta", "ornek": "가방이 무거워요.", "ornekOkunus": "ga-ba-ngi mu-geo-wo-yo", "ornekTr": "Çanta ağırdır. 🎒" },
    { "korece": "장난감 🧸", "okunus": "jang-nan-gam", "turkce": "oyuncak", "ornek": "장난감을 사주세요.", "ornekOkunus": "jang-nan-ga-meul sa-ju-se-yo", "ornekTr": "Lütfen oyuncak al. 🧸" },
    { "korece": "책 📖", "okunus": "chaek", "turkce": "kitap", "ornek": "책을 읽어요.", "ornekOkunus": "chae-geul il-geo-yo", "ornekTr": "Kitap okuyorum. 📖" },
    { "korece": "수첩 📓", "okunus": "su-cheop", "turkce": "defter", "ornek": "수첩에 적어요.", "ornekOkunus": "su-cheo-be jeo-geo-yo", "ornekTr": "Deftere not alıyorum. 📓" },
    { "korece": "엽서 💌", "okunus": "yeop-seo", "turkce": "kartpostal", "ornek": "엽서를 보내요.", "ornekOkunus": "yeop-seo-reul bo-nae-yo", "ornekTr": "Kartpostal gönderiyorum. 💌" },
    { "korece": "선물 🎁", "okunus": "seon-mul", "turkce": "hediye", "ornek": "친구 선물을 사요.", "ornekOkunus": "chin-gu seon-mu-reul sa-yo", "ornekTr": "Arkadaşıma hediye alıyorum. 🎁" },
    { "korece": "거울 🪞", "okunus": "geo-ul", "turkce": "ayna", "ornek": "거울을 봐요.", "ornekOkunus": "geo-u-reul bwa-yo", "ornekTr": "Aynaya bakıyorum. 🪞" },
    { "korece": "지도 🗺️", "okunus": "ji-do", "turkce": "harita", "ornek": "지도를 봐요.", "ornekOkunus": "ji-do-reul bwa-yo", "ornekTr": "Haritaya bakıyorum. 🗺️" },
    { "korece": "지갑 👛", "okunus": "ji-gap", "turkce": "cüzdan", "ornek": "지갑을 잃어버렸어요.", "ornekOkunus": "ji-ga-beul i-reo-beo-ryeot-seo-yo", "ornekTr": "Cüzdanımı kaybettim. 👛" },
    { "korece": "쓰레기 🚮", "okunus": "sseu-re-gi", "turkce": "çöp", "ornek": "쓰레기를 버려요.", "ornekOkunus": "sseu-re-gi-reul beo-ryeo-yo", "ornekTr": "Çöpü atıyorum. 🚮" },
    { "korece": "시계 ⌚", "okunus": "si-gye", "turkce": "saat", "ornek": "시계가 몇 시예요?", "ornekOkunus": "si-gye-ga myeot si-ye-yo", "ornekTr": "Saat kaç? ⌚" },
    { "korece": "가격 💰", "okunus": "ga-gyeok", "turkce": "fiyat", "ornek": "가격이 비싸요.", "ornekOkunus": "ga-gyeo-gi bi-ssa-yo", "ornekTr": "Fiyatı pahalı. 💰" },
    { "korece": "컴퓨터 💻", "okunus": "keom-pyu-teo", "turkce": "bilgisayar", "ornek": "컴퓨터를 켜요.", "ornekOkunus": "keom-pyu-theo-reul khyeo-yo", "ornekTr": "Bilgisayarı açıyorum. 💻" },
    { "korece": "노트북 💻", "okunus": "no-theu-buk", "turkce": "dizüstü bilgisayar", "ornek": "노트북을 사용해요.", "ornekOkunus": "no-theu-bu-geul sa-yong-hae-yo", "ornekTr": "Dizüstü bilgisayar kullanıyorum. 💻" },
    { "korece": "모니터 🖥️", "okunus": "mo-ni-teo", "turkce": "monitör", "ornek": "모니터가 커요.", "ornekOkunus": "mo-ni-theo-ga kheo-yo", "ornekTr": "Monitör büyük. 🖥️" },
    { "korece": "키보드 ⌨️", "okunus": "khi-bo-deu", "turkce": "klavye", "ornek": "키보드로 타자를 쳐요.", "ornekOkunus": "khi-bo-deu-ro tha-ja-reul chyeo-yo", "ornekTr": "Klavyeyle yazı yazıyorum. ⌨️" },
    { "korece": "마우스 🖱️", "okunus": "ma-u-seu", "turkce": "mouse", "ornek": "마우스가 잘 안 돼요.", "ornekOkunus": "ma-u-seu-ga jal an dwae-yo", "ornekTr": "Fare iyi çalışmıyor. 🖱️" },
    { "korece": "인터넷 🌐", "okunus": "in-theo-net", "turkce": "internet", "ornek": "인터넷이 빨라요.", "ornekOkunus": "in-theo-ne-si ppal-la-yo", "ornekTr": "İnternet hızlı. 🌐" },
    { "korece": "프린터 🖨️", "okunus": "pheu-rin-teo", "turkce": "yazıcı", "ornek": "프린터로 뽑아요.", "ornekOkunus": "pheu-rin-theo-ro ppo-ba-yo", "ornekTr": "Yazıcıyla çıkartıyorum. 🖨️" },
    { "korece": "스피커 🔊", "okunus": "seu-phi-kheo", "turkce": "hoparlör", "ornek": "스피커 소리가 커요.", "ornekOkunus": "seu-phi-kheo so-ri-ga kheo-yo", "ornekTr": "Hoparlör sesi yüksek. 🔊" },
    { "korece": "스마트폰 📱", "okunus": "seu-ma-theu-phon", "turkce": "akıllı telefon", "ornek": "스마트폰을 바꿔요.", "ornekOkunus": "seu-ma-theu-pho-neul ba-kkweo-yo", "ornekTr": "Akıllı telefonu değiştiriyorum. 📱" },
    { "korece": "전화 ☎️", "okunus": "jeon-hwa", "turkce": "telefon", "ornek": "전화 받으세요.", "ornekOkunus": "jeon-hwa ba-deu-se-yo", "ornekTr": "Telefona cevap verin. ☎️" },
    { "korece": "핸드폰 📲", "okunus": "haen-deu-phon", "turkce": "telefon", "ornek": "핸드폰 충전해요.", "ornekOkunus": "haen-deu-phon chung-jeon-hae-yo", "ornekTr": "Telefonu şarj ediyorum. 📲" },
    { "korece": "USB 💾", "okunus": "yu-eseu-bi", "turkce": "USB bellek", "ornek": "USB에 저장해요.", "ornekOkunus": "yu-e-seu-bi-e jeo-jang-hae-yo", "ornekTr": "USB'ye kaydediyorum. 💾" },
    { "korece": "카메라 📷", "okunus": "kha-me-ra", "turkce": "kamera", "ornek": "카메라로 찍어요.", "ornekOkunus": "kha-me-ra-ro jji-geo-yo", "ornekTr": "Kamerayla çekiyorum. 📷" },
    { "korece": "와이파이 📶", "okunus": "wa-i-pha-i", "turkce": "Wi-Fi", "ornek": "와이파이 비밀번호가 뭐예요?", "ornekOkunus": "wa-i-pha-i bi-mil-beon-ho-ga mwo-ye-yo", "ornekTr": "Wi-Fi şifresi nedir? 📶" },
    { "korece": "로봇 🤖", "okunus": "ro-bot", "turkce": "robot", "ornek": "로봇 청소기가 있어요.", "ornekOkunus": "ro-bot cheong-so-gi-ga it-seo-yo", "ornekTr": "Robot süpürgem var. 🤖" }
],

"🎡 HOBİ VE EĞLENCE": [
    { "korece": "취미", "okunus": "chwi-mi", "turkce": "hobi", "ornek": "취미가 뭐예요?", "ornekOkunus": "chwi-mi-ga mwo-ye-yo", "ornekTr": "Hobin nedir? 🎡" },
    { "korece": "여행 ✈️", "okunus": "yeo-haeng", "turkce": "seyahat", "ornek": "한국 여행을 가요.", "ornekOkunus": "yeo-hae-ngeul ga-yo", "ornekTr": "Kore seyahatine gidiyorum. ✈️" },
    { "korece": "예매 📅", "okunus": "ye-mae", "turkce": "rezervasyon", "ornek": "표를 예매해요.", "ornekOkunus": "phyo-reul ye-mae-hae-yo", "ornekTr": "Bilet rezervasyonu yapıyorum. 📅" },
    { "korece": "장난 🎭", "okunus": "jang-nan", "turkce": "şaka, oyun", "ornek": "장난 치지 마세요.", "ornekOkunus": "jang-nan chi-ji ma-se-yo", "ornekTr": "Şaka yapma lütfen. 🎭" },
    { "korece": "소개팅 💘", "okunus": "so-gae-thing", "turkce": "görücü usulü randevu", "ornek": "내일 소개팅이 있어요.", "ornekOkunus": "nae-il so-gae-thi-ngi it-seo-yo", "ornekTr": "Yarın görücü usulü randevum var. 💘" },
    { "korece": "피아노 🎹", "okunus": "phi-a-no", "turkce": "piyano", "ornek": "피아노를 쳐요.", "ornekOkunus": "phi-a-no-reul chyeo-yo", "ornekTr": "Piyano çalıyorum. 🎹" },
    { "korece": "사진 찍기 📸", "okunus": "sa-jin jjik-gi", "turkce": "fotoğraf çekmek", "ornek": "사진 찍는 걸 좋아해요.", "ornekOkunus": "sa-jin jjik-neun geol jo-a-hae-yo", "ornekTr": "Fotoğraf çekmeyi severim. 📸" },
    { "korece": "악기 🪇", "okunus": "ak-gi", "turkce": "müzik aleti", "ornek": "악기를 배워요.", "ornekOkunus": "ak-gi-reul bae-wo-yo", "ornekTr": "Müzik aleti öğreniyorum. 🪇" },
    { "korece": "기타 🎸", "okunus": "gi-tha", "turkce": "gitar", "ornek": "기타를 쳐요.", "ornekOkunus": "gi-tha-reul chyeo-yo", "ornekTr": "Gitar çalıyorum. 🎸" },
    { "korece": "댄스 💃", "okunus": "daen-seu", "turkce": "dans", "ornek": "댄스 학원에 가요.", "ornekOkunus": "daen-seu ha-gwo-ne ga-yo", "ornekTr": "Dans kursuna gidiyorum. 💃" },
    { "korece": "콘서트 🎤", "okunus": "khon-seo-theu", "turkce": "konser", "ornek": "콘서트 표를 샀어요.", "ornekOkunus": "khon-seo-theu phyo-reul sat-seo-yo", "ornekTr": "Konser bileti aldım. 🎤" },
    { "korece": "노래 🎶", "okunus": "no-rae", "turkce": "şarkı", "ornek": "노래를 불러요.", "ornekOkunus": "no-rae-reul bul-leo-yo", "ornekTr": "Şarkı söylüyorum. 🎶" },
    { "korece": "랩 🎤", "okunus": "raep", "turkce": "rap", "ornek": "랩을 잘해요.", "ornekOkunus": "rae-beul jal-hae-yo", "ornekTr": "Rapi iyi yaparım. 🎤" },
    { "korece": "팬 🙌", "okunus": "phaen", "turkce": "fan, hayran", "ornek": "저는 방탄소년단의 팬이에요.", "ornekOkunus": "jeo-neun bang-than-so-nyeon-da-ne phae-ni-ye-yo", "ornekTr": "Ben BTS hayranıyım. 🙌" },
    { "korece": "영화 🎬", "okunus": "yeong-hwa", "turkce": "film", "ornek": "영화를 봐요.", "ornekOkunus": "yeong-hwa-reul bwa-yo", "ornekTr": "Film izliyorum. 🎬" },
    { "korece": "표 🎟️", "okunus": "phyo", "turkce": "bilet", "ornek": "기차 표가 있어요.", "ornekOkunus": "gi-cha phyo-ga it-seo-yo", "ornekTr": "Tren bileti var. 🎟️" },
    { "korece": "드라마 📺", "okunus": "deu-ra-ma", "turkce": "dizi", "ornek": "한국 드라마를 좋아해요.", "ornekOkunus": "han-guk deu-ra-ma-reul jo-a-hae-yo", "ornekTr": "Kore dizilerini severim. 📺" },
    { "korece": "아이돌 🌟", "okunus": "a-i-dol", "turkce": "idol", "ornek": "케이팝 아이돌이 유명해요.", "ornekOkunus": "khei-phap a-i-do-ri yu-myeong-hae-yo", "ornekTr": "K-pop idolleri ünlüdür. 🌟" },
    { "korece": "오디션 🎙️", "okunus": "o-di-syyeon", "turkce": "seçme, audition", "ornek": "오디션을 봐요.", "ornekOkunus": "o-di-syyeo-neul bwa-yo", "ornekTr": "Seçmelere giriyorum. 🎙️" },
    { "korece": "방송 📻", "okunus": "bang-song", "turkce": "yayın", "ornek": "방송이 시작돼요.", "ornekOkunus": "bang-so-ngi si-jak-dwae-yo", "ornekTr": "Yayın başlıyor. 📻" },
    { "korece": "예능 🎉", "okunus": "ye-neung", "turkce": "eğlence programı", "ornek": "예능 프로그램을 봐요.", "ornekOkunus": "ye-neung pheu-ro-geu-rae-meul bwa-yo", "ornekTr": "Eğlence programı izliyorum. 🎉" },
    { "korece": "노래방 🎤", "okunus": "no-rae-bang", "turkce": "karaoke salonu", "ornek": "노래방에 가요.", "ornekOkunus": "no-rae-ba-nge ga-yo", "ornekTr": "Karaoke salonuna gidiyorum. 🎤" },
    { "korece": "파티 🥳", "okunus": "pha-thi", "turkce": "parti", "ornek": "생일 파티를 해요.", "ornekOkunus": "saeng-il pha-thi-reul hae-yo", "ornekTr": "Doğum günü partisi yapıyoruz. 🥳" },
    { "korece": "놀이터 🛝", "okunus": "no-ri-theo", "turkce": "oyun parkı", "ornek": "놀이터에서 놀아요.", "ornekOkunus": "no-ri-the-e-seo no-ra-yo", "ornekTr": "Oyun parkında oynuyoruz. 🛝" }
],

"🥎 SPOR": [
    { "korece": "운동 🏋️‍♀️", "okunus": "un-dong", "turkce": "egzersiz, spor", "ornek": "매일 운동해요.", "ornekOkunus": "mae-il un-dong-hae-yo", "ornekTr": "Her gün egzersiz yapıyorum. 🏋️‍♀️" },
    { "korece": "축구 ⚽", "okunus": "chuk-gu", "turkce": "futbol", "ornek": "축구를 좋아해요.", "ornekOkunus": "chuk-gu-reul jo-a-hae-yo", "ornekTr": "Futbolu severim. ⚽" },
    { "korece": "야구 ⚾", "okunus": "ya-gu", "turkce": "beyzbol", "ornek": "야구 경기를 봐요.", "ornekOkunus": "ya-gu gyeong-gi-reul bwa-yo", "ornekTr": "Beyzbol maçı izliyorum. ⚾" },
    { "korece": "태권도 🥋", "okunus": "thae-kweon-do", "turkce": "taekwondo", "ornek": "태권도를 배워요.", "ornekOkunus": "thae-kweon-do-reul bae-wo-yo", "ornekTr": "Taekwondo öğreniyorum. 🥋" },
    { "korece": "수영 🏊‍♀️", "okunus": "su-yeong", "turkce": "yüzme", "ornek": "수영을 잘해요.", "ornekOkunus": "su-yeo-neul jal-hae-yo", "ornekTr": "İyi yüzerim. 🏊‍♀️" },
    { "korece": "농구 🏀", "okunus": "nong-gu", "turkce": "basketbol", "ornek": "농구공이 있어요.", "ornekOkunus": "nong-gu-gong-i it-seo-yo", "ornekTr": "Basketbol topum var. 🏀" },
    { "korece": "배구 🏐", "okunus": "bae-gu", "turkce": "voleybol", "ornek": "배구를 해요.", "ornekOkunus": "bae-gu-reul hae-yo", "ornekTr": "Voleybol oynuyorum. 🏐" },
    { "korece": "골프 ⛳", "okunus": "gol-pheu", "turkce": "golf", "ornek": "골프를 쳐요.", "ornekOkunus": "gol-pheu-reul chyeo-yo", "ornekTr": "Golf oynuyorum. ⛳" },
    { "korece": "테니스 🎾", "okunus": "the-ni-seu", "turkce": "tenis", "ornek": "테니스를 배워요.", "ornekOkunus": "the-ni-seu-reul bae-wo-yo", "ornekTr": "Tenis öğreniyorum. 🎾" },
    { "korece": "탁구 🏓", "okunus": "thak-gu", "turkce": "masa tenisi", "ornek": "탁구를 쳐요.", "ornekOkunus": "thak-gu-reul chyeo-yo", "ornekTr": "Masa tenisi oynuyorum. 🏓" },
    { "korece": "체육관 🏋️‍♂️", "okunus": "che-yuk-gwan", "turkce": "spor salonu", "ornek": "체육관에 가요.", "ornekOkunus": "che-yuk-gwa-ne ga-yo", "ornekTr": "Spor salonuna gidiyorum. 🏋️‍♂️" }
],

"🚩 ÜLKELER VE ŞEHİRLER": [
    { "korece": "나라 🗺️", "okunus": "na-ra", "turkce": "ülke", "ornek": "어느 나라에서 왔어요?", "ornekOkunus": "eo-neu na-ra-e-seo wat-seo-yo", "ornekTr": "Hangi ülkeden geldin? 🗺️" },
    { "korece": "도시 🌆", "okunus": "do-si", "turkce": "şehir", "ornek": "아름다운 도시예요.", "ornekOkunus": "a-reum-da-un do-si-ye-yo", "ornekTr": "Güzel bir şehir. 🌆" },
    { "korece": "한국 🇰🇷", "okunus": "han-guk", "turkce": "Güney Kore", "ornek": "한국에 가고 싶어요.", "ornekOkunus": "han-gu-ge ga-go si-pho-yo", "ornekTr": "Kore'ye gitmek istiyorum. 🇰🇷" },
    { "korece": "터키 🇹🇷", "okunus": "theo-khi", "turkce": "Türkiye", "ornek": "터키는 따뜻해요.", "ornekOkunus": "theo-khi-neun tta-tteut-hae-yo", "ornekTr": "Türkiye sıcaktır. 🇹🇷" },
    { "korece": "미국 🇺🇸", "okunus": "mi-guk", "turkce": "Amerika", "ornek": "미국에 친구가 있어요.", "ornekOkunus": "mi-gu-ge chin-gu-ga it-seo-yo", "ornekTr": "Amerika'da arkadaşım var. 🇺🇸" },
    { "korece": "일본 🇯🇵", "okunus": "il-bon", "turkce": "Japonya", "ornek": "일본 요리를 좋아해요.", "ornekOkunus": "il-bon yo-ri-reul jo-a-hae-yo", "ornekTr": "Japon yemeklerini severim. 🇯🇵" },
    { "korece": "중국 🇨🇳", "okunus": "jung-guk", "turkce": "Çin", "ornek": "중국은 아주 커요.", "ornekOkunus": "jung-gu-geun a-ju kheo-yo", "ornekTr": "Çin çok büyüktür. 🇨🇳" },
    { "korece": "독일 🇩🇪", "okunus": "dok-il", "turkce": "Almanya", "ornek": "독일차를 좋아해요.", "ornekOkunus": "do-gil-cha-reul jo-a-hae-yo", "ornekTr": "Alman arabalarını severim. 🇩🇪" },
    { "korece": "프랑스 🇫🇷", "okunus": "pheu-rang-seu", "turkce": "Fransa", "ornek": "프랑스에 에펠탑이 있어요.", "ornekOkunus": "pheu-rang-seu-e e-phel-tha-bi it-seo-yo", "ornekTr": "Fransa'da Eyfel Kulesi var. 🇫🇷" },
    { "korece": "영국 🇬🇧", "okunus": "yeong-guk", "turkce": "İngiltere", "ornek": "영국은 섬나라예요.", "ornekOkunus": "yeong-gu-geun seom-na-ra-ye-yo", "ornekTr": "İngiltere bir ada ülkesidir. 🇬🇧" },
    { "korece": "이탈리아 🇮🇹", "okunus": "i-thal-li-a", "turkce": "İtalya", "ornek": "이탈리아 피자가 맛있어요.", "ornekOkunus": "i-thal-li-a phi-ja-ga ma-sit-seo-yo", "ornekTr": "İtalya pizzası lezzetlidir. 🇮🇹" },
    { "korece": "러시아 🇷🇺", "okunus": "reo-si-a", "turkce": "Rusya", "ornek": "러시아는 추워요.", "ornekOkunus": "reo-si-a-neun chu-wo-yo", "ornekTr": "Rusya soğuktur. 🇷🇺" },
    { "korece": "스페인 🇪🇸", "okunus": "seu-phe-in", "turkce": "İspanya", "ornek": "스페인 축구를 좋아해요.", "ornekOkunus": "seu-phe-in chuk-gu-reul jo-a-hae-yo", "ornekTr": "İspanya futbolunu severim. 🇪🇸" },
    { "korece": "제주도 🌴", "okunus": "je-ju-do", "turkce": "Jeju Adası", "ornek": "제주도는 섬이에요.", "ornekOkunus": "je-ju-do-neun seo-mi-ye-yo", "ornekTr": "Jeju bir adadır. 🌴" },
    { "korece": "서울 🏢", "okunus": "seo-ul", "turkce": "Seul", "ornek": "서울은 한국의 수도예요.", "ornekOkunus": "seo-u-reun han-gu-ge su-do-ye-yo", "ornekTr": "Seul Kore'nin başkentidir. 🏢" },
    { "korece": "인천 🌉", "okunus": "in-cheon", "turkce": "Incheon", "ornek": "인천공항이 아주 커요.", "ornekOkunus": "in-cheon-gong-ha-ngi a-ju kheo-yo", "ornekTr": "Incheon Havalimanı çok büyük. 🌉" },
    { "korece": "부산 🌊", "okunus": "bu-san", "turkce": "Busan", "ornek": "부산 바다가 예뻐요.", "ornekOkunus": "bu-san ba-da-ga ye-ppeo-yo", "ornekTr": "Busan denizi güzel. 🌊" }
],

"🏦 KURUMLAR VE SOSYAL ALANLAR": [
    { "korece": "학교 🏫", "okunus": "hak-gyo", "turkce": "okul", "ornek": "학교에 가요.", "ornekOkunus": "hak-gyo-e ga-yo", "ornekTr": "Okula gidiyorum. 🏫" },
    { "korece": "병원 🏥", "okunus": "byeong-won", "turkce": "hastane", "ornek": "병원에서 진료를 받아요.", "ornekOkunus": "byeong-wo-ne-seo jin-ryo-reul ba-da-yo", "ornekTr": "Hastanede muayene oluyorum. 🏥" },
    { "korece": "응급실 🚑", "okunus": "eung-geup-sil", "turkce": "acil servis", "ornek": "응급실이 바빠요.", "ornekOkunus": "eung-geup-si-ri ba-ppa-yo", "ornekTr": "Acil servis meşgul. 🚑" },
    { "korece": "경찰서 🚓", "okunus": "gyeong-chal-seo", "turkce": "karakol", "ornek": "경찰서가 어디예요?", "ornekOkunus": "gyeong-chal-seo-ga eo-di-ye-yo", "ornekTr": "Karakol nerede? 🚓" },
    { "korece": "우체국 🏤", "okunus": "u-che-guk", "turkce": "postane", "ornek": "우체국에서 편지를 보내요.", "ornekOkunus": "u-che-gu-ge-seo phyeon-ji-reul bo-nae-yo", "ornekTr": "Postaneden mektup gönderiyorum. 🏤" },
    { "korece": "도서관 📚", "okunus": "do-seo-gwan", "turkce": "kütüphane", "ornek": "도서관에서 책을 읽어요.", "ornekOkunus": "do-seo-gwa-ne-seo chae-geul il-geo-yo", "ornekTr": "Kütüphanede kitap okuyorum. 📚" },
    { "korece": "약국 💊", "okunus": "yak-guk", "turkce": "eczane", "ornek": "약국에서 약을 사요.", "ornekOkunus": "yak-gu-ge-seo ya-geul sa-yo", "ornekTr": "Eczaneden ilaç alıyorum. 💊" },
    { "korece": "은행 🏦", "okunus": "eun-haeng", "turkce": "banka", "ornek": "은행에 돈을 찾아요.", "ornekOkunus": "eun-haeng-e do-neul cha-ja-yo", "ornekTr": "Bankadan para çekiyorum. 🏦" },
    { "korece": "사무실 🏢", "okunus": "sa-mu-sil", "turkce": "ofis", "ornek": "사무실에서 일해요.", "ornekOkunus": "sa-mu-si-re-seo il-hae-yo", "ornekTr": "Ofiste çalışıyorum. 🏢" },
    { "korece": "건물 🏬", "okunus": "geon-mul", "turkce": "bina", "ornek": "높은 건물이에요.", "ornekOkunus": "no-phun geon-mu-ri-ye-yo", "ornekTr": "Yüksek bir binadır. 🏬" },
    { "korece": "사원 🕌", "okunus": "sa-won", "turkce": "camii", "ornek": "사원에서 기도해요.", "ornekOkunus": "sa-wo-ne-seo gi-do-hae-yo", "ornekTr": "Camide dua ediyorum. 🕌" },
    { "korece": "교회 ⛪", "okunus": "gyo-hoe", "turkce": "kilise", "ornek": "교회에 가요.", "ornekOkunus": "gyo-hoe-e ga-yo", "ornekTr": "Kiliseye gidiyorum. ⛪" },
    { "korece": "서점 📚", "okunus": "seo-jeom", "turkce": "kitapçı", "ornek": "서점에서 책을 사요.", "ornekOkunus": "seo-jeo-me-seo chae-geul sa-yo", "ornekTr": "Kitapçıdan kitap alıyorum. 📚" },
    { "korece": "공원 🌳", "okunus": "gong-won", "turkce": "park", "ornek": "공원에서 산책해요.", "ornekOkunus": "gong-wo-ne-seo san-chaek-hae-yo", "ornekTr": "Parkta yürüyüş yapıyorum. 🌳" }
],

"👨‍👧‍👦 AİLE VE KİŞİLER": [
    { "korece": "가족 👪", "okunus": "ga-jok", "turkce": "aile", "ornek": "가족이 소중해요.", "ornekOkunus": "ga-jo-gi so-jung-hae-yo", "ornekTr": "Aile değerlidir. 👪" },
    { "korece": "부모님 👨‍👩‍👧‍👦", "okunus": "bu-mo-nim", "turkce": "ebeveynler", "ornek": "부모님을 사랑해요.", "ornekOkunus": "bu-mo-ni-meul sa-rang-hae-yo", "ornekTr": "Ebeveynlerimi seviyorum. 👨‍👩‍👧‍👦" },
    { "korece": "엄마 👩‍🦰", "okunus": "eom-ma", "turkce": "anne", "ornek": "엄마는 요리를 잘해요.", "ornekOkunus": "eom-ma-neun yo-ri-reul jal-hae-yo", "ornekTr": "Annem iyi yemek yapar. 👩‍🦰" },
    { "korece": "아빠 👨‍🦱", "okunus": "a-ppa", "turkce": "baba", "ornek": "아빠는 키가 커요.", "ornekOkunus": "a-ppa-neun khi-ga kheo-yo", "ornekTr": "Babamın boyu uzun. 👨‍🦱" },
    { "korece": "딸 👧", "okunus": "ttal", "turkce": "kız evlat", "ornek": "제 딸은 학생이에요.", "ornekOkunus": "je tta-reun hak-sae-ngi-ye-yo", "ornekTr": "Kızım öğrencidir. 👧" },
    { "korece": "아들 👦", "okunus": "a-deul", "turkce": "erkek evlat", "ornek": "아들이 축구를 해요.", "ornekOkunus": "a-deu-ri chuk-gu-reul hae-yo", "ornekTr": "Oğlum futbol oynuyor. 👦" },
    { "korece": "여동생 👧", "okunus": "yeo-dong-saeng", "turkce": "kız kardeş", "ornek": "여동생이 귀여워요.", "ornekOkunus": "yeo-dong-sae-ngi gwi-yeo-wo-yo", "ornekTr": "Kız kardeşim sevimli. 👧" },
    { "korece": "오빠 👱‍♂️", "okunus": "o-ppa", "turkce": "oppa", "ornek": "오빠가 도와줘요.", "ornekOkunus": "o-ppa-ga do-wa-jweo-yo", "ornekTr": "Oppa (abi) yardım ediyor. 👱‍♂️" },
    { "korece": "언니 👱‍♀️", "okunus": "eon-ni", "turkce": "unni", "ornek": "언니랑 쇼핑해요.", "ornekOkunus": "eon-ni-rang syo-phi-ngae-yo", "ornekTr": "Unni (abla) ile alışveriş yapıyorum. 👱‍♀️" },
    { "korece": "형 👨", "okunus": "hyeong", "turkce": "hyung", "ornek": "형은 공부를 잘해요.", "ornekOkunus": "hyeo-ngeun gong-bu-reul jal-hae-yo", "ornekTr": "Hyung (abi) iyi ders çalışır. 👨" },
    { "korece": "누나 👩", "okunus": "nu-na", "turkce": "noona", "ornek": "누나가 예뻐요.", "ornekOkunus": "nu-na-ga ye-ppeo-yo", "ornekTr": "Noona (abla) güzeldir. 👩" },
    { "korece": "할아버지 👴", "okunus": "hal-a-beo-ji", "turkce": "dede", "ornek": "할아버지가 웃으세요.", "ornekOkunus": "hal-a-beo-ji-ga u-seu-se-yo", "ornekTr": "Dedem gülümsüyor. 👴" },
    { "korece": "할머니 👵", "okunus": "hal-meo-ni", "turkce": "babaanne", "ornek": "할머니가 이야기를 해주세요.", "ornekOkunus": "hal-meo-ni-ga i-ya-gi-reul hae-ju-se-yo", "ornekTr": "Babaannem hikaye anlatıyor. 👵" },
    { "korece": "사람 🧍", "okunus": "sa-ram", "turkce": "insan", "ornek": "사람이 아주 많아요.", "ornekOkunus": "sa-ra-mi a-ju ma-na-yo", "ornekTr": "Çok fazla insan var. 🧍" },
    { "korece": "남자 👨", "okunus": "nam-ja", "turkce": "erkek", "ornek": "남자가 걸어가요.", "ornekOkunus": "nam-ja-ga geo-reo-ga-yo", "ornekTr": "Erkek yürüyor. 👨" },
    { "korece": "여자 👩", "okunus": "yeo-ja", "turkce": "kadın", "ornek": "여자가 노래해요.", "ornekOkunus": "yeo-ja-ga no-rae-hae-yo", "ornekTr": "Kadın şarkı söylüyor. 👩" },
    { "korece": "친구 🧑‍🤝‍🧑", "okunus": "chin-gu", "turkce": "arkadaş", "ornek": "친구랑 놀아요.", "ornekOkunus": "chin-gu-rang no-ra-yo", "ornekTr": "Arkadaşımla oynuyoruz. 🧑‍🤝‍🧑" },
    { "korece": "여보 ❤️", "okunus": "yeo-bo", "turkce": "canım, hayatım", "ornek": "여보 사랑해요.", "ornekOkunus": "yeo-bo sa-rang-hae-yo", "ornekTr": "Hayatım seni seviyorum. ❤️" },
    { "korece": "자기 💕", "okunus": "ja-gi", "turkce": "sevgilim", "ornek": "자기야 밥 먹었어?", "ornekOkunus": "ja-gi-ya bap meo-geot-seo", "ornekTr": "Sevgilim yemek yedin mi? 💕" }
],

"🕵️‍♂️ MESLEKLER": [
    { "korece": "학생 👩‍🎓", "okunus": "hak-saeng", "turkce": "öğrenci", "ornek": "저는 학생이에요.", "ornekOkunus": "jeo-neun hak-sae-ngi-ye-yo", "ornekTr": "Ben öğrenciyim. 👩‍🎓" },
    { "korece": "회사원 👩‍💼", "okunus": "hwi-sa-won", "turkce": "ofis çalışanı", "ornek": "오빠는 회사원이에요.", "ornekOkunus": "o-ppa-neun hwi-sa-wo-ni-ye-yo", "ornekTr": "Abim ofis çalışanıdır. 👩‍💼" },
    { "korece": "배우 🎭", "okunus": "bae-u", "turkce": "aktör", "ornek": "그 배우가 유명해요.", "ornekOkunus": "geu bae-u-ga yu-myeong-hae-yo", "ornekTr": "O aktör ünlüdür. 🎭" },
    { "korece": "의사 👩‍⚕️🩺", "okunus": "ui-sa", "turkce": "doktor", "ornek": "의사가 되고 싶어요.", "ornekOkunus": "ui-sa-ga doe-go si-pho-yo", "ornekTr": "Doktor olmak istiyorum. 👩‍⚕️" },
    { "korece": "경찰 👮‍♀️", "okunus": "gyeong-chal", "turkce": "polis", "ornek": "경찰이 도와줬어요.", "ornekOkunus": "gyeong-cha-ri do-wa-jwet-seo-yo", "ornekTr": "Polis yardım etti. 👮‍♀️" },
    { "korece": "교수 👨‍🏫", "okunus": "gyo-su", "turkce": "profesör", "ornek": "교수님이 설명해요.", "ornekOkunus": "gyo-su-ni-mi seol-myeong-hae-yo", "ornekTr": "Profesör açıklıyor. 👨‍🏫" },
    { "korece": "선생님 👩‍🏫", "okunus": "seon-saeng-nim", "turkce": "öğretmen", "ornek": "선생님이 가르쳐요.", "ornekOkunus": "seon-saeng-ni-mi ga-reu-chyeo-yo", "ornekTr": "Öğretmen öğretiyor. 👩‍🏫" },
    { "korece": "엔지니어 👷‍♀️", "okunus": "en-ji-ni-eo", "turkce": "mühendis", "ornek": "저는 엔지니어예요.", "ornekOkunus": "jeo-neun en-ji-ni-eo-ye-yo", "ornekTr": "Ben mühendisim. 👷‍♀️" },
    { "korece": "프로그래머 👩‍💻", "okunus": "pheu-ro-geu-rae-meo", "turkce": "yazılımcı", "ornek": "코딩하는 프로그래머예요.", "ornekOkunus": "kho-ding-ha-neun pheu-ro-geu-rae-meo-ye-yo", "ornekTr": "Kodlama yapan bir yazılımcıyım. 👩‍💻" }
],

"🎀 SIFATLAR": [
    { "korece": "웃긴 😄", "okunus": "ut-gin", "turkce": "komik", "ornek": "영화가 아주 웃겨요.", "ornekOkunus": "yeong-hwa-ga a-ju ut-gye-yo", "ornekTr": "Film çok komik. 😄" },
    { "korece": "괜찮다 🙂", "okunus": "gwaen-chan-ta", "turkce": "iyi, hoş", "ornek": "저는 괜찮아요.", "ornekOkunus": "jeo-neun gwaen-cha-na-yo", "ornekTr": "Ben iyiyim (sorun yok). 🙂" },
    { "korece": "아름다운 🌸", "okunus": "a-reum-da-un", "turkce": "güzel", "ornek": "꽃이 아름다워요.", "ornekOkunus": "kko-thi a-reum-da-wo-yo", "ornekTr": "Çiçekler güzeldir. 🌸" },
    { "korece": "싼 💸", "okunus": "ssan", "turkce": "ucuz", "ornek": "이 옷이 아주 싸요.", "ornekOkunus": "i o-si a-ju ssa-yo", "ornekTr": "Bu kıyafet çok ucuz. 💸" },
    { "korece": "비싼 💰", "okunus": "bi-ssan", "turkce": "pahalı", "ornek": "가방이 너무 비싸요.", "ornekOkunus": "ga-ba-ngi neo-mu bi-ssa-yo", "ornekTr": "Çanta çok pahalı. 💰" },
    { "korece": "크다 🏠", "okunus": "kheu-da", "turkce": "büyük", "ornek": "집이 아주 커요.", "ornekOkunus": "ji-bi a-ju kheo-yo", "ornekTr": "Ev çok büyük. 🏠" },
    { "korece": "작아 🐜", "okunus": "ja-ga", "turkce": "küçük", "ornek": "강아지가 작아요.", "ornekOkunus": "ga-nga-ji-ga ja-ga-yo", "ornekTr": "Yavru köpek küçük. 🐜" },
    { "korece": "예쁘다 💐", "okunus": "ye-ppeu-da", "turkce": "güzel, hoş", "ornek": "그녀는 아주 예뻐요.", "ornekOkunus": "geu-nyeo-neun a-ju ye-ppeu-da", "ornekTr": "O (kadın) çok güzel. 💐" },
    { "korece": "똑똑하다 🧠", "okunus": "ttok-ttok-ha-da", "turkce": "akıllı", "ornek": "동생이 아주 똑똑해요.", "ornekOkunus": "dong-sae-ngi a-ju ttok-ttok-hae-yo", "ornekTr": "Kardeşim çok akıllı. 🧠" },
    { "korece": "귀여운 🧸", "okunus": "gwi-yeo-un", "turkce": "sevimli", "ornek": "아기가 귀여워요.", "ornekOkunus": "a-gi-ga gwi-yeo-wo-yo", "ornekTr": "Bebek sevimli. 🧸" },
    { "korece": "멋있다 😎", "okunus": "meot-it-da", "turkce": "şık, havalı", "ornek": "오빠가 멋있어요.", "ornekOkunus": "o-ppa-ga meot-it-seo-yo", "ornekTr": "Oppa (abi) havalı/yakışıklı. 😎" },
    { "korece": "재미있다 🎉", "okunus": "jae-mi-it-da", "turkce": "eğlenceli", "ornek": "공부가 재미있어요.", "ornekOkunus": "gong-bu-ga jae-mi-it-seo-yo", "ornekTr": "Ders çalışmak eğlenceli. 🎉" },
    { "korece": "어려운 🧩", "okunus": "eo-ryeo-un", "turkce": "zor", "ornek": "시험이 어려워요.", "ornekOkunus": "si-heo-mi eo-ryeo-wo-yo", "ornekTr": "Sınav zor. 🧩" },
    { "korece": "편한 🛋️", "okunus": "phyeon-han", "turkce": "rahat", "ornek": "신발이 편해요.", "ornekOkunus": "sin-ba-ri phyeon-hae-yo", "ornekTr": "Ayakkabılar rahat. 🛋️" }
],

"🙆‍♀️ TEMEL VE ZİHİNSEL FİİLLER": [
    { "korece": "하다", "okunus": "ha-da", "turkce": "yapmak", "ornek": "숙제를 해요.", "ornekOkunus": "suk-je-reul hae-yo", "ornekTr": "Ödev yapıyorum. ✍️" },
    { "korece": "알다", "okunus": "al-da", "turkce": "bilmek", "ornek": "그 노래를 알아요.", "ornekOkunus": "geu no-rae-reul a-ra-yo", "ornekTr": "O şarkıyı biliyorum. 🎶" },
    { "korece": "모르다", "okunus": "mo-reu-da", "turkce": "bilmemek", "ornek": "전혀 몰라요.", "ornekOkunus": "jeon-hyeo mol-la-yo", "ornekTr": "Hiç bilmiyorum. 👋" },
    { "korece": "기억하다", "okunus": "gi-eok-ha-da", "turkce": "hatırlamak", "ornek": "전부 기억해요.", "ornekOkunus": "jeon-bu gi-eok-hae-yo", "ornekTr": "Hepsini hatırlıyorum. 🧠" },
    { "korece": "잊다", "okunus": "it-da", "turkce": "unutmak", "ornek": "비밀번호를 잊었어요.", "ornekOkunus": "bi-mil-beon-ho-reul i-jeot-seo-yo", "ornekTr": "Şifreyi unuttum. 👋" },
    { "korece": "이해하다", "okunus": "i-hae-ha-da", "turkce": "anlamak", "ornek": "수업을 이해해요.", "ornekOkunus": "su-eo-beul i-hae-hae-yo", "ornekTr": "Dersi anlıyorum. 🧩" }
],

"🧍‍♂️ GÜNLÜK HAYAT FİİLLERİ": [
    { "korece": "자다", "okunus": "ja-da", "turkce": "uyumak", "ornek": "일찍 자요.", "ornekOkunus": "il-jjik ja-yo", "ornekTr": "Erken uyuyorum. 🛌" },
    { "korece": "일어나다", "okunus": "il-eo-na-da", "turkce": "uyanmak, kalkmak", "ornek": "아침 7시에 일어나요.", "ornekOkunus": "a-chim il-gop si-e il-eo-na-yo", "ornekTr": "Sabah saat 7'de uyanıyorum. 🌅" },
    { "korece": "걷다", "okunus": "geot-da", "turkce": "yürümek", "ornek": "공원을 걸어요.", "ornekOkunus": "gong-wo-neul geo-reo-yo", "ornekTr": "Parkta yürüyorum. 🌳" },
    { "korece": "달리다", "okunus": "dal-li-da", "turkce": "koşmak", "ornek": "빨리 달려요.", "ornekOkunus": "ppal-li dal-lyeo-yo", "ornekTr": "Hızlı koşuyorum. 🏃" },
    { "korece": "씻다", "okunus": "ssit-da", "turkce": "yıkanmak", "ornek": "손을 씻어요.", "ornekOkunus": "so-neul ssi-seo-yo", "ornekTr": "Ellerimi yıkıyorum. 🧼" },
    { "korece": "샤워하다", "okunus": "sya-wo-ha-da", "turkce": "duş almak", "ornek": "아침마다 샤워해요.", "ornekOkunus": "a-chim-ma-da sya-wo-hae-yo", "ornekTr": "Her sabah duş alırım. 🚿" }
],

"🍽️ YEMEK VE EV FİİLLERİ": [
    { "korece": "먹다", "okunus": "meok-da", "turkce": "yemek", "ornek": "밥을 먹어요.", "ornekOkunus": "ba-beul meo-geo-yo", "ornekTr": "Yemek yiyorum. 🍚" },
    { "korece": "마시다", "okunus": "ma-si-da", "turkce": "içmek", "ornek": "물을 마셔요.", "ornekOkunus": "mu-reul ma-syeo-yo", "ornekTr": "Su içiyorum. 🫗" },
    { "korece": "요리하다", "okunus": "yo-ri-ha-da", "turkce": "yemek pişirmek", "ornek": "엄마가 요리해요.", "ornekOkunus": "eom-ma-ga yo-ri-hae-yo", "ornekTr": "Annem yemek yapıyor. 👩‍🍳" },
    { "korece": "식사하다", "okunus": "sik-sa-ha-da", "turkce": "öğün yemek", "ornek": "레스토랑에서 식사해요.", "ornekOkunus": "re-seu-tho-ra-nge-seo sik-sa-hae-yo", "ornekTr": "Restoranda öğün yiyorum. 🍽️" },
    { "korece": "설거지하다", "okunus": "seol-geo-ji-ha-da", "turkce": "bulaşık yıkamak", "ornek": "내가 설거지할게요.", "ornekOkunus": "nae-ga seol-geo-ji-hal-ge-yo", "ornekTr": "Bulaşıkları ben yıkayacağım. 🧼" },
    { "korece": "청소하다", "okunus": "cheong-so-ha-da", "turkce": "temizlik yapmak", "ornek": "방을 청소해요.", "ornekOkunus": "ba-ngeul cheong-so-hae-yo", "ornekTr": "Odayı temizliyorum. 🧹" }
],

"🗣️ SOSYAL FİİLLER": [
    { "korece": "말하다", "okunus": "mal-ha-da", "turkce": "konuşmak", "ornek": "천천히 말해 주세요.", "ornekOkunus": "cheon-cheon-hi mal-hae ju-se-yo", "ornekTr": "Lütfen yavaşça konuşun. 🗣️" },
    { "korece": "듣다", "okunus": "deut-da", "turkce": "dinlemek", "ornek": "음악을 들어요.", "ornekOkunus": "eu-ma-geul deu-reo-yo", "ornekTr": "Müzik dinliyorum. 🎧" },
    { "korece": "대화하다", "okunus": "dae-hwa-ha-da", "turkce": "sohbet etmek", "ornek": "친구랑 대화해요.", "ornekOkunus": "chin-gu-rang dae-hwa-hae-yo", "ornekTr": "Arkadaşımla sohbet ediyorum. 🗣️" },
    { "korece": "사랑하다", "okunus": "sa-rang-ha-da", "turkce": "sevmek", "ornek": "영원히 사랑해요.", "ornekOkunus": "yeong-won-hi sa-rang-hae-yo", "ornekTr": "Seni sonsuza kadar seviyorum. ❤️" },
    { "korece": "싫어하다", "okunus": "sil-eo-ha-da", "turkce": "sevmemek", "ornek": "오이를 싫어해요.", "ornekOkunus": "o-i-reul sil-eo-ha-yo", "ornekTr": "Salatalığı sevmiyorum. 🥒" },
    { "korece": "만나다", "okunus": "man-na-da", "turkce": "buluşmak", "ornek": "카페에서 만나요.", "ornekOkunus": "kha-phe-e-seo man-na-yo", "ornekTr": "Kafede buluşalım. ☕" }
],

"🔢 SAYILAR": [
    { "korece": "일 / 하나 ☝️", "okunus": "il / ha-na", "turkce": "bir", "ornek": "사과 하나 주세요.", "ornekOkunus": "sa-gwa ha-na ju-se-yo", "ornekTr": "Bir elma verin lütfen. 🍎" },
    { "korece": "이 / 둘 ✌️", "okunus": "i / dul", "turkce": "iki", "ornek": "사과 둘 주세요.", "ornekOkunus": "sa-gwa dul ju-se-yo", "ornekTr": "İki elma verin lütfen. 🍎🍎" },
    { "korece": "삼 / 셋 👌", "okunus": "sam / set", "turkce": "üç", "ornek": "사과 셋 주세요.", "ornekOkunus": "sa-gwa set ju-se-yo", "ornekTr": "Üç elma verin lütfen. 🍎🍎🍎" },
    { "korece": "사 / 넷 🍀", "okunus": "sa / net", "turkce": "dört", "ornek": "네 명이 있어요.", "ornekOkunus": "ne myeo-ngi it-seo-yo", "ornekTr": "Dört kişi var. 🍀" },
    { "korece": "오 / 다섯 🖐️", "okunus": "o / da-seot", "turkce": "beş", "ornek": "다섯 개 남았어요.", "ornekOkunus": "da-seot gae na-mat-seo-yo", "ornekTr": "Beş tane kaldı. 🖐️" },
    { "korece": "육 / 여섯 👍", "okunus": "yuk / yeo-seot", "turkce": "altı", "ornek": "여섯 시예요.", "ornekOkunus": "yeo-seot si-ye-yo", "ornekTr": "Saat altı. 👍" },
    { "korece": "칠 / 일곱 ✋✌️", "okunus": "chil / il-gop", "turkce": "yedi", "ornek": "일곱 명이 왔어요.", "ornekOkunus": "il-gop myeo-ngi wat-seo-yo", "ornekTr": "Yedi kişi geldi. ✋✌️" },
    { "korece": "팔 / 여덟 ✋👌", "okunus": "phal / yeo-deol", "turkce": "sekiz", "ornek": "여덟 시에 시작해요.", "ornekOkunus": "yeo-deol si-e si-ja-khae-yo", "ornekTr": "Saat sekizde başlıyor. ✋👌" },
    { "korece": "구 / 아홉 🖐️🍀", "okunus": "gu / a-hop", "turkce": "dokuz", "ornek": "아홉 개를 샀어요.", "ornekOkunus": "a-hop gae-reul sat-seo-yo", "ornekTr": "Dokuz tane aldım. 🖐️🍀" },
    { "korece": "십 / 열 🔟", "okunus": "sip / yeol", "turkce": "on", "ornek": "열 시예요.", "ornekOkunus": "yeol si-ye-yo", "ornekTr": "Saat on. 🔟" },
    { "korece": "백 💯", "okunus": "baek", "turkce": "yüz (Sino)", "ornek": "백 점이에요.", "ornekOkunus": "baek jeo-mi-ye-yo", "ornekTr": "Yüz puandır (Tam puan). 💯" },
    { "korece": "천 🔢", "okunus": "cheon", "turkce": "bin (Sino)", "ornek": "천 원이에요.", "ornekOkunus": "cheon wo-ni-ye-yo", "ornekTr": "Bin wondur. 🔢" },
    { "korece": "만 💰", "okunus": "man", "turkce": "on bin (Sino)", "ornek": "만 원만 빌려주세요.", "ornekOkunus": "man won-man bil-lyeo ju-se-yo", "ornekTr": "Lütfen on bin won ödünç verin. 💰" },
    { "korece": "영 / 공 ⚪", "okunus": "yeong / gong", "turkce": "sıfır", "ornek": "영 도예요.", "ornekOkunus": "yeong do-ye-yo", "ornekTr": "Sıfır derecedir. ⚪" }
]

};

const kdramaData = [

    { title: "100 Days My Prince", year: "2018", cast: "Doh Kyung Soo, Kim Seon Ho", afis: "https://i.pinimg.com/1200x/05/a1/fc/05a1fce7ed90507db5e5424d3e097b3d.jpg" },
    { title: "109 Strange Things", year: "2017", cast: "Choi Tae Joon", afis: "https://i.pinimg.com/736x/d7/ba/50/d7ba50712112f84c62045828b5435e2f.jpg" },
    { title: "28 Moons", year: "2016", cast: "Kim Kyu Jong", afis: "https://i.pinimg.com/1200x/ce/b4/ae/ceb4ae0591d5e93d61d0c99202c36f41.jpg" },
    { title: "7 Days Of Romance", year: "2019", cast: "Shin Joon Seop", afis: "https://i.pinimg.com/736x/f4/3d/8b/f43d8b0cc3857fd7f3b704607d4845e3.jpg" },
    { title: "A Good Day to Be a Dog", year: "2023", cast: "Cha Eun Woo, Lee Hyun Woo", afis: "https://i.pinimg.com/736x/24/f6/8d/24f68d6f2d211ab0009e73c05630f2dd.jpg" },
    { title: "A Korean Odyssey", year: "2017", cast: "Lee Seung Gi", afis: "https://i.pinimg.com/736x/c0/20/b8/c020b8ac24cd70404dd5a895e3331747.jpg" },
    { title: "A Love so Beautiful", year: "2020", cast: "Kim Yohan", afis: "https://i.pinimg.com/736x/76/5b/c6/765bc6a0e983b4331feb59e5c2e7db50.jpg" },
    { title: "A Poem A Day", year: "2018", cast: "Lee Joon Hyuk, Jang Dong Yoon", afis: "https://i.pinimg.com/736x/24/a2/7a/24a27a4e290e85f245f988db08348719.jpg" },
    { title: "Abyss", year: "2019", cast: "Ahn Yeo Seop", afis: "https://i.pinimg.com/736x/b3/6e/0b/b36e0b0559728fc22c56e62b19a8f891.jpg" },
    { title: "Adult Trainee", year: "2021", cast: "Ryeo Un", afis: "https://i.pinimg.com/736x/ba/b9/3a/bab93a3e4b7aff227f41546a0280b3bf.jpg" },
    { title: "All That We Loved", year: "2023", cast: "Oh Sehun", afis: "https://i.pinimg.com/1200x/a4/23/95/a4239590bb405ed5300b37ad3123f022.jpg" },
    { title: "Angels Last Mission Love", year: "2019", cast: "Kim Myung Soo", afis: "https://i.pinimg.com/736x/18/86/f0/1886f0fbc4722969372413622fb918ec.jpg" },
    { title: "Another Miss Oh", year: "2016", cast: "Eric Nam", afis: "https://i.pinimg.com/736x/c6/cc/1c/c6cc1c61f3e2af0686ed03e24c5f4c96.jpg" },
    { title: "Are You Human Too?", year: "2018", cast: "Seo Kang Joon, Leen Jun Hyuk", afis: "https://i.pinimg.com/1200x/3b/90/dd/3b90ddba3ff755a7b343e499a1840dc0.jpg" },
    { title: "At a Distance, Spring is Green", year: "2021", cast: "Park Ji Hoon, Bae In Hyuk", afis: "https://i.pinimg.com/736x/fa/af/3a/faaf3ab6c3b3c21d599f5d3651997957.jpg" },
    { title: "Backstreet Rookie", year: "2020", cast: "Ji Chang Wook", afis: "https://i.pinimg.com/1200x/68/6a/0d/686a0dce54a538fcac5c910ba46357af.jpg" },
    { title: "Bad and Crazy", year: "2021", cast: "Lee Dong Wook, Wi Ha Joon", afis: "https://i.pinimg.com/736x/4c/75/16/4c751678407ba4d0685ed1b0b0d01ea1.jpg" },
    { title: "Bad Guys", year: "2014", cast: "Park Hae Jin", afis: "https://i.pinimg.com/1200x/4f/0d/09/4f0d095d2a9d11dec602d6ed93cef9e0.jpg" },
    { title: "Be My Boyfriend", year: "2021", cast: "Shin Hyun Seung", afis: "https://i.pinimg.com/1200x/de/95/66/de95668952dd46fcc32805ebb2c1ca74.jpg" },
    { title: "Be Positive", year: "2016", cast: "Doh Kyung Soo", afis: "https://i.pinimg.com/736x/ae/90/b4/ae90b481846bf79ebf9279568577b410.jpg" },
    { title: "Beating Again", year: "2015", cast: "Jung Kyung Ho", afis: "https://i.pinimg.com/736x/75/50/6e/75506e76a4b88c6ce64ecb2c1512ffb8.jpg" },
    { title: "Beautiful Gong Shim", year: "2016", cast: "Namkoong Min", afis: "https://i.pinimg.com/736x/4c/db/44/4cdb44e59aefec0d8f7fb820711b9bee.jpg" },
    { title: "Beautiology 101", year: "2016", cast: "Kim Jae Young", afis: "https://i.pinimg.com/736x/5f/a8/29/5fa8298f393a4f140c9f6806f8bf681c.jpg" },
    { title: "Because This is My First Life", year: "2017", cast: "Lee Min Ki, Kim Min Gyu", afis: "" },
    { title: "Behind Your Touch", year: "2023", cast: "Kim Jun Myeon, Lee Min Ki", afis: "https://i.pinimg.com/736x/21/65/dc/2165dcfc520354add7d4cce5a43938aa.jpg" },
    { title: "Black Knight: The Man Who Guards Me", year: "2018", cast: "Kim Rae Won", afis: "" },
    { title: "Blood", year: "2015", cast: "Ahn Jae Hyun, Jung Hae In", afis: "" },
    { title: "Bloodhounds", year: "2023", cast: "Woo Do Hwan", afis: "" },
    { title: "Blue Birthday", year: "2021", cast: "Yang Hong Seok", afis: "" },
    { title: "Bo-ra! Deborah", year: "2023", cast: "Yoon Hyun Min", afis: "" },
    { title: "Boss-dol Mart", year: "2023", cast: "Kim Min Seok", afis: "" },
    { title: "Boyfriend Milk", year: "2017", cast: "ASTRO", afis: "" },
    { title: "Boys Over Flowers", year: "2009", cast: "Lee Min Ho, Kim Bum", afis: "" },
    { title: "Business Proposal", year: "2022", cast: "Ahn Yeo Seop, Kim Min Gyu", afis: "https://i.pinimg.com/736x/98/de/3d/98de3dc7cffa6f88c36d0ca0640b3f6f.jpg" },
    { title: "Busted", year: "2018", cast: "Oh Sehun, Lee Seung Gi", afis: "" },
    { title: "Castaway Diva", year: "2023", cast: "Chae Jong Hyeop", afis: "" },
    { title: "Casting a Spell to You", year: "2021", cast: "Sung Joon", afis: "" },
    { title: "Catch the Ghost", year: "2019", cast: "Kim Seon Ho", afis: "" },
    { title: "Celebrity", year: "2023", cast: "Kang Min Hyuk", afis: "" },
    { title: "Cheer Up", year: "2022", cast: "Bae In Hyuk", afis: "" },
    { title: "Cheese in the Trap", year: "2016", cast: "Park Hae Jin, Seo Kang Joon", afis: "" },
    { title: "Choco Bank", year: "2016", cast: "Kim Jong In", afis: "" },
    { title: "Cinderella and the Four Knights", year: "2016", cast: "Jung Il Woo", afis: "" },
    { title: "Clean With Passion For Now", year: "2018", cast: "Yoon Kyun Sang", afis: "" },
    { title: "Click Your Heart", year: "2016", cast: "Rowoon", afis: "" },
    { title: "Coffee Prince", year: "2007", cast: "Gong Yoo", afis: "" },
    { title: "Come and Hug Me", year: "2018", cast: "Jang Ki Young", afis: "" },
    { title: "Crash Landing On You", year: "2019", cast: "Hyun Bin", afis: "" },
    { title: "Crazy Love", year: "2022", cast: "Lee Jae Wook", afis: "" },
    { title: "D-Day", year: "2015", cast: "Kim Young Kwang, Ha Seok Jin", afis: "" },
    { title: "Daily Dose of Sunshine", year: "2023", cast: "Yeon Woo Jin, Jang Dong Yoon", afis: "" },
    { title: "Dali and Cocky Prince", year: "2021", cast: "Kim Min Jae", afis: "" },
    { title: "Descendants of the Sun", year: "2016", cast: "Song Joong Ki, Ahn Bo Hyun", afis: "" },
    { title: "Destined with You", year: "2023", cast: "Rowoon", afis: "" },
    { title: "Devilish Joy", year: "2018", cast: "Choi Jin Hyuk", afis: "" },
    { title: "Devil's Diary", year: "2016", cast: "Han Joo Wan", afis: "" },
    { title: "Do Do Sol Sol La La Sol", year: "2020", cast: "Lee Jae Wook", afis: "" },
    { title: "Doctor Stranger", year: "2014", cast: "Lee Jong Seok, Park Hae Jin", afis: "https://i.pinimg.com/736x/24/af/a1/24afa1e69715ff961c772b4197ea150d.jpg" },
    { title: "Doctors", year: "2016", cast: "Kim Rae Won", afis: "https://i.pinimg.com/736x/7a/ec/7a/7aec7a4cbb8a89860c42ea326fc17902.jpg" },
    { title: "Dokgo Rewind", year: "2018", cast: "Oh Sehun, Ahn Bo Hyun", afis: "" },
    { title: "Don't Dare to Dream", year: "2016", cast: "Jo Jung Seok", afis: "" },
    { title: "Doom at Your Service", year: "2021", cast: "Seo In Guk, Kang Tae Oh", afis: "https://i.pinimg.com/736x/5f/aa/71/5faa7178e1c4cb3a482c43797f9c3509.jpg" },
    { title: "Dr. lan", year: "2015", cast: "Kim Young Kwang", afis: "" },
    { title: "Dream Knight", year: "2015", cast: "GOT7", afis: "" },
    { title: "Dreaming of a Freaking Fairytale", year: "2024", cast: "Lee Jun Young", afis: "" },
    { title: "Emergency Couple", year: "2014", cast: "Choi Jin Hyuk", afis: "" },
    { title: "Ending Again", year: "2020", cast: "Kim Geon Won", afis: "https://i.pinimg.com/736x/4c/63/4f/4c634f138aa43eb74311e16c9571b761.jpg" },
    { title: "Eulachacha Waikiki", year: "2018", cast: "Kim Jong Hyun, Lee Yi Kyung", afis: "" },
    { title: "EXO Next Door", year: "2015", cast: "EXO", afis: "https://i.pinimg.com/736x/80/24/6c/80246c52b56c583a696095da827565b6.jpg" },
    { title: "Extraordinary Attorney Woo", year: "2022", cast: "Kang Tae Oh", afis: "https://i.pinimg.com/736x/7f/43/7d/7f437d98f70472be2ea8a0d17bfb5af4.jpg" },
    { title: "Extraordinary You", year: "2019", cast: "Rowoon", afis: "" },
    { title: "Falling For Challenge", year: "2015", cast: "Kim Min Seok", afis: "" },
    { title: "Family by Choice", year: "2024", cast: "Hwang In Yeop", afis: "https://i.pinimg.com/736x/aa/ed/ed/aaeded43727bd604fbe39c600514da82.jpg" },
    { title: "Fated to Love You", year: "2014", cast: "Jang Hyuk", afis: "" },
    { title: "Fight For My Way", year: "2017", cast: "Park Seo Joon", afis: "" },
    { title: "Forecasting Love and Weather", year: "2022", cast: "Song Kang", afis: "" },
    { title: "Forest", year: "2020", cast: "Park Hae Jin", afis: "" },
    { title: "Frankly Speaking", year: "2024", cast: "Ko Kyung Pyo", afis: "" },
    { title: "Freshman", year: "2019", cast: "Hwang In Yeop", afis: "" },
    { title: "From Now, Showtime!", year: "2022", cast: "Park Hae Jin", afis: "" },
    { title: "Ga Doo Ri's Sushi Restaurant", year: "2020", cast: "Hyuk", afis: "" },
    { title: "Gaus Electronics", year: "2022", cast: "Kwak Dong Yeon", afis: "" },
    { title: "Ghost Doctor", year: "2022", cast: "Rain, Kim Bum", afis: "https://i.pinimg.com/736x/dd/e1/9b/dde19baeb2553fb4a3c5a56206c43465.jpg" },
    { title: "Go Back Couple", year: "2017", cast: "Son Ho Jun, Jang Ki Yong", afis: "" },
    { title: "Go Back Diary", year: "2018", cast: "Lee Jong Won", afis: "" },
    { title: "Gogh The Starry Night", year: "2016", cast: "Kim Young Kwang", afis: "" },
    { title: "Good Boy", year: "2025", cast: "Park Bo Gum", afis: "" },
    { title: "Happiness", year: "2021", cast: "Park Hyung Sik", afis: "https://i.pinimg.com/736x/df/5c/ad/df5cad58fe2c9a2d69923c70053d1576.jpg" },
    { title: "He is Psychometric", year: "2019", cast: "Park Jin Young", afis: "https://i.pinimg.com/736x/e9/c4/33/e9c433628f9ecdd3396d24e84c142066.jpg" },
    { title: "Head Over Heels", year: "2025", cast: "Choo Young Woo", afis: "" },
    { title: "Healer", year: "2014", cast: "Ji Chang Wook", afis: "" },
    { title: "Heartbeat", year: "2023", cast: "Taecyeon", afis: "" },
    { title: "Heavenly Idol", year: "2023", cast: "Kim Min Gyu", afis: "https://i.pinimg.com/736x/14/c6/21/14c6212081a43f2d6dbdff9e1a08197c.jpg" },
    { title: "Her Lovely Heels", year: "2014", cast: "Hong Jong Hyun", afis: "" },
    { title: "Her Private Life", year: "2019", cast: "Kim Jae Wook, Ahn Bo Hyun", afis: "" },
    { title: "High And Crush", year: "2015", cast: "Jung Il Woo", afis: "" },
    { title: "Hit The Spot", year: "2022", cast: "Park Sun Ho", afis: "" },
    { title: "Hometown Cha Cha Cha", year: "2021", cast: "Kim Seon Ho, Lee Sang Yi", afis: "https://i.pinimg.com/736x/2b/27/60/2b2760111d5902232fd5ec0bb55fa98f.jpg" },
    { title: "Hospital Playlist", year: "2020", cast: "Yoo Yeon Seok, Jo Jung Seok", afis: "" },
    { title: "Hot and Sweet", year: "2016", cast: "Choi Min Hwan", afis: "" },
    { title: "Hotel Del Luna", year: "2019", cast: "Yeo Jin Goo", afis: "" },
    { title: "How Are You Bread", year: "2020", cast: "Kim Jun Myeon", afis: "" },
    { title: "Hyde, Jekyll, Me", year: "2015", cast: "Hyun Bin, Sung Joon", afis: "" },
    { title: "I Can See Your MBTI", year: "2021", cast: "Hyunjae", afis: "" },
    { title: "If You Wish Upon Me", year: "2022", cast: "Ji Chang Wook", afis: "" },
    { title: "I'm not a Robot", year: "2017", cast: "Yoo Seung Ho", afis: "https://i.pinimg.com/736x/e2/c3/83/e2c383972beb2d3fdf5e4923367ef7b3.jpg" },
    { title: "Imitation", year: "2021", cast: "Lee Jun Young, Yun Ho", afis: "https://i.pinimg.com/736x/7e/2b/ff/7e2bff70cf077749a8dc6c7f33498f17.jpg" },
    { title: "Iron Family", year: "2024", cast: "Kim Jung Hyun", afis: "" },
    { title: "Itaewon Class", year: "2020", cast: "Park Seo Joon, Ahn Bo Hyun", afis: "" },
    { title: "It's Okay That's Love", year: "2014", cast: "Jo In Sung, Doh Kyung Soo", afis: "" },
    { title: "It's Okay to Not Be Okay", year: "2020", cast: "Kim Soo Hyun", afis: "" },
    { title: "Jugglers", year: "2017", cast: "Choi Daniel", afis: "" },
    { title: "Jumping Girl", year: "2015", cast: "U-Kwon", afis: "" },
    { title: "Just Between Lovers", year: "2017", cast: "Lee Jun Ho", afis: "" },
    { title: "Kara: Secret Love - Missing You", year: "2014", cast: "Yeon Woo Jin", afis: "" },
    { title: "Kara: Secret Love - 13th Bucket List", year: "2014", cast: "Kim Young Kwang", afis: "" },
    { title: "Kara: Secret Love - Lilac", year: "2014", cast: "Bae Soo Bin", afis: "" },
    { title: "Kara: Secret Love - A Seven Day Summer", year: "2014", cast: "Lee Kwang Soo", afis: "" },
    { title: "Kara: Secret Love - Coffee With An Angel?", year: "2014", cast: "Ji Chang Wook", afis: "" },
    { title: "Kill Me, Heal Me", year: "2015", cast: "Ji Sung, Park Seo Joon", afis: "" },
    { title: "King the Land", year: "2023", cast: "Lee Jun Ho", afis: "https://i.pinimg.com/736x/b5/ce/5c/b5ce5c0e6e1e6e5def56e5f09f5edae4.jpg" },
    { title: "Kiss Goblin", year: "2020", cast: "Bae In Hyuk", afis: "https://i.pinimg.com/736x/f2/15/25/f215258d6538d4eddbf5a8d312bfa7cc.jpg" },
    { title: "Kiss Sixth Sense", year: "2022", cast: "Yoon Gye Sang", afis: "" },
    { title: "Last Minute Romance", year: "2017", cast: "Lee Seo-won", afis: "" },
    { title: "LCDP: Korea", year: "2022", cast: "Lee Hyun Woo", afis: "" },
    { title: "Legally Dad", year: "2020", cast: "Choi Kyung Hoon", afis: "" },
    { title: "Let's Eat", year: "2018", cast: "Yoon Doo Joon", afis: "" },
    { title: "Let's Fight Ghost", year: "2016", cast: "Taecyeon", afis: "https://i.pinimg.com/1200x/2a/a8/89/2aa889d7527793443dcbccd54bab7b8b.jpg" },
    { title: "Level Up!", year: "2019", cast: "Sung Hoon", afis: "" },
    { title: "Lie to Me", year: "2011", cast: "Kang Ji Hwan, Sung Joon", afis: "" },
    { title: "Line Romance", year: "2014", cast: "Lee Min Ho", afis: "" },
    { title: "Link: Eat, Love, Die", year: "2022", cast: "Yeo Jin Goo, Hong Jung Hyun", afis: "" },
    { title: "Live On", year: "2020", cast: "Hwang Minhyun", afis: "" },
    { title: "Longing for Spring", year: "2014", cast: "Lee Won Geun", afis: "" },
    { title: "Love & Wish", year: "2021", cast: "Youngjae", afis: "" },
    { title: "Love Alarm", year: "2019", cast: "Song Kang", afis: "https://i.pinimg.com/736x/0f/32/86/0f328682e1961f57bdb8351bdf41f3e2.jpg" },
    { title: "Love All Play", year: "2022", cast: "Chae Jong Hyeop", afis: "" },
    { title: "Love in Contract", year: "2022", cast: "Ko Kyung Pyo, Kim Jae Young", afis: "https://i.pinimg.com/736x/20/61/ca/2061cac2fbb33da097fb8186a16b1533.jpg" },
    { title: "Love in the Moonlight", year: "2016", cast: "Park Bo Gum", afis: "" },
    { title: "Love is for Suckers", year: "2022", cast: "Choi Siwon", afis: "" },
    { title: "Love Next Door", year: "2024", cast: "Jung Hae In", afis: "https://i.pinimg.com/736x/4e/b0/cc/4eb0cca0421cfbc83cf808125551f1d4.jpg" },
    { title: "Love Playlist", year: "2017", cast: "Kim Hyung Suk", afis: "" },
    { title: "Love Scout", year: "2025", cast: "Lee Jun Hyuk", afis: "" },
    { title: "Love to Hate You", year: "2023", cast: "Tae Yoo", afis: "" },
    { title: "Love with Flaws", year: "2019", cast: "Ahn Jae Hyun", afis: "" },
    { title: "Love Your Enemy", year: "2024", cast: "Ju Ji Hoon", afis: "" },
    { title: "Lovely Runner", year: "2024", cast: "Byeon Woo Seok", afis: "https://i.pinimg.com/1200x/a8/9a/c7/a89ac7afb079b8744cab52e52c0c89ab.jpg" },
    { title: "Lovers of the Red Sky", year: "2021", cast: "Ahn Hyo Seop", afis: "" },
    { title: "Lovestruck in the City", year: "2020", cast: "Ji Chang Wook", afis: "" },
    { title: "Lunch Box", year: "2015", cast: "Ji Soo", afis: "" },
    { title: "Mad For Each Other", year: "2021", cast: "Jung Woo", afis: "" },
    { title: "Magic Phone", year: "2016", cast: "Kim Jin Woo", afis: "" },
    { title: "Man to Man", year: "2017", cast: "Park Hae Jin", afis: "" },
    { title: "Marriage Contract", year: "2016", cast: "Lee Seo Jin", afis: "" },
    { title: "Marriage, not Dating!", year: "2014", cast: "Yeon Woo Jin", afis: "" },
    { title: "Marry My Husband", year: "2024", cast: "Na In Woo, Lee Yi Kyung", afis: "" },
    { title: "May I Help You?", year: "2022", cast: "Lee Jun Young", afis: "" },
    { title: "Melting Me Softly", year: "2019", cast: "Ji Chang Wook", afis: "" },
    { title: "Meow, the Secret Boy", year: "2020", cast: "Kim Myung Soo", afis: "" },
    { title: "Mine", year: "2021", cast: "Cha Hakyeon", afis: "" },
    { title: "Miss Independent Ji Eun", year: "2018", cast: "Cha In Ha", afis: "" },
    { title: "Moment of Eighteen", year: "2019", cast: "Ong Seung Woo", afis: "" },
    { title: "Moon Lovers: Scarlet Heart Ryeo", year: "2016", cast: "Byun Baekhyun, Lee Jung Gi", afis: "https://i.pinimg.com/736x/7a/c8/84/7ac8847bf3ddb37bd135511489de047b.jpg" },
    { title: "More Than Friends", year: "2020", cast: "Ong Seong Wu", afis: "" },
    { title: "Mouse", year: "2021", cast: "Lee Seung Gi", afis: "" },
    { title: "Mr. Plankton", year: "2024", cast: "Woo Do Hwan", afis: "https://i.pinimg.com/736x/a7/6e/e3/a76ee31ebaf723f0625b06c77dd68ae3.jpg" },
    { title: "Mr. Queen", year: "2020", cast: "Kim Jung Hyun", afis: "" },
    { title: "My Absolute Boyfriend", year: "2019", cast: "Yoo Jin Goo, Hong Jong Hyun", afis: "" },
    { title: "My Dearest Nemesis", year: "2025", cast: "Choi Hyun Wook", afis: "" },
    { title: "My Demon", year: "2023", cast: "Song Kang, Lee Sang Yi", afis: "https://i.pinimg.com/736x/7c/ba/96/7cba96fcad222149ca352b7aa9d3e5b9.jpg" },
    { title: "My First First Love", year: "2019", cast: "Ji Soo", afis: "" },
    { title: "My Girlfriend is a Gumiho", year: "2010", cast: "Lee Seung Gi", afis: "" },
    { title: "My Holo Love", year: "2020", cast: "Yoon Hyun Min", afis: "https://i.pinimg.com/1200x/65/4f/f5/654ff530119a8d9d920e7e7ded695801.jpg" },
    { title: "My ID is Gangnam Beauty", year: "2018", cast: "Cha Eun Woo", afis: "" },
    { title: "My Love From The Star", year: "2013", cast: "Kim Soo Hyun, Park Hae Jin", afis: "" },
    { title: "My Lovely Liar", year: "2023", cast: "Hwang Min Hyun", afis: "https://i.pinimg.com/736x/e0/b1/79/e0b179599a4c15b1790ba8eb668dccb1.jpg" },
    { title: "My Name", year: "2021", cast: "Ahn Bo Hyun", afis: "" },
    { title: "My Roommate is a Gumiho", year: "2021", cast: "Jang Ki Young, Bae In Hyuk", afis: "https://i.pinimg.com/736x/43/24/bf/4324bf4c1765085fda4fce921dbefe1b.jpg" },
    { title: "My Secret Romance", year: "2017", cast: "Sung Hoon, Kim Jae Young", afis: "" },
    { title: "My Shy Boss", year: "2017", cast: "Yeon Woo Jin", afis: "" },
    { title: "My Strange Hero", year: "2018", cast: "Yoo Seung Ho", afis: "" },
    { title: "My Sweet Mobster", year: "2024", cast: "Uhm Tae Goo", afis: "https://i.pinimg.com/736x/34/08/9e/34089e7c36f5caf1d4a08cf0fe1a587b.jpg" },
    { title: "Nevertheless", year: "2021", cast: "Song Kang", afis: "" },
    { title: "No Gain No Love", year: "2024", cast: "Kim Young Dae", afis: "" },
    { title: "Noble, My Love", year: "2015", cast: "Sung Hoon", afis: "" },
    { title: "Not Yet Thirty", year: "2021", cast: "Kang Min Hyuk", afis: "" },
    { title: "Office Watch", year: "2017", cast: "Kang Hoon", afis: "" },
    { title: "Oh My Ghost!", year: "2015", cast: "Jo Jung Seok", afis: "" },
    { title: "Oh My Venus!", year: "2015", cast: "So Ji Sub", afis: "" },
    { title: "Oh! Master", year: "2021", cast: "Lee Min Ki", afis: "" },
    { title: "Once Upon a Small Town", year: "2022", cast: "Choo Young Woo", afis: "" },
    { title: "One Spring Night", year: "2019", cast: "Jung Hae In", afis: "" },
    { title: "Our Beloved Summer", year: "2021", cast: "Choi Woo Sik", afis: "" },
    { title: "Perfect Marriage Revenge", year: "2023", cast: "Sung Hoon", afis: "" },
    { title: "Perfume", year: "2019", cast: "Shin Sung Rok, Kim Min Gyu", afis: "" },
    { title: "Persona", year: "2019", cast: "Park Hae Soo", afis: "" },
    { title: "Personal Taste", year: "2010", cast: "Lee Min Ho", afis: "" },
    { title: "Playfull Kiss", year: "2010", cast: "Kim Hyun Joong", afis: "" },
    { title: "Please Don't Date Him", year: "2020", cast: "Lee Jun Young", afis: "" },
    { title: "Please, Summer!", year: "2020", cast: "Kim Kang Min", afis: "" },
    { title: "Plus Nine Boys", year: "2014", cast: "Kim Young Kwang", afis: "" },
    { title: "Pool Ha-Woo-Seu", year: "2004", cast: "Rain", afis: "" },
    { title: "Pop Out Boy!", year: "2020", cast: "Kim Min Kyu", afis: "" },
    { title: "Princess Hours", year: "2006", cast: "Ju Ji Hoon", afis: "" },
    { title: "Private Lives", year: "2020", cast: "Ko Kyung Pyo", afis: "" },
    { title: "Queen of Tears", year: "2024", cast: "Kim Soo Hyun", afis: "https://i.pinimg.com/736x/52/18/63/5218639607d02b25218501c270020574.jpg" },
    { title: "Queen of the Ring", year: "2017", cast: "Ahn Hyo Seop", afis: "" },
    { title: "Radio Romance", year: "2018", cast: "Yoon Doo Joon", afis: "" },
    { title: "Record of Youth", year: "2020", cast: "Park Bo Gum, Byeon Woo Seok", afis: "" },
    { title: "Revenge of Others", year: "2022", cast: "Park Solomon", afis: "https://i.pinimg.com/736x/a5/71/1f/a5711f08241a1b36154e5b42e8f6b488.jpg" },
    { title: "Rich Man Poor Woman", year: "2018", cast: "Kim Jun Myeon", afis: "" },
    { title: "Risky Romance", year: "2018", cast: "Ji Hyun Woo", afis: "" },
    { title: "Romance is a Bonus Book", year: "2019", cast: "Lee Jong Seok, Wi Ha Joon", afis: "" },
    { title: "Romance Special Law", year: "2017", cast: "Kim Min Gyu", afis: "" },
    { title: "Romance Talking", year: "2020", cast: "Choi Kyung Hoon", afis: "" },
    { title: "Romantic Doctor, Teacher Kim", year: "2016", cast: "Yoo Yeon Seok, Ahn Hyo Seop", afis: "" },
    { title: "Rookie Cops", year: "2022", cast: "Kang Daniel", afis: "" },
    { title: "Run On", year: "2020", cast: "Im Siwan, Kang Tae Oh", afis: "" },
    { title: "S Line", year: "2025", cast: "Lee Soo Hyuk", afis: "" },
    { title: "Sassy Go Go!", year: "2015", cast: "Lee Won Geun", afis: "" },
    { title: "School 2017", year: "2017", cast: "Kim Jung Hyun, Jang Dong Yoon", afis: "" },
    { title: "School 2021", year: "2021", cast: "Kim Yohan, Choo Young Woo", afis: "" },
    { title: "Search WWW", year: "2019", cast: "Jang Ki Yong, Lee Jae Wook", afis: "" },
    { title: "Secret Garden", year: "2010", cast: "Hyun Bin", afis: "" },
    { title: "Secret Queen Makers", year: "2018", cast: "My Loves", afis: "" },
    { title: "See You in My 19th Life", year: "2023", cast: "Ahn Bo Hyun", afis: "" },
    { title: "Serendipity's Embrace", year: "2024", cast: "Chae Jong Hyeop", afis: "" },
    { title: "Seven First Kisses", year: "2016", cast: "My Loves", afis: "" },
    { title: "Seventeen", year: "2017", cast: "Kim Do Wan", afis: "" },
    { title: "Sh**ting Stars", year: "2022", cast: "Kim Young Dae, Shin Hyun Seung", afis: "" },
    { title: "She Was Pretty", year: "2015", cast: "Park Seo Joon, Choi Siwon", afis: "" },
    { title: "She Would Never Know", year: "2021", cast: "Rowoon", afis: "" },
    { title: "Shine Go Back", year: "2018", cast: "Park Hae Jin", afis: "" },
    { title: "Shopping King Louis", year: "2016", cast: "Seo In Guk", afis: "" },
    { title: "Single's Inferno", year: "2021", cast: "program", afis: "" },
    { title: "Snowdrop", year: "2021", cast: "Jung Hae In, Jang Seung Jo", afis: "" },
    { title: "So I Married An Anti Fan", year: "2021", cast: "Choi Tae Joon, Kim Min Gyu", afis: "" },
    { title: "So Not Worth It", year: "2021", cast: "Youngjae, Shin Hyun Seung", afis: "" },
    { title: "Society Obsessed with Love", year: "2018", cast: "Kim Young Jae", afis: "" },
    { title: "Something About 1%", year: "2016", cast: "Ha Seok Jin", afis: "" },
    { title: "Something in the Rain", year: "2018", cast: "Jung Hae In, Wi Ha Joon", afis: "" },
    { title: "Soundtrack #1", year: "2022", cast: "Park Hyung Sik", afis: "" },
    { title: "Spice Up Our Love", year: "2024", cast: "Lee Sang Yi", afis: "" },
    { title: "Splash Splash Love", year: "2015", cast: "Yoon Doo Joon", afis: "" },
    { title: "Squid Game", year: "2021", cast: "Wi Ha Joon, Kang Ha Neul", afis: "https://i.pinimg.com/736x/69/24/d4/6924d4d4a7fab170daeda8a36eab5030.jpg" },
    { title: "Start Love", year: "2015", cast: "Kim Kyu Jong", afis: "" },
    { title: "Start Up", year: "2020", cast: "Nam Joo Hyuk, Kim Seon Ho", afis: "" },
    { title: "Still 17", year: "2018", cast: "Yang Se Jong, Ahn Hyo Seop", afis: "" },
    { title: "Strangers Again", year: "2023", cast: "Jang Seung Jo", afis: "" },
    { title: "Strangers from Hell", year: "2019", cast: "Im Siwan, Lee Dong Wook", afis: "" },
    { title: "Strong Girl Nam-soon", year: "2023", cast: "Ong Seong Wu, Byeon Woo Seok", afis: "https://i.pinimg.com/736x/76/87/f1/7687f1e274269e8de559573e2cc5918b.jpg" },
    { title: "Strong Woman Do Bong Soon", year: "2017", cast: "Park Hyung Sik, Ji Soo", afis: "https://i.pinimg.com/1200x/fa/2f/32/fa2f32972bb0b687f76d56472a666328.jpg" },
    { title: "Strongest Deliveryman", year: "2017", cast: "Ko Kyung Pyo, Kim Seon Ho", afis: "" },
    { title: "Summer Love", year: "2015", cast: "Lee Min Ho", afis: "" },
    { title: "Summer Strike", year: "2022", cast: "Im Siwan", afis: "" },
    { title: "Suspicious Partner", year: "2017", cast: "Ji Chang Wook, Choi Tae Joon", afis: "" },
    { title: "Tale of the Nine Tailed", year: "2020", cast: "Lee Dong Wook, Kim Bum", afis: "https://i.pinimg.com/1200x/c7/23/44/c72344ddf235dc9c4dca9b95530dbbea.jpg" },
    { title: "Taste of Cat", year: "2018", cast: "Kim Wook", afis: "" },
    { title: "Tastefully Yours", year: "2025", cast: "Kang Ha Neul", afis: "" },
    { title: "Temperature of Love", year: "2017", cast: "Yang Se Jong, Lee Jae Wook", afis: "" },
    { title: "Tempted", year: "2018", cast: "Woo Do Hwan, Kim Min Jae", afis: "" },
    { title: "That Man Oh Soo", year: "2018", cast: "Lee Jung Hyun, Kang Tae Oh", afis: "" },
    { title: "That Winter, The Wind Blows", year: "2013", cast: "Jo In Sung", afis: "" },
    { title: "The Alchemist", year: "2015", cast: "Han Ki Woong", afis: "" },
    { title: "The Beauty Inside", year: "2018", cast: "Lee Min Ki, Ahn Jae Hyun", afis: "" },
    { title: "The Best Hit", year: "2017", cast: "Yoon Shi Yoon, Kim Min Jae", afis: "" },
    { title: "The Bride of Habaek", year: "2017", cast: "Nam Joo Hyuk", afis: "" },
    { title: "The Day After We Broke Up", year: "2016", cast: "Kim Myung Soo", afis: "" },
    { title: "The Fabulous", year: "2022", cast: "Choi Min Ho", afis: "" },
    { title: "The Girl Who Sees Scents", year: "2015", cast: "Park Yoo Chun", afis: "https://i.pinimg.com/736x/1d/f5/6d/1df56db893bb35cf06b7167bf9eb95ae.jpg" },
    { title: "The Good Bad Mother", year: "2023", cast: "Lee Do Hyun", afis: "" },
    { title: "The Heirs", year: "2013", cast: "Lee Min Ho, Kim Woo Bin", afis: "" },
    { title: "The Interest of Love", year: "2022", cast: "Yoo Yeon Seok", afis: "" },
    { title: "The K2", year: "2016", cast: "Ji Chang Wook", afis: "" },
    { title: "The King: Eternal Monarch", year: "2020", cast: "Lee Min Ho, Woo Do Hwan", afis: "" },
    { title: "The Law Café", year: "2022", cast: "Lee Seung Gi", afis: "" },
    { title: "The Legend of the Blue Sea", year: "2016", cast: "Lee Min Ho", afis: "" },
    { title: "The Liar and His Lover", year: "2017", cast: "Lee Hyun Woo", afis: "" },
    { title: "The Man's Voice", year: "2021", cast: "Choi Tae Joon", afis: "" },
    { title: "The Mermaid Prince: Begining", year: "2020", cast: "Moonbin", afis: "" },
    { title: "The Potat Lab", year: "2025", cast: "", afis: "" },
    { title: "The School Nurse Files", year: "2020", cast: "Nam Joo Hyuk", afis: "" },
    { title: "The Secret Life Of My Secretary", year: "2019", cast: "Kim Young Kwang", afis: "" },
    { title: "The Smile Has Left Your Eyes", year: "2018", cast: "Seo In Guk", afis: "" },
    { title: "The Sound of Your Heart: Reboot", year: "2018", cast: "Sung Hoon", afis: "" },
    { title: "The Story of Park's Marriage Contract", year: "2023", cast: "Bae In Hyuk", afis: "https://i.pinimg.com/736x/b2/c3/9d/b2c39dbc4da6ada9cac96b0d4c56287b.jpg" },
    { title: "The Tale of Nokdu", year: "2019", cast: "Jang Dong Yoon, Kang Tae Oh", afis: "" },
    { title: "The Trauma Code: Heroes on Call", year: "2025", cast: "Ju Ji Hoon, Choo Young Wo0", afis: "" },
    { title: "The Trunk", year: "2024", cast: "Gong Yoo", afis: "" },
    { title: "The Universe's Star", year: "2017", cast: "Kim Jun Myeon", afis: "" },
    { title: "The Way I Hate You", year: "2019", cast: "Jaemin", afis: "" },
    { title: "Third Charm", year: "2018", cast: "Seo Kang Joon", afis: "" },
    { title: "Thumpink Spike", year: "2016", cast: "Song Jae Rim", afis: "" },
    { title: "To Be Continued", year: "2015", cast: "ASTRO", afis: "" },
    { title: "To World of My 17", year: "2020", cast: "Ryeo Un", afis: "" },
    { title: "Touch", year: "2020", cast: "Joo Sang Wook", afis: "" },
    { title: "Touch Me If You Can", year: "2020", cast: "Yoon Seo Bin", afis: "" },
    { title: "Touch Your Heart", year: "2019", cast: "Lee Dong Wook", afis: "" },
    { title: "Touching You", year: "2016", cast: "Taecyeon", afis: "" },
    { title: "Trap", year: "2020", cast: "Choi Kyung Hoon", afis: "" },
    { title: "True Beauty", year: "2020", cast: "Cha Eun Woo, Hwang In Yeop", afis: "https://i.pinimg.com/736x/59/e5/d3/59e5d3c798b935b1464bbdfb7c4ca655.jpg" },
    { title: "Twenty-Five, Twenty-One", year: "2022", cast: "Nam Joo Hyuk", afis: "https://i.pinimg.com/1200x/cb/7c/f7/cb7cf7b704132eb19fa29a5749ab4b8e.jpg" },
    { title: "Uncontrollably Fond", year: "2016", cast: "Kim Woo Bin", afis: "" },
    { title: "Vagabond", year: "2019", cast: "Lee Seung Gi", afis: "" },
    { title: "Vampire Flower", year: "2014", cast: "Seo Jae Hyung", afis: "" },
    { title: "Vincenzo", year: "2021", cast: "Song Joong Ki, Taecyeon", afis: "https://i.pinimg.com/736x/e5/94/43/e59443f3677fc7d3acae07c63a6a77a7.jpg" },
    { title: "W-Two Wordls", year: "2016", cast: "Lee Jong Seok", afis: "" },
    { title: "Want More 19", year: "2018", cast: "Nam Yoon Soo", afis: "" },
    { title: "Weak Hero Class", year: "2022", cast: "Park Ji Hoon", afis: "https://i.pinimg.com/1200x/fe/80/aa/fe80aaa415c7ad6a7e715bd4807517b0.jpg" },
    { title: "Wedding Impossible", year: "2024", cast: "Moon Sang Min, Kim Do Wan", afis: "" },
    { title: "Wednesday 3.30 PM", year: "2017", cast: "Hongbin, Ahn Bo Hyun", afis: "" },
    { title: "Weightlifting Fairy Kim Bok Joo", year: "2016", cast: "Nam Joo Hyuk", afis: "" },
    { title: "Welcome to Samdal-ri", year: "2023", cast: "Ji Chang Wook", afis: "" },
    { title: "When Life Gives You Tangerines", year: "2025", cast: "Park Bu Gum", afis: "" },
    { title: "When the Camellia Blooms", year: "2019", cast: "Kang Ha Neul", afis: "" },
    { title: "When the Phone Rings", year: "2024", cast: "Yoo Yeon Seok", afis: "https://i.pinimg.com/736x/e4/26/04/e426040780b99c38208a4b229abe3dbe.jpg" },
    { title: "When the Weather is Fine", year: "2020", cast: "Seo Kang Joon", afis: "" },
    { title: "Where Stars Land", year: "2018", cast: "Lee Je Hoon", afis: "" },
    { title: "While You Were Sleeping", year: "2017", cast: "Lee Jong Seok, Jung Hae In", afis: "" },
    { title: "Who Kissed Me?", year: "2019", cast: "Bae In Hyuk", afis: "" },
    { title: "Why Secretary Kim", year: "2018", cast: "Park Seo Joon", afis: "" },
    { title: "Will Be Okay, Never Die", year: "2019", cast: "Kang Yul", afis: "" },
    { title: "Witch's Love", year: "2018", cast: "Hyun Woo", afis: "" },
    { title: "Wok of Love", year: "2018", cast: "Lee Jun Ho, Jung Hyuk", afis: "" },
    { title: "Woori The Virgin", year: "2022", cast: "Sung Hoon", afis: "" },
    { title: "Work Later, Drink Now", year: "2021", cast: "Siwon", afis: "" },
    { title: "Yes or No", year: "2019", cast: "Kim Kang Min", afis: "" },
    { title: "You Are My Spring", year: "2021", cast: "Kim Dong Wook", afis: "" },
    { title: "You Drive Me Crazy", year: "2018", cast: "Kim Seon Ho", afis: "" },
    { title: "Youth MT", year: "2022", cast: "My Loves", afis: "" },
    { title: "Youth of May", year: "2021", cast: "Lee Do Hyun, Lee Sang Yi", afis: "" },
    { title: "Yumi's Cell", year: "2021", cast: "Ahn Bo Hyun, Park Jin Young", afis: "https://i.pinimg.com/1200x/0c/44/f3/0c44f318576e75afcdc1c0d534ab023e.jpg" }
];

document.addEventListener('DOMContentLoaded', () => {
    const wordGrid = document.getElementById('wordGrid');
    const searchWrapper = document.getElementById('searchWrapper');
    const searchInput = document.getElementById('searchInput');
    const categoryButtons = document.getElementById('categoryButtons');
    const mainMenu = document.getElementById('mainMenu');

    // 1. MODÜL BAŞLATICI ✨
    window.startModule = function(moduleType) {
        mainMenu.style.display = "none";
        // Arama çubuğunu 'words' ve 'kdrama' modüllerinde gösteriyoruz.
        searchWrapper.style.display = (moduleType === 'words' || moduleType === 'kdrama') ? "flex" : "none";
        wordGrid.innerHTML = "";
        searchInput.value = ""; // Modül değişince aramayı temizle
        
        if (moduleType === 'alphabet') displayWords("", "🇰🇷 HANGUL ALFABESİ");
        else if (moduleType === 'words') displayCategoryMenu();
        else if (moduleType === 'numbers') displayWords("", "🔢 SAYILAR");
        else if (moduleType === 'random') displayRandomWords();
        else if (moduleType === 'kdrama') displayKdramas();
        else if (moduleType === 'kpop') displayKpop(); // Eksik fonksiyon eklendi
    };

    // 2. KATEGORİ SEÇİM MENÜSÜ ✨
    function displayCategoryMenu() {
        wordGrid.innerHTML = "";
        wordGrid.className = "category-grid-layout"; 
        categoryButtons.innerHTML = `<button class="cat-btn" onclick="goHome()">⬅️ Ana Menü</button>`;
        
        for (const cat in allWords) {
            if (cat === "🇰🇷 HANGUL ALFABESİ" || cat === "🔢 SAYILAR") continue;
            const catCard = document.createElement('div');
            catCard.className = 'category-item-card animate-in';
            catCard.innerHTML = `
                <h3>${cat}</h3>
                <p style="font-size:0.8rem; opacity:0.7; margin-top:5px;">${allWords[cat].length} Kelime</p>
            `;
            catCard.onclick = () => {
                wordGrid.className = "word-grid";
                displayWords("", cat);
            };
            wordGrid.appendChild(catCard);
        }
    }

    // 3. KELİME GÖSTERİMİ VE FİLTRELEME ✨
    window.displayWords = function(searchTerm = "", selectedCategory) {
        wordGrid.innerHTML = "";
        const term = searchTerm.toLowerCase().trim();
        
        const backAction = (selectedCategory === "🇰🇷 HANGUL ALFABESİ" || selectedCategory === "🔢 SAYILAR") ? "goHome()" : "startModule('words')";
        
        // Başlık ve butonu sadece ilk yüklemede veya arama çubuğu boşken güncellemek performansı artırır
        categoryButtons.innerHTML = `
            <button class="cat-btn" onclick="${backAction}">⬅️ Geri Dön</button>
            <h2>${selectedCategory}</h2>
        `;

        const words = allWords[selectedCategory] || [];
        words.forEach(item => {
            const isMatch = item.turkce.toLowerCase().includes(term) || item.korece.includes(term);
            if (term === "" || isMatch) {
                createCard(item);
            }
        });

        if (wordGrid.innerHTML === "" && term !== "") {
            wordGrid.innerHTML = `<p style="text-align:center; width:100%; padding:20px;">Kelime bulunamadı... ✨</p>`;
        }
    };

    // 4. HIZLI PRATİK (RANDOM MODE) ✨
    window.displayRandomWords = function() {
        wordGrid.innerHTML = "";
        wordGrid.className = "word-grid"; 
        window.scrollTo(0, 0);
        
        categoryButtons.innerHTML = `
            <button class="cat-btn" onclick="goHome()">⬅️ Ana Menü</button>
            <h2>🎲 HIZLI PRATİK</h2>
            <p style="text-align:center; color:var(--secondary-color); margin-bottom:10px;">Kelimeler senin için karıştırıldı! ✨</p>
            <button class="cat-btn" style="background:var(--primary-color); border: 2px solid white;" onclick="displayRandomWords()">🔄 Yeniden Karıştır</button>
        `;

        let allPool = [];
        for (const cat in allWords) {
            if (cat !== "🇰🇷 HANGUL ALFABESİ") {
                allWords[cat].forEach(item => allPool.push(item));
            }
        }

        for (let i = allPool.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [allPool[i], allPool[j]] = [allPool[j], allPool[i]];
        }

        allPool.slice(0, 12).forEach(item => createCard(item));
    };

    // 5. KART OLUŞTURUCU ✨
    function createCard(item) {
        const card = document.createElement('div');
        card.className = 'word-card animate-in';
        
        const korH = item.ornek ? item.ornek.replace(new RegExp(`(${item.korece.replace(/[^\uAC00-\uD7A3]/g, '')})`, 'g'), `<span class="highlight-white">$1</span>`) : "";
        
        let okunusH = item.ornekOkunus || "";
        if (item.okunus && okunusH) {
            const root = item.okunus.toLowerCase().split('/')[0].trim().substring(0, 2);
            okunusH = okunusH.replace(new RegExp(`(${root}[a-z-]*)`, 'gi'), `<span class="highlight-pink-soft">$1</span>`);
        }

        card.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    <h3 style="font-size:2.2rem; color:var(--primary-color);">${item.korece}</h3>
                    <div class="pronunciation">[${item.okunus}]</div>
                    <span style="font-weight:800; border-top:1px dashed var(--accent-color); padding-top:10px; width:85%;">${item.turkce}</span>
                </div>
                <div class="card-back">
                    <p style="font-weight:900; font-size:1.4rem; font-style: normal;">${korH}</p>
                    <p style="font-size:1.1rem; color: #fff; background:rgba(255,255,255,0.2); padding:5px 12px; border-radius:10px; font-style: normal;">
                        [${okunusH}]
                    </p>
                    <p class="sentence-tr" style="font-style: normal;">${item.ornekTr}</p>
                </div>
            </div>`;
            
        card.onclick = () => card.classList.toggle('is-flipped');
        wordGrid.appendChild(card);
    }

    // 6. ANA SAYFAYA DÖNÜŞ ✨
    window.goHome = function() {
        mainMenu.style.display = "block";
        searchWrapper.style.display = "none";
        wordGrid.innerHTML = "";
        wordGrid.className = "word-grid";
        categoryButtons.innerHTML = "";
        searchInput.value = "";
    };

    // 7. ARAMA DİNLEYİCİSİ (DÜZELTİLDİ) ✨
    searchInput.addEventListener('input', (e) => {
        const val = e.target.value;
        const currentTitleElement = categoryButtons.querySelector('h2');
        const currentCatTitle = currentTitleElement ? currentTitleElement.innerText : "";

        if (currentCatTitle === "🎬 KDRAMA DATABASE") {
            displayKdramas(val);
        } else if (currentCatTitle !== "") {
            // Aktif olan kategoriye göre kelime filtreleme yapar
            displayWords(val, currentCatTitle);
        }
    });

    // 8. KDRAMA MODÜLÜ ✨
    window.displayKdramas = function(searchTerm = "") {
    wordGrid.innerHTML = "";
    wordGrid.className = "category-grid-layout"; 
    const term = searchTerm.toLowerCase().trim();
    
    categoryButtons.innerHTML = `
        <button class="cat-btn" onclick="goHome()">⬅️ Ana Menü</button>
        <h2>🎬 KDRAMA DATABASE</h2>
    `;

    // Filtreleme mantığını güvenli hale getirdik (title kontrolü eklendi) ✨
    const filteredDramas = kdramaData.filter(drama => {
        const titleMatch = drama.title && drama.title.toLowerCase().includes(term);
        const castMatch = drama.cast && drama.cast.toLowerCase().includes(term);
        return titleMatch || castMatch;
    });

    filteredDramas.forEach(drama => {
        const card = document.createElement('div');
        card.className = 'category-item-card animate-in';
        card.style.padding = "0";
        card.style.overflow = "hidden";
        
        // Eğer afiş yoksa varsayılan bir görsel koyar
        const imageSrc = drama.afis || "https://via.placeholder.com/300x450?text=No+Image";
        
        card.innerHTML = `
            <img src="${imageSrc}" alt="${drama.title}" style="width:100%; height:250px; object-fit:cover;">
            <div style="padding:15px;">
                <h3 style="color: var(--primary-color); font-size:1.1rem; margin-bottom:5px;">${drama.title || "Adsız Dizi"}</h3>
                <p style="font-size: 0.9rem; font-weight:700; color: var(--secondary-color);">${drama.year || ""}</p>
                <p style="font-size: 0.8rem; margin-top:8px; opacity:0.9;"><b>Cast:</b> ${drama.cast || "Bilinmiyor"}</p>
            </div>
        `;
        wordGrid.appendChild(card);
    });
};

    // 9. K-POP MODÜLÜ (YENİ) ✨
    window.displayKpop = function() {
        wordGrid.innerHTML = `<p style="text-align:center; padding:20px;">🎤 K-Pop modülü yakında eklenecek!</p>`;
        categoryButtons.innerHTML = `<button class="cat-btn" onclick="goHome()">⬅️ Geri Dön</button><h2>🎵 K-POP AREA</h2>`;
    };

    // --- GECE MODU YÖNETİCİSİ ---
    const themeToggle = document.getElementById('themeToggle');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        themeToggle.textContent = (currentTheme === 'dark') ? '☀️' : '🌙';
    }

    themeToggle.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            themeToggle.textContent = '🌙';
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeToggle.textContent = '☀️';
        }
    });
});

