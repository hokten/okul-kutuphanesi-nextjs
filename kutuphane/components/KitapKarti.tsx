// components/KitapKarti.tsx
import Image from "next/image";
import Link from "next/link";
import { Kitap } from "@/data/kitaplar";
import OduncKontrol from "@/components/OduncKontrol";
import FavoriButonu from "@/components/FavoriButonu";

interface KitapKartiProps {
  kitap: Kitap;
}

export default function KitapKarti({ kitap }: KitapKartiProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
      {kitap.kapak ? (
        <Image
          src={kitap.kapak}
          alt={`${kitap.baslik} kitabının kapağı`}
          width={300}
          height={450}
          className="w-full h-48 object-cover rounded"
        />
      ) : (
        <div className="w-full h-48 rounded bg-gray-100 text-gray-400 text-sm flex items-center justify-center">
          Kapak resmi yok
        </div>
      )}
      <h3 className="mt-3 text-lg font-bold text-gray-900">
        <Link href={`/kitaplar/${kitap.id}`} className="hover:text-blue-700 hover:underline">
          {kitap.baslik}
        </Link>
      </h3>
      <p className="text-sm text-gray-600">Yazar: {kitap.yazar}</p>
      <p className="text-sm text-gray-500">{kitap.sayfaSayisi} sayfa</p>
      <OduncKontrol baslangicDurumu={kitap.durum} />
      <FavoriButonu kitapAdi={kitap.baslik} />
    </div>
  );
}
