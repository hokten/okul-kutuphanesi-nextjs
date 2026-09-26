import { kitaplar } from "@/data/kitaplar";
import KitapArama from "@/components/KitapArama";

export default function KitaplarSayfasi() {
  return (
    <main>
      <h1>Bütün Kitaplar</h1>
      <p>Kütüphanemizdeki {kitaplar.length} kitabın tamamı. Aramak için yazmaya başlayın.</p>
      <KitapArama kitaplar={kitaplar} />
    </main>
  );
}
