/*
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
*/

function grow(x) {
  let res = 1;
  for (let i = 0; i < x.length; i++) {
    res *= x[i];
  }
  return res;
}

console.log(grow([1, 2, 3])); // Output: 6
console.log(grow([4, 1, 1, 1, 4])); // Output: 16
console.log(grow([2, 2, 2, 2, 2, 2])); // Output: 64

// Menggunakan built in function reduce()
const grows = (x) => x.reduce((a, b) => a * b);
console.log(grows([1, 2, 3])); // Output: 6
console.log(grows([4, 1, 1, 1, 4])); // Output: 16
console.log(grows([2, 2, 2, 2, 2, 2])); // Output: 64
