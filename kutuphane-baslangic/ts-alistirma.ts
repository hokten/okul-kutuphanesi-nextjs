type Durum = "rafta" | "oduncte";

interface Kitap {
  id: number;
  baslik: string;
  yazar: string;
  sayfaSayisi: number;
  durum: Durum;
  kapak?: string;
}

const kitap: Kitap = {
  id: 1,
  baslik: "Çalıkuşu",
  yazar: "Reşat Nuri Güntekin",
  sayfaSayisi: 400,
  durum: "rafta"
};

const kitaplar: Kitap[] = [
  {
    id: 1, baslik: "Çalıkuşu", yazar: "Reşat Nuri Güntekin",
    sayfaSayisi: 400, durum: "rafta", kapak: "resimler/calikusu.jpg"
  },
  {
    id: 2, baslik: "Kuyucaklı Yusuf", yazar: "Sabahattin Ali",
    sayfaSayisi: 232, durum: "oduncte", kapak: "resimler/kuyucakli-yusuf.jpg"
  },
  {
    id: 3, baslik: "Saatleri Ayarlama Enstitüsü", yazar: "Ahmet Hamdi Tanpınar",
    sayfaSayisi: 382, durum: "rafta", kapak: "resimler/saatleri-ayarlama-enstitusu.jpg"
  },
  {
    id: 4, baslik: "Sinekli Bakkal", yazar: "Halide Edib Adıvar",
    sayfaSayisi: 400, durum: "rafta"
  }
];

const uzunlukGrubu = (sayfa: number): string => {
  if (sayfa < 250) {
    return "Kısa";
  } else if (sayfa < 400) {
    return "Orta";
  } else {
    return "Uzun";
  }
};

const kitapBilgisi = ({ baslik, yazar, sayfaSayisi }: Kitap): string =>
  `${baslik} - ${yazar} (${sayfaSayisi} sayfa, ${uzunlukGrubu(sayfaSayisi)})`;

const raftakiler = kitaplar.filter((kitap) => kitap.durum === "rafta");

const kitapBul = (liste: Kitap[], id: number): Kitap | undefined =>
  liste.find((kitap) => kitap.id === id);

const selamla = (): void => {
  console.log("Okul Kütüphanesine hoş geldiniz!");
};

// Kütüphane sorgu merkezi
// 1. Sadece raftaki kitapları döndürsün.
const raftakiKitaplar = (liste: Kitap[]): Kitap[] =>
  liste.filter((kitap) => kitap.durum === "rafta");

// 2. Bütün kitapların başlıklarını döndürsün.
const basliklar = (liste: Kitap[]): string[] =>
  liste.map((kitap) => kitap.baslik);

// 3. Verilen yazarın kitaplarını döndürsün.
const yazarinKitaplari = (liste: Kitap[], yazar: string): Kitap[] =>
  liste.filter((kitap) => kitap.yazar === yazar);

// 4. Kapak varsa kapağı, yoksa "resimler/kapak-yok.jpg" döndürsün.
const kapakAdresi = (kitap: Kitap): string =>
  kitap.kapak ? kitap.kapak : "resimler/kapak-yok.jpg";

// 5. Kitap rafta ise "Ödünç alınabilir", değilse "Şu an ödünçte" döndürsün.
const durumMesaji = (kitap: Kitap): string =>
  kitap.durum === "rafta" ? "Ödünç alınabilir" : "Şu an ödünçte";

console.log(raftakiKitaplar(kitaplar).length);                      // 3
console.log(basliklar(kitaplar));
console.log(basliklar(yazarinKitaplari(kitaplar, "Sabahattin Ali")));   // ["Kuyucaklı Yusuf"]
console.log(kitaplar.map(kapakAdresi));

const bulunan = kitapBul(kitaplar, 2);
if (bulunan) {
  console.log(durumMesaji(bulunan));                                // Şu an ödünçte
} else {
  console.log("Böyle bir kitap yok.");
}

interface Uye {
  id: number;
  ad: string;
  sinif: string;
  aktifMi: boolean;
}

const uyeler: Uye[] = [
  { id: 1, ad: "Ayşe Yılmaz", sinif: "9-A", aktifMi: true },
  { id: 2, ad: "Mehmet Kaya", sinif: "10-B", aktifMi: false }
];

interface OduncKaydi {
  id: number;
  kitapId: number;
  uyeId: number;
  iadeTarihi: string;
}

const kayit: OduncKaydi = { id: 1, kitapId: 2, uyeId: 1, iadeTarihi: "2026-10-15" };

let kitapSayisi: number = 4;
const kutuphaneAdi: string = "Okul Kütüphanesi";

let acikMi: boolean = true;

const ikiKati = (sayi: number) => sayi * 2;
ikiKati(5);

const adlar: string[] = ["Nutuk", "Safahat"];
adlar.push("Çalıkuşu");
