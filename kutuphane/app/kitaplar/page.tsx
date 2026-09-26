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
      <SayfaBasligi>Bütün Kitaplar</SayfaBasligi>
      <p className="mb-6 text-gray-600">
        Kütüphanemizdeki {kitaplar.length} kitabın tamamı. Aramak için yazmaya başlayın.
      </p>
      <KitapArama kitaplar={kitaplar} />
    </main>
  );
}
