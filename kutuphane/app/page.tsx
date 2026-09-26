import { kitaplar } from "@/data/kitaplar";
import Karsilama from "@/components/Karsilama";
import KitapArama from "@/components/KitapArama";
import OkumaSayaci from "@/components/OkumaSayaci";
import KitapOneri from "@/components/KitapOneri";
import AltBilgi from "@/components/AltBilgi";

const kurallar = [
  "Kitaplar en fazla 15 gün ödünç alınabilir.",
  "Kütüphanede sessiz olunmalıdır.",
  "Kitaplar temiz ve sağlam teslim edilmelidir."
];

export default function Anasayfa() {
  const raftakiler = kitaplar.filter((kitap) => kitap.durum === "rafta");

  return (
    <>
      <main>
        <Karsilama kutuphaneAdi="Okul Kütüphanesi" kitapSayisi={kitaplar.length} />

        <h2>Kitaplarımız</h2>
        <KitapArama kitaplar={kitaplar} />

        <h2>Şu An Raftakiler</h2>
        <ul>
          {raftakiler.map((kitap) => (
            <li key={kitap.id}>{kitap.baslik}</li>
          ))}
        </ul>

        <OkumaSayaci />
        <KitapOneri />

        <h2>Kütüphane Kuralları</h2>
        <ul>
          {kurallar.map((kural) => (
            <li key={kural}>{kural}</li>
          ))}
        </ul>
      </main>
      <AltBilgi />
    </>
  );
}
