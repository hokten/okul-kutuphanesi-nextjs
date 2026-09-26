// app/kitaplar/[id]/not-found.tsx
import Link from "next/link";

export default function KitapBulunamadi() {
  return (
    <main className="text-center py-16">
      <p className="text-6xl">📕</p>
      <h1 className="mt-4 text-2xl font-bold text-blue-900">Böyle bir kitap yok</h1>
      <p className="mt-2 text-gray-600">Aradığınız kitap kütüphanemizde bulunamadı.</p>
      <Link href="/kitaplar" className="mt-6 inline-block text-blue-700 hover:underline">
        ← Bütün kitaplara dön
      </Link>
    </main>
  );
}
