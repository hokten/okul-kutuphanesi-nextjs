"use client";

import { useState } from "react";
import Bolum from "@/components/Bolum";

export default function OkumaSayaci() {
  const [sayfa, setSayfa] = useState(0);

  const azalt = () => {
    if (sayfa > 0) {
      setSayfa(sayfa - 10);
    }
  };

  return (
    <Bolum baslik="Okuma Sayacı">
      <p>Bugün okuduğum sayfa: {sayfa}</p>
      <div className="mt-3 flex gap-2">
        <button onClick={azalt} className="px-3 py-1 rounded border border-gray-300 hover:bg-gray-100">
          − 10
        </button>
        <button onClick={() => setSayfa(sayfa + 10)} className="px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700">
          + 10
        </button>
        <button onClick={() => setSayfa(0)} className="px-3 py-1 rounded border border-gray-300 hover:bg-gray-100">
          Sıfırla
        </button>
      </div>
      {sayfa >= 50 && <p className="mt-3 text-green-700 font-semibold">Harika! Günlük hedefine ulaştın.</p>}
    </Bolum>
  );
}
