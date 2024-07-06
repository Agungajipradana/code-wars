/*
Sederhana sekali, diberi bilangan (bilangan bulat / desimal / keduanya tergantung bahasanya), cari kebalikannya (invers aditif).

Examples:
1: -1
14: -14
-34: 34
*/

const opposite = (number) => {
  return -number; // Hitung kebalikan dari number
};

// Menampilkan hasil perhitungan untuk beberapa contoh bilangan
console.log(opposite(1)); // Output: -1
console.log(opposite(-5)); // Output: 5
console.log(opposite(14)); // Output: -14
console.log(opposite(-34)); // Output: 34
console.log(opposite(-12525220.3325)); // Output: 12525220.3325
console.log(opposite(0)); // Output: 0
console.log(opposite("")); // Output: ""
