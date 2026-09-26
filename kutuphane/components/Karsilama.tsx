// components/Karsilama.tsx
interface KarsilamaProps {
  kutuphaneAdi: string;
  kitapSayisi: number;
  raftaSayisi: number;
}

export default function Karsilama({ kutuphaneAdi, kitapSayisi, raftaSayisi }: KarsilamaProps) {
  return (
    <section>
      <h1>{kutuphaneAdi}</h1>
      <p>Okumak, yeni dünyalara açılan bir kapıdır. Kapımız herkese açık!</p>
      <p>
        Kütüphanemizde {kitapSayisi} kitap var; bunların {raftaSayisi} tanesi şu an rafta
        ve ödünç alınmayı bekliyor.
      </p>
    </section>
  );
}
