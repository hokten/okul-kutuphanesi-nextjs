"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { oneriEkle, kitapOlustur, kitabiGuncelle, kitabiSil, durumuDegistir } from "@/lib/veri";
import { Durum } from "@/data/kitaplar";
import { kitapFormunuDogrula, KitapFormDurumu } from "@/lib/dogrulama";

export const oneriGonder = async (formData: FormData) => {
  const ad = formData.get("ad");

  if (typeof ad !== "string" || ad.trim() === "") {
    return;
  }

  await oneriEkle(ad.trim());
  revalidatePath("/hakkimizda");
};

export const kitapEkle = async (
  oncekiDurum: KitapFormDurumu,
  formData: FormData
): Promise<KitapFormDurumu> => {
  const { baslik, yazar, sayfaSayisi, sayfaMetni, hatalar } = kitapFormunuDogrula(formData);

  if (Object.keys(hatalar).length > 0) {
    return { hatalar, degerler: { baslik, yazar, sayfaSayisi: sayfaMetni } };
  }

  const kitap = await kitapOlustur(baslik, yazar, sayfaSayisi);

  revalidatePath("/kitaplar");
  revalidatePath("/");
  redirect(`/kitaplar/${kitap.id}`);
};

export const kitapGuncelle = async (
  id: number,
  oncekiDurum: KitapFormDurumu,
  formData: FormData
): Promise<KitapFormDurumu> => {
  const { baslik, yazar, sayfaSayisi, sayfaMetni, hatalar } = kitapFormunuDogrula(formData);

  if (Object.keys(hatalar).length > 0) {
    return { hatalar, degerler: { baslik, yazar, sayfaSayisi: sayfaMetni } };
  }

  await kitabiGuncelle(id, baslik, yazar, sayfaSayisi);

  revalidatePath("/kitaplar");
  revalidatePath("/");
  revalidatePath("/kategoriler");
  redirect(`/kitaplar/${id}`);
};

export const kitapSil = async (id: number) => {
  await kitabiSil(id);

  revalidatePath("/kitaplar");
  revalidatePath("/");
  revalidatePath("/kategoriler");
  redirect("/kitaplar");
};

export const oduncDurumunuDegistir = async (id: number, yeniDurum: Durum) => {
  if (yeniDurum !== "rafta" && yeniDurum !== "oduncte") {
    return;
  }

  await durumuDegistir(id, yeniDurum);

  revalidatePath("/kitaplar");
  revalidatePath(`/kitaplar/${id}`);
  revalidatePath("/");
  revalidatePath("/kategoriler");
};
