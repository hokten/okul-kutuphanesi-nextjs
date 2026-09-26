"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { oneriEkle, kitapOlustur } from "@/lib/veri";

export const oneriGonder = async (formData: FormData) => {
  const ad = formData.get("ad");

  if (typeof ad !== "string" || ad.trim() === "") {
    return;
  }

  await oneriEkle(ad.trim());
  revalidatePath("/hakkimizda");
};

export const kitapEkle = async (formData: FormData) => {
  const baslik = formData.get("baslik");
  const yazar = formData.get("yazar");
  const sayfaSayisi = Number(formData.get("sayfaSayisi"));

  if (typeof baslik !== "string" || baslik.trim() === "") {
    return;
  }
  if (typeof yazar !== "string" || yazar.trim() === "") {
    return;
  }
  if (!Number.isInteger(sayfaSayisi) || sayfaSayisi <= 0) {
    return;
  }

  const kitap = await kitapOlustur(baslik.trim(), yazar.trim(), sayfaSayisi);

  revalidatePath("/kitaplar");
  revalidatePath("/");
  redirect(`/kitaplar/${kitap.id}`);
};
