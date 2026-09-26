"use client";

import { useState } from "react";

interface FavoriButonuProps {
  kitapAdi: string;
}

export default function FavoriButonu({ kitapAdi }: FavoriButonuProps) {
  const [favoriMi, setFavoriMi] = useState(false);

  const degistir = () => {
    setFavoriMi(!favoriMi);
    console.log(`${kitapAdi}: favori mi? ${!favoriMi}`);
  };

  return (
    <button onClick={degistir}>
      {favoriMi ? "★ Favorilerde" : "☆ Favorilere ekle"}
    </button>
  );
}
