import SayfaBasligi from "@/components/SayfaBasligi";
import KitapFormu from "@/components/KitapFormu";

export const metadata = {
  title: "Yeni Kitap",
};

export default function YeniKitapSayfasi() {
  return (
    <main className="max-w-md">
      <SayfaBasligi>Yeni Kitap Ekle</SayfaBasligi>
      <KitapFormu />
    </main>
  );
}
