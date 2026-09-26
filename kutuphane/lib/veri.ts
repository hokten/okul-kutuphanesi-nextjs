import { kitaplar } from "@/data/kitaplar";

export const kitaplariGetir = async () => {
  return kitaplar;
};

export const kitapGetir = async (id: number) => {
  return kitaplar.find((kitap) => kitap.id === id);
};
