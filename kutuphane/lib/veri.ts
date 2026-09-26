import { Durum } from "@/data/kitaplar";
import { prisma } from "@/lib/prisma";
import type { Kitap as KitapKaydi } from "@/lib/generated/prisma/client";

const kitabaCevir = (kayit: KitapKaydi) => ({ ...kayit, durum: kayit.durum as Durum });

export const kitaplariGetir = async () => {
  const kayitlar = await prisma.kitap.findMany({
    orderBy: { baslik: "asc" },
  });

  return kayitlar.map(kitabaCevir);
};

export const kitapGetir = async (id: number) => {
  if (!Number.isInteger(id)) {
    return null;
  }

  const kayit = await prisma.kitap.findUnique({
    where: { id },
  });

  return kayit ? kitabaCevir(kayit) : null;
};

export const kitapOlustur = async (baslik: string, yazar: string, sayfaSayisi: number) => {
  const kayit = await prisma.kitap.create({
    data: { baslik, yazar, sayfaSayisi },
  });

  return kitabaCevir(kayit);
};

export const kitabiGuncelle = async (id: number, baslik: string, yazar: string, sayfaSayisi: number) => {
  const kayit = await prisma.kitap.update({
    where: { id },
    data: { baslik, yazar, sayfaSayisi },
  });

  return kitabaCevir(kayit);
};

export const kitabiSil = async (id: number) => {
  await prisma.kitap.deleteMany({
    where: { id },
  });
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
