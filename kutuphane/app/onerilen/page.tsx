import { onerilenKitaplariGetir } from "@/lib/veri";
import SayfaBasligi from "@/components/SayfaBasligi";
import OneriKarti from "@/components/OneriKarti";

export const metadata = {
  title: "Önerilen Kitaplar",
};

export const revalidate = 3600;

const ayinYazari = "Sabahattin Ali";

export default async function OnerilenSayfasi() {
  const oneriler = await onerilenKitaplariGetir(ayinYazari);

  return (
    <main>
      <SayfaBasligi>Önerilen Kitaplar</SayfaBasligi>
      <p className="mb-6 text-gray-600">
        Ayın yazarı: {ayinYazari}. Bu kitaplar Open Library&apos;den geliyor.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {oneriler.map((kitap) => (
          <OneriKarti key={kitap.key} kitap={kitap} />
        ))}
      </div>
    </main>
  );
}
