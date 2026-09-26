// ===== VERİLER =====
const kitaplar = [
  { id: 1, baslik: "Çalıkuşu", yazar: "Reşat Nuri Güntekin", sayfaSayisi: 400, durum: "rafta" },
  { id: 2, baslik: "Kuyucaklı Yusuf", yazar: "Sabahattin Ali", sayfaSayisi: 232, durum: "oduncte" },
  { id: 3, baslik: "Saatleri Ayarlama Enstitüsü", yazar: "Ahmet Hamdi Tanpınar", sayfaSayisi: 382, durum: "rafta" }
];

// ===== FONKSİYONLAR =====
const uzunlukGrubu = (sayfa) => {
  if (sayfa < 250) {
    return "Kısa";
  } else if (sayfa < 400) {
    return "Orta";
  } else {
    return "Uzun";
  }
};

const durumMesaji = (durum) =>
  durum === "rafta" ? "Ödünç alınabilir" : "Şu an ödünçte";

const kitapBilgisi = ({ baslik, yazar, sayfaSayisi }) =>
  `${baslik} - ${yazar} (${sayfaSayisi} sayfa, ${uzunlukGrubu(sayfaSayisi)})`;

// ===== KULLANIM =====
console.table(kitaplar);
console.log(kitaplar.map(kitapBilgisi));

const raftakiler = kitaplar.filter((kitap) => kitap.durum === "rafta");
console.log(`Rafta ${raftakiler.length} kitap var.`);

const ikinciKitap = kitaplar.find((kitap) => kitap.id === 2);
console.log(`${ikinciKitap.baslik}: ${durumMesaji(ikinciKitap.durum)}`);
