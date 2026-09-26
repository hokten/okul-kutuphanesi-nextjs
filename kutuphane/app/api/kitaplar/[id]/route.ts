import { kitapGetir } from "@/lib/veri";

interface KitapApiProps {
  params: Promise<{ id: string }>;
}

export async function GET(request: Request, { params }: KitapApiProps) {
  const { id } = await params;
  const kitap = await kitapGetir(Number(id));

  if (!kitap) {
    return Response.json({ hata: "Böyle bir kitap yok" }, { status: 404 });
  }

  return Response.json(kitap);
}
