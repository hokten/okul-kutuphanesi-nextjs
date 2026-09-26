import { Kitap } from "@/data/kitaplar";

interface IstatistiklerProps {
  kitaplar: Kitap[];
}

export default function Istatistikler({ kitaplar }: IstatistiklerProps) {
  const raftaSayisi = kitaplar.filter((kitap) => kitap.durum === "rafta").length;
  const kisaSayisi = kitaplar.filter((kitap) => kitap.sayfaSayisi < 250).length;

  const bilgiler = [
    { ad: "Toplam kitap", deger: kitaplar.length },
    { ad: "Rafta", deger: raftaSayisi },
    { ad: "Ödünçte", deger: kitaplar.length - raftaSayisi },
    { ad: "Kısa kitap (250 sayfadan az)", deger: kisaSayisi }
  ];

  return (
    <section>
      <h2>Kütüphane Sayılarla</h2>
      <ul>
        {bilgiler.map((bilgi) => (
          <li key={bilgi.ad}>
            <strong>{bilgi.deger}</strong> {bilgi.ad}
          </li>
        ))}
      </ul>
    </section>
  );
}
