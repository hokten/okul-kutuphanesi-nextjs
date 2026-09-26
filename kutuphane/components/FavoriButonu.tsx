"use client";

interface FavoriButonuProps {
  kitapAdi: string;
}

export default function FavoriButonu({ kitapAdi }: FavoriButonuProps) {
  let favoriMi = false;

  const favoriyeEkle = () => {
    favoriMi = true;
    console.log(`${kitapAdi} favorilere eklendi! favoriMi:`, favoriMi);
  };

  return (
    <button onClick={favoriyeEkle}>
      {favoriMi ? "★ Favorilerde" : "☆ Favorilere ekle"}
    </button>
  );
}
