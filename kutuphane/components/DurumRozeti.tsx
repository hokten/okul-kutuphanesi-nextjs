// components/DurumRozeti.tsx
import { Durum } from "@/data/kitaplar";

interface DurumRozetiProps {
  durum: Durum;
}

export default function DurumRozeti({ durum }: DurumRozetiProps) {
  const raftaMi = durum === "rafta";
  const renk = raftaMi ? "bg-green-600" : "bg-orange-600";

  return (
    <span className={`inline-block px-2 py-0.5 rounded text-white text-sm ${renk}`}>
      {raftaMi ? "Rafta" : "Ödünçte"}
    </span>
  );
}
