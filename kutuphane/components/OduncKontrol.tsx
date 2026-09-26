"use client";

import { useState } from "react";
import { Durum } from "@/data/kitaplar";
import DurumRozeti from "@/components/DurumRozeti";

interface OduncKontrolProps {
  baslangicDurumu: Durum;
}

export default function OduncKontrol({ baslangicDurumu }: OduncKontrolProps) {
  const [durum, setDurum] = useState<Durum>(baslangicDurumu);

  const degistir = () => {
    setDurum(durum === "rafta" ? "oduncte" : "rafta");
  };

  return (
    <div>
      <DurumRozeti durum={durum} />
      <button
        onClick={degistir}
        className="ml-2 px-3 py-1 rounded bg-blue-600 text-white text-sm hover:bg-blue-700"
      >
        {durum === "rafta" ? "Ödünç ver" : "İade al"}
      </button>
    </div>
  );
}
