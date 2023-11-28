// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
function simpleMultiplication(number) {
  if (number % 2 === 0) {
    return number * 8;
  } else {
    return number * 9;
  }
}

console.log(simpleMultiplication(2)); // Output: 16
console.log(simpleMultiplication(1)); // Output: 9
console.log(simpleMultiplication(8)); // Output: 64
console.log(simpleMultiplication(4)); // Output: 32
console.log(simpleMultiplication(5)); // Output: 45

// Jika menggunakan ternary operation
function simpleMultiplications(n) {
  return n * (n % 2 ? 9 : 8);
}

console.log(simpleMultiplications(2)); // Output: 16
console.log(simpleMultiplications(1)); // Output: 9
console.log(simpleMultiplications(8)); // Output: 64
console.log(simpleMultiplications(4)); // Output: 32
console.log(simpleMultiplications(5)); // Output: 45
