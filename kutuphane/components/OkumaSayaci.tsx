"use client";

import { useState } from "react";

export default function OkumaSayaci() {
  const [sayfa, setSayfa] = useState(0);

  const azalt = () => {
    if (sayfa > 0) {
      setSayfa(sayfa - 10);
    }
  };

  return (
    <section>
      <h2>Okuma Sayacı</h2>
      <p>Bugün okuduğum sayfa: {sayfa}</p>
      <button onClick={azalt}>− 10</button>
      <button onClick={() => setSayfa(sayfa + 10)}>+ 10</button>
      <button onClick={() => setSayfa(0)}>Sıfırla</button>
      {sayfa >= 50 && <p>Harika! Günlük hedefine ulaştın.</p>}
    </section>
  );
}
