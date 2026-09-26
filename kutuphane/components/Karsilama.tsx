// components/Karsilama.tsx
interface KarsilamaProps {
  kutuphaneAdi: string;
  kitapSayisi: number;
}

export default function Karsilama({ kutuphaneAdi, kitapSayisi }: KarsilamaProps) {
  return (
    <section>
      <h1>{kutuphaneAdi}</h1>
      <p>Kütüphanemizde {kitapSayisi} kitap var.</p>
    </section>
  );
}
