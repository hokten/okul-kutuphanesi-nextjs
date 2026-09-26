import { kitaplar } from "@/data/kitaplar";
import KitapKarti from "@/components/KitapKarti";
import AltBilgi from "@/components/AltBilgi";

export default function Anasayfa() {
  return (
    <>
      <main>
        <h1>Okul Kütüphanesi</h1>
        <p>Kütüphanemizde {kitaplar.length} kitap var.</p>

        <h2>Kitaplarımız</h2>
        <KitapKarti />
        <KitapKarti />
        <KitapKarti />
      </main>
      <AltBilgi />
    </>
  );
}
