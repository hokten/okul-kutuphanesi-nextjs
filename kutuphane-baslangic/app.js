// Okul Kütüphanesi: ilk JavaScript dosyamız

const baslik = "Çalıkuşu";
const yazar = "Reşat Nuri Güntekin";
const sayfaSayisi = 400;
let durum = "rafta";

console.log("Kitap bilgileri:");
console.log(baslik);
console.log(yazar);
console.log(sayfaSayisi);
console.log(durum);

// Bir öğrenci kitabı ödünç aldı
durum = "oduncte";
console.log("Yeni durum:", durum);

let kitapSayisi = 3;
console.log("Kitap sayısı:", kitapSayisi);

// Kütüphaneye yeni bir kitap geldi
kitapSayisi = kitapSayisi + 1;
console.log("Kitap sayısı:", kitapSayisi);

const resimliMi = false;
console.log(typeof baslik);       // string
console.log(typeof sayfaSayisi);  // number
console.log(typeof resimliMi);    // boolean

const gunlukSayfa = 20;
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
const uyeMi = true;
const oduncAlinabilirMi = raftaMi && uyeMi;
console.log("Ödünç alınabilir mi?", oduncAlinabilirMi);
