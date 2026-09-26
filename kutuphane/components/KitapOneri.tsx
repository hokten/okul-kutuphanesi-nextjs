import Bolum from "@/components/Bolum";
import { onerileriGetir } from "@/lib/veri";
import { oneriGonder } from "@/lib/eylemler";

export default async function KitapOneri() {
  const oneriler = await onerileriGetir();

  return (
    <Bolum baslik="Kitap Öner">
      <form action={oneriGonder} className="flex gap-2 mb-3">
        <input
          type="text"
          name="ad"
          placeholder="Kütüphanede görmek istediğin kitap"
          className="flex-1 bg-white border border-gray-300 rounded px-3 py-2"
        />
        <button type="submit" className="px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700">
          Öner
        </button>
      </form>
      {oneriler.length === 0 ? (
        <p className="text-gray-500">Henüz öneri yok.</p>
      ) : (
        <ul className="list-disc pl-6">
          {oneriler.map((oneri) => (
            <li key={oneri.id}>{oneri.ad}</li>
          ))}
        </ul>
      )}
    </Bolum>
  );
}
