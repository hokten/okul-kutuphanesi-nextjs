const kurallar = [
  "Kitaplar en fazla 15 gün ödünç alınabilir.",
  "Kütüphanede sessiz olunmalıdır.",
  "Kitaplar temiz ve sağlam teslim edilmelidir."
];

export default function Kurallar() {
  return (
    <section>
      <h2>Kütüphane Kuralları</h2>
      <ul>
        {kurallar.map((kural) => (
          <li key={kural}>{kural}</li>
        ))}
      </ul>
    </section>
  );
}
