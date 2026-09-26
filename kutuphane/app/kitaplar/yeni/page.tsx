import SayfaBasligi from "@/components/SayfaBasligi";
import { kitapEkle } from "@/lib/eylemler";

export const metadata = {
  title: "Yeni Kitap",
};

export default function YeniKitapSayfasi() {
  return (
    <main className="max-w-md">
      <SayfaBasligi>Yeni Kitap Ekle</SayfaBasligi>

      <form action={kitapEkle} className="mt-6 space-y-4">
        <div>
          <label htmlFor="baslik" className="block font-semibold mb-1">Kitabın adı</label>
          <input
            id="baslik"
            name="baslik"
            type="text"
            required
            className="w-full bg-white border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label htmlFor="yazar" className="block font-semibold mb-1">Yazar</label>
          <input
            id="yazar"
            name="yazar"
            type="text"
            required
            className="w-full bg-white border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label htmlFor="sayfaSayisi" className="block font-semibold mb-1">Sayfa sayısı</label>
          <input
            id="sayfaSayisi"
            name="sayfaSayisi"
            type="number"
            min="1"
            required
            className="w-full bg-white border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <button type="submit" className="px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700">
          Kaydet
        </button>
      </form>
    </main>
  );
}
