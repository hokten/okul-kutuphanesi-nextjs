"use client";

import { useState } from "react";
import { Kitap } from "@/data/kitaplar";
import KitapListesi from "@/components/KitapListesi";

interface KitapAramaProps {
  kitaplar: Kitap[];
}

const kucukHarf = (metin: string) => metin.toLocaleLowerCase("tr-TR");

export default function KitapArama({ kitaplar }: KitapAramaProps) {
  const [aranan, setAranan] = useState("");

  const sonuclar = kitaplar.filter(
    (kitap) =>
      kucukHarf(kitap.baslik).includes(kucukHarf(aranan)) ||
      kucukHarf(kitap.yazar).includes(kucukHarf(aranan))
  );

  return (
    <section>
      <input
        type="text"
        placeholder="Kitap adı ya da yazar ara..."
        value={aranan}
        onChange={(olay) => setAranan(olay.target.value)}
      />
      <button onClick={() => setAranan("")}>Temizle</button>
      <p>{sonuclar.length} kitap bulundu.</p>
      <KitapListesi kitaplar={sonuclar} />
    </section>
  );
}
