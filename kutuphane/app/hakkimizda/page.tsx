// app/hakkimizda/page.tsx
import Kurallar from "@/components/Kurallar";
import KitapOneri from "@/components/KitapOneri";
import Menu from "@/components/Menu";
import AltBilgi from "@/components/AltBilgi";

export default function HakkimizdaSayfasi() {
  return (
    <>
      <Menu />
      <main>
        <h1>Hakkımızda</h1>
        <p>Okul kütüphanemiz hafta içi her gün 09.00 - 16.00 arası açıktır.</p>
        <p>
          Türkiye&apos;nin en büyük kütüphanesini merak ediyorsanız{" "}
          <a href="https://www.mkutup.gov.tr" target="_blank" rel="noopener noreferrer">
            Millî Kütüphane
          </a>{" "}
          sitesine göz atın.
        </p>
        <Kurallar />
        <KitapOneri />
      </main>
      <AltBilgi />
    </>
  );
}
