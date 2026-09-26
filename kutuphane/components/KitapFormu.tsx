"use client";

import { useActionState } from "react";
import { KitapFormDurumu } from "@/lib/dogrulama";
import FormAlani from "@/components/FormAlani";

interface KitapFormuProps {
  eylem: (oncekiDurum: KitapFormDurumu, formData: FormData) => Promise<KitapFormDurumu>;
  baslangic: KitapFormDurumu;
  dugmeYazisi: string;
}

export default function KitapFormu({ eylem, baslangic, dugmeYazisi }: KitapFormuProps) {
  const [durum, formEylemi, bekliyor] = useActionState(eylem, baslangic);

  return (
    <form action={formEylemi} noValidate className="mt-6 space-y-4">
      <FormAlani ad="baslik" etiket="Kitabın adı" varsayilan={durum.degerler.baslik} hata={durum.hatalar.baslik} />
      <FormAlani ad="yazar" etiket="Yazar" varsayilan={durum.degerler.yazar} hata={durum.hatalar.yazar} />
      <FormAlani
        ad="sayfaSayisi"
        etiket="Sayfa sayısı"
        tur="number"
        varsayilan={durum.degerler.sayfaSayisi}
        hata={durum.hatalar.sayfaSayisi}
      />

      <button
        type="submit"
        disabled={bekliyor}
        className="px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
      >
        {bekliyor ? "Kaydediliyor..." : dugmeYazisi}
      </button>
    </form>
  );
}
