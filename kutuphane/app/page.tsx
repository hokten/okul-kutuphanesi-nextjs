import Link from "next/link";
import { kitaplar } from "@/data/kitaplar";
import Menu from "@/components/Menu";
import Karsilama from "@/components/Karsilama";
import OneCikanKitaplar from "@/components/OneCikanKitaplar";
import Istatistikler from "@/components/Istatistikler";
import OkumaSayaci from "@/components/OkumaSayaci";
import AltBilgi from "@/components/AltBilgi";

export default function Anasayfa() {
  const raftakiler = kitaplar.filter((kitap) => kitap.durum === "rafta");
  const oneCikanlar = kitaplar.filter((kitap) => kitap.oneCikan);

  return (
    <>
      <Menu />
      <main>
        <Karsilama
          kutuphaneAdi="Okul Kütüphanesi"
          kitapSayisi={kitaplar.length}
          raftaSayisi={raftakiler.length}
        />
        <OneCikanKitaplar kitaplar={oneCikanlar} />
        <p><Link href="/kitaplar">Bütün kitapları gör →</Link></p>
        <Istatistikler kitaplar={kitaplar} />
        <OkumaSayaci />
      </main>
      <AltBilgi />
    </>
  );
}
