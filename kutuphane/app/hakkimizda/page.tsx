// app/hakkimizda/page.tsx
import Kurallar from "@/components/Kurallar";
import KitapOneri from "@/components/KitapOneri";
import Bolum from "@/components/Bolum";
import SayfaBasligi from "@/components/SayfaBasligi";

export const metadata = {
  title: "Hakkımızda",
};

export default function HakkimizdaSayfasi() {
  return (
    <main>
      <SayfaBasligi>Hakkımızda</SayfaBasligi>
      <Bolum baslik="Açılış Saatleri">
        <p>Hafta içi her gün 09.00 - 16.00 arası açığız.</p>
        <p>Hafta sonu ve resmî tatillerde kapalıyız.</p>
      </Bolum>
      <p>
        Türkiye&apos;nin en büyük kütüphanesini merak ediyorsanız{" "}
        <a
          href="https://www.mkutup.gov.tr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:underline"
        >
          Millî Kütüphane
        </a>{" "}
        sitesine göz atın.
      </p>
      <Kurallar />
      <KitapOneri />
    </main>
  );
}
