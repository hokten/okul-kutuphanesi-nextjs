import Link from "next/link";

export default function Menu() {
  return (
    <nav className="flex gap-4 text-sm">
      <Link href="/" className="hover:underline">Anasayfa</Link>
      <Link href="/kitaplar" className="hover:underline">Kitaplar</Link>
      <Link href="/hakkimizda" className="hover:underline">Hakkımızda</Link>
    </nav>
  );
}
