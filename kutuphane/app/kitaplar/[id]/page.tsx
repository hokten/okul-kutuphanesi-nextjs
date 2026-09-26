// app/kitaplar/[id]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { kitaplar } from "@/data/kitaplar";
import { uzunlukGrubu, okumaSuresi } from "@/lib/yardimcilar";
import OduncKontrol from "@/components/OduncKontrol";
import FavoriButonu from "@/components/FavoriButonu";

interface KitapDetayProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: KitapDetayProps) {
  const { id } = await params;
  const kitap = kitaplar.find((k) => k.id === Number(id));

  return {
    title: kitap ? kitap.baslik : "Kitap bulunamadı",
  };
}

export default async function KitapDetaySayfasi({ params }: KitapDetayProps) {
  const { id } = await params;
  const kitap = kitaplar.find((k) => k.id === Number(id));

  if (!kitap) {
    return (
      <main>
        <h1 className="text-2xl font-bold">Kitap bulunamadı</h1>
        <p className="mt-2">{id} numaralı bir kitap kütüphanemizde yok.</p>
        <Link href="/kitaplar" className="text-blue-700 hover:underline">
          ← Bütün kitaplar
        </Link>
      </main>
    );
  }

  return (
    <main>
      <Link href="/kitaplar" className="text-blue-700 hover:underline">
        ← Bütün kitaplar
      </Link>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {kitap.kapak ? (
          <Image
            src={kitap.kapak}
            alt={`${kitap.baslik} kitabının kapağı`}
            width={300}
            height={450}
            className="w-full rounded-lg shadow"
          />
        ) : (
          <div className="w-full h-96 rounded-lg bg-gray-100 text-gray-400 flex items-center justify-center">
            Kapak resmi yok
          </div>
        )}

        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold text-blue-900">{kitap.baslik}</h1>
          <p className="mt-1 text-lg text-gray-700">{kitap.yazar}</p>

          <ul className="mt-6 space-y-2 text-gray-700">
            <li>Sayfa sayısı: {kitap.sayfaSayisi} ({uzunlukGrubu(kitap.sayfaSayisi)})</li>
            <li>Günde 20 sayfayla yaklaşık {okumaSuresi(kitap.sayfaSayisi)} günde biter.</li>
            <li>Kitap numarası: {kitap.id}</li>
          </ul>

          <div className="mt-6 max-w-xs">
            <OduncKontrol baslangicDurumu={kitap.durum} />
            <FavoriButonu kitapAdi={kitap.baslik} />
          </div>
        </div>
      </div>
    </main>
  );
}
