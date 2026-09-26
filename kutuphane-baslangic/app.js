// Okul Kütüphanesi: ilk JavaScript dosyamız

// ===== VERİLER =====
const baslik = "Çalıkuşu";
const yazar = "Reşat Nuri Güntekin";
const sayfaSayisi = 400;
let durum = "rafta";
const resimliMi = false;
const gunlukSayfa = 20;
const uyeMi = true;
let kitapSayisi = 3;

// ===== FONKSİYONLAR =====
const selamla = () => console.log("Okul Kütüphanesine hoş geldiniz!");

const adlaSelamla = (isim) => {
  console.log(`Merhaba ${isim}, kütüphaneye hoş geldin!`);
};

const uzunlukGrubu = (sayfa) => {
  if (sayfa < 250) {
    return "Kısa";
  } else if (sayfa < 400) {
    return "Orta";
  } else {
    return "Uzun";
  }
};

const durumMesaji = (kitapDurumu) =>
  kitapDurumu === "rafta" ? "Ödünç alınabilir" : "Şu an ödünçte";

const okumaSuresi = (sayfa, gunlukSayfa) => sayfa / gunlukSayfa;

const kitapBilgisiYaz = (kitapAdi, kitapYazari, sayfa) => {
  const grup = uzunlukGrubu(sayfa);
  console.log(`${kitapAdi} - ${kitapYazari} (${sayfa} sayfa, ${grup})`);
};

// ===== KULLANIM =====
console.log("Kitap bilgileri:");
console.log(baslik);
console.log(yazar);
console.log(sayfaSayisi);
console.log(durum);

// Bir öğrenci kitabı ödünç aldı
durum = "oduncte";
console.log("Yeni durum:", durum);

console.log("Kitap sayısı:", kitapSayisi);

// Kütüphaneye yeni bir kitap geldi
kitapSayisi = kitapSayisi + 1;
console.log("Kitap sayısı:", kitapSayisi);

console.log(typeof baslik);       // string
console.log(typeof sayfaSayisi);  // number
console.log(typeof resimliMi);    // boolean

const gunSayisi = sayfaSayisi / gunlukSayfa;
console.log("Kitap kaç günde biter?", gunSayisi);  // 20

// Şablon metinlerle kitap bilgisi
console.log(`${baslik} - ${yazar}`);
console.log(`${baslik} kitabı ${sayfaSayisi} sayfadır.`);
console.log(`Günde ${gunlukSayfa} sayfa okursan ${gunSayisi} günde biter.`);

const bilgiKarti = `
Kitap : ${baslik}
Yazar : ${yazar}
Sayfa : ${sayfaSayisi}
Durum : ${durum}
`;
console.log(bilgiKarti);

// Karşılaştırmalar
const raftaMi = durum === "rafta";
const uzunMu = sayfaSayisi > 300;

console.log(`${baslik} rafta mı?`, raftaMi);
console.log(`${baslik} 300 sayfadan uzun mu?`, uzunMu);

// Ödünç alma kuralı: kitap rafta VE öğrenci üye olmalı
const oduncAlinabilirMi = raftaMi && uyeMi;
console.log("Ödünç alınabilir mi?", oduncAlinabilirMi);

// Kararlar
if (durum === "rafta") {
  console.log(`${baslik}: Ödünç alınabilir`);
} else {
  console.log(`${baslik}: Şu an ödünçte`);
}

// Kitabın uzunluğu
if (sayfaSayisi < 250) {
  console.log("Kısa bir kitap");
} else if (sayfaSayisi < 400) {
  console.log("Orta uzunlukta bir kitap");
} else {
  console.log("Uzun bir kitap");
}

// Ödünç alma kararı
if (raftaMi && uyeMi) {
  console.log("Kitap öğrenciye verilebilir.");
} else if (!uyeMi) {
  console.log("Önce kütüphaneye üye olmalısın.");
} else {
  console.log("Kitap şu an başka birinde. Sıraya yazılabilirsin.");
}

const mesaj = raftaMi ? "Ödünç alınabilir" : "Şu an ödünçte";
console.log(mesaj);   // Şu an ödünçte

const rozetSinifi = durum === "oduncte" ? "durum oduncte" : "durum";
console.log("Rozet sınıfı:", rozetSinifi);

// Fonksiyon çağrıları
selamla();
selamla();
selamla();

adlaSelamla("Ayşe");
adlaSelamla("Mehmet");

kitapBilgisiYaz("Çalıkuşu", "Reşat Nuri Güntekin", 400);
kitapBilgisiYaz("Kuyucaklı Yusuf", "Sabahattin Ali", 232);
kitapBilgisiYaz("Saatleri Ayarlama Enstitüsü", "Ahmet Hamdi Tanpınar", 382);

console.log(uzunlukGrubu(400));   // Uzun
const grup = uzunlukGrubu(232);
console.log(`Kuyucaklı Yusuf ${grup} bir kitap.`);

console.log(durumMesaji("rafta"));     // Ödünç alınabilir
console.log(durumMesaji("oduncte"));   // Şu an ödünçte
