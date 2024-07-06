/*
Diberikan sekumpulan angka, kembalikan invers aditif dari masing-masing angka. 
Setiap angka positif menjadi negatif, dan setiap angka negatif menjadi positif.

[1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
[1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
[] --> []

Asumsikan bahwa semua nilai adalah integer. Jangan mengubah array input.

Operasi invers aditif bekerja dengan mengubah tanda bilangan:

Bilangan positif dikalikan dengan -1 menghasilkan bilangan negatif.
Bilangan negatif dikalikan dengan -1 menghasilkan bilangan positif.
*/

function invert(array) {
  // Membuat array baru untuk menyimpan hasil
  let arr = [];

  // Loop melalui setiap elemen dalam array input
  for (let i = 0; i < array.length; i++) {
    // Menambahkan invers aditif dari elemen ke dalam array baru
    arr.push(-array[i]);
  }
  // Mengembalikan array baru yang berisi invers aditif dari setiap elemen
  return arr;
}

// Contoh penggunaan dan hasil yang diharapkan
console.log(invert([1, 2, 3, 4, 5])); // [-1, -2, -3, -4, -5]
console.log(invert([1, -2, 3, -4, 5])); // [-1, 2, -3, 4, -5]
console.log(invert([])); // []

// Cara lebih sederhana menggunakan map()
const invertNumbers = (array) => array.map((num) => -num);

console.log(invertNumbers([1, 2, 3, 4, 5])); // [-1, -2, -3, -4, -5]
console.log(invertNumbers([1, -2, 3, -4, 5])); // [-1, 2, -3, 4, -5]
console.log(invertNumbers([])); // []
