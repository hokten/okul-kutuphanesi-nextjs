interface SayfaBasligiProps {
  children: React.ReactNode;
}

export default function SayfaBasligi({ children }: SayfaBasligiProps) {
  return <h1 className="text-3xl font-bold text-blue-900 mb-2">{children}</h1>;
}
