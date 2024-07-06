/*
Nathan suka bersepeda.

Karena Nathan tahu pentingnya tetap terhidrasi, ia minum 0,5 liter air setiap jam bersepeda.

Anda diberi waktu dalam jam dan Anda harus mengembalikan jumlah liter yang akan diminum Nathan, dibulatkan ke nilai terkecil.

For example:

time = 3 ----> litres = 1

time = 6.7---> litres = 3

time = 11.8--> litres = 5
*/

// Fungsi litres menerima parameter 'time' yang merupakan waktu dalam jam
function litres(time) {
  // Menghitung jumlah liter yang diminum Nathan, dengan membulatkan ke bawah
  return Math.floor(time * 0.5);
}

// Contoh penggunaan dan hasil yang diharapkan
console.log(litres(2)); // 1
console.log(litres(12.3)); // 6
console.log(litres(6.7)); // 3
console.log(litres(11.8)); // 5
