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
    <button
      onClick={degistir}
      className="mt-2 px-3 py-1 rounded border border-yellow-500 text-yellow-700 hover:bg-yellow-50"
    >
      {favoriMi ? "★ Favorilerde" : "☆ Favorilere ekle"}
    </button>
  );
}
