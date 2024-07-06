/*
Tulis fungsi yang mengambil array angka dan mengembalikan jumlah angka tersebut. Angkanya bisa negatif atau bukan bilangan bulat. Jika array tidak berisi angka apa pun maka Anda harus mengembalikan 0.

Examples
Input: [1, 5.2, 4, 0, -1]
Output: 9.2

Input: []
Output: 0

Input: [-2.398]
Output: -2.398

Asumsi
- Anda dapat berasumsi bahwa Anda hanya diberi angka.
- Anda tidak dapat mengasumsikan ukuran array.
- Anda dapat berasumsi bahwa Anda mendapatkan array dan jika array kosong, kembalikan 0.

Apa yang Kami Uji
Kami sedang menguji loop dasar dan operasi matematika. Ini untuk pemula yang baru mempelajari loop dan operasi matematika.
Pengguna tingkat lanjut mungkin menganggap ini sangat mudah dan dapat dengan mudah menulisnya dalam satu baris.
*/

// Fungsi untuk menjumlahkan angka dalam array
function sum(numbers) {
  // Inisialisasi variabel total dengan nilai 0
  let total = 0;

  // Looping melalui setiap elemen dalam array numbers
  for (let i = 0; i < numbers.length; i++) {
    // Menambahkan setiap elemen ke variabel total
    total += numbers[i];
  }

  // Mengembalikan nilai total
  return total;
}

// Contoh penggunaan dan hasil yang diharapkan
console.log(sum([])); // 0
console.log(sum([1, 5.2, 4, 0, -1])); // 9.2
console.log(sum([-2.398])); // -2.398
