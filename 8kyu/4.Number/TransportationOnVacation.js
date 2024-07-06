/*
Setelah bekerja keras di kantor, Anda memutuskan untuk beristirahat saat berlibur. Jadi, Anda akan memesan penerbangan untuk Anda dan pacar Anda dan mencoba meninggalkan semua kekacauan itu.

Anda akan membutuhkan mobil sewaan agar Anda bisa berkeliling selama liburan. Manajer persewaan mobil memberi Anda beberapa penawaran bagus.

Setiap hari Anda menyewa mobil berharga $40. Jika Anda menyewa mobil selama 7 hari atau lebih, Anda mendapat potongan $50 dari total. Alternatifnya, jika Anda menyewa mobil selama 3 hari atau lebih, Anda mendapat potongan $20 dari total Anda.

Tulis kode yang memberikan jumlah total untuk hari yang berbeda (d).
*/

function rentalCarCost(d) {
  let day = d * 40; // Biaya awal $40 per hari

  if (d >= 7) {
    // Diskon $50 jika menyewa 7 hari atau lebih
    return day - 50;
  } else if (d >= 3) {
    // Diskon $20 jika menyewa 3 hari atau lebih
    return day - 20;
  } else {
    return day; // Tidak ada diskon
  }
}

console.log(rentalCarCost(1));
console.log(rentalCarCost(2));
console.log(rentalCarCost(3));
console.log(rentalCarCost(4));
console.log(rentalCarCost(7));
console.log(rentalCarCost(8));
