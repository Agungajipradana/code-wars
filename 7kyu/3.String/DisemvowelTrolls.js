/*
Troll menyerang bagian komentar Anda!

Cara umum untuk menghadapi situasi ini adalah dengan menghapus semua huruf vokal dari komentar troll, sehingga menetralisir ancaman.

Tugas Anda adalah menulis fungsi yang mengambil string dan mengembalikan string baru dengan semua vokal dihilangkan.

Misalnya, string "This website is for losers LOL!" akan menjadi "Ths wbst s fr lsrs LL!".

Catatan: untuk kata y ini tidak dianggap sebagai vokal.
*/

function disemvowel(str) {
  let word = "";

  // Loop melalui setiap karakter dalam string input
  for (let i = 0; i < str.length; i++) {
    // Jika karakter saat ini bukan vokal, tambahkan ke string hasil
    if ("aeiouAEIOU".indexOf(str[i]) === -1) {
      word += str[i];
    }
  }

  // Kembalikan string hasil tanpa huruf vokal
  return word;
}

// Contoh penggunaan fungsi dengan string tertentu
console.log(disemvowel("This website is for losers LOL!")); // Output: 'Ths wbst s fr lsrs LL!'
console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read")); // Output: N ffns bt, Yr wrtng s mng th wrst \'v vr rd
console.log(disemvowel("What are you, a communist?")); // Output: 'Wht r y,  cmmnst?'
