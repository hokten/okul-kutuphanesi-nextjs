import Bolum from "@/components/Bolum";
import SayfaBasligi from "@/components/SayfaBasligi";

export const metadata = {
  title: "İletişim",
};

export default function IletisimSayfasi() {
  return (
    <main>
      <SayfaBasligi>İletişim</SayfaBasligi>
      <p className="text-gray-600">Soru ve önerileriniz için bize ulaşabilirsiniz.</p>
      <Bolum baslik="Adres">
        <p>Atatürk Mahallesi, Okul Sokak No: 1</p>
        <p>Okulumuzun giriş katı, kantinin yanı</p>
      </Bolum>
      <Bolum baslik="E-posta">
        <p>kutuphane@okulumuz.k12.tr</p>
      </Bolum>
    </main>
  );
}
