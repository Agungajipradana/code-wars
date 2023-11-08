const isSquare = function (n) {
  if (n < 0) {
    return false; // Bilangan negatif tidak dapat menjadi bilangan kuadrat
  }

  // Menghitung akar kuadrat dari n tanpa menggunakan Math.sqrt
  let sqrt = 1;
  while (sqrt * sqrt < n) {
    sqrt++;
  }

  // Jika hasil akar kuadrat adalah bilangan bulat dan kuadratnya adalah n, maka n adalah bilangan kuadrat
  return sqrt * sqrt === n;
};

console.log(isSquare(-1)); // false
console.log(isSquare(0)); // true
console.log(isSquare(3)); // false
console.log(isSquare(4)); // true
console.log(isSquare(25)); // true
console.log(isSquare(26)); // false

// Menghitung bilangan kuadrat menggunakan built in function Math.sqrt()
const isSquares = function (n) {
  if (n < 0) {
    return false; // Bilangan negatif tidak dapat menjadi bilangan kuadrat
  }

  // Menghitung akar kuadrat dari n
  const sqrt = Math.sqrt(n);

  // Jika hasil akar kuadrat adalah bilangan bulat, maka n adalah bilangan kuadrat
  return Number.isInteger(sqrt);
};

console.log(isSquares(-1)); // false
console.log(isSquares(0)); // true
console.log(isSquares(3)); // false
console.log(isSquares(4)); // true
console.log(isSquares(25)); // true
console.log(isSquares(26)); // false
