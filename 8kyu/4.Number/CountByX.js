/*
Buat fungsi dengan dua argumen yang akan mengembalikan array n kelipatan x pertama.

Asumsikan bilangan tertentu dan berapa kali penghitungan adalah bilangan positif yang lebih besar dari 0.

Kembalikan hasilnya sebagai array atau daftar (tergantung bahasa).

Contoh:

countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]
*/

function countBy(x, n) {
  let z = [];

  for (let i = 1; i <= n; i++) {
    z.push(x * i);
  }

  return z;
}

console.log(countBy(1, 10)); // Output: [1,2,3,4,5,6,7,8,9,10]
console.log(countBy(2, 5)); // Output: [2,4,6,8,10]
