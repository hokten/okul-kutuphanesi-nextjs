import SayfaBasligi from "@/components/SayfaBasligi";
import KitapFormu from "@/components/KitapFormu";
import { kitapEkle } from "@/lib/eylemler";
import { KitapFormDurumu } from "@/lib/dogrulama";

export const metadata = {
  title: "Yeni Kitap",
};

const bosForm: KitapFormDurumu = {
  hatalar: {},
  degerler: { baslik: "", yazar: "", sayfaSayisi: "" },
};

export default function YeniKitapSayfasi() {
  return (
    <main className="max-w-md">
      <SayfaBasligi>Yeni Kitap Ekle</SayfaBasligi>
      <KitapFormu eylem={kitapEkle} baslangic={bosForm} dugmeYazisi="Kaydet" />
    </main>
  );
}
