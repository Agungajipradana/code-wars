// Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.

function booleanToString(b) {
  if (b === true) {
    return "true";
  } else if (b === false) {
    return "false";
  }
}

// Menggunakan ternary operation
function booleanToString(b) {
  return b ? "true" : "false";
}

//   Menggunakan fungsi dari java script toString()
function booleanToString(b) {
  return b.toString();
}

console.log(booleanToString(true));
console.log(booleanToString(false));
