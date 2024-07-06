/*
Tulis program yang menemukan penjumlahan setiap angka dari 1 hingga angka. Angka tersebut akan selalu berupa bilangan bulat positif yang lebih besar dari 0. Fungsi Anda hanya perlu mengembalikan hasilnya, apa yang ditunjukkan di antara tanda kurung pada contoh di bawah ini adalah bagaimana Anda mencapai hasil tersebut dan itu bukan bagian darinya, lihat contoh pengujiannya.

For example (Input -> Output):

2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
*/

// Fungsi summation menerima bilangan bulat 'num' sebagai parameter
const summation = (num) => {
  // Inisialisasi variabel 'sum' untuk menyimpan hasil penjumlahan
  let sum = 0;

  // Loop dari 1 hingga 'num' (inklusif)
  for (let i = 1; i <= num; i++) {
    // Tambahkan setiap angka ke variabel 'sum'
    sum += i;
  }

  // Kembalikan hasil penjumlahan
  return sum;
};

// Contoh penggunaan dan hasil yang diharapkan
console.log(summation(2)); // 3 (1 + 2)
console.log(summation(8)); // 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
console.log(summation(5)); // 15 (1 + 2 + 3 + 4 + 5)
