import { kitaplar } from "@/data/kitaplar";

export const kitaplariGetir = async () => {
  return kitaplar;
};

export const kitapGetir = async (id: number) => {
  return kitaplar.find((kitap) => kitap.id === id);
};

export interface OneriKitap {
  key: string;
  title: string;
  author_name?: string[];
  first_publish_year?: number;
  cover_i?: number;
}

interface AramaSonucu {
  numFound: number;
  docs: OneriKitap[];
}

export const onerilenKitaplariGetir = async (yazar: string) => {
  const yanit = await fetch(
    `https://openlibrary.org/search.json?author=${yazar}&limit=6&fields=key,title,author_name,first_publish_year,cover_i`
  );
  const veri: AramaSonucu = await yanit.json();
  return veri.docs;
};
