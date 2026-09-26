import { Durum } from "@/data/kitaplar";
import { prisma } from "@/lib/prisma";
import type { Kitap as KitapKaydi } from "@/lib/generated/prisma/client";

const kitabaCevir = (kayit: KitapKaydi) => ({ ...kayit, durum: kayit.durum as Durum });

export const kitaplariGetir = async (aranan: string = "") => {
  const kayitlar = await prisma.kitap.findMany({
    where: {
      OR: [
        { baslik: { contains: aranan } },
        { yazar: { contains: aranan } },
      ],
    },
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
    include: { kategori: true },
  });

  return kayit ? { ...kitabaCevir(kayit), kategori: kayit.kategori } : null;
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

export const kategorileriGetir = async () => {
  const kategoriler = await prisma.kategori.findMany({
    orderBy: { ad: "asc" },
    include: { kitaplar: { orderBy: { baslik: "asc" } } },
  });

  return kategoriler.map((kategori) => ({
    ...kategori,
    kitaplar: kategori.kitaplar.map(kitabaCevir),
  }));
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
