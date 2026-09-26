// lib/yardimcilar.ts
export const uzunlukGrubu = (sayfa: number): string => {
  if (sayfa < 250) {
    return "Kısa";
  } else if (sayfa < 400) {
    return "Orta";
  } else {
    return "Uzun";
  }
};

export const okumaSuresi = (sayfa: number, gunlukSayfa: number = 20): number =>
  Math.ceil(sayfa / gunlukSayfa);
