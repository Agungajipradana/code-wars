/*
Ini cukup mudah. Tujuan Anda adalah membuat fungsi yang menghapus karakter pertama dan terakhir dari sebuah string. Anda diberi satu parameter, string asli. Anda tidak perlu khawatir tentang string dengan kurang dari dua karakter.
*/

// Fungsi removeChar menerima string 'str' sebagai parameter
function removeChar(str) {
  // Mengembalikan string tanpa karakter pertama dan terakhir
  return str.slice(1, -1);
}

// Contoh penggunaan dan hasil yang diharapkan
console.log(removeChar("eloquent")); // "loquen"
console.log(removeChar("country")); // "ountr"
console.log(removeChar("person")); // "erso"
console.log(removeChar("place")); // "lac"
console.log(removeChar("a")); // Error: string terlalu pendek
