import Link from "next/link";
import { kitaplariGetir } from "@/lib/veri";
import KitapArama from "@/components/KitapArama";
import SayfaBasligi from "@/components/SayfaBasligi";

export const metadata = {
  title: "Kitaplar",
};

export default async function KitaplarSayfasi() {
  const kitaplar = await kitaplariGetir();

  return (
    <main>
      <div className="flex items-center justify-between">
        <SayfaBasligi>Bütün Kitaplar</SayfaBasligi>
        <Link href="/kitaplar/yeni" className="px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700">
          + Yeni kitap
        </Link>
      </div>
      <p className="mb-6 text-gray-600">
        Kütüphanemizdeki {kitaplar.length} kitabın tamamı. Aramak için yazmaya başlayın.
      </p>
      <KitapArama kitaplar={kitaplar} />
    </main>
  );
}
