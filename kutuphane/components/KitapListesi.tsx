// components/KitapListesi.tsx
import { Kitap } from "@/data/kitaplar";
import KitapKarti from "@/components/KitapKarti";

interface KitapListesiProps {
  kitaplar: Kitap[];
}

export default function KitapListesi({ kitaplar }: KitapListesiProps) {
  return (
    <div className="kitaplar">
      {kitaplar.map((kitap) => (
        <KitapKarti key={kitap.id} kitap={kitap} />
      ))}
    </div>
  );
}
