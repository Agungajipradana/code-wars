/*
Dalam tugas sederhana ini Anda diberi nomor dan harus menjadikannya negatif. Tapi mungkinkah angkanya sudah negatif?

Examples:
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12

Notes:
 - Angkanya mungkin sudah negatif, sehingga tidak diperlukan perubahan.
 - Nol (0) tidak dicentang untuk tanda tertentu. Angka nol negatif tidak masuk akal secara matematis.
*/

const makeNegative = (num) => {
  // Jika num sudah negatif atau nol, kembalikan nilainya tanpa perubahan
  if (num <= 0) {
    return num;
  } else {
    // Jika num positif, kalikan dengan -1 untuk menjadikannya negatif
    return -num;
  }
};

// Contoh penggunaan dan hasil yang diharapkan
console.log(makeNegative(1)); // -1
console.log(makeNegative(-5)); // -5
console.log(makeNegative(0)); // 0
console.log(makeNegative(0.12)); // -0.12

// Contoh menggunakan Math Object Math.abs()
function makeNegatif(num) {
  return -Math.abs(num);
}

console.log(makeNegatif(1)); // -1
console.log(makeNegatif(-5)); // -5
console.log(makeNegatif(0)); // 0
console.log(makeNegatif(0.12)); // -0.12
