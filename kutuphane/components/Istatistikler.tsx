import { Kitap } from "@/data/kitaplar";
import Bolum from "@/components/Bolum";

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
    <Bolum baslik="Kütüphane Sayılarla">
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {bilgiler.map((bilgi) => (
          <li key={bilgi.ad} className="bg-white rounded-lg p-4 text-center shadow-sm">
            <strong className="block text-3xl text-blue-700">{bilgi.deger}</strong>
            <span className="text-sm text-gray-600">{bilgi.ad}</span>
          </li>
        ))}
      </ul>
    </Bolum>
  );
}
