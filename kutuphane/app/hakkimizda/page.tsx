// app/hakkimizda/page.tsx
import Kurallar from "@/components/Kurallar";
import KitapOneri from "@/components/KitapOneri";
import Bolum from "@/components/Bolum";

export const metadata = {
  title: "Hakkımızda",
};

export default function HakkimizdaSayfasi() {
  return (
    <main>
      <h1>Hakkımızda</h1>
      <Bolum baslik="Açılış Saatleri">
        <p>Hafta içi her gün 09.00 - 16.00 arası açığız.</p>
        <p>Hafta sonu ve resmî tatillerde kapalıyız.</p>
      </Bolum>
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
  );
}
