/*
Tulis fungsi untuk memisahkan string dan mengubahnya menjadi array kata.

Examples (Input ==> Output):
"Robin Singh" ==> ["Robin", "Singh"]

"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
*/

function stringToArray(string) {
  let newStr = "";
  let result = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== " ") {
      newStr += string[i];
    } else {
      result.push(newStr);
      newStr = "";
    }
  }
  result.push(newStr);
  return result;
}

console.log(stringToArray("Robin Singh"));
console.log(stringToArray("I love arrays they are my favorite"));

// Menggunakan method split()
function stringToArrays(string) {
  return string.split(" ");
}

console.log(stringToArrays("Robin Singh"));
console.log(stringToArrays("I love arrays they are my favorite"));
