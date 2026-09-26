"use client";

import { useState } from "react";

export default function DuyuruCubugu() {
  const [gorunurMu, setGorunurMu] = useState(true);

  if (!gorunurMu) {
    return null;
  }

  return (
    <div>
      <p>Duyuru: Kütüphanemiz 29 Ekim Cumhuriyet Bayramı&apos;nda kapalıdır.</p>
      <button onClick={() => setGorunurMu(false)}>Kapat ✕</button>
    </div>
  );
}
