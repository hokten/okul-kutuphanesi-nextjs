// yardimcilar.js
export const uzunlukGrubu = (sayfa) => {
  if (sayfa < 250) {
    return "Kısa";
  } else if (sayfa < 400) {
    return "Orta";
  } else {
    return "Uzun";
  }
};

export const durumMesaji = (durum) =>
  durum === "rafta" ? "Ödünç alınabilir" : "Şu an ödünçte";

export const kitapBilgisi = ({ baslik, yazar, sayfaSayisi }) =>
  `${baslik} - ${yazar} (${sayfaSayisi} sayfa, ${uzunlukGrubu(sayfaSayisi)})`;
