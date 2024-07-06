/*
Buat fungsi yang mengambil 2 bilangan bulat dalam bentuk string sebagai masukan, dan mengeluarkan jumlahnya (juga sebagai string):

Contoh: (Masukan1, Masukan2 -->Keluaran)

"4",  "5" --> "9"
"34", "5" --> "39"
"", "" --> "0"
"2", "" --> "2"
"-5", "3" --> "-2"

Catatan:

- Jika salah satu input berupa string kosong, anggap saja sebagai nol.
- Input dan output yang diharapkan tidak akan pernah melebihi batas bilangan bulat 32-bit yang ditandatangani (2^31 - 1)
*/

// Menggunakan JavaScript Method parseInt() dan toString()
function sumStr(a, b) {
  // Mengubah string kosong menjadi angka 0
  let numA = parseInt(a) || 0;
  let numB = parseInt(b) || 0;

  // Menjumlahkan angka dan mengembalikan hasilnya sebagai string
  let sum = (numA + numB).toString();

  return sum;
}

console.log(sumStr("4", "5")); // Output: "9"
console.log(sumStr("34", "5")); // Output: "39"
console.log(sumStr("", "")); // Output: "0"
console.log(sumStr("2", "")); // Output: "2"
console.log(sumStr("-5", "3")); // Output: "-2"

// Menggunakan built in function String()
function sumString(a, b) {
  // Mengubah string kosong menjadi angka 0
  let numA = parseInt(a) || 0;
  let numB = parseInt(b) || 0;

  // Menjumlahkan angka dan mengembalikan hasilnya sebagai string
  let sum = String(numA + numB);

  return sum;
}

console.log(sumString("4", "5")); // Output: "9"
console.log(sumString("34", "5")); // Output: "39"
console.log(sumString("", "")); // Output: "0"
console.log(sumString("2", "")); // Output: "2"
console.log(sumString("-5", "3")); // Output: "-2"
