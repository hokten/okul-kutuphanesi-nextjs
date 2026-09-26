import Link from "next/link";
import { kitaplariGetir } from "@/lib/veri";
import SayfaBasligi from "@/components/SayfaBasligi";
import KitapListesi from "@/components/KitapListesi";

export const metadata = {
  title: "Kitaplar",
};

interface KitaplarSayfasiProps {
  searchParams: Promise<{ ara?: string }>;
}

export default async function KitaplarSayfasi({ searchParams }: KitaplarSayfasiProps) {
  const { ara = "" } = await searchParams;
  const aranan = ara.trim();
  const kitaplar = await kitaplariGetir(aranan);

  return (
    <main>
      <div className="flex items-center justify-between">
        <SayfaBasligi>Bütün Kitaplar</SayfaBasligi>
        <Link href="/kitaplar/yeni" className="px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700">
          + Yeni kitap
        </Link>
      </div>

      <form action="/kitaplar" className="mt-4 flex gap-2">
        <input
          type="search"
          name="ara"
          defaultValue={aranan}
          autoComplete="off"
          placeholder="Kitap adı ya da yazar ara..."
          className="flex-1 bg-white border border-gray-300 rounded px-3 py-2"
        />
        <button type="submit" className="px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700">
          Ara
        </button>
        {aranan && (
          <Link href="/kitaplar" className="px-3 py-2 rounded border border-gray-300 hover:bg-gray-100">
            Temizle
          </Link>
        )}
      </form>

      <p className="my-4 text-sm text-gray-600">
        {aranan ? `"${aranan}" için ${kitaplar.length} kitap bulundu.` : `Kütüphanemizde ${kitaplar.length} kitap var.`}
      </p>

      <KitapListesi kitaplar={kitaplar} />
    </main>
  );
}
