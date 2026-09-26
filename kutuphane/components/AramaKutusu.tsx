"use client";

export default function AramaKutusu() {
  return (
    <input
      type="text"
      placeholder="Kitap ara..."
      onChange={(olay) => console.log("Yazılan:", olay.target.value)}
    />
  );
}
