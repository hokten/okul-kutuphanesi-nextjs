import { kitaplar } from "@/data/kitaplar";
import Karsilama from "@/components/Karsilama";
import OneCikanKitaplar from "@/components/OneCikanKitaplar";
import Istatistikler from "@/components/Istatistikler";
import KitapArama from "@/components/KitapArama";
import OkumaSayaci from "@/components/OkumaSayaci";
import KitapOneri from "@/components/KitapOneri";
import Kurallar from "@/components/Kurallar";
import AltBilgi from "@/components/AltBilgi";

export default function Anasayfa() {
  const raftakiler = kitaplar.filter((kitap) => kitap.durum === "rafta");
  const oneCikanlar = kitaplar.filter((kitap) => kitap.oneCikan);

  return (
    <>
      <main>
        <Karsilama
          kutuphaneAdi="Okul Kütüphanesi"
          kitapSayisi={kitaplar.length}
          raftaSayisi={raftakiler.length}
        />
        <OneCikanKitaplar kitaplar={oneCikanlar} />
        <Istatistikler kitaplar={kitaplar} />

        <h2>Bütün Kitaplar</h2>
        <KitapArama kitaplar={kitaplar} />

        <OkumaSayaci />
        <KitapOneri />
        <Kurallar />
      </main>
      <AltBilgi />
    </>
  );
}
