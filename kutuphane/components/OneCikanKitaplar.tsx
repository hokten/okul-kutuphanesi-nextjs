import { Kitap } from "@/data/kitaplar";
import KitapListesi from "@/components/KitapListesi";
import Bolum from "@/components/Bolum";

interface OneCikanKitaplarProps {
  kitaplar: Kitap[];
}

export default function OneCikanKitaplar({ kitaplar }: OneCikanKitaplarProps) {
  return (
    <Bolum baslik="Öne Çıkan Kitaplar">
      <p className="mb-4 text-gray-600">Kütüphanecimizin bu ay önerdiği kitaplar:</p>
      <KitapListesi kitaplar={kitaplar} />
    </Bolum>
  );
}
