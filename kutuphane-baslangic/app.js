// ===== İÇE AKTARMALAR =====
import { kitaplariGetir } from "./veriler.js";
import { durumMesaji, kitapBilgisi } from "./yardimcilar.js";

// ===== KULLANIM =====
const kitaplar = await kitaplariGetir();

console.table(kitaplar);
console.log(kitaplar.map(kitapBilgisi));

const raftakiler = kitaplar.filter((kitap) => kitap.durum === "rafta");
console.log(`Rafta ${raftakiler.length} kitap var.`);

const ikinciKitap = kitaplar.find((kitap) => kitap.id === 2);
console.log(`${ikinciKitap.baslik}: ${durumMesaji(ikinciKitap.durum)}`);
