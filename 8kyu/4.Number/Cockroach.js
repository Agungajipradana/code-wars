/*
Kecoa adalah salah satu serangga tercepat. Tulis fungsi yang mengambil kecepatannya dalam km per jam dan mengembalikannya dalam 
cm per detik, dibulatkan ke bawah ke bilangan bulat (= floored).

Misalnya:
1.08 --> 30

Catatan! Inputnya adalah bilangan Real (tipe sebenarnya bergantung pada bahasa) dan >= 0. Hasilnya harus berupa Integer.
*/

function cockroachSpeed(s) {
  const SpeedInCmPerSecond = s * 27.7778;
  return Math.floor(SpeedInCmPerSecond);
}

console.log(cockroachSpeed(1.08)); // Output: 30
console.log(cockroachSpeed(1.09)); // Output: 30
console.log(cockroachSpeed(0)); // Output: 0
