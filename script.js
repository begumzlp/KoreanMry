const kelimeListesi = document.getElementById('kelimeListesi');
const kategoriSelect = document.getElementById('kategoriSelect');

let kelimelerData = {};

// JSON verisini çek
fetch('kelimeler.json')
  .then(response => response.json())
  .then(data => {
    kelimelerData = data;

    const kategoriler = Object.keys(kelimelerData)
      .sort((a, b) => a.localeCompare(b, 'tr'));

    // Select doldur
    kategoriler.forEach((kategori, index) => {
      const option = document.createElement('option');
      option.value = kategori;
      option.textContent = kategori;

      if (index === 0) option.selected = true;

      kategoriSelect.appendChild(option);
    });

    // İlk kategoriyi göster
    listele(kategoriler[0]);
  })
  .catch(err => {
    kelimeListesi.textContent = 'Veri yüklenirken hata oluştu!';
    console.error(err);
  });

// Kategori değişince listele
kategoriSelect.addEventListener('change', () => {
  listele(kategoriSelect.value);
});

// Listeleme fonksiyonu
function listele(kategori) {
  kelimeListesi.innerHTML = '';

  if (!kelimelerData[kategori]) return;

  kelimelerData[kategori].forEach(item => {
    const div = document.createElement('div');
    div.textContent = `${item.korece} — ${item.turkce}`;

    // tıklanınca kopyala
    div.addEventListener('click', () => {
      navigator.clipboard.writeText(`${item.korece} - ${item.turkce}`);
      div.style.backgroundColor = '#d4edda';

      setTimeout(() => {
        div.style.backgroundColor = 'white';
      }, 500);
    });

    kelimeListesi.appendChild(div);
  });
}
