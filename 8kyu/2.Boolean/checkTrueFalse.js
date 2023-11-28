function check(a, x) {
  return a.includes(x);
}

console.log(check([1, 2, 3], 2)); // Output: true
console.log(check(["apple", "banana", "orange"], "pear")); // Output: false
