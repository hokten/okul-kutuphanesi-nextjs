// components/KitapListesi.tsx
import { Kitap } from "@/data/kitaplar";
import KitapKarti from "@/components/KitapKarti";

interface KitapListesiProps {
  kitaplar: Kitap[];
}

export default function KitapListesi({ kitaplar }: KitapListesiProps) {
  if (kitaplar.length === 0) {
    return <p>Gösterilecek kitap yok.</p>;
  }

  return (
    <div className="kitaplar">
      {kitaplar.map((kitap) => (
        <KitapKarti key={kitap.id} kitap={kitap} />
      ))}
    </div>
  );
}
