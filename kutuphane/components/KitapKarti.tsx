// components/KitapKarti.tsx
import { kitaplar } from "@/data/kitaplar";

export default function KitapKarti() {
  const kitap = kitaplar[0];

  return (
    <div className="kitap-karti">
      {/* Kitabın bilgileri */}
      <img src={kitap.kapak} alt={`${kitap.baslik} kitabının kapağı`} />
      <h3>{kitap.baslik}</h3>
      <p>Yazar: {kitap.yazar}</p>
      <p className="durum">{kitap.durum}</p>
    </div>
  );
}
