/*
Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
*/

const boolToWord = (bool) => {
  if (bool === true) {
    return "Yes";
  } else if (bool === false) {
    return "No";
  } else {
    return "error";
  }
};

console.log(boolToWord(true)); // Output : Yes
console.log(boolToWord(false)); // Output : No

// Cara lebih singkat menggunakan "Ternary Operation"
const boolToString = (bool) => {
  return bool ? "Yes" : "No";
};

console.log(boolToString(true)); // Output : Yes
console.log(boolToString(false)); // Output : No
