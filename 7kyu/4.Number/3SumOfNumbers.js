/*
Diberikan dua bilangan bulat a dan b, yang bisa positif atau negatif, temukan jumlah semua bilangan bulat di antara dan termasuk keduanya, lalu kembalikan. Jika kedua angkanya sama, kembalikan a atau b.

Catatan: a dan b tidak diurutkan!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

Fungsi Anda seharusnya hanya mengembalikan angka, bukan penjelasan bagaimana Anda mendapatkan angka tersebut.
*/

function getSum(a, b) {
  if (a === b) {
    return a;
  }

  let min = Math.min(a, b);
  let max = Math.max(a, b);
  let sum = 0;

  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum;
}

console.log(getSum(0, -1)); // Output: -1
console.log(getSum(0, 1)); // Output: 1
console.log(getSum(2, 2)); // Output: 2
