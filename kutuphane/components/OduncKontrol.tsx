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
      <button onClick={degistir}>
        {durum === "rafta" ? "Ödünç ver" : "İade al"}
      </button>
    </div>
  );
}
