import Link from "next/link";
import { kitaplariGetir } from "@/lib/veri";
import Karsilama from "@/components/Karsilama";
import OneCikanKitaplar from "@/components/OneCikanKitaplar";
import Istatistikler from "@/components/Istatistikler";
import OkumaSayaci from "@/components/OkumaSayaci";

export default async function Anasayfa() {
  const kitaplar = await kitaplariGetir();
  const raftakiler = kitaplar.filter((kitap) => kitap.durum === "rafta");
  const oneCikanlar = kitaplar.filter((kitap) => kitap.oneCikan);

  return (
    <main>
      <Karsilama
        kutuphaneAdi="Okul Kütüphanesi"
        kitapSayisi={kitaplar.length}
        raftaSayisi={raftakiler.length}
      />
      <OneCikanKitaplar kitaplar={oneCikanlar} />
      <p>
        <Link href="/kitaplar" className="text-blue-700 hover:underline">
          Bütün kitapları gör →
        </Link>
      </p>
      <Istatistikler kitaplar={kitaplar} />
      <OkumaSayaci />
    </main>
  );
}
