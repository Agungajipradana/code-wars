/*
Your task is to find the nearest square number, nearest_sq(n) or nearestSq(n), of a positive integer n.

For example, if n = 111, then nearest\_sq(n) (nearestSq(n)) equals 121, since 111 is closer to 121, the square of 11, than 100, the square of 10.

If the n is already the perfect square (e.g. n = 144, n = 81, etc.), you need to just return n.
*/

function nearestSq(n) {
  // Jika n <= 1, maka n sudah merupakan bilangan kuadrat terdekat (kasus dasar).
  if (n <= 1) {
    return n;
  }

  // Hitung akar kuadrat dari n.
  const sqrtN = Math.sqrt(n);

  // Dapatkan bagian bulat (integer) dari akar kuadrat (floor).
  const floor = Math.floor(sqrtN);

  // Hitung selisih antara n dan kuadrat dari floor dan floor + 1.
  const diffFloor = n - floor * floor;
  const diffCeil = (floor + 1) * (floor + 1) - n;

  // Kembalikan bilangan kuadrat terdekat berdasarkan selisih yang lebih kecil.
  return diffFloor <= diffCeil ? floor * floor : (floor + 1) * (floor + 1);
}

// Contoh penggunaan
console.log(nearestSq(111)); // Output: 121
console.log(nearestSq(144)); // Output: 144 (already a perfect square)

/* ----------------------------------------------- Cara yang lebih sederhana ----------------------------------------------- */

function nearestSqn(n) {
  // Hitung akar kuadrat n, bulatkan ke bilangan terdekat (pembulatan terdekat).
  const roundedSqrt = Math.round(Math.sqrt(n));

  // Kuadratkan roundedSqrt untuk mendapatkan bilangan kuadrat terdekat.
  return Math.pow(roundedSqrt, 2);
}

console.log(nearestSqn(111)); // Output: 121
console.log(nearestSqn(144)); // Output: 144 (already a perfect square)
