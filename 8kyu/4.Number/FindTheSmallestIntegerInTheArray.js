/*
Diberikan array bilangan bulat, solusi Anda harus menemukan bilangan bulat terkecil.

Misalnya:

Mengingat [34, 15, 88, 2] solusi Anda akan menghasilkan 2
Mengingat [34, -345, -1, 100] solusi Anda akan menghasilkan -345
Anda dapat berasumsi, untuk tujuan kata ini, bahwa array yang disediakan tidak akan kosong.
*/

// Fungsi findSmallestInt menerima array 'arr' yang berisi bilangan bulat
function findSmallestInt(arr) {
  // Menggunakan Math.min dengan spread operator untuk menemukan bilangan bulat terkecil
  return Math.min(...arr);
}

// Contoh penggunaan dan hasil yang diharapkan
console.log(findSmallestInt([78, 56, 232, 12, 8])); // 8
console.log(findSmallestInt([34, 15, 88, 2])); // 2
console.log(findSmallestInt([34, -345, -1, 100])); // -345
