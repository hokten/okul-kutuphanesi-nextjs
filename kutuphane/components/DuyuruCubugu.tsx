"use client";

import { useState } from "react";

export default function DuyuruCubugu() {
  const [gorunurMu, setGorunurMu] = useState(true);

  if (!gorunurMu) {
    return null;
  }

  return (
    <div className="bg-yellow-100 text-yellow-900 text-sm">
      <div className="max-w-5xl mx-auto px-4 py-2 flex items-center justify-between gap-4">
        <p>Duyuru: Kütüphanemiz 29 Ekim Cumhuriyet Bayramı&apos;nda kapalıdır.</p>
        <button onClick={() => setGorunurMu(false)} className="font-bold hover:text-yellow-700">
          Kapat ✕
        </button>
      </div>
    </div>
  );
}
