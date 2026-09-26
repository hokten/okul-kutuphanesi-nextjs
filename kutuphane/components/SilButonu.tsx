"use client";

import { kitapSil } from "@/lib/eylemler";

interface SilButonuProps {
  id: number;
  baslik: string;
}

export default function SilButonu({ id, baslik }: SilButonuProps) {
  const sil = kitapSil.bind(null, id);

  const onayla = (olay: React.FormEvent<HTMLFormElement>) => {
    if (!confirm(`"${baslik}" silinsin mi? Bu işlem geri alınamaz.`)) {
      olay.preventDefault();
    }
  };

  return (
    <form action={sil} onSubmit={onayla}>
      <button type="submit" className="px-3 py-1 rounded bg-red-600 text-white hover:bg-red-700">
        Sil
      </button>
    </form>
  );
}
