import { kitaplar } from "@/data/kitaplar";
import KitapKarti from "@/components/KitapKarti";
import Karsilama from "@/components/Karsilama";
import AltBilgi from "@/components/AltBilgi";

export default function Anasayfa() {
  return (
    <>
      <main>
        <Karsilama kutuphaneAdi="Okul Kütüphanesi" kitapSayisi={kitaplar.length} />

        <h2>Kitaplarımız</h2>
        <KitapKarti kitap={kitaplar[0]} />
        <KitapKarti kitap={kitaplar[1]} />
        <KitapKarti kitap={kitaplar[2]} />
        <KitapKarti kitap={kitaplar[3]} />
      </main>
      <AltBilgi />
    </>
  );
}
