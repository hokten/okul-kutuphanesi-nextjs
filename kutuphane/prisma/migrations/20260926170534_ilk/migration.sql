-- CreateTable
CREATE TABLE "Kitap" (
    "id" SERIAL NOT NULL,
    "baslik" TEXT NOT NULL,
    "yazar" TEXT NOT NULL,
    "sayfaSayisi" INTEGER NOT NULL,
    "durum" TEXT NOT NULL DEFAULT 'rafta',
    "kapak" TEXT,
    "oneCikan" BOOLEAN NOT NULL DEFAULT false,
    "kategoriId" INTEGER,

    CONSTRAINT "Kitap_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Kategori" (
    "id" SERIAL NOT NULL,
    "ad" TEXT NOT NULL,

    CONSTRAINT "Kategori_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Kategori_ad_key" ON "Kategori"("ad");

-- AddForeignKey
ALTER TABLE "Kitap" ADD CONSTRAINT "Kitap_kategoriId_fkey" FOREIGN KEY ("kategoriId") REFERENCES "Kategori"("id") ON DELETE SET NULL ON UPDATE CASCADE;
