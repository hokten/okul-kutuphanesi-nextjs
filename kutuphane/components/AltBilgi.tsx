// components/AltBilgi.tsx
interface AltBilgiProps {
  yil?: number;
}

export default function AltBilgi({ yil = 2026 }: AltBilgiProps) {
  return (
    <footer>
      <p>© {yil} Okul Kütüphanesi</p>
    </footer>
  );
}
