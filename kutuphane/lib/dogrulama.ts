export interface KitapHatalari {
  baslik?: string;
  yazar?: string;
  sayfaSayisi?: string;
}

export interface KitapFormDurumu {
  hatalar: KitapHatalari;
  degerler: {
    baslik: string;
    yazar: string;
    sayfaSayisi: string;
  };
}

const metinAl = (formData: FormData, ad: string) => {
  const deger = formData.get(ad);
  return typeof deger === "string" ? deger.trim() : "";
};

export const kitapFormunuDogrula = (formData: FormData) => {
  const baslik = metinAl(formData, "baslik");
  const yazar = metinAl(formData, "yazar");
  const sayfaMetni = metinAl(formData, "sayfaSayisi");
  const sayfaSayisi = Number(sayfaMetni);
  const hatalar: KitapHatalari = {};

  if (baslik === "") {
    hatalar.baslik = "Kitabın adını yazın.";
  } else if (baslik.length > 100) {
    hatalar.baslik = "Kitabın adı en fazla 100 karakter olabilir.";
  }

  if (yazar === "") {
    hatalar.yazar = "Yazarın adını yazın.";
  }

  if (sayfaMetni === "") {
    hatalar.sayfaSayisi = "Sayfa sayısını yazın.";
  } else if (!Number.isInteger(sayfaSayisi) || sayfaSayisi < 1 || sayfaSayisi > 5000) {
    hatalar.sayfaSayisi = "Sayfa sayısı 1 ile 5000 arasında bir tam sayı olmalı.";
  }

  return { baslik, yazar, sayfaSayisi, sayfaMetni, hatalar };
};
