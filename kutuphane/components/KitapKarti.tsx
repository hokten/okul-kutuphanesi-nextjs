// components/KitapKarti.tsx
import { Kitap } from "@/data/kitaplar";

interface KitapKartiProps {
  kitap: Kitap;
}

export default function KitapKarti({ kitap }: KitapKartiProps) {
  return (
    <div className="kitap-karti">
      <img src={kitap.kapak} alt={`${kitap.baslik} kitabının kapağı`} />
      <h3>{kitap.baslik}</h3>
      <p>Yazar: {kitap.yazar}</p>
      <p>{kitap.sayfaSayisi} sayfa</p>
      <p className="durum">{kitap.durum}</p>
    </div>
  );
}
