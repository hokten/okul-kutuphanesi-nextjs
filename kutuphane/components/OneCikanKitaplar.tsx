import { Kitap } from "@/data/kitaplar";
import KitapListesi from "@/components/KitapListesi";

interface OneCikanKitaplarProps {
  kitaplar: Kitap[];
}

export default function OneCikanKitaplar({ kitaplar }: OneCikanKitaplarProps) {
  return (
    <section>
      <h2>Öne Çıkan Kitaplar</h2>
      <p>Kütüphanecimizin bu ay önerdiği kitaplar:</p>
      <KitapListesi kitaplar={kitaplar} />
    </section>
  );
}
