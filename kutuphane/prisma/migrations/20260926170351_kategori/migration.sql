-- CreateTable
CREATE TABLE "Kategori" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ad" TEXT NOT NULL
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Kitap" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "baslik" TEXT NOT NULL,
    "yazar" TEXT NOT NULL,
    "sayfaSayisi" INTEGER NOT NULL,
    "durum" TEXT NOT NULL DEFAULT 'rafta',
    "kapak" TEXT,
    "oneCikan" BOOLEAN NOT NULL DEFAULT false,
    "kategoriId" INTEGER,
    CONSTRAINT "Kitap_kategoriId_fkey" FOREIGN KEY ("kategoriId") REFERENCES "Kategori" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Kitap" ("baslik", "durum", "id", "kapak", "oneCikan", "sayfaSayisi", "yazar") SELECT "baslik", "durum", "id", "kapak", "oneCikan", "sayfaSayisi", "yazar" FROM "Kitap";
DROP TABLE "Kitap";
ALTER TABLE "new_Kitap" RENAME TO "Kitap";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "Kategori_ad_key" ON "Kategori"("ad");
