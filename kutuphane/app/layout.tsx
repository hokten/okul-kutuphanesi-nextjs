import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Link from "next/link";
import Menu from "@/components/Menu";
import AltBilgi from "@/components/AltBilgi";
import DuyuruCubugu from "@/components/DuyuruCubugu";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: {
    default: "Okul Kütüphanesi",
    template: "%s | Okul Kütüphanesi",
  },
  description: "Okul kütüphanemizin kitapları, kuralları ve duyuruları.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="tr" className="h-full antialiased">
      <body className={`${nunito.className} min-h-full flex flex-col`}>
        <DuyuruCubugu />
        <header className="bg-blue-800 text-white">
          <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
            <Link href="/" className="text-xl font-bold">
              📚 Okul Kütüphanesi
            </Link>
            <Menu />
          </div>
        </header>
        <div className="flex-1 w-full max-w-5xl mx-auto px-4 py-8">{children}</div>
        <AltBilgi />
      </body>
    </html>
  );
}
