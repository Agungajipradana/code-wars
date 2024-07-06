/*
Selesaikan fungsi yang menggunakan bilangan bulat non-negatif n sebagai masukan, dan mengembalikan daftar semua pangkat 2 dengan eksponen mulai dari 0 hingga n (inklusif).

Examples
n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]
*/

function powersOfTwo(n) {
  // Inisialisasi array untuk menyimpan hasil perhitungan
  let arr = [];

  // Lakukan iterasi dari 0 hingga n (inklusif)
  for (let i = 0; i <= n; i++) {
    // Hitung pangkat 2^i dan tambahkan ke array
    // Gunakan Math.pow() untuk menghitung pangkat
    arr.push(Math.pow(2, i));
  }

  // Kembalikan daftar pangkat 2
  return arr;
}

// Menampilkan hasil perhitungan untuk n = 2
console.log(powersOfTwo(0)); // Output: [1]
console.log(powersOfTwo(1)); // Output: [1, 2]
console.log(powersOfTwo(2)); // Output: [1, 2, 4]
console.log(powersOfTwo(4)); // Output: [1, 2, 4, 8, 16]
