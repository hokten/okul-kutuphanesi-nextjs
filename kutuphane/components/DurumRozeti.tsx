// components/DurumRozeti.tsx
import { Durum } from "@/data/kitaplar";

interface DurumRozetiProps {
  durum: Durum;
}

export default function DurumRozeti({ durum }: DurumRozetiProps) {
  const raftaMi = durum === "rafta";

  return (
    <span
      style={{
        backgroundColor: raftaMi ? "#16a34a" : "#ea580c",
        color: "white",
        padding: "2px 8px",
        borderRadius: "4px"
      }}
    >
      {raftaMi ? "Rafta" : "Ödünçte"}
    </span>
  );
}
