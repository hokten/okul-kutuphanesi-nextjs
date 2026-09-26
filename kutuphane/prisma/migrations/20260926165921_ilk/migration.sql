-- CreateTable
CREATE TABLE "Kitap" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "baslik" TEXT NOT NULL,
    "yazar" TEXT NOT NULL,
    "sayfaSayisi" INTEGER NOT NULL,
    "durum" TEXT NOT NULL DEFAULT 'rafta',
    "kapak" TEXT,
    "oneCikan" BOOLEAN NOT NULL DEFAULT false
);
