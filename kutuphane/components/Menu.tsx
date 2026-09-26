import Link from "next/link";

export default function Menu() {
  return (
    <nav>
      <Link href="/">Anasayfa</Link>
      <Link href="/kitaplar">Kitaplar</Link>
      <Link href="/hakkimizda">Hakkımızda</Link>
    </nav>
  );
}
