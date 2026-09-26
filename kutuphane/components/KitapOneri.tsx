"use client";

import { useState } from "react";

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
    <section>
      <h2>Kitap Öner</h2>
      <form onSubmit={gonder}>
        <input
          type="text"
          placeholder="Kütüphanede görmek istediğin kitap"
          value={yeniOneri}
          onChange={(olay) => setYeniOneri(olay.target.value)}
        />
        <button type="submit">Öner</button>
      </form>
      {oneriler.length === 0 ? (
        <p>Henüz öneri yok.</p>
      ) : (
        <ul>
          {oneriler.map((oneri) => (
            <li key={oneri.id}>{oneri.ad}</li>
          ))}
        </ul>
      )}
    </section>
  );
}
