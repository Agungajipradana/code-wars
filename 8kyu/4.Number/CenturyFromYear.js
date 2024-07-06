/*
Abad pertama mencakup tahun 1 sampai dengan tahun 100, abad kedua mulai dari tahun 101 sampai dengan tahun 200, dan seterusnya.

Task
Jika diberi satu tahun, kembalikan ke abad sekarang.

Examples
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20
2742 --> 28
*/

// Fungsi century menerima parameter 'year' yang merupakan tahun
function century(year) {
  // Menggunakan Math.ceil untuk membulatkan hasil pembagian year dengan 100 ke atas
  return Math.ceil(year / 100);
}

// Contoh penggunaan dan hasil yang diharapkan
console.log(century(1705)); // 18
console.log(century(1900)); // 19
console.log(century(1601)); // 17
console.log(century(2000)); // 20
console.log(century(2742)); // 28
