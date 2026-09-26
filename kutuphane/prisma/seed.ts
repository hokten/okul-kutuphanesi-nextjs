import "dotenv/config";
import { prisma } from "@/lib/prisma";
import { kitaplar } from "@/data/kitaplar";

async function main() {
  await prisma.kitap.deleteMany();
  const sonuc = await prisma.kitap.createMany({ data: kitaplar });
  console.log(`${sonuc.count} kitap veritabanına eklendi.`);
}

main();
