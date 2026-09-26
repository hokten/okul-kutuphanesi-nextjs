// data/kitaplar.ts
export type Durum = "rafta" | "oduncte";

export interface Kitap {
  id: number;
  baslik: string;
  yazar: string;
  sayfaSayisi: number;
  durum: Durum;
  kapak?: string | null;
  oneCikan?: boolean;
}

export const kitaplar: Kitap[] = [
  {
    id: 1, baslik: "Çalıkuşu", yazar: "Reşat Nuri Güntekin",
    sayfaSayisi: 400, durum: "rafta", kapak: "/resimler/calikusu.jpg",
    oneCikan: true
  },
  {
    id: 2, baslik: "Kuyucaklı Yusuf", yazar: "Sabahattin Ali",
    sayfaSayisi: 232, durum: "oduncte", kapak: "/resimler/kuyucakli-yusuf.jpg"
  },
  {
    id: 3, baslik: "Saatleri Ayarlama Enstitüsü", yazar: "Ahmet Hamdi Tanpınar",
    sayfaSayisi: 382, durum: "rafta", kapak: "/resimler/saatleri-ayarlama-enstitusu.jpg",
    oneCikan: true
  },
  {
    id: 4, baslik: "Sinekli Bakkal", yazar: "Halide Edib Adıvar",
    sayfaSayisi: 400, durum: "rafta"
  },
  { id: 5, baslik: "Kürk Mantolu Madonna", yazar: "Sabahattin Ali", sayfaSayisi: 160, durum: "oduncte", oneCikan: true }
];
