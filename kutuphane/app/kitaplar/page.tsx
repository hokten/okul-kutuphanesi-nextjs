// app/kitaplar/page.tsx
import { kitaplar } from "@/data/kitaplar";
import KitapArama from "@/components/KitapArama";
import Menu from "@/components/Menu";
import AltBilgi from "@/components/AltBilgi";

export default function KitaplarSayfasi() {
  return (
    <>
      <Menu />
      <main>
        <h1>Bütün Kitaplar</h1>
        <p>Kütüphanemizdeki {kitaplar.length} kitabın tamamı. Aramak için yazmaya başlayın.</p>
        <KitapArama kitaplar={kitaplar} />
      </main>
      <AltBilgi />
    </>
  );
}
