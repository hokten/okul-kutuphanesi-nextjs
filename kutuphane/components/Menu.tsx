import Link from "next/link";

export default function Menu() {
  return (
    <nav className="flex gap-4 text-sm">
      <Link href="/" className="hover:underline">Anasayfa</Link>
      <Link href="/kitaplar" className="hover:underline">Kitaplar</Link>
      <Link href="/kategoriler" className="hover:underline">Kategoriler</Link>
      <Link href="/hakkimizda" className="hover:underline">Hakkımızda</Link>
      <Link href="/onerilen" className="hover:underline">Önerilen</Link>
      <Link href="/iletisim" className="hover:underline">İletişim</Link>
    </nav>
  );
}
