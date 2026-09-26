interface BolumProps {
  baslik: string;
  children: React.ReactNode;
}

export default function Bolum({ baslik, children }: BolumProps) {
  return (
    <section>
      <h2>{baslik}</h2>
      {children}
    </section>
  );
}
