// components/AltBilgi.tsx
interface AltBilgiProps {
  yil?: number;
}

export default function AltBilgi({ yil = 2026 }: AltBilgiProps) {
  return (
    <footer className="border-t border-gray-200 py-6 text-center text-sm text-gray-500">
      <p>© {yil} Okul Kütüphanesi</p>
    </footer>
  );
}
