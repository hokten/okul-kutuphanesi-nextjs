// components/KitapKarti.tsx
import { Kitap } from "@/data/kitaplar";
import DurumRozeti from "@/components/DurumRozeti";
import FavoriButonu from "@/components/FavoriButonu";

interface KitapKartiProps {
  kitap: Kitap;
}

export default function KitapKarti({ kitap }: KitapKartiProps) {
  return (
    <div className="kitap-karti">
      {kitap.kapak ? (
        <img src={kitap.kapak} alt={`${kitap.baslik} kitabının kapağı`} />
      ) : (
        <div className="kapak-yok">Kapak resmi yok</div>
      )}
      <h3>{kitap.baslik}</h3>
      <p>Yazar: {kitap.yazar}</p>
      <p>{kitap.sayfaSayisi} sayfa</p>
      <DurumRozeti durum={kitap.durum} />
      {kitap.durum === "oduncte" && <p>İade bekleniyor.</p>}
      <FavoriButonu kitapAdi={kitap.baslik} />
    </div>
  );
}
