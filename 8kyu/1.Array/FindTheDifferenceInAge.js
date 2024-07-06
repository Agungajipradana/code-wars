/*
Find the Difference in Age between Oldest and Youngest Family Members

Pada pertemuan keluarga tahunan, keluarga suka mencari umur anggota keluarga tertua yang masih hidup dan umur anggota keluarga termuda dan menghitung selisihnya.

Anda akan diberikan daftar usia seluruh anggota keluarga, dalam urutan apa pun. Usia akan diberikan dalam bilangan bulat, sehingga bayi berusia 5 bulan, akan memiliki 'usia' yang dianggap berasal dari 0. Kembalikan array baru (tupel dengan Python) dengan [usia termuda, usia tertua, perbedaan antara yang termuda dan tertua usia].
*/

// Fungsi differenceInAges menerima array 'ages' yang berisi beberapa usia
function differenceInAges(ages) {
  // Mencari usia minimum dari array menggunakan Math.min dan spread operator
  let min = Math.min(...ages);

  // Mencari usia maksimum dari array menggunakan Math.max dan spread operator
  let max = Math.max(...ages);

  // Menghitung selisih antara usia maksimum dan usia minimum
  let diff = max - min;

  // Mengembalikan array yang berisi usia minimum, usia maksimum, dan selisihnya
  return [min, max, diff];
}

// Contoh penggunaan dan hasil yang diharapkan
console.log(differenceInAges([82, 15, 6, 38, 35])); // [6, 82, 76]
console.log(differenceInAges([57, 99, 14, 32])); // [14, 99, 85]
