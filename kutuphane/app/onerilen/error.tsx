"use client";

interface OnerilerHatasiProps {
  error: Error & { digest?: string };
  retry: () => void;
}

export default function OnerilerHatasi({ retry }: OnerilerHatasiProps) {
  return (
    <main className="text-center py-16">
      <p className="text-5xl">📡</p>
      <h1 className="mt-4 text-2xl font-bold text-blue-900">Öneriler şu an getirilemedi</h1>
      <p className="mt-2 text-gray-600">
        Open Library&apos;ye ulaşamadık. İnternet bağlantınızı kontrol edip tekrar deneyin.
      </p>
      <button
        onClick={() => retry()}
        className="mt-6 px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700"
      >
        Tekrar dene
      </button>
    </main>
  );
}
