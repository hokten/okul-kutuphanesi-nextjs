import "dotenv/config";
import { prisma } from "@/lib/prisma";
import { kitaplar } from "@/data/kitaplar";

async function main() {
  await prisma.kitap.deleteMany();
  await prisma.kategori.deleteMany();

  const roman = await prisma.kategori.create({ data: { ad: "Roman" } });
  const klasik = await prisma.kategori.create({ data: { ad: "Türk Klasikleri" } });

  const sonuc = await prisma.kitap.createMany({ data: kitaplar });
  console.log(`${sonuc.count} kitap veritabanına eklendi.`);

  await prisma.kitap.updateMany({ where: { id: { in: [1, 4] } }, data: { kategoriId: klasik.id } });
  await prisma.kitap.updateMany({ where: { id: { in: [2, 3, 5] } }, data: { kategoriId: roman.id } });
  console.log("Kategoriler eklendi.");
}

main();
