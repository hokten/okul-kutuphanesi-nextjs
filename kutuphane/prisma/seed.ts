import "dotenv/config";
import { prisma } from "@/lib/prisma";
import { kitaplar } from "@/data/kitaplar";

async function main() {
  await prisma.kitap.deleteMany();
  await prisma.kategori.deleteMany();

  const roman = await prisma.kategori.create({ data: { ad: "Roman" } });
  const klasik = await prisma.kategori.create({ data: { ad: "Türk Klasikleri" } });

  const sonuc = await prisma.kitap.createMany({
    data: kitaplar.map((kitap) => ({ ...kitap, id: undefined })),
  });
  console.log(`${sonuc.count} kitap veritabanına eklendi.`);

  await prisma.kitap.updateMany({
    where: { baslik: { in: ["Çalıkuşu", "Sinekli Bakkal"] } },
    data: { kategoriId: klasik.id },
  });
  await prisma.kitap.updateMany({
    where: { baslik: { in: ["Kuyucaklı Yusuf", "Saatleri Ayarlama Enstitüsü", "Kürk Mantolu Madonna"] } },
    data: { kategoriId: roman.id },
  });
  console.log("Kategoriler eklendi.");
}

main();
