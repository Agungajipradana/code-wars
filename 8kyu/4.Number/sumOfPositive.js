function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}

console.log(positiveSum([1, 2, 3, 4, 5])); // Output: 15
console.log(positiveSum([1, -2, 3, 4, 5])); // Output: 13
console.log(positiveSum([])); // Output: 0
console.log(positiveSum([-1, -2, -3, -4, -5])); // Output: 0
console.log(positiveSum([-1, 2, 3, 4, -5])); // Output: 9
