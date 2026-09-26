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
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Kitap adı ya da yazar ara..."
          value={aranan}
          onChange={(olay) => setAranan(olay.target.value)}
          className="flex-1 bg-white border border-gray-300 rounded px-3 py-2"
        />
        <button
          onClick={() => setAranan("")}
          className="px-3 py-1 rounded border border-gray-300 hover:bg-gray-100"
        >
          Temizle
        </button>
      </div>
      <p className="my-4 text-sm text-gray-600">{sonuclar.length} kitap bulundu.</p>
      <KitapListesi kitaplar={sonuclar} />
    </section>
  );
}
