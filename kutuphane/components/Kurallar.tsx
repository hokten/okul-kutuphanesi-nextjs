import Bolum from "@/components/Bolum";

const kurallar = [
  "Kitaplar en fazla 15 gün ödünç alınabilir.",
  "Kütüphanede sessiz olunmalıdır.",
  "Kitaplar temiz ve sağlam teslim edilmelidir."
];

export default function Kurallar() {
  return (
    <Bolum baslik="Kütüphane Kuralları">
      <ul className="list-disc pl-6 space-y-1">
        {kurallar.map((kural) => (
          <li key={kural}>{kural}</li>
        ))}
      </ul>
    </Bolum>
  );
}
