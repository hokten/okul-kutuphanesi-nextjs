// veriler.js
export const kutuphaneAdi = "Okul Kütüphanesi";

export const kitaplariGetir = async () => {
  const yanit = await fetch("kitaplar.json");

  if (!yanit.ok) {
    console.log("Kitaplar yüklenemedi! Durum kodu:", yanit.status);
    return [];
  }

  const kitaplar = await yanit.json();
  return kitaplar;
};
