const allWords = {

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
document.addEventListener('DOMContentLoaded', () => {
    const wordGrid = document.getElementById('wordGrid');
    const searchInput = document.getElementById('searchInput');
    const categoryButtons = document.getElementById('categoryButtons');
    const autocompleteList = document.getElementById('autocomplete-list');
    
    let currentCategory = "all";

    function displayCategories() {
        currentCategory = "all";
        if (wordGrid) wordGrid.innerHTML = ""; 
        if (categoryButtons) categoryButtons.innerHTML = ""; 
        searchInput.value = "";
        if (autocompleteList) autocompleteList.innerHTML = "";

        for (const categoryName in allWords) {
            const catCard = document.createElement('div');
            catCard.className = 'category-main-card animate-in';
            
            const parts = categoryName.split(' ');
            const emoji = parts[0] || "✨"; 
            const title = parts.slice(1).join(' ') || categoryName; 

            catCard.innerHTML = `
                <div class="category-emoji-center">${emoji}</div>
                <h3 class="category-title-center">${title}</h3>
                <p style="font-size:0.8rem; color:var(--secondary-color)">${allWords[categoryName].length} Kelime ✨</p>
            `;

            catCard.onclick = () => displayWords("", categoryName);
            wordGrid.appendChild(catCard);
        }
    }

    function displayWords(searchTerm = "", selectedCategory) {
        currentCategory = selectedCategory;
        if (wordGrid) wordGrid.innerHTML = "";
        if (autocompleteList) autocompleteList.innerHTML = "";
        
        const cleanTitle = selectedCategory.includes(' ') ? selectedCategory.split(' ').slice(1).join(' ') : selectedCategory;

        if (categoryButtons) {
            categoryButtons.innerHTML = `
                <div style="width:100%; text-align:center;">
                    <button class="cat-btn" id="backBtn">⬅️ Kategorilere Dön</button>
                    <h2 style="color: var(--text-deep-pink); margin-bottom: 20px;">
                        ${selectedCategory === "Global Arama" ? "🔍 Arama Sonuçları" : cleanTitle}
                    </h2>
                </div>
            `;
            document.getElementById('backBtn').onclick = displayCategories;
        }

        const term = searchTerm.toLowerCase().trim();
        let sourceWords = [];

        if (selectedCategory === "Global Arama") {
            for (const cat in allWords) {
                allWords[cat].forEach(item => {
                    sourceWords.push({ ...item, originCat: cat });
                });
            }
        } else {
            sourceWords = allWords[selectedCategory] || [];
        }

        sourceWords.forEach(item => {
            const kor = item.korece.toLowerCase();
            const tr = item.turkce.toLowerCase();
            const okunu = item.okunus ? item.okunus.toLowerCase() : "";
            
            // StartsWith mantığı "çöp kutusu" problemini çözer, harika! ✨
            const isMatch = 
                tr.split(', ').some(word => word.trim().startsWith(term)) || 
                kor.startsWith(term) || 
                okunu.startsWith(term);

            if (term === "" || isMatch) {
                const card = document.createElement('div');
                card.className = 'word-card animate-in';
                
                const badgeEmoji = item.originCat ? item.originCat.split(' ')[0] : '';
                const badge = item.originCat ? `<div class="category-badge">${badgeEmoji}</div>` : '';
                
                card.innerHTML = `
                    <div class="card-inner">
                        <div class="card-front">
                            ${badge}
                            <h3>${item.korece}</h3>
                            <div class="pronunciation">[${item.okunus}]</div> 
                            <span>${item.turkce}</span>
                        </div>
                        <div class="card-back">
                            <p>${item.ornek}</p>
                            <p>[${item.ornekOkunus}]</p>
                            <p>${item.ornekTr}</p>
                        </div>
                    </div>
                `;

                card.onclick = () => card.classList.toggle('is-flipped');
                wordGrid.appendChild(card);
            }
        });

        if (wordGrid.innerHTML === "" && term !== "") {
            wordGrid.innerHTML = `<p style="text-align:center; width:100%; color:var(--secondary-color);">Kelime bulunamadı... ✨</p>`;
        }
    }

    searchInput.addEventListener('input', function() {
        const val = this.value.toLowerCase().trim();
        if (val === "") {
            if (currentCategory === "all") displayCategories();
            else displayWords("", currentCategory);
        } else {
            // "all" durumundaysak Global Arama'ya zorla ✨
            const searchCat = (currentCategory === "all") ? "Global Arama" : currentCategory;
            displayWords(val, searchCat);
        }
    });

    displayCategories();
});


