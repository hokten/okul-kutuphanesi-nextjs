import Link from "next/link";
import { notFound } from "next/navigation";
import SayfaBasligi from "@/components/SayfaBasligi";
import KitapFormu from "@/components/KitapFormu";
import { kitapGetir } from "@/lib/veri";
import { kitapGuncelle } from "@/lib/eylemler";
import { KitapFormDurumu } from "@/lib/dogrulama";

interface KitapDuzenleProps {
  params: Promise<{ id: string }>;
}

export const metadata = {
  title: "Kitabı Düzenle",
};

export default async function KitapDuzenleSayfasi({ params }: KitapDuzenleProps) {
  const { id } = await params;
  const kitap = await kitapGetir(Number(id));

  if (!kitap) {
    notFound();
  }

  const doluForm: KitapFormDurumu = {
    hatalar: {},
    degerler: {
      baslik: kitap.baslik,
      yazar: kitap.yazar,
      sayfaSayisi: String(kitap.sayfaSayisi),
    },
  };

  const guncelle = kitapGuncelle.bind(null, kitap.id);

  return (
    <main className="max-w-md">
      <Link href={`/kitaplar/${kitap.id}`} className="text-blue-700 hover:underline">
        ← Vazgeç
      </Link>
      <SayfaBasligi>Kitabı Düzenle</SayfaBasligi>
      <KitapFormu eylem={guncelle} baslangic={doluForm} dugmeYazisi="Değişiklikleri kaydet" />
    </main>
  );
}
