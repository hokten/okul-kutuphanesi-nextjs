import { Suspense } from "react";
import SayfaBasligi from "@/components/SayfaBasligi";
import OneriListesi from "@/components/OneriListesi";
import OneriIskeleti from "@/components/OneriIskeleti";

export const metadata = {
  title: "Önerilen Kitaplar",
};

export const revalidate = 3600;

const ayinYazari = "Sabahattin Ali";

export default function OnerilenSayfasi() {
  return (
    <main>
      <SayfaBasligi>Önerilen Kitaplar</SayfaBasligi>
      <p className="mb-6 text-gray-600">
        Ayın yazarı: {ayinYazari}. Bu kitaplar Open Library&apos;den geliyor.
      </p>
      <Suspense fallback={<OneriIskeleti />}>
        <OneriListesi yazar={ayinYazari} />
      </Suspense>
    </main>
  );
}
