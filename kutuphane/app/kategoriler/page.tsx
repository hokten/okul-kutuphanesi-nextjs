import { kategorileriGetir } from "@/lib/veri";
import SayfaBasligi from "@/components/SayfaBasligi";
import Bolum from "@/components/Bolum";
import KitapListesi from "@/components/KitapListesi";

export const metadata = {
  title: "Kategoriler",
};

export default async function KategorilerSayfasi() {
  const kategoriler = await kategorileriGetir();

  return (
    <main>
      <SayfaBasligi>Kategoriler</SayfaBasligi>
      {kategoriler.map((kategori) => (
        <Bolum key={kategori.id} baslik={`${kategori.ad} (${kategori.kitaplar.length})`}>
          <KitapListesi kitaplar={kategori.kitaplar} />
        </Bolum>
      ))}
    </main>
  );
}
