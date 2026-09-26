import Image from "next/image";
import { OneriKitap } from "@/lib/veri";

interface OneriKartiProps {
  kitap: OneriKitap;
}

export default function OneriKarti({ kitap }: OneriKartiProps) {
  const yazarlar = kitap.author_name ? kitap.author_name.join(", ") : "Bilinmeyen yazar";

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
      {kitap.cover_i ? (
        <Image
          src={`https://covers.openlibrary.org/b/id/${kitap.cover_i}-M.jpg`}
          alt={`${kitap.title} kitabının kapağı`}
          width={180}
          height={270}
          className="w-full h-48 object-contain rounded"
        />
      ) : (
        <div className="w-full h-48 rounded bg-gray-100 text-gray-400 text-sm flex items-center justify-center">
          Kapak resmi yok
        </div>
      )}
      <h3 className="mt-3 text-lg font-bold text-gray-900">{kitap.title}</h3>
      <p className="text-sm text-gray-600">Yazar: {yazarlar}</p>
      {kitap.first_publish_year && (
        <p className="text-sm text-gray-500">İlk basım: {kitap.first_publish_year}</p>
      )}
    </div>
  );
}
