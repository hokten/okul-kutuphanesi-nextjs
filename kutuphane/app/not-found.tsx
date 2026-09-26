// app/not-found.tsx
import Link from "next/link";

export default function SayfaBulunamadi() {
  return (
    <main className="text-center py-16">
      <p className="text-6xl font-bold text-blue-900">404</p>
      <h1 className="mt-4 text-2xl font-bold">Sayfa bulunamadı</h1>
      <p className="mt-2 text-gray-600">Aradığınız sayfa taşınmış ya da hiç var olmamış olabilir.</p>
      <Link href="/" className="mt-6 inline-block text-blue-700 hover:underline">
        Anasayfaya dön
      </Link>
    </main>
  );
}
