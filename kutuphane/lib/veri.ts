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

  if (!yanit.ok) {
    throw new Error(`Open Library yanıt vermedi. Durum kodu: ${yanit.status}`);
  }

  const veri: AramaSonucu = await yanit.json();
  return veri.docs;
};

export interface Oneri {
  id: number;
  ad: string;
}

const oneriler: Oneri[] = [];

export const onerileriGetir = async () => {
  return oneriler;
};

export const oneriEkle = async (ad: string) => {
  oneriler.push({ id: Date.now(), ad });
};
