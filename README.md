# Okul Kütüphanesi: Ders Ders Kod

Bu depo, 56 derslik Next.js ders notlarında adım adım geliştirilen **Okul Kütüphanesi** uygulamasının kodunu içerir. Her ders bir commit'tir ve `ders-01` … `ders-56` etiketleriyle işaretlidir. Her commit, o dersin **sonundaki** proje hâlini gösterir.

## Klasörler

| Klasör | Dersler | İçerik |
|---|---|---|
| `kutuphane-baslangic/` | 2–18 | HTML, CSS, JavaScript ve TypeScript alıştırmalarıyla ilk proje |
| `kutuphane/` | 19–56 | Next.js projesi (App Router, TypeScript, Tailwind, Prisma) |

`kutuphane-baslangic/` klasörü Ders 18'den sonra değişmez; öğrencilerin bilgisayarında olduğu gibi yerinde kalır.

## Kullanım

```bash
git tag                        # bütün ders etiketleri
git checkout ders-30           # Ders 30'un sonundaki kod
git diff ders-29 ders-30       # Ders 30'da neler değişti?
git checkout main              # son hâle dön
```

Next.js projesini çalıştırmak için:

```bash
cd kutuphane
npm install
npm run dev
```

Ders 44'ten sonraki commit'lerde veritabanı gerekir: `.env.example` dosyasını `.env` adıyla kopyalayın, sonra `npx prisma generate`, `npx prisma migrate dev` ve `npx prisma db seed` çalıştırın. Ders 54'ten sonra `.env` içine bir PostgreSQL (Neon) adresi yazılmalıdır.

Üretilen Prisma istemcisi (`lib/generated`) depoda olmadığı ve şema dersten derse değiştiği için, Ders 44 ve sonrasında **her etiket değiştirdiğinizde** (`git checkout ders-NN`) `npx prisma generate` komutunu yeniden çalıştırın. Ders 54'ten itibaren bu, `npm install` sırasında (`postinstall`) kendiliğinden de yapılır.

## Notlar

- Yalnızca **derste yazılan kod** vardır; ev ödevleri ve ders içi denemeler (sonradan silinen satırlar) yoktur.
- Kapak resimleri gerçek kapaklar değil, düz renkli yer tutuculardır.
- `.env`, `node_modules`, `dev.db` ve üretilen Prisma istemcisi (`lib/generated`) depoya dahil değildir.
- Her commit'te `npx tsc --noEmit`, `npm run lint` ve `npm run build` denetlenmiştir. Ders 20–32 arasında `<img>` için beklenen bir lint uyarısı, Ders 24'te ise derste bilerek bırakılan iki lint hatası vardır (Ders 25'te düzelir).
- `npx tsc --noEmit` sayfa türlerini `.next/types` klasöründen okur; temiz bir kopyada önce `npx next typegen` (ya da `npm run build`) çalıştırın.
