interface BolumProps {
  baslik: string;
  children: React.ReactNode;
}

export default function Bolum({ baslik, children }: BolumProps) {
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-semibold text-blue-900 mb-3">{baslik}</h2>
      {children}
    </section>
  );
}
