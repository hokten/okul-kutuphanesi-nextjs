import { onerilenKitaplariGetir } from "@/lib/veri";
import OneriKarti from "@/components/OneriKarti";

interface OneriListesiProps {
  yazar: string;
}

export default async function OneriListesi({ yazar }: OneriListesiProps) {
  const oneriler = await onerilenKitaplariGetir(yazar);

  if (oneriler.length === 0) {
    return <p className="text-gray-500">Bu yazar için öneri bulunamadı.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {oneriler.map((kitap) => (
        <OneriKarti key={kitap.key} kitap={kitap} />
      ))}
    </div>
  );
}
