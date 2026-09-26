interface Kitap {
  id: number;
  baslik: string;
  yazar: string;
  sayfaSayisi: number;
  durum: string;
}

const kitap: Kitap = {
  id: 1,
  baslik: "Çalıkuşu",
  yazar: "Reşat Nuri Güntekin",
  sayfaSayisi: 400,
  durum: "rafta"
};

const kitaplar: Kitap[] = [
  { id: 1, baslik: "Çalıkuşu", yazar: "Reşat Nuri Güntekin", sayfaSayisi: 400, durum: "rafta" },
  { id: 2, baslik: "Kuyucaklı Yusuf", yazar: "Sabahattin Ali", sayfaSayisi: 232, durum: "oduncte" },
  { id: 3, baslik: "Saatleri Ayarlama Enstitüsü", yazar: "Ahmet Hamdi Tanpınar", sayfaSayisi: 382, durum: "rafta" },
  { id: 4, baslik: "Sinekli Bakkal", yazar: "Halide Edib Adıvar", sayfaSayisi: 400, durum: "rafta" }
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
