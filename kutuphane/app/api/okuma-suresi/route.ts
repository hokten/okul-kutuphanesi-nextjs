import { okumaSuresi } from "@/lib/yardimcilar";

export async function POST(request: Request) {
  const govde = await request.json();
  const sayfaSayisi = govde.sayfaSayisi;
  const gunlukSayfa = govde.gunlukSayfa;

  if (typeof sayfaSayisi !== "number" || typeof gunlukSayfa !== "number" || gunlukSayfa <= 0) {
    return Response.json({ hata: "sayfaSayisi ve gunlukSayfa sayı olmalı" }, { status: 400 });
  }

  return Response.json({ gun: okumaSuresi(sayfaSayisi, gunlukSayfa) });
}
