/*
Ambil 2 string s1 dan s2 yang hanya menyertakan huruf dari a sampai z. Mengembalikan string terurut baru, yang terpanjang, berisi huruf berbeda - masing-masing diambil hanya sekali - berasal dari s1 atau s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

function longest(s1, s2) {
  // Menggabungkan kedua string tanpa huruf yang berulang
  const combined = Array.from(new Set(s1 + s2));

  // Mengurutkan huruf-huruf yang unik
  const sorted = combined.sort();

  // Mengonversi hasil pengurutan ke dalam bentuk string
  return sorted.join("");
}

console.log(longest("aretheyhere", "yestheyarehere")); // Output: aehrsty
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding")); // Output: abcdefghilnoprstu
console.log(longest("inmanylanguages", "theresapairoffunctions")); // Output: acefghilmnoprstuy
