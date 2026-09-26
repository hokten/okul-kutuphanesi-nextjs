import { kitaplar } from "@/data/kitaplar";

export default function Anasayfa() {
  return (
    <main>
      <h1>Okul Kütüphanesi</h1>
      <p>Hoş geldiniz!</p>
      <p>Kitap sayısı: {kitaplar.length}</p>
      <p>İlk kitap: {kitaplar[0].baslik}</p>
    </main>
  );
}
