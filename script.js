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
    { title: "100 Days My Prince", year: "2018", cast: "Doh Kyung Soo, Kim Seon Ho", episodes: "16", afis: "https://i.pinimg.com/1200x/05/a1/fc/05a1fce7ed90507db5e5424d3e097b3d.jpg" },
    { title: "109 Strange Things", year: "2017", cast: "Choi Tae Joon", episodes: "6", afis: "https://i.pinimg.com/736x/d7/ba/50/d7ba50712112f84c62045828b5435e2f.jpg" },
    { title: "28 Moons", year: "2016", cast: "Kim Kyu Jong", episodes: "8", afis: "https://i.pinimg.com/1200x/ce/b4/ae/ceb4ae0591d5e93d61d0c99202c36f41.jpg" },
    { title: "7 Days Of Romance", year: "2019", cast: "Shin Joon Seop", episodes: "10", afis: "https://i.pinimg.com/736x/f4/3d/8b/f43d8b0cc3857fd7f3b704607d4845e3.jpg" },
    { title: "A Good Day to Be a Dog", year: "2023", cast: "Cha Eun Woo, Lee Hyun Woo", episodes: "14", afis: "https://i.pinimg.com/736x/24/f6/8d/24f68d6f2d211ab0009e73c05630f2dd.jpg" },
    { title: "A Korean Odyssey", year: "2017", cast: "Lee Seung Gi", episodes: "20", afis: "https://i.pinimg.com/736x/c0/20/b8/c020b8ac24cd70404dd5a895e3331747.jpg" },
    { title: "A Love so Beautiful", year: "2020", cast: "Kim Yohan", episodes: "24", afis: "https://i.pinimg.com/736x/76/5b/c6/765bc6a0e983b4331feb59e5c2e7db50.jpg" },
    { title: "A Poem A Day", year: "2018", cast: "Lee Joon Hyuk, Jang Dong Yoon", episodes: "16", afis: "https://i.pinimg.com/736x/24/a2/7a/24a27a4e290e85f245f988db08348719.jpg" },
    { title: "Abyss", year: "2019", cast: "Ahn Yeo Seop", episodes: "16", afis: "https://i.pinimg.com/736x/b3/6e/0b/b36e0b0559728fc22c56e62b19a8f891.jpg" },
    { title: "Adult Trainee", year: "2021", cast: "Ryeo Un", episodes: "7", afis: "https://i.pinimg.com/1200x/75/b0/75/75b0757a8d3c268a0888ae12caa9c83b.jpg" },
    { title: "All That We Loved", year: "2023", cast: "Oh Sehun", episodes: "8", afis: "https://i.pinimg.com/736x/87/bd/c7/87bdc7654110ec34548dca6efec08795.jpg" },
    { title: "Angels Last Mission Love", year: "2019", cast: "Kim Myung Soo", episodes: "32", afis: "https://i.pinimg.com/736x/18/86/f0/1886f0fbc4722969372413622fb918ec.jpg" },
    { title: "Another Miss Oh", year: "2016", cast: "Eric Nam", episodes: "18", afis: "https://i.pinimg.com/736x/c6/cc/1c/c6cc1c61f3e2af0686ed03e24c5f4c96.jpg" },
    { title: "Are You Human Too?", year: "2018", cast: "Seo Kang Joon, Leen Jun Hyuk", episodes: "36", afis: "https://i.pinimg.com/1200x/3b/90/dd/3b90ddba3ff755a7b343e499a1840dc0.jpg" },
    { title: "At a Distance, Spring is Green", year: "2021", cast: "Park Ji Hoon, Bae In Hyuk", episodes: "12", afis: "https://i.pinimg.com/736x/8c/c6/d4/8cc6d4b1929b3a3fbe625541649d6c9a.jpg" },
    { title: "Backstreet Rookie", year: "2020", cast: "Ji Chang Wook", episodes: "16", afis: "https://i.pinimg.com/1200x/68/6a/0d/686a0dce54a538fcac5c910ba46357af.jpg" },
    { title: "Bad and Crazy", year: "2021", cast: "Lee Dong Wook, Wi Ha Joon", episodes: "12", afis: "https://i.pinimg.com/736x/12/f2/d7/12f2d786d8fb03ddfcf274ab836fa39c.jpg" },
    { title: "Bad Guys", year: "2014", cast: "Park Hae Jin", episodes: "11", afis: "https://i.pinimg.com/1200x/4f/0d/09/4f0d095d2a9d11dec602d6ed93cef9e0.jpg" },
    { title: "Be My Boyfriend", year: "2021", cast: "Shin Hyun Seung", episodes: "15", afis: "https://i.pinimg.com/1200x/de/95/66/de95668952dd46fcc32805ebb2c1ca74.jpg" },
    { title: "Be Positive", year: "2016", cast: "Doh Kyung Soo", episodes: "6", afis: "https://i.pinimg.com/736x/ae/90/b4/ae90b481846bf79ebf9279568577b410.jpg" },
    { title: "Beating Again", year: "2015", cast: "Jung Kyung Ho", episodes: "16", afis: "https://i.pinimg.com/736x/75/50/6e/75506e76a4b88c6ce64ecb2c1512ffb8.jpg" },
    { title: "Beautiful Gong Shim", year: "2016", cast: "Namkoong Min", episodes: "20", afis: "https://i.pinimg.com/736x/4c/db/44/4cdb44e59aefec0d8f7fb820711b9bee.jpg" },
    { title: "Beautiology 101", year: "2016", cast: "Kim Jae Young", episodes: "10", afis: "https://i.pinimg.com/736x/5f/a8/29/5fa8298f393a4f140c9f6806f8bf681c.jpg" },
    { title: "Because This is My First Life", year: "2017", cast: "Lee Min Ki, Kim Min Gyu", episodes: "16", afis: "https://i.pinimg.com/736x/c0/e6/68/c0e668cfc4b22ce1185a9974d6ab336a.jpg" },
    { title: "Behind Your Touch", year: "2023", cast: "Kim Jun Myeon, Lee Min Ki", episodes: "16", afis: "https://i.pinimg.com/736x/21/65/dc/2165dcfc520354add7d4cce5a43938aa.jpg" },
    { title: "Black Knight: The Man Who Guards Me", year: "2018", cast: "Kim Rae Won", episodes: "20", afis: "https://i.pinimg.com/736x/ab/b8/7e/abb87e0ff2672fdc772dfc8b8bbec32a.jpg" },
    { title: "Blood", year: "2015", cast: "Ahn Jae Hyun, Jung Hae In", episodes: "20", afis: "https://i.pinimg.com/1200x/5b/07/c6/5b07c649dcae52e56c371219beea16c4.jpg" },
    { title: "Bloodhounds", year: "2023", cast: "Woo Do Hwan", episodes: "8", afis: "https://i.pinimg.com/736x/f7/22/1b/f7221beb2a83e130fea5b08b68776470.jpg" },
    { title: "Blue Birthday", year: "2021", cast: "Yang Hong Seok", episodes: "16", afis: "https://i.pinimg.com/736x/e1/a2/f8/e1a2f817594787316177507449254927.jpg" },
    { title: "Bo-ra! Deborah", year: "2023", cast: "Yoon Hyun Min", episodes: "14", afis: "https://i.pinimg.com/736x/a9/c5/7e/a9c57e9bff06e8c699c48ede3ef2cfcc.jpg" },
    { title: "Boss-dol Mart", year: "2023", cast: "Kim Min Seok", episodes: "10", afis: "https://i.pinimg.com/1200x/29/92/b7/2992b72c40b30098e2a9234ce13f84cf.jpg" },
    { title: "Boyfriend Milk", year: "2017", cast: "ASTRO", episodes: "12", afis: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRErdAAeAr5Tbw-mRGv4pBm_cV9MWsoN-B6vA&s" },
    { title: "Boys Over Flowers", year: "2009", cast: "Lee Min Ho, Kim Bum", episodes: "25", afis: "https://i.pinimg.com/736x/f0/11/e3/f011e3f3d480b3f0c530e40d554ef713.jpg" },
    { title: "Business Proposal", year: "2022", cast: "Ahn Yeo Seop, Kim Min Gyu", episodes: "12", afis: "https://i.pinimg.com/736x/98/de/3d/98de3dc7cffa6f88c36d0ca0640b3f6f.jpg" },
    { title: "Busted", year: "2018", cast: "Oh Sehun, Lee Seung Gi", episodes: "10", afis: "https://i.pinimg.com/736x/95/3d/2d/953d2dd669a71a8c8aa20f6d050ef5a7.jpg" },
    { title: "Castaway Diva", year: "2023", cast: "Chae Jong Hyeop", episodes: "12", afis: "https://i.pinimg.com/736x/00/9f/6c/009f6cdeaa5e91b5353700de1c863de8.jpg" },
    { title: "Casting a Spell to You", year: "2021", cast: "Sung Joon", episodes: "16", afis: "https://i.pinimg.com/1200x/d7/33/28/d7332874340d5c7168a2623163884903.jpg" },
    { title: "Catch the Ghost", year: "2019", cast: "Kim Seon Ho", episodes: "16", afis: "https://i.pinimg.com/1200x/1f/9a/8f/1f9a8f1a28dce409ab45716a39e694c7.jpg" },
    { title: "Celebrity", year: "2023", cast: "Kang Min Hyuk", episodes: "12", afis: "https://i.pinimg.com/1200x/27/27/6f/27276f8fc55e49b865a86fdc5da1c866.jpg" },
    { title: "Cheer Up", year: "2022", cast: "Bae In Hyuk", episodes: "16", afis: "https://i.pinimg.com/736x/00/97/04/009704305b1a0098af1f122b42f5d543.jpg" },
    { title: "Cheese in the Trap", year: "2016", cast: "Park Hae Jin, Seo Kang Joon", episodes: "16", afis: "https://i.pinimg.com/736x/af/dc/58/afdc58d0b8b5f4602226676c1ce8c068.jpg" },
    { title: "Choco Bank", year: "2016", cast: "Kim Jong In", episodes: "6", afis: "https://i.pinimg.com/736x/46/12/fe/4612fec4a59cf21b85e6ab438d514200.jpg" },
    { title: "Cinderella and the Four Knights", year: "2016", cast: "Jung Il Woo", episodes: "16", afis: "https://i.pinimg.com/736x/29/4b/d2/294bd201eeb81727e225ecc67b7d08f2.jpg" },
    { title: "Clean With Passion For Now", year: "2018", cast: "Yoon Kyun Sang", episodes: "16", afis: "https://i.pinimg.com/1200x/16/c4/7d/16c47d4d20af67fb73d0a508f8039790.jpg" },
    { title: "Click Your Heart", year: "2016", cast: "Rowoon", episodes: "7", afis: "https://i.pinimg.com/736x/e7/eb/89/e7eb899d94b768880d077cadbe0f9f78.jpg" },
    { title: "Coffee Prince", year: "2007", cast: "Gong Yoo", episodes: "17", afis: "https://i.pinimg.com/736x/3f/60/9f/3f609f7ac35d9757186b4decb0391647.jpg" },
    { title: "Come and Hug Me", year: "2018", cast: "Jang Ki Young", episodes: "32", afis: "https://i.pinimg.com/736x/8c/7d/be/8c7dbec6b062f1bf86700dbf13b540af.jpg" },
    { title: "Crash Landing On You", year: "2019", cast: "Hyun Bin", episodes: "16", afis: "https://i.pinimg.com/736x/2b/42/3e/2b423ea93b604079246f915bc70f7faf.jpg" },
    { title: "Crazy Love", year: "2022", cast: "Lee Jae Wook", episodes: "16", afis: "https://i.pinimg.com/736x/e2/56/9c/e2569c09e8e9a521762cb6c10f550999.jpg" },
    { title: "D-Day", year: "2015", cast: "Kim Young Kwang, Ha Seok Jin", episodes: "20", afis: "https://i.pinimg.com/736x/80/17/91/801791ad179547549da4b524ade0ed38.jpg" },
    { title: "Daily Dose of Sunshine", year: "2023", cast: "Yeon Woo Jin, Jang Dong Yoon", episodes: "12", afis: "https://i.pinimg.com/736x/ed/08/f7/ed08f79db8c61e5d290ce5fbb735ddb4.jpg" },
    { title: "Dali and Cocky Prince", year: "2021", cast: "Kim Min Jae", episodes: "16", afis: "https://i.pinimg.com/736x/34/08/98/340898f580d9d785f0ae93f9ac2034ea.jpg" },
    { title: "Descendants of the Sun", year: "2016", cast: "Song Joong Ki, Ahn Bo Hyun", episodes: "16", afis: "https://i.pinimg.com/1200x/6b/64/d8/6b64d8795b7f13f08593260bf45db97d.jpg" },
    { title: "Destined with You", year: "2023", cast: "Rowoon", episodes: "16", afis: "https://i.pinimg.com/736x/b3/a3/f4/b3a3f4d1047ed2305b99fd9eab0ca579.jpg" },
    { title: "Devilish Joy", year: "2018", cast: "Choi Jin Hyuk", episodes: "16", afis: "https://i.pinimg.com/736x/8c/60/cb/8c60cb232cae2878bbf1ed74576878ad.jpg" },
    { title: "Devil's Diary", year: "2016", cast: "Han Joo Wan", episodes: "4", afis: "https://i.pinimg.com/736x/2f/fa/ab/2ffaaba2040fa96c7b2d6b0ce6715d16.jpg" },
    { title: "Do Do Sol Sol La La Sol", year: "2020", cast: "Lee Jae Wook", episodes: "16", afis: "https://i.pinimg.com/736x/f9/a8/fa/f9a8fab22760cd8c9e48306b5546eb8f.jpg" },
    { title: "Doctor Stranger", year: "2014", cast: "Lee Jong Seok, Park Hae Jin", episodes: "20", afis: "https://i.pinimg.com/736x/24/af/a1/24afa1e69715ff961c772b4197ea150d.jpg" },
    { title: "Doctors", year: "2016", cast: "Kim Rae Won", episodes: "20", afis: "https://i.pinimg.com/736x/7a/ec/7a/7aec7a4cbb8a89860c42ea326fc17902.jpg" },
    { title: "Dokgo Rewind", year: "2018", cast: "Oh Sehun, Ahn Bo Hyun", episodes: "20", afis: "https://i.pinimg.com/1200x/6f/93/9d/6f939daeda3691642415b825921482f1.jpg" },
    { title: "Don't Dare to Dream", year: "2016", cast: "Jo Jung Seok", episodes: "24", afis: "https://i.pinimg.com/736x/e6/c2/94/e6c2946dee3deb1158727388461e5f31.jpg" },
    { title: "Doom at Your Service", year: "2021", cast: "Seo In Guk, Kang Tae Oh", episodes: "16", afis: "https://i.pinimg.com/736x/5f/aa/71/5faa7178e1c4cb3a482c43797f9c3509.jpg" },
    { title: "Dr. lan", year: "2015", cast: "Kim Young Kwang", episodes: "9", afis: "https://i.pinimg.com/736x/30/dc/84/30dc8477f8126f80fea0aaa423cb0a0c.jpg" },
    { title: "Dream Knight", year: "2015", cast: "GOT7", episodes: "12", afis: "https://i.pinimg.com/1200x/b9/ad/9c/b9ad9c03070bf29b6ba1647e0c08ce87.jpg" },
    { title: "Dreaming of a Freaking Fairytale", year: "2024", cast: "Lee Jun Young", episodes: "10", afis: "https://i.pinimg.com/736x/6b/2a/0b/6b2a0b9f9ea9bb0b9e947298ecda4812.jpg" },
    { title: "Dynamite Kiss", year: "2026", cast: "Jang Ki Yong", episodes: "1", afis: "https://i.pinimg.com/736x/83/00/a7/8300a75137437da2630e92d71f4f53e1.jpg" },
    { title: "Emergency Couple", year: "2014", cast: "Choi Jin Hyuk", episodes: "21", afis: "https://i.pinimg.com/736x/16/c7/61/16c7610eca3a0a632a08b067f1000717.jpg" },
    { title: "Ending Again", year: "2020", cast: "Kim Geon Won", episodes: "12", afis: "https://i.pinimg.com/1200x/c9/51/fa/c951fa10611fe63f818469de76426625.jpg" },
    { title: "Eulachacha Waikiki", year: "2018", cast: "Kim Jong Hyun, Lee Yi Kyung", episodes: "20", afis: "https://i.pinimg.com/736x/fe/7e/e5/fe7ee579c245c2497ad1a7e879623de0.jpg" },
    { title: "EXO Next Door", year: "2015", cast: "EXO", episodes: "16", afis: "https://i.pinimg.com/736x/80/24/6c/80246c52b56c583a696095da827565b6.jpg" },
    { title: "Extraordinary Attorney Woo", year: "2022", cast: "Kang Tae Oh", episodes: "16", afis: "https://i.pinimg.com/736x/7f/43/7d/7f437d98f70472be2ea8a0d17bfb5af4.jpg" },
    { title: "Extraordinary You", year: "2019", cast: "Rowoon", episodes: "32", afis: "https://i.pinimg.com/736x/99/95/58/999558773dfe1d376ceddde81c41224d.jpg" },
    { title: "Falling For Challenge", year: "2015", cast: "Kim Min Seok", episodes: "6", afis: "https://i.pinimg.com/1200x/9a/b6/b7/9ab6b75698cbb6762215829b150644f8.jpg" },
    { title: "Family by Choice", year: "2024", cast: "Hwang In Yeop", episodes: "16", afis: "https://i.pinimg.com/736x/aa/ed/ed/aaeded43727bd604fbe39c600514da82.jpg" },
    { title: "Fated to Love You", year: "2014", cast: "Jang Hyuk", episodes: "20", afis: "https://i.pinimg.com/736x/35/5f/05/355f0548ed7461eb98bb1be6c78f061d.jpg" },
    { title: "Fight For My Way", year: "2017", cast: "Park Seo Joon", episodes: "16", afis: "https://i.pinimg.com/1200x/bf/19/7a/bf197a694e75baf2b8ac950db39a7cbe.jpg" },
    { title: "Forecasting Love and Weather", year: "2022", cast: "Song Kang", episodes: "16", afis: "https://i.pinimg.com/736x/5d/a8/95/5da895534268cc4c34deac76e6191c56.jpg" },
    { title: "Forest", year: "2020", cast: "Park Hae Jin", episodes: "32", afis: "https://i.pinimg.com/736x/89/e0/e3/89e0e37cc464155f97126f282bb6f19d.jpg" },
    { title: "Frankly Speaking", year: "2024", cast: "Ko Kyung Pyo", episodes: "12", afis: "https://i.pinimg.com/1200x/23/d9/21/23d921c1502f0d413071f8ec00bb344c.jpg" },
    { title: "Freshman", year: "2019", cast: "Hwang In Yeop", episodes: "12", afis: "https://i.pinimg.com/1200x/32/9b/d9/329bd9ab546ea0b27730ee1a7374112e.jpg" },
    { title: "From Now On, Showtime!", year: "2022", cast: "Park Hae Jin", episodes: "16", afis: "https://i.pinimg.com/736x/55/2e/d4/552ed405cc4114ac8b762c440671bed7.jpg" },
    { title: "Ga Doo Ri's Sushi Restaurant", year: "2020", cast: "Hyuk", episodes: "12", afis: "https://i.pinimg.com/736x/e4/24/c3/e424c3ab17764f71aa87b14810613360.jpg" },
    { title: "Gaus Electronics", year: "2022", cast: "Kwak Dong Yeon", episodes: "12", afis: "https://i.pinimg.com/736x/ef/f9/52/eff9529a3c169b938e7ef71e8fab8a8c.jpg" },
    { title: "Ghost Doctor", year: "2022", cast: "Rain, Kim Bum", episodes: "16", afis: "https://i.pinimg.com/736x/dd/e1/9b/dde19baeb2553fb4a3c5a56206c43465.jpg" },
    { title: "Go Back Couple", year: "2017", cast: "Son Ho Jun, Jang Ki Yong", episodes: "12", afis: "https://i.pinimg.com/1200x/fe/a5/4c/fea54c3112948e3953799b28390f00fd.jpg" },
    { title: "Go Back Diary", year: "2018", cast: "Lee Jong Won", episodes: "4", afis: "https://i.pinimg.com/736x/31/6d/d0/316dd00e82ac661439553b8f15b73447.jpg" },
    { title: "Gogh The Starry Night", year: "2016", cast: "Kim Young Kwang", episodes: "20", afis: "https://i.pinimg.com/736x/e2/c7/07/e2c707217082d2443f53dcae4658f500.jpg" },
    { title: "Good Boy", year: "2025", cast: "Park Bo Gum", episodes: "16", afis: "https://i.pinimg.com/736x/a4/75/0e/a4750ebeb87156e2f61a2aee82974fde.jpg" },
    { title: "Happiness", year: "2021", cast: "Park Hyung Sik", episodes: "12", afis: "https://i.pinimg.com/736x/df/5c/ad/df5cad58fe2c9a2d69923c70053d1576.jpg" },
    { title: "He is Psychometric", year: "2019", cast: "Park Jin Young", episodes: "16", afis: "https://i.pinimg.com/736x/e9/c4/33/e9c433628f9ecdd3396d24e84c142066.jpg" },
    { title: "Head Over Heels", year: "2025", cast: "Choo Young Woo", episodes: "12", afis: "https://i.pinimg.com/736x/ba/a5/3d/baa53d84e35d7dcc97f35948fe9893f7.jpg" },
    { title: "Healer", year: "2014", cast: "Ji Chang Wook", episodes: "20", afis: "https://i.pinimg.com/736x/47/7b/b9/477bb96720a2c68aae7dd180dd639e4f.jpg" },
    { title: "Heartbeat", year: "2023", cast: "Taecyeon", episodes: "16", afis: "https://i.pinimg.com/736x/b6/49/81/b64981ae32ce3237576e63f3b8ad2389.jpg" },
    { title: "Heavenly Idol", year: "2023", cast: "Kim Min Gyu", episodes: "12", afis: "https://i.pinimg.com/736x/79/08/b6/7908b6490040c39f771b0a00ee962f10.jpg" },
    { title: "Her Lovely Heels", year: "2014", cast: "Hong Jong Hyun", episodes: "10", afis: "https://i.pinimg.com/736x/1a/60/de/1a60de244963b6a97055c5c6b57f20bc.jpg" },
    { title: "Her Private Life", year: "2019", cast: "Kim Jae Wook, Ahn Bo Hyun", episodes: "16", afis: "https://i.pinimg.com/736x/30/91/7b/30917b31db591b856b752ad5c8d59dac.jpg" },
    { title: "High And Crush", year: "2015", cast: "Jung Il Woo", episodes: "20", afis: "https://i.pinimg.com/736x/49/48/95/494895a95ccf8100bd1bd341613c91d1.jpg" },
    { title: "Hit The Spot", year: "2022", cast: "Park Sun Ho", episodes: "8", afis: "https://i.pinimg.com/736x/75/6d/35/756d3547d31aa2951cba0b3d8dffd076.jpg" },
    { title: "Hometown Cha Cha Cha", year: "2021", cast: "Kim Seon Ho, Lee Sang Yi", episodes: "16", afis: "https://i.pinimg.com/736x/c6/ae/67/c6ae67383729372df4cb6682c5d3a889.jpg" },
    { title: "Hospital Playlist", year: "2020", cast: "Yoo Yeon Seok, Jo Jung Seok", episodes: "12", afis: "https://i.pinimg.com/736x/e0/e1/95/e0e195650caa961f5d381fc97234ef70.jpg" },
    { title: "Hot and Sweet", year: "2016", cast: "Choi Min Hwan", episodes: "8", afis: "https://i.pinimg.com/736x/48/83/93/48839304048aad31a433bfd778c89067.jpg" },
    { title: "Hotel Del Luna", year: "2019", cast: "Yeo Jin Goo", episodes: "16", afis: "https://i.pinimg.com/736x/2c/c6/95/2cc6955515ffadd504323ca2c009f26d.jpg" },
    { title: "How Are You Bread", year: "2020", cast: "Kim Jun Myeon", episodes: "5", afis: "https://i.pinimg.com/1200x/76/3b/41/763b41e7014d5910c6cf92d0b4f4830c.jpg" },
    { title: "Hyde, Jekyll, Me", year: "2015", cast: "Hyun Bin, Sung Joon", episodes: "20", afis: "https://i.pinimg.com/736x/7b/60/9e/7b609eacf167eac27deb066762d311d4.jpg" },
    { title: "I Can See Your MBTI", year: "2021", cast: "Hyunjae", episodes: "5", afis: "https://i.pinimg.com/736x/c7/f7/52/c7f752fc7bac169941c2a866356c13d5.jpg" },
    { title: "If You Wish Upon Me", year: "2022", cast: "Ji Chang Wook", episodes: "16", afis: "https://i.pinimg.com/736x/14/5d/dc/145ddc2a8432b408737ac202a13040bd.jpg" },
    { title: "I'm not a Robot", year: "2017", cast: "Yoo Seung Ho", episodes: "32", afis: "https://i.pinimg.com/736x/e2/c3/83/e2c383972beb2d3fdf5e4923367ef7b3.jpg" },
    { title: "Imitation", year: "2021", cast: "Lee Jun Young, Yun Ho", episodes: "12", afis: "https://i.pinimg.com/736x/7e/2b/ff/7e2bff70cf077749a8dc6c7f33498f17.jpg" },
    { title: "Iron Family", year: "2024", cast: "Kim Jung Hyun", episodes: "36", afis: "https://i.pinimg.com/736x/8c/e4/bd/8ce4bd77c7040795f14d63effd978d58.jpg" },
    { title: "Itaewon Class", year: "2020", cast: "Park Seo Joon, Ahn Bo Hyun", episodes: "16", afis: "https://i.pinimg.com/736x/2c/3f/0e/2c3f0e45247927c15b71cd4fd277e3ac.jpg" },
    { title: "It's Okay That's Love", year: "2014", cast: "Jo In Sung, Doh Kyung Soo", episodes: "16", afis: "https://i.pinimg.com/736x/b9/29/14/b92914c9b3d694477ad409beff400123.jpg" },
    { title: "It's Okay to Not Be Okay", year: "2020", cast: "Kim Soo Hyun", episodes: "16", afis: "https://i.pinimg.com/736x/77/03/4a/77034afa58e5d1af7f0a10a6cbc0ab7d.jpg" },
    { title: "Jugglers", year: "2017", cast: "Choi Daniel", episodes: "16", afis: "https://i.pinimg.com/736x/30/49/05/30490536624ff4131e9ed6a2b93ba76f.jpg" },
    { title: "Jumping Girl", year: "2015", cast: "U-Kwon", episodes: "15", afis: "https://i.pinimg.com/736x/09/7c/0a/097c0a2484ea2fae98d3a17760fde373.jpg" },
    { title: "Just Between Lovers", year: "2017", cast: "Lee Jun Ho", episodes: "16", afis: "https://i.pinimg.com/1200x/ab/e5/f1/abe5f1f6345e6a65ae751531fc8364f0.jpg" },
    { title: "Kara: Secret Love - Missing You", year: "2014", cast: "Yeon Woo Jin", episodes: "2", afis: "https://i.pinimg.com/736x/e2/49/0b/e2490bf3f3b6f458b780c8c20397e2fe.jpg" },
    { title: "Kara: Secret Love - 13th Bucket List", year: "2014", cast: "Kim Young Kwang", episodes: "2", afis: "https://i.pinimg.com/736x/ad/e3/12/ade3121a2cb9503b6775ae5143a8fa1a.jpg" },
    { title: "Kara: Secret Love - Lilac", year: "2014", cast: "Bae Soo Bin", episodes: "2", afis: "https://i.pinimg.com/1200x/23/20/7e/23207eeeab6c8ad5b43c718daf42dd66.jpg" },
    { title: "Kara: Secret Love - A Seven Day Summer", year: "2014", cast: "Lee Kwang Soo", episodes: "2", afis: "https://i.pinimg.com/736x/52/69/ec/5269ec292b62b0b5f6f0f45a7306a708.jpg" },
    { title: "Kara: Secret Love - Coffee With An Angel?", year: "2014", cast: "Ji Chang Wook", episodes: "2", afis: "https://i.pinimg.com/1200x/2a/7c/44/2a7c4400a67caa4cabf4d5b86fdd0687.jpg" },
    { title: "Kill Me, Heal Me", year: "2015", cast: "Ji Sung, Park Seo Joon", episodes: "20", afis: "https://i.pinimg.com/736x/b5/dc/30/b5dc300ccc72acc4da1a13d866af4c3c.jpg" },
    { title: "King the Land", year: "2023", cast: "Lee Jun Ho", episodes: "16", afis: "https://i.pinimg.com/736x/21/70/2b/21702b734301b565c9d456fc803e7ef3.jpg" },
    { title: "Kiss Goblin", year: "2020", cast: "Bae In Hyuk", episodes: "12", afis: "https://i.pinimg.com/736x/f2/15/25/f215258d6538d4eddbf5a8d312bfa7cc.jpg" },
    { title: "Kiss Sixth Sense", year: "2022", cast: "Yoon Gye Sang", episodes: "12", afis: "https://i.pinimg.com/736x/5f/19/25/5f192517da14083dfd366f7d7123de80.jpg" },
    { title: "Last Minute Romance", year: "2017", cast: "Lee Seo-won", episodes: "10", afis: "https://i.pinimg.com/736x/1a/d6/dc/1ad6dc5c49261ad7c5a65ca24689e604.jpg" },
    { title: "LCDP: Korea", year: "2022", cast: "Lee Hyun Woo", episodes: "12", afis: "https://i.pinimg.com/1200x/a4/36/87/a43687720e45b077f7176d77584862cf.jpg" },
    { title: "Legally Dad", year: "2020", cast: "Choi Kyung Hoon", episodes: "6", afis: "https://i.pinimg.com/736x/7f/0f/fd/7f0ffd2e6d1048b6710346c4a9da6f26.jpg" },
    { title: "Let's Eat", year: "2018", cast: "Yoon Doo Joon", episodes: "14", afis: "https://i.pinimg.com/1200x/06/2e/28/062e28ef281d65b391139d3119ff85d9.jpg" },
    { title: "Let's Fight Ghost", year: "2016", cast: "Taecyeon", episodes: "16", afis: "https://i.pinimg.com/1200x/2a/a8/89/2aa889d7527793443dcbccd54bab7b8b.jpg" },
    { title: "Level Up!", year: "2019", cast: "Sung Hoon", episodes: "12", afis: "https://i.pinimg.com/736x/85/c4/44/85c444f577b9987927a90fa5376720cb.jpg" },
    { title: "Lie to Me", year: "2011", cast: "Kang Ji Hwan, Sung Joon", episodes: "16", afis: "https://i.pinimg.com/736x/9e/71/9f/9e719f27445d7c8a88a1670b599985d3.jpg" },
    { title: "Line Romance", year: "2014", cast: "Lee Min Ho", episodes: "3", afis: "https://i.pinimg.com/736x/d3/c5/72/d3c57273c2b57aa54df8786d9489b527.jpg" },
    { title: "Link: Eat, Love, Die", year: "2022", cast: "Yeo Jin Goo, Hong Jung Hyun", episodes: "16", afis: "https://i.pinimg.com/1200x/85/28/18/852818cc5b6cdda08bef5a22b4792725.jpg" },
    { title: "Live On", year: "2020", cast: "Hwang Minhyun", episodes: "8", afis: "https://i.pinimg.com/736x/1e/b8/06/1eb806551b12cc8c526049c6d8add83e.jpg" },
    { title: "Longing for Spring", year: "2014", cast: "Lee Won Geun", episodes: "12", afis: "https://i.pinimg.com/736x/47/e8/43/47e843d40fb863ff22618b4e130114c6.jpg" },
    { title: "Love & Wish", year: "2021", cast: "Youngjae", episodes: "9", afis: "https://i.pinimg.com/1200x/8f/0c/b2/8f0cb2a9005f24fc01b0ab16cf07528a.jpg" },
    { title: "Love Alarm", year: "2019", cast: "Song Kang", episodes: "14", afis: "https://i.pinimg.com/736x/0f/32/86/0f328682e1961f57bdb8351bdf41f3e2.jpg" },
    { title: "Love All Play", year: "2022", cast: "Chae Jong Hyeop", episodes: "16", afis: "https://i.pinimg.com/736x/fa/9d/13/fa9d1340ec6d6c01ad44e0420dc7aa1f.jpg" },
    { title: "Love in Contract", year: "2022", cast: "Ko Kyung Pyo, Kim Jae Young", episodes: "16", afis: "https://i.pinimg.com/736x/20/61/ca/2061cac2fbb33da097fb8186a16b1533.jpg" },
    { title: "Love in the Moonlight", year: "2016", cast: "Park Bo Gum", episodes: "18", afis: "https://i.pinimg.com/736x/36/81/2b/36812bd032665f971f2ad52d847be841.jpg" },
    { title: "Love is for Suckers", year: "2022", cast: "Choi Siwon", episodes: "16", afis: "https://i.pinimg.com/736x/9f/7d/19/9f7d1939659ef65b50c7a5f42fd6141e.jpg" },
    { title: "Love Next Door", year: "2024", cast: "Jung Hae In", episodes: "16", afis: "https://i.pinimg.com/736x/4e/b0/cc/4eb0cca0421cfbc83cf808125551f1d4.jpg" },
    { title: "Love Playlist", year: "2017", cast: "Kim Hyung Suk", episodes: "45", afis: "https://i.pinimg.com/1200x/6b/c6/75/6bc6759a333107c08cf8f6a87a786714.jpg" },
    { title: "Love Scout", year: "2025", cast: "Lee Jun Hyuk", episodes: "16", afis: "https://i.pinimg.com/1200x/cd/24/e0/cd24e0f297ff34a78fb191160303da06.jpg" },
    { title: "Love to Hate You", year: "2023", cast: "Tae Yoo", episodes: "10", afis: "https://i.pinimg.com/736x/e8/77/7c/e8777ce56e1f0e3c8766d3474ff53885.jpg" },
    { title: "Love with Flaws", year: "2019", cast: "Ahn Jae Hyun", episodes: "32", afis: "https://i.pinimg.com/736x/30/d5/0c/30d50c1455a188f65628411303841591.jpg" },
    { title: "Love Your Enemy", year: "2024", cast: "Ju Ji Hoon", episodes: "12", afis: "https://i.pinimg.com/736x/fe/fe/5f/fefe5f0c7335146ed691b0a0f60e916f.jpg" },
    { title: "Lovely Runner", year: "2024", cast: "Byeon Woo Seok", episodes: "16", afis: "https://i.pinimg.com/1200x/a8/9a/c7/a89ac7afb079b8744cab52e52c0c89ab.jpg" },
    { title: "Lovers of the Red Sky", year: "2021", cast: "Ahn Hyo Seop", episodes: "16", afis: "https://i.pinimg.com/736x/3e/0b/2c/3e0b2c9da2b4f5eeda270e8006705190.jpg" },
    { title: "Lovestruck in the City", year: "2020", cast: "Ji Chang Wook", episodes: "17", afis: "https://i.pinimg.com/1200x/85/74/05/857405f8f38434a5f9e62bde9c89f234.jpg" },
    { title: "Lunch Box", year: "2015", cast: "Ji Soo", episodes: "3", afis: "https://i.pinimg.com/736x/a7/0d/1a/a70d1a58944d8589bfc21c57c886c4c2.jpg" },
    { title: "Mad For Each Other", year: "2021", cast: "Jung Woo", episodes: "13", afis: "https://i.pinimg.com/736x/b3/bd/1d/b3bd1d372b1aacbecb6473c0babe2691.jpg" },
    { title: "Magic Phone", year: "2016", cast: "Kim Jin Woo", episodes: "10", afis: "https://i.pinimg.com/736x/0b/0b/59/0b0b59e7739f470d2612f3fb9cfdd8f9.jpg" },
    { title: "Man to Man", year: "2017", cast: "Park Hae Jin", episodes: "16", afis: "https://i.pinimg.com/1200x/17/01/f3/1701f3cee350db4715ae419596c443fe.jpg" },
    { title: "Marriage Contract", year: "2016", cast: "Lee Seo Jin", episodes: "16", afis: "https://i.pinimg.com/736x/6f/ec/08/6fec08b86ce5780c34b6afc4e3bb7048.jpg" },
    { title: "Marriage, not Dating!", year: "2014", cast: "Yeon Woo Jin", episodes: "16", afis: "https://i.pinimg.com/736x/68/bd/d6/68bdd608b5db454ba17833ffbea10ec1.jpg" },
    { title: "Marry My Husband", year: "2024", cast: "Na In Woo, Lee Yi Kyung", episodes: "16", afis: "https://i.pinimg.com/736x/87/ff/1b/87ff1b164d0f98232eae29d6c05fadd6.jpg" },
    { title: "May I Help You?", year: "2022", cast: "Lee Jun Young", episodes: "16", afis: "https://i.pinimg.com/736x/a1/55/bc/a155bca194d361b289d132d8b94bf134.jpg" },
    { title: "Melting Me Softly", year: "2019", cast: "Ji Chang Wook", episodes: "16", afis: "https://i.pinimg.com/1200x/b3/d1/75/b3d1750304594688d2875eb6c6cd20c4.jpg" },
    { title: "Meow, the Secret Boy", year: "2020", cast: "Kim Myung Soo", episodes: "24", afis: "https://i.pinimg.com/736x/b7/57/82/b75782d3f1b1999992516842afec5a3f.jpg" },
    { title: "Mine", year: "2021", cast: "Cha Hakyeon", episodes: "16", afis: "https://i.pinimg.com/736x/55/8f/5e/558f5e6ce7a4aac37df383a08286446c.jpg" },
    { title: "Miss Independent Ji Eun", year: "2018", cast: "Cha In Ha", episodes: "8", afis: "https://i.pinimg.com/736x/93/9d/cf/939dcfbfd0fe7662d2c3491c05de0820.jpg" },
    { title: "Moment of Eighteen", year: "2019", cast: "Ong Seung Woo", episodes: "16", afis: "https://i.pinimg.com/1200x/db/9b/d1/db9bd1840dc7c4b5600786a3cee3aa26.jpg" },
    { title: "Moon Lovers: Scarlet Heart Ryeo", year: "2016", cast: "Byun Baekhyun, Lee Jung Gi", episodes: "20", afis: "https://i.pinimg.com/736x/7a/c8/84/7ac8847bf3ddb37bd135511489de047b.jpg" },
    { title: "More Than Friends", year: "2020", cast: "Ong Seong Wu", episodes: "16", afis: "https://i.pinimg.com/1200x/43/bb/ec/43bbeca203e4ec1ca846546ddc71e44c.jpg" },
    { title: "Mouse", year: "2021", cast: "Lee Seung Gi", episodes: "20", afis: "https://i.pinimg.com/736x/8e/4f/0c/8e4f0cd1350438c142632cadfa28ad47.jpg" },
    { title: "Mr. Plankton", year: "2024", cast: "Woo Do Hwan", episodes: "10", afis: "https://i.pinimg.com/736x/a7/6e/e3/a76ee31ebaf723f0625b06c77dd68ae3.jpg" },
    { title: "Mr. Queen", year: "2020", cast: "Kim Jung Hyun", episodes: "20", afis: "https://i.pinimg.com/736x/ed/4c/22/ed4c22eff28e645bf9dee7edcff50b1c.jpg" },
    { title: "My Absolute Boyfriend", year: "2019", cast: "Yoo Jin Goo, Hong Jong Hyun", episodes: "36", afis: "https://i.pinimg.com/736x/d3/8e/ee/d38eeee6700f0734306b1b3b7d539e4d.jpg" },
    { title: "My Dearest Nemesis", year: "2025", cast: "Choi Hyun Wook", episodes: "12", afis: "https://i.pinimg.com/736x/8ec39eacfe987fe8ed17f1655c58b396.jpg" },
    { title: "My Demon", year: "2023", cast: "Song Kang, Lee Sang Yi", episodes: "16", afis: "https://i.pinimg.com/736x/7c/ba/96/7cba96fcad222149ca352b7aa9d3e5b9.jpg" },
    { title: "My First First Love", year: "2019", cast: "Ji Soo", episodes: "16", afis: "https://i.pinimg.com/736x/f2/1f/df/f21fdf6a0f72f1b8c2edf2d1e49e2c50.jpg" },
    { title: "My Girlfriend is a Gumiho", year: "2010", cast: "Lee Seung Gi", episodes: "16", afis: "https://i.pinimg.com/736x/c7/d0/04/c7d0049b6e4bbb7fb3d8bdbb2db801d7.jpg" },
    { title: "My Holo Love", year: "2020", cast: "Yoon Hyun Min", episodes: "12", afis: "https://i.pinimg.com/1200x/65/4f/f5/654ff530119a8d9d920e7e7ded695801.jpg" },
    { title: "My ID is Gangnam Beauty", year: "2018", cast: "Cha Eun Woo", episodes: "16", afis: "https://i.pinimg.com/736x/ca/1e/79/ca1e797332be678b762ca28ef9abe60c.jpg" },
    { title: "My Love From The Star", year: "2013", cast: "Kim Soo Hyun, Park Hae Jin", episodes: "21", afis: "https://i.pinimg.com/736x/69/ab/3e/69ab3ee64ad8736d2896e345fc3c2f4b.jpg" },
    { title: "My Lovely Liar", year: "2023", cast: "Hwang Min Hyun", episodes: "16", afis: "https://i.pinimg.com/736x/e0/b1/79/e0b179599a4c15b1790ba8eb668dccb1.jpg" },
    { title: "My Name", year: "2021", cast: "Ahn Bo Hyun", episodes: "8", afis: "https://i.pinimg.com/736x/46/ad/2c/46ad2c8b2590859aaf47c8d43e1dddeb.jpg" },
    { title: "My Roommate is a Gumiho", year: "2021", cast: "Jang Ki Young, Bae In Hyuk", episodes: "16", afis: "https://i.pinimg.com/1200x/26/f7/ca/26f7cac3a1c438707f0383c8f6353fff.jpg" },
    { title: "My Secret Romance", year: "2017", cast: "Sung Hoon, Kim Jae Young", episodes: "13", afis: "https://i.pinimg.com/736x/ec/aa/a6/ecaaa67dbb257dd58c7d33b4243f155e.jpg" },
    { title: "My Shy Boss", year: "2017", cast: "Yeon Woo Jin", episodes: "16", afis: "https://i.pinimg.com/736x/0f/1a/05/0f1a059f2ee58c0cac4173259c00fd45.jpg" },
    { title: "My Strange Hero", year: "2018", cast: "Yoo Seung Ho", episodes: "32", afis: "https://i.pinimg.com/736x/f5/c3/99/f5c399bdf47d97ee42eb3c0c52e633d1.jpg" },
    { title: "My Sweet Mobster", year: "2024", cast: "Uhm Tae Goo", episodes: "16", afis: "https://i.pinimg.com/736x/34/08/9e/34089e7c36f5caf1d4a08cf0fe1a587b.jpg" },
    { title: "Nevertheless", year: "2021", cast: "Song Kang", episodes: "10", afis: "https://i.pinimg.com/736x/d9/a8/d9/d9a8d9451cfc5dc7451ae4af777bca23.jpg" },
    { title: "No Gain No Love", year: "2024", cast: "Kim Young Dae", episodes: "12", afis: "https://i.pinimg.com/736x/cf/7a/3e/cf7a3e9f7f5f8464db7383a8cd8cce51.jpg" },
    { title: "Noble, My Love", year: "2015", cast: "Sung Hoon", episodes: "20", afis: "https://i.pinimg.com/1200x/3f/09/0d/3f090d409cb50047ec8fb3642b845a91.jpg" },
    { title: "Not Yet Thirty", year: "2021", cast: "Kang Min Hyuk", episodes: "15", afis: "https://i.pinimg.com/1200x/b5/56/e0/b556e0288d7c1a84371bb3f1465a3555.jpg" },
    { title: "Office Watch", year: "2017", cast: "Kang Hoon", episodes: "14", afis: "https://i.pinimg.com/1200x/14/18/5b/14185bc2207947ac440bed86db555228.jpg" },
    { title: "Oh My Ghost!", year: "2015", cast: "Jo Jung Seok", episodes: "16", afis: "https://i.pinimg.com/736x/8a/53/19/8a5319254ee1219172d6cc4cb40d714c.jpg" },
    { title: "Oh My Venus!", year: "2015", cast: "So Ji Sub", episodes: "16", afis: "https://i.pinimg.com/736x/ca/88/e5/ca88e56db3574be2ec241d27d695330a.jpg" },
    { title: "Oh! Master", year: "2021", cast: "Lee Min Ki", episodes: "16", afis: "https://i.pinimg.com/736x/c3/4d/18/c34d18fbe63a8557444cee7f191c9ab4.jpg" },
    { title: "Once Upon a Small Town", year: "2022", cast: "Choo Young Woo", episodes: "12", afis: "https://i.pinimg.com/736x/0f/70/eb/0f70eb7910b6613675c29a08502311c3.jpg" },
    { title: "One Spring Night", year: "2019", cast: "Jung Hae In", episodes: "32", afis: "https://i.pinimg.com/736x/c3/34/50/c33450b9626d2f8cdc2e54dea156d62d.jpg" },
    { title: "Our Beloved Summer", year: "2021", cast: "Choi Woo Sik", episodes: "16", afis: "https://i.pinimg.com/736x/b6/91/bf/b691bfdb4bbc0a4790801092b38ae9fa.jpg" },
    { title: "Our Universe", year: "2026", cast: "Bae In Hyuk", episodes: "12", afis: "https://i.pinimg.com/736x/48/6e/c4/486ec4d0d30980f619c5b7960eb11576.jpg" },
    { title: "Perfect Marriage Revenge", year: "2023", cast: "Sung Hoon", episodes: "12", afis: "https://i.pinimg.com/736x/12/e8/c2/12e8c2754a967d893ffc46ccd370b861.jpg" },
    { title: "Perfume", year: "2019", cast: "Shin Sung Rok, Kim Min Gyu", episodes: "32", afis: "https://i.pinimg.com/736x/61/c8/dd/61c8dd71a841c661bead0839b19b46a2.jpg" },
    { title: "Persona", year: "2019", cast: "Park Hae Soo", episodes: "4", afis: "https://i.pinimg.com/736x/a4/54/d7/a454d7eb7872867ba146562bb40d3e1b.jpg" },
    { title: "Personal Taste", year: "2010", cast: "Lee Min Ho", episodes: "16", afis: "https://i.pinimg.com/1200x/04/8b/2a/048b2a31b912d4bf02fe14b608af6953.jpg" },
    { title: "Playfull Kiss", year: "2010", cast: "Kim Hyun Joong", episodes: "16", afis: "https://i.pinimg.com/736x/b3/6c/e0/b36ce0bb43badbc422046c8f28670d0b.jpg" },
    { title: "Please Don't Date Him", year: "2020", cast: "Lee Jun Young", episodes: "10", afis: "https://i.pinimg.com/736x/d4/13/a1/d413a1043c605a902a595450223ce9cb.jpg" },
    { title: "Please, Summer!", year: "2020", cast: "Kim Kang Min", episodes: "1", afis: "https://i.pinimg.com/1200x/5a/c2/36/5ac236a3a7a9afe6d898044658c8b082.jpg" },
    { title: "Plus Nine Boys", year: "2014", cast: "Kim Young Kwang", episodes: "14", afis: "https://media.themoviedb.org/t/p/w116_and_h174_face/lAxxKor23HEWwpJ17N0WtRJxLSh.jpg" },
    { title: "Pool Ha-Woo-Seu", year: "2004", cast: "Rain", episodes: "16", afis: "https://i.pinimg.com/736x/51/06/3ba74ce22b193f7ff41a766924b2.jpg" },
    { title: "Pop Out Boy!", year: "2020", cast: "Kim Min Kyu", episodes: "10", afis: "https://i.pinimg.com/736x/39/79/bb/3979bbf95c25b795a7f3363f7cd8549c.jpg" },
    { title: "Princess Hours", year: "2006", cast: "Ju Ji Hoon", episodes: "24", afis: "https://i.pinimg.com/736x/ce/c9/46/cec946dca1fdc9c2f0ed72a5a157ffd3.jpg" },
    { title: "Private Lives", year: "2020", cast: "Ko Kyung Pyo", episodes: "16", afis: "https://i.pinimg.com/736x/b4/dc/26/b4dc264d3fb70bab77a05ba42b45c899.jpg" },
    { title: "Queen of Tears", year: "2024", cast: "Kim Soo Hyun", episodes: "16", afis: "https://i.pinimg.com/736x/33/1b/38/331b386440a747673dcf651bdd656a07.jpg" },
    { title: "Queen of the Ring", year: "2017", cast: "Ahn Hyo Seop", episodes: "21", afis: "https://i.pinimg.com/1200x/8b/f8/57/8bf857f4cf9313ac1ad4bf94b8539422.jpg" },
    { title: "Radio Romance", year: "2018", cast: "Yoon Doo Joon", episodes: "16", afis: "https://i.pinimg.com/1200x/96/4f/c0/964fc06510fde63bf898855d9670613d.jpg" },
    { title: "Record of Youth", year: "2020", cast: "Park Bo Gum, Byeon Woo Seok", episodes: "16", afis: "https://i.pinimg.com/736x/51/58/f7/5158f7b6157a47284da4bb2ad134c43b.jpg" },
    { title: "Revenge of Others", year: "2022", cast: "Park Solomon", episodes: "12", afis: "https://i.pinimg.com/736x/a5/71/1f/a5711f08241a1b36154e5b42e8f6b488.jpg" },
    { title: "Rich Man Poor Woman", year: "2018", cast: "Kim Jun Myeon", episodes: "16", afis: "https://i.pinimg.com/736x/fb/2f/40/fb2f4026b1771a8bf4a94e63a9a7321a.jpg" },
    { title: "Risky Romance", year: "2018", cast: "Ji Hyun Woo", episodes: "32", afis: "https://i.pinimg.com/736x/69/9c/61/699c61d987c2441e0c64ab528b3987e5.jpg" },
    { title: "Romance is a Bonus Book", year: "2019", cast: "Lee Jong Seok, Wi Ha Joon", episodes: "16", afis: "https://i.pinimg.com/1200x/a1/42/eb/a142eb82fdd0664eb0f5079b1f4c98f3.jpg" },
    { title: "Romance Special Law", year: "2017", cast: "Kim Min Gyu", episodes: "6", afis: "https://i.pinimg.com/1200x/62/c9/b4/62c9b44d4f163a8c7204f44a8b878672.jpg" },
    { title: "Romance Talking", year: "2020", cast: "Choi Kyung Hoon", episodes: "8", afis: "https://i.pinimg.com/1200x/d1/ab/2e/d1ab2ea55a21c238b0f281c55d15443e.jpg" },
    { title: "Romantic Doctor, Teacher Kim", year: "2016", cast: "Yoo Yeon Seok, Ahn Hyo Seop", episodes: "20", afis: "https://i.pinimg.com/736x/4d/3f/3e/4d3f3eee75f815ef9bcf676d3468826f.jpg" },
    { title: "Rookie Cops", year: "2022", cast: "Kang Daniel", episodes: "16", afis: "https://i.pinimg.com/736x/fb/fa/27/fbfa274863d2aca5d9e137f6551a30c2.jpg" },
    { title: "Run On", year: "2020", cast: "Im Siwan, Kang Tae Oh", episodes: "16", afis: "https://i.pinimg.com/1200x/55/72/20/557220a015ef03a7f492baf9ac90df10.jpg" },
    { title: "S Line", year: "2025", cast: "Lee Soo Hyuk", episodes: "6", afis: "https://i.pinimg.com/736x/f7/4c/5d/f74c5d396db5aa216f3366b7b3ac586c.jpg" },
    { title: "Sassy Go Go!", year: "2015", cast: "Lee Won Geun", episodes: "12", afis: "https://i.pinimg.com/1200x/ca/5e/d2/ca5ed250d4a285574629173c92842d99.jpg" },
    { title: "School 2017", year: "2017", cast: "Kim Jung Hyun, Jang Dong Yoon", episodes: "16", afis: "https://i.pinimg.com/736x/e0/c4/e5/e0c4e55008da24558b93eb50724de4dc.jpg" },
    { title: "School 2021", year: "2021", cast: "Kim Yohan, Choo Young Woo", episodes: "16", afis: "https://i.pinimg.com/736x/f4/4b/e9/f44be92e6a0d5ed34b27b51f8cde0928.jpg" },
    { title: "Search WWW", year: "2019", cast: "Jang Ki Yong, Lee Jae Wook", episodes: "16", afis: "https://i.pinimg.com/1200x/e5/39/ee/e539ee0d2273da7b07fbf192dad95d13.jpg" },
    { title: "Second Shot At Love", year: "2025", cast: "Gong Myung", episodes: "12", afis: "https://i.pinimg.com/1200x/3b/c5/c2/3bc5c228509b3bcb2d9fa0c8dee65c2a.jpg" },
    { title: "Secret Garden", year: "2010", cast: "Hyun Bin", episodes: "20", afis: "https://i.pinimg.com/736x/44/5a/e8/445ae8f31e8b48a8953595610c5d1af4.jpg" },
    { title: "Secret Queen Makers", year: "2018", cast: "My Loves", episodes: "7", afis: "https://i.pinimg.com/1200x/3f/48/82/3f4882a06d16f40a96598b91407244ce.jpg" },
    { title: "See You in My 19th Life", year: "2023", cast: "Ahn Bo Hyun", episodes: "12", afis: "https://i.pinimg.com/736x/d3/90/3f/d3903f32fb604ada377056d1d5ad7413.jpg" },
    { title: "Serendipity's Embrace", year: "2024", cast: "Chae Jong Hyeop", episodes: "8", afis: "https://i.pinimg.com/736x/f8/05/be/f805be2997c22c404d453ee4f36d075d.jpg" },
    { title: "Seven First Kisses", year: "2016", cast: "My Loves", episodes: "8", afis: "https://i.pinimg.com/736x/79/a8/82/79a882ea72880ec17b5769a4da4495a2.jpg" },
    { title: "Seventeen", year: "2017", cast: "Kim Do Wan", episodes: "8", afis: "https://i.pinimg.com/736x/86/97/a7/8697a73a4a7b1595d2bdf688acf34261.jpg" },
    { title: "Sh**ting Stars", year: "2022", cast: "Kim Young Dae, Shin Hyun Seung", episodes: "16", afis: "https://i.pinimg.com/736x/a7/98/5f/a7985fe72291fb602079cf3b6a4cf3e7.jpg" },
    { title: "She Was Pretty", year: "2015", cast: "Park Seo Joon, Choi Siwon", episodes: "16", afis: "https://i.pinimg.com/736x/ce/4d/ce/ce4dce5c7290601290d4d86dbdd27608.jpg" },
    { title: "She Would Never Know", year: "2021", cast: "Rowoon", episodes: "16", afis: "https://i.pinimg.com/736x/eb/e1/8d/ebe18d9084b9d5a69ab9539a64443677.jpg" },
    { title: "Shine Go Back", year: "2018", cast: "Park Hae Jin", episodes: "12", afis: "https://i.mydramalist.com/66nKW_3s.jpg" },
    { title: "Shopping King Louis", year: "2016", cast: "Seo In Guk", episodes: "16", afis: "https://i.pinimg.com/736x/71/46/0d/71460d66059f5520333f5b97d952e309.jpg" },
    { title: "Single's Inferno", year: "2021", cast: "program", episodes: "8", afis: "https://i.pinimg.com/736x/89/ee/5c/89ee5c27bef85b4c00d1fa646f65814a.jpg" },
    { title: "Snowdrop", year: "2021", cast: "Jung Hae In, Jang Seung Jo", episodes: "16", afis: "https://i.pinimg.com/1200x/0e/73/b4/0e73b4f377772e3a6ef0e083febac3f4.jpg" },
    { title: "So I Married An Anti Fan", year: "2021", cast: "Choi Tae Joon, Kim Min Gyu", episodes: "16", afis: "https://i.pinimg.com/736x/a4/97/87/a49787986b5f0728e842010c75c2f9ae.jpg" },
    { title: "So Not Worth It", year: "2021", cast: "Youngjae, Shin Hyun Seung", episodes: "12", afis: "https://i.pinimg.com/736x/10/ed/18/10ed18a81a650aab1d5334e094724907.jpg" },
    { title: "Society Obsessed with Love", year: "2018", cast: "Kim Young Jae", episodes: "6", afis: "https://i.pinimg.com/736x/2f/40/bf/2f40bfae94c1b11b3c3be53d222b93c8.jpg" },
    { title: "Something About 1%", year: "2016", cast: "Ha Seok Jin", episodes: "16", afis: "https://i.pinimg.com/736x/c0/52/38/c0523824bf19db267e8f980bfadac133.jpg" },
    { title: "Something in the Rain", year: "2018", cast: "Jung Hae In, Wi Ha Joon", episodes: "16", afis: "https://i.pinimg.com/1200x/6e/a5/1c/6ea51c60700a944394331f558b3c1bfa.jpg" },
    { title: "Soundtrack #1", year: "2022", cast: "Park Hyung Sik", episodes: "4", afis: "https://i.pinimg.com/1200x/7c/70/d2/7c70d2cceb381d6667599119bc1290f0.jpg" },
    { title: "Spice Up Our Love", year: "2024", cast: "Lee Sang Yi", episodes: "2", afis: "https://i.pinimg.com/736x/30/be/d6/30bed67edb4afc97bd758e318e79d07e.jpg" },
    { title: "Splash Splash Love", year: "2015", cast: "Yoon Doo Joon", episodes: "2", afis: "https://i.pinimg.com/736x/3e/2d/06/3e2d06ac17b94157b54fd8aeb0588cf1.jpg" },
    { title: "Spring Fever", year: "2026", cast: "Ahn Bo Hyun", episodes: "16", afis: "https://i.pinimg.com/1200x/f2/ab/ea/f2abea79d8e4c404968589179e44d99c.jpg" },
    { title: "Squid Game", year: "2021", cast: "Wi Ha Joon, Kang Ha Neul", episodes: "9", afis: "https://i.pinimg.com/1200x/8a/e5/d5/8ae5d52e094e80483c2fc2786a21c5c1.jpg" },
    { title: "Start Love", year: "2015", cast: "Kim Kyu Jong", episodes: "5", afis: "https://media.themoviedb.org/t/p/w116_and_h174_face/huxo9iaZsSggXs1HACuhAKuGwF9.jpg" },
    { title: "Start Up", year: "2020", cast: "Nam Joo Hyuk, Kim Seon Ho", episodes: "16", afis: "https://i.pinimg.com/736x/6c/55/f4/6c55f46612f1b6f83e0f2671c1f1d6fe.jpg" },
    { title: "Still 17", year: "2018", cast: "Yang Se Jong, Ahn Hyo Seop", episodes: "32", afis: "https://i.pinimg.com/736x/63/dd/be/63ddbe9fcaa4e17c8392bf4c3ce5263b.jpg" },
    { title: "Strangers Again", year: "2023", cast: "Jang Seung Jo", episodes: "12", afis: "https://i.pinimg.com/736x/13/f5/b2/13f5b250c340c94b93feca54001a85b7.jpg" },
    { title: "Strangers from Hell", year: "2019", cast: "Im Siwan, Lee Dong Wook", episodes: "10", afis: "https://i.pinimg.com/736x/97/02/b7/9702b7ea5db58b557d7645bde7ca1e15.jpg" },
    { title: "Strong Girl Nam-soon", year: "2023", cast: "Ong Seong Wu, Byeon Woo Seok", episodes: "16", afis: "https://i.pinimg.com/736x/76/87/f1/7687f1e274269e8de559573e2cc5918b.jpg" },
    { title: "Strong Woman Do Bong Soon", year: "2017", cast: "Park Hyung Sik, Ji Soo", episodes: "16", afis: "https://i.pinimg.com/1200x/fa/2f/32/fa2f32972bb0b687f76d56472a666328.jpg" },
    { title: "Strongest Deliveryman", year: "2017", cast: "Ko Kyung Pyo, Kim Seon Ho", episodes: "16", afis: "https://i.pinimg.com/736x/52/2e/9b/522e9befe8eb4b00ac371b42e4d28df2.jpg" },
    { title: "Summer Love", year: "2015", cast: "Lee Min Ho", episodes: "2", afis: "https://i.pinimg.com/736x/4c/26/7c/4c267c85671a9c267b31f4e21822fd05.jpg" },
    { title: "Summer Strike", year: "2022", cast: "Im Siwan", episodes: "12", afis: "https://i.pinimg.com/736x/ef/33/fd/ef33fd6ba1fc469377cd3775fd61d518.jpg" },
    { title: "Suspicious Partner", year: "2017", cast: "Ji Chang Wook, Choi Tae Joon", episodes: "40", afis: "https://i.pinimg.com/736x/26/07/5f/26075f46b59b9e3ad0241d0a1ecf15d3.jpg" },
    { title: "Tale of the Nine Tailed", year: "2020", cast: "Lee Dong Wook, Kim Bum", episodes: "16", afis: "https://i.pinimg.com/1200x/c7/23/44/c72344ddf235dc9c4dca9b95530dbbea.jpg" },
    { title: "Taste of Cat", year: "2018", cast: "Kim Wook", episodes: "4", afis: "https://i.pinimg.com/1200x/33/86/b5/3386b510c5068b0c9e0044aded2a59d8.jpg" },
    { title: "Tastefully Yours", year: "2025", cast: "Kang Ha Neul", episodes: "16", afis: "https://i.pinimg.com/736x/6a/78/9d/6a789d783db03e1160a9a12a149a51c2.jpg" },
    { title: "Temperature of Love", year: "2017", cast: "Yang Se Jong, Lee Jae Wook", episodes: "40", afis: "https://i.pinimg.com/736x/9e/23/52/9e2352f60cf0a9aaa528343f0b881ee0.jpg" },
    { title: "Tempted", year: "2018", cast: "Woo Do Hwan, Kim Min Jae", episodes: "32", afis: "https://i.pinimg.com/736x/a7/f8/50/a7f850df61597245d65be566026a0ce7.jpg" },
    { title: "That Man Oh Soo", year: "2018", cast: "Lee Jung Hyun, Kang Tae Oh", episodes: "16", afis: "https://i.pinimg.com/736x/c4/3d/16/c43d1608adb8d8c872c35628877777a0.jpg" },
    { title: "That Winter, The Wind Blows", year: "2013", cast: "Jo In Sung", episodes: "16", afis: "https://i.pinimg.com/736x/74/4c/98/744c989b185b8977893cadce8423a3ca.jpg" },
    { title: "The Alchemist", year: "2015", cast: "Han Ki Woong", episodes: "12", afis: "https://i.mydramalist.com/85qEbc.jpg?v=1" },
    { title: "The Beauty Inside", year: "2018", cast: "Lee Min Ki, Ahn Jae Hyun", episodes: "16", afis: "https://i.pinimg.com/736x/ad/31/73/ad3173a4fff9370c07df13c1e57d194b.jpg" },
    { title: "The Best Hit", year: "2017", cast: "Yoon Shi Yoon, Kim Min Jae", episodes: "32", afis: "https://i.pinimg.com/736x/58/8f/68/588f681b4f75c315215247a3c1b74116.jpg" },
    { title: "The Bride of Habaek", year: "2017", cast: "Nam Joo Hyuk", episodes: "16", afis: "https://i.pinimg.com/736x/dd/5c/68/dd5c688ac48623d674473c7b8d48c873.jpg" },
    { title: "The Day After We Broke Up", year: "2016", cast: "Kim Myung Soo", episodes: "8", afis: "https://i.pinimg.com/736x/84/57/e1/8457e19d2584043e155c572eed7aa39c.jpg" },
    { title: "The Fabulous", year: "2022", cast: "Choi Min Ho", episodes: "8", afis: "https://i.pinimg.com/736x/d0/89/f6/d089f6962865a30f659e97f22c9a2984.jpg" },
    { title: "The Girl Who Sees Scents", year: "2015", cast: "Park Yoo Chun", episodes: "16", afis: "https://i.pinimg.com/736x/1d/f5/6d/1df56db893bb35cf06b7167bf9eb95ae.jpg" },
    { title: "The Good Bad Mother", year: "2023", cast: "Lee Do Hyun", episodes: "14", afis: "https://i.pinimg.com/736x/45/b1/c2/45b1c23cca8e95bc5c530e56344670fb.jpg" },
    { title: "The Heirs", year: "2013", cast: "Lee Min Ho, Kim Woo Bin", episodes: "20", afis: "https://i.pinimg.com/736x/4d/bf/c5/4dbfc5c213030a75e28d6b7bd9409030.jpg" },
    { title: "The Interest of Love", year: "2022", cast: "Yoo Yeon Seok", episodes: "16", afis: "https://i.pinimg.com/736x/e6/69/41/e6694156fe57f6f6b1ada4b48fcaacd0.jpg" },
    { title: "The K2", year: "2016", cast: "Ji Chang Wook", episodes: "16", afis: "https://i.pinimg.com/736x/5e/4a/e1/5e4ae13ebea6219768339ca38471f949.jpg" },
    { title: "The King: Eternal Monarch", year: "2020", cast: "Lee Min Ho, Woo Do Hwan", episodes: "16", afis: "https://i.pinimg.com/736x/ab/31/16/ab31169b5d17c9980fa949bc5367da83.jpg" },
    { title: "The Law Café", year: "2022", cast: "Lee Seung Gi", episodes: "16", afis: "https://i.pinimg.com/736x/08/2e/53/082e538a00c7d964cf5b0074e7ae9ea9.jpg" },
    { title: "The Legend of the Blue Sea", year: "2016", cast: "Lee Min Ho", episodes: "20", afis: "https://i.pinimg.com/736x/77/b1/28/77b128b440a689980831edc92fed1ad5.jpg" },
    { title: "The Liar and His Lover", year: "2017", cast: "Lee Hyun Woo", episodes: "16", afis: "https://i.pinimg.com/736x/e9/92/84/e992846a7dba0aea4aed30b6b343ce97.jpg" },
    { title: "The Man's Voice", year: "2021", cast: "Choi Tae Joon", episodes: "8", afis: "https://i.pinimg.com/1200x/b9/8e/12/b98e1227a7e1aeab464952e8970bfa98.jpg" },
    { title: "The Mermaid Prince: Begining", year: "2020", cast: "Moonbin", episodes: "10", afis: "https://i.pinimg.com/1200x/7a/b9/3a/7ab93a7c4daec8b12f8e956a228d4552.jpg" },
    { title: "The Potato Lab", year: "2025", cast: "N/A", episodes: "16", afis: "https://i.pinimg.com/736x/2d/14/b7/2d14b7a095a568736f3a036a26177c47.jpg" },
    { title: "The School Nurse Files", year: "2020", cast: "Nam Joo Hyuk", episodes: "6", afis: "https://i.pinimg.com/736x/20/5d/2c/205d2cb5ca5ded1c7e345d2d147fe6e1.jpg" },
    { title: "The Secret Life Of My Secretary", year: "2019", cast: "Kim Young Kwang", episodes: "32", afis: "https://i.pinimg.com/736x/24/aa/90/24aa90027db3a7ce7278f1ff6a25059d.jpg" },
    { title: "The Smile Has Left Your Eyes", year: "2018", cast: "Seo In Guk", episodes: "16", afis: "https://i.pinimg.com/736x/07/2b/74/072b744d16dbf44ea538a31eb7d780c5.jpg" },
    { title: "The Sound of Your Heart: Reboot", year: "2018", cast: "Sung Hoon", episodes: "20", afis: "https://i.pinimg.com/1200x/99/f7/61/99f7613b737a5b682a2c8157741b97b3.jpg" },
    { title: "The Story of Park's Marriage Contract", year: "2023", cast: "Bae In Hyuk", episodes: "12", afis: "https://i.pinimg.com/736x/b2/c3/9d/b2c39dbc4da6ada9cac96b0d4c56287b.jpg" },
    { title: "The Tale of Nokdu", year: "2019", cast: "Jang Dong Yoon, Kang Tae Oh", episodes: "32", afis: "https://i.pinimg.com/736x/69/c8/c2/69c8c2d440a1f3638fa65d04695694bc.jpg" },
    { title: "The Trauma Code: Heroes on Call", year: "2025", cast: "Ju Ji Hoon, Choo Young Woo", episodes: "12", afis: "https://i.pinimg.com/736x/1e/13/2d/1e132d24b922f7e5c5d87efc4a6ba583.jpg" },
    { title: "The Trunk", year: "2024", cast: "Gong Yoo", episodes: "8", afis: "https://i.pinimg.com/736x/8d/e0/0d/8de00d72b493de3afeb206d32a089c59.jpg" },
    { title: "The Universe's Star", year: "2017", cast: "Kim Jun Myeon", episodes: "21", afis: "https://i.pinimg.com/736x/65/f7/6a/65f76a015c7edb86f824ce51ccf95b13.jpg" },
    { title: "The Way I Hate You", year: "2019", cast: "Jaemin", episodes: "6", afis: "https://m.media-amazon.com/images/M/MV5BMWVlZmVhZjEtZmQ2MS00YTQxLTk4MjUtNmFiMWQwYzBkM2E1XkEyXkFqcGc@._V1_.jpg" },
    { title: "Third Charm", year: "2018", cast: "Seo Kang Joon", episodes: "16", afis: "https://i.pinimg.com/736x/c2/11/76/c21176126fd6592130c51494d0fd0d15.jpg" },
    { title: "Thumpink Spike", year: "2016", cast: "Song Jae Rim", episodes: "20", afis: "https://i.pinimg.com/736x/64/43/ce/6443cebec80e04f07f9dd7e992ba9293.jpg" },
    { title: "To Be Continued", year: "2015", cast: "ASTRO", episodes: "12", afis: "https://i.pinimg.com/736x/6c/48/43/6c4843500db06e6a4eac07feb6f61131.jpg" },
    { title: "To World of My 17", year: "2020", cast: "Ryeo Un", episodes: "10", afis: "https://i.pinimg.com/1200x/18/f5/85/18f58532ba22e914e3abe76dafc51d90.jpg" },
    { title: "Touch", year: "2020", cast: "Joo Sang Wook", episodes: "16", afis: "https://i.pinimg.com/1200x/f7/db/86/f7db86045a11b87b6f14b45c8d227794.jpg" },
    { title: "Touch Me If You Can", year: "2020", cast: "Yoon Seo Bin", episodes: "10", afis: "https://m.media-amazon.com/images/M/MV5BZmI3ZWJiZGMtYzFlNy00NDAwLThmMWQtODhjZGIyZjYyOTE2XkEyXkFqcGc@._V1_.jpg" },
    { title: "Touch Your Heart", year: "2019", cast: "Lee Dong Wook", episodes: "16", afis: "https://i.pinimg.com/736x/c5/ed/7f/c5ed7fa853cb9f3e6451b8be7c203f3b.jpg" },
    { title: "Touching You", year: "2016", cast: "Taecyeon", episodes: "12", afis: "https://i.pinimg.com/736x/f5/2c/26/f52c2633fda73310c127685725cd145d.jpg" },
    { title: "Trap", year: "2020", cast: "Choi Kyung Hoon", episodes: "12", afis: "https://i.pinimg.com/1200x/4c/47/c3/4c47c3645ecc87f14ab229e0a56c7194.jpg" },
    { title: "True Beauty", year: "2020", cast: "Cha Eun Woo, Hwang In Yeop", episodes: "16", afis: "https://i.pinimg.com/736x/14/b1/49/14b149247aca2d3b62c77a9b80a87928.jpg" },
    { title: "Twenty-Five, Twenty-One", year: "2022", cast: "Nam Joo Hyuk", episodes: "16", afis: "https://i.pinimg.com/1200x/cb/7c/f7/cb7cf7b704132eb19fa29a5749ab4b8e.jpg" },
    { title: "Uncontrollably Fond", year: "2016", cast: "Kim Woo Bin", episodes: "20", afis: "https://i.pinimg.com/736x/5c/f3/a5/5cf3a506a70ddb4021022bba38d2ed77.jpg" },
    { title: "Vagabond", year: "2019", cast: "Lee Seung Gi", episodes: "16", afis: "https://i.pinimg.com/1200x/ff/93/dd/ff93dded895ac9078a9bf8bb33490ea6.jpg" },
    { title: "Vampire Flower", year: "2014", cast: "Seo Jae Hyung", episodes: "6", afis: "https://m.media-amazon.com/images/M/MV5BM2Y5NWNiMmEtZjgwMS00M2E3LWEzNjktN2M0MjEzNTgxODI0XkEyXkFqcGc@._V1_.jpg" },
    { title: "Vincenzo", year: "2021", cast: "Song Joong Ki, Taecyeon", episodes: "20", afis: "https://i.pinimg.com/736x/e5/94/43/e59443f3677fc7d3acae07c63a6a77a7.jpg" },
    { title: "W-Two Worlds", year: "2016", cast: "Lee Jong Seok", episodes: "16", afis: "https://i.pinimg.com/736x/9e/23/99/9e2399e156b8716110cb10ea182f8f04.jpg" },
    { title: "Want More 19", year: "2018", cast: "Nam Yoon Soo", episodes: "7", afis: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjjarx4oLeb0-Uu-a-E7zvNQatAuIIXbl-Wg&s" },
    { title: "Weak Hero Class", year: "2022", cast: "Park Ji Hoon", episodes: "8", afis: "https://i.pinimg.com/1200x/fe/80/aa/fe80aaa415c7ad6a7e715bd4807517b0.jpg" },
    { title: "Wedding Impossible", year: "2024", cast: "Moon Sang Min, Kim Do Wan", episodes: "12", afis: "https://i.pinimg.com/1200x/e1/20/b9/e120b98b6e44fb04366f33d1fb26b82a.jpg" },
    { title: "Wednesday 3.30 PM", year: "2017", cast: "Hongbin, Ahn Bo Hyun", episodes: "10", afis: "https://i.pinimg.com/736x/64/00/75/6400759dc24c4ec7ffad4999cb8f45d0.jpg" },
    { title: "Weightlifting Fairy Kim Bok Joo", year: "2016", cast: "Nam Joo Hyuk", episodes: "16", afis: "https://i.pinimg.com/736x/6c/94/0a/6c940af1236b43e94bd2de2d82940311.jpg" },
    { title: "Welcome to Samdal-ri", year: "2023", cast: "Ji Chang Wook", episodes: "16", afis: "https://i.pinimg.com/736x/f1/e6/95/f1e69550e76052d37fd0cc1cffdb11a2.jpg" },
    { title: "When Life Gives You Tangerines", year: "2025", cast: "Park Bo Gum", episodes: "16", afis: "https://i.pinimg.com/736x/ae/90/77/ae9077abc63d4fb8f3be89c4344ebec4.jpg" },
    { title: "When the Camellia Blooms", year: "2019", cast: "Kang Ha Neul", episodes: "40", afis: "https://i.pinimg.com/736x/2d/88/23/2d8823f4e336b94109f6a19f5c4b19dd.jpg" },
    { title: "When the Phone Rings", year: "2024", cast: "Yoo Yeon Seok", episodes: "12", afis: "https://i.pinimg.com/736x/e4/26/04/e426040780b99c38208a4b229abe3dbe.jpg" },
    { title: "When the Weather is Fine", year: "2020", cast: "Seo Kang Joon", episodes: "16", afis: "https://i.pinimg.com/736x/3d/a7/41/3da741b9b9f822cbde85980921ac745d.jpg" },
    { title: "Where Stars Land", year: "2018", cast: "Lee Je Hoon", episodes: "32", afis: "https://i.pinimg.com/736x/f3/47/81/f34781ddd8547c747217db4a635a38a4.jpg" },
    { title: "While You Were Sleeping", year: "2017", cast: "Lee Jong Seok, Jung Hae In", episodes: "32", afis: "https://i.pinimg.com/736x/2e/4c/e5/2e4ce5fa578d5b66fd9d3a119d31c177.jpg" },
    { title: "Who Kissed Me?", year: "2019", cast: "Bae In Hyuk", episodes: "12", afis: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvjLl85zd-NmRVBNmtOgUGD5DO84Rf96yNfA&s" },
    { title: "Why Secretary Kim", year: "2018", cast: "Park Seo Joon", episodes: "16", afis: "https://i.pinimg.com/1200x/d0/bf/37/d0bf3752806bec41666d1db6233a2034.jpg" },
    { title: "Will Be Okay, Never Die", year: "2019", cast: "Kang Yul", episodes: "12", afis: "https://m.media-amazon.com/images/M/MV5BODY4ZDQ2ZjQtOTczNS00YjhhLWEyOTAtYjZiNGRmNzY4NzlkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
    { title: "Witch's Love", year: "2018", cast: "Hyun Woo", episodes: "12", afis: "https://i.pinimg.com/736x/5a/e1/59/5ae1595768f63dfd4c82adb725eae7d5.jpg" },
    { title: "Wok of Love", year: "2018", cast: "Lee Jun Ho, Jung Hyuk", episodes: "38", afis: "https://i.pinimg.com/736x/40/de/50/40de500383bdc3941358d0cbd0be7d7f.jpg" },
    { title: "Woori The Virgin", year: "2022", cast: "Sung Hoon", episodes: "14", afis: "https://i.pinimg.com/1200x/46/d9/50/46d9506e1c9a2e6fea803739c5d630e8.jpg" },
    { title: "Work Later, Drink Now", year: "2021", cast: "Siwon", episodes: "12", afis: "https://i.pinimg.com/736x/c7/6f/68/c76f68d9c7fe8c635b627a1d24629725.jpg" },
    { title: "Yes or No", year: "2019", cast: "Kim Kang Min", episodes: "8", afis: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn9wPQmLDhXS-MUr_jmUlrRtcykjz4tFcd4Q&s" },
    { title: "You Are My Spring", year: "2021", cast: "Kim Dong Wook", episodes: "16", afis: "https://i.pinimg.com/1200x/bf/b8/d7/bfb8d75c59b631b92601648c44b1001c.jpg" },
    { title: "You Drive Me Crazy", year: "2018", cast: "Kim Seon Ho", episodes: "4", afis: "https://i.pinimg.com/736x/80/b8/33/80b8334c5582a095b5f30a1d63462339.jpg" },
    { title: "Youth MT", year: "2022", cast: "My Loves", episodes: "8", afis: "https://i.pinimg.com/1200x/fc/d8/ba/fcd8ba837882fc66e54aaf3231d32c05.jpg" },
    { title: "Youth of May", year: "2021", cast: "Lee Do Hyun, Lee Sang Yi", episodes: "12", afis: "https://i.pinimg.com/736x/c7/62/6c/c7626cdc7e0bc74139b9df9ce6ce0262.jpg" },
    { title: "Yumi's Cell", year: "2021", cast: "Ahn Bo Hyun, Park Jin Young", episodes: "14", afis: "https://i.pinimg.com/1200x/0c/44/f3/0c44f318576e75afcdc1c0d534ab023e.jpg" }
];

const actorDetails = {
    "Ji Chang Wook": {
        photo: "https://i.pinimg.com/736x/21/f0/5c/21f05c48698188179261a868f075d9e5.jpg",
        bio: "1987 doğumlu yetenekli oyuncu, aksiyon ve romantik komedi dizilerinin aranan yüzüdür. Healer ve The K2 ile dünya çapında ün kazanmıştır.",
        insta: "@jichangwook"
    },
    "Rowoon": {
        photo: "https://i.pinimg.com/736x/88/5b/4b/885b4b1a8d0b284799042b32f9136e05.jpg",
        bio: "Eski SF9 üyesi, model ve oyuncu. Extraordinary You ve Destined With You gibi dizilerdeki başarısıyla tanınır.",
        insta: "@ewsbdi"
    },
    "Doh Kyung Soo": {
        photo: "https://i.pinimg.com/736x/7b/0a/6e/7b0a6e29780a8f89179261a868f075d9e5.jpg",
        bio: "EXO üyesi (D.O.). Hem idol hem de çok başarılı bir aktördür. 100 Days My Prince dizisindeki performansı ikoniktir.",
        insta: "@d.o.hkyungsoo"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const wordGrid = document.getElementById('wordGrid');
    const searchWrapper = document.getElementById('searchWrapper');
    const searchInput = document.getElementById('searchInput');
    const categoryButtons = document.getElementById('categoryButtons');
    const mainMenu = document.getElementById('mainMenu');

    // --- 1. MODÜL BAŞLATICI ✨ ---
    window.startModule = function(moduleType) {
        mainMenu.style.display = "none";
        // Arama çubuğunu sadece 'kelimeler' ve 'tüm diziler/oyuncular' kısmında gösteriyoruz
        searchWrapper.style.display = (moduleType === 'words') ? "flex" : "none";
        wordGrid.innerHTML = "";
        searchInput.value = ""; 
        
        if (moduleType === 'alphabet') displayWords("", "🇰🇷 HANGUL ALFABESİ");
        else if (moduleType === 'words') displayCategoryMenu();
        else if (moduleType === 'numbers') displayWords("", "🔢 SAYILAR");
        else if (moduleType === 'random') displayRandomWords(); // Eğer bu fonksiyonunuz allWords içindeyse çalışır
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
    // --- 4. KDRAMA ANA MENÜSÜ ✨ ---
    window.displayKdramas = function() {
        wordGrid.innerHTML = "";
        wordGrid.className = "category-grid-layout"; 
        searchWrapper.style.display = "none";
        
        // İstatistikler (Dinamik)
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
            { id: 'favs', title: '❤️ Favorilerim', icon: '💖' } // Buton burada
        ];

        subCategories.forEach(sub => {
            const card = document.createElement('div');
            card.className = 'menu-card animate-in';
            card.innerHTML = `<div style="font-size: 3rem; margin-bottom: 15px;">${sub.icon}</div><h3 style="color: var(--primary-color);">${sub.title}</h3>`;
            
            // TIKLAMA OLAYI BURADA ✨
            card.onclick = () => {
                if (sub.id === 'all_dramas') window.showAllDramas();
                else if (sub.id === 'actors') window.showActorsMenu();
                else if (sub.id === 'years') window.showYearsMenu();
                else if (sub.id === 'favs') window.showFavorites(); // Favorileri çağıran satır
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
            card.innerHTML = `<div style="font-size:1.5rem;">👤</div><h3>${actor}</h3>`;
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
    
    // Eğer oyuncuysa profil bilgilerini hazırla ✨
    let actorHeaderHTML = "";
    if (type === 'actor' && actorDetails[value]) {
        const actor = actorDetails[value];
        actorHeaderHTML = `
            <div class="actor-profile-card animate-in">
                <img src="${actor.photo}" alt="${value}">
                <div class="actor-info-text">
                    <h2>${value}</h2>
                    <p>${actor.bio}</p>
                    <span class="insta-tag">📱 ${actor.insta}</span>
                </div>
            </div>
            <h3 style="margin: 30px 0 15px 0; color: var(--primary-color);">Dizileri (${kdramaData.filter(d => d.cast.includes(value)).length})</h3>
        `;
    } else {
        actorHeaderHTML = `<h2>✨ ${value} DİZİLERİ</h2>`;
    }

    categoryButtons.innerHTML = `
        <button class="cat-btn" onclick="${backFunc}">⬅️ Geri Dön</button>
        ${actorHeaderHTML}
    `;

    kdramaData.filter(d => type === 'year' ? d.year === value : d.cast.includes(value))
              .forEach(drama => window.createDramaCard(drama));
};

    // --- 6. YARDIMCI KART OLUŞTURUCULAR ---
    window.createDramaCard = function(drama) {
    const card = document.createElement('div');
    card.className = 'category-item-card animate-in';
    const imageSrc = drama.afis || "https://via.placeholder.com/300x450?text=No+Image";
    
    // Favori kontrolü
    let favorites = JSON.parse(localStorage.getItem('kdramaFavs')) || [];
    const isFav = favorites.includes(drama.title);

    card.innerHTML = `
        <div class="poster-container">
            <span class="episode-badge">${drama.episodes || "?"} Bölüm</span>
            <button class="fav-btn ${isFav ? 'active' : ''}" onclick="event.stopPropagation(); window.toggleFavorite('${drama.title}')">
                ${isFav ? '❤️' : '🤍'}
            </button>
            <img src="${imageSrc}" alt="${drama.title}">
        </div>
        <div class="card-info">
            <h3>${drama.title}</h3>
            <p>${drama.year} - ${drama.cast}</p>
        </div>
    `;
    wordGrid.appendChild(card);
};

// Favori Ekleme/Çıkarma Mantığı ✨
    window.toggleFavorite = function(title) {
    let favorites = JSON.parse(localStorage.getItem('kdramaFavs')) || [];
    if (favorites.includes(title)) {
        favorites = favorites.filter(f => f !== title);
    } else {
        favorites.push(title);
    }
    localStorage.setItem('kdramaFavs', JSON.stringify(favorites));
    
    // Hangi sayfadaysak orayı yenile ✨
    const currentTitle = categoryButtons.querySelector('h2').innerText;
    if (currentTitle === "💖 FAVORİ DİZİLERİM") {
        window.showFavorites();
    } else if (currentTitle === "📺 TÜM DİZİLER") {
        window.showAllDramas(searchInput.value);
    } else {
        // Diğer durumlarda (Oyuncu/Yıl alt sayfaları gibi)
        // Mevcut görünümü korumak için ilgili fonksiyonu tekrar çağırabilirsin
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
        wordGrid.innerHTML = `<p style="text-align:center; padding:20px;">🎤 K-Pop modülü yakında eklenecek!</p>`;
        categoryButtons.innerHTML = `<button class="cat-btn" onclick="goHome()">⬅️ Geri Dön</button><h2>🎵 K-POP AREA</h2>`;
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

        // Hafızadan çek
        const favorites = JSON.parse(localStorage.getItem('kdramaFavs')) || [];

        if (favorites.length === 0) {
            wordGrid.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; padding: 50px;">
                    <p style="font-size: 1.2rem; opacity: 0.7;">Henüz hiçbir diziyi kalplemedin... ❤️</p>
                </div>
            `;
            return;
        }

        // Favorileri kdramaData içinden bul ve kartlarını oluştur
        const favList = kdramaData.filter(drama => favorites.includes(drama.title));
        favList.forEach(drama => window.createDramaCard(drama));
    };


});
