import { kitaplariGetir } from "@/lib/veri";

export async function GET() {
  const kitaplar = await kitaplariGetir();
  return Response.json(kitaplar);
}
