import { Durum } from "@/data/kitaplar";
import DurumRozeti from "@/components/DurumRozeti";
import { oduncDurumunuDegistir } from "@/lib/eylemler";

interface OduncKontrolProps {
  kitapId: number;
  durum: Durum;
}

export default function OduncKontrol({ kitapId, durum }: OduncKontrolProps) {
  const yeniDurum: Durum = durum === "rafta" ? "oduncte" : "rafta";
  const degistir = oduncDurumunuDegistir.bind(null, kitapId, yeniDurum);

  return (
    <form action={degistir} className="mt-3 flex items-center justify-between">
      <DurumRozeti durum={durum} />
      <button
        type="submit"
        className="px-3 py-1 rounded bg-blue-600 text-white text-sm hover:bg-blue-700"
      >
        {durum === "rafta" ? "Ödünç ver" : "İade al"}
      </button>
    </form>
  );
}
