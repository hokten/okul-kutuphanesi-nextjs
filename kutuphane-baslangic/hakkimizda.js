import { kitaplariGetir, kutuphaneAdi } from "./veriler.js";

const kitaplar = await kitaplariGetir();
console.log(`${kutuphaneAdi}'nde ${kitaplar.length} kitap var.`);
