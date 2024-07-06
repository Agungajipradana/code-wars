/*
Diberikan array bilangan bulat, kembalikan array baru dengan setiap nilai digandakan.

For example:

[1, 2, 3] --> [2, 4, 6]
*/

// Fungsi maps menerima array 'x' yang berisi bilangan bulat
function maps(x) {
  // Menggunakan metode 'map' untuk menggandakan setiap nilai dalam array
  return x.map((n) => n * 2);
}

// Contoh penggunaan dan hasil yang diharapkan
console.log(maps([1, 2, 3])); // [2, 4, 6]
console.log(maps([4, 1, 1, 1, 4])); // [8, 2, 2, 2, 8]
console.log(maps([2, 2, 2, 2, 2, 2])); // [4, 4, 4, 4, 4, 4]
