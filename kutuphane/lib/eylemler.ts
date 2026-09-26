"use server";

import { revalidatePath } from "next/cache";
import { oneriEkle } from "@/lib/veri";

export const oneriGonder = async (formData: FormData) => {
  const ad = formData.get("ad");

  if (typeof ad !== "string" || ad.trim() === "") {
    return;
  }

  await oneriEkle(ad.trim());
  revalidatePath("/hakkimizda");
};
