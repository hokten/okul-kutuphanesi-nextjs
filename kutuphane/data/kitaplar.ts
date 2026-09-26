// data/kitaplar.ts
export type Durum = "rafta" | "oduncte";

export interface Kitap {
  id: number;
  baslik: string;
  yazar: string;
  sayfaSayisi: number;
  durum: Durum;
  kapak?: string;
}

export const kitaplar: Kitap[] = [
  {
    id: 1, baslik: "Çalıkuşu", yazar: "Reşat Nuri Güntekin",
    sayfaSayisi: 400, durum: "rafta", kapak: "/resimler/calikusu.jpg"
  },
  {
    id: 2, baslik: "Kuyucaklı Yusuf", yazar: "Sabahattin Ali",
    sayfaSayisi: 232, durum: "oduncte", kapak: "/resimler/kuyucakli-yusuf.jpg"
  },
  {
    id: 3, baslik: "Saatleri Ayarlama Enstitüsü", yazar: "Ahmet Hamdi Tanpınar",
    sayfaSayisi: 382, durum: "rafta", kapak: "/resimler/saatleri-ayarlama-enstitusu.jpg"
  },
  {
    id: 4, baslik: "Sinekli Bakkal", yazar: "Halide Edib Adıvar",
    sayfaSayisi: 400, durum: "rafta"
  }
];
