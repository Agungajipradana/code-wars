/*
Kita membutuhkan suatu fungsi yang dapat mengubah string menjadi angka. Cara apa untuk mencapai hal ini yang Anda ketahui?

Catatan: Jangan khawatir, semua input akan berupa string, dan setiap string merupakan representasi bilangan integral yang valid.

Examples
"1234" --> 1234
"605"  --> 605
"1405" --> 1405
"-7" --> -7
*/

// Fungsi stringToNumber menerima string 'str' yang merupakan representasi bilangan integral
const stringToNumber = (str) => {
  // Menggunakan parseInt untuk mengubah string menjadi angka integer
  return parseInt(str);
};

// Contoh penggunaan dan hasil yang diharapkan
console.log(stringToNumber("1234")); // 1234
console.log(stringToNumber("605")); // 605
console.log(stringToNumber("1405")); // 1405
console.log(stringToNumber("-7")); // -7
