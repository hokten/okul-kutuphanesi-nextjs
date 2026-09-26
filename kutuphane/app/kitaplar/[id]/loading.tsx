// app/kitaplar/[id]/loading.tsx
export default function KitapYukleniyor() {
  return (
    <main className="animate-pulse">
      <p className="text-gray-500">Kitap yükleniyor…</p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="h-96 rounded-lg bg-gray-200" />
        <div className="md:col-span-2 space-y-4">
          <div className="h-8 w-2/3 rounded bg-gray-200" />
          <div className="h-5 w-1/3 rounded bg-gray-200" />
          <div className="h-4 w-1/2 rounded bg-gray-200" />
        </div>
      </div>
    </main>
  );
}
