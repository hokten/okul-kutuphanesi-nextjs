"use client";

import { useState } from "react";
import Bolum from "@/components/Bolum";

interface Oneri {
  id: number;
  ad: string;
}

export default function KitapOneri() {
  const [yeniOneri, setYeniOneri] = useState("");
  const [oneriler, setOneriler] = useState<Oneri[]>([]);

  const gonder = (olay: React.FormEvent<HTMLFormElement>) => {
    olay.preventDefault();
    if (yeniOneri.trim() === "") {
      return;
    }
    setOneriler([...oneriler, { id: Date.now(), ad: yeniOneri.trim() }]);
    setYeniOneri("");
  };

  return (
    <Bolum baslik="Kitap Öner">
      <form onSubmit={gonder} className="flex gap-2 mb-3">
        <input
          type="text"
          placeholder="Kütüphanede görmek istediğin kitap"
          value={yeniOneri}
          onChange={(olay) => setYeniOneri(olay.target.value)}
          className="flex-1 bg-white border border-gray-300 rounded px-3 py-2"
        />
        <button type="submit" className="px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700">
          Öner
        </button>
      </form>
      {oneriler.length === 0 ? (
        <p className="text-gray-500">Henüz öneri yok.</p>
      ) : (
        <ul className="list-disc pl-6">
          {oneriler.map((oneri) => (
            <li key={oneri.id}>{oneri.ad}</li>
          ))}
        </ul>
      )}
    </Bolum>
  );
}
