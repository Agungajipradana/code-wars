// Menggunakan for loop
function reverseWord(str) {
  let reversedWords = [];
  let currentWord = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      reversedWords.push(reverseString(currentWord));
      currentWord = "";
    } else {
      currentWord += str[i];
    }
  }

  // Menambahkan kata terakhir setelah loop berakhir
  reversedWords.push(reverseString(currentWord));

  return reversedWords.join(" ");
}

function reverseString(word) {
  let reversed = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
  }
  return reversed;
}

console.log(reverseWord("The quick brown fox jumps over the lazy dog.")); // Output: 'ehT kciuq nworb xof spmuj revo eht yzal .god'
console.log(reverseWord("apple")); // Output: 'elppa'
console.log(reverseWord("a b c d")); // Output: 'a b c d'
console.log(reverseWord("double  spaced  words")); // Output: 'elbuod  decaps  sdrow'

// Menggunakan method javaScript
function reverseWords(str) {
  return str
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}

console.log(reverseWords("The quick brown fox jumps over the lazy dog.")); // Output: 'ehT kciuq nworb xof spmuj revo eht yzal .god'
console.log(reverseWords("apple")); // Output: 'elppa'
console.log(reverseWords("a b c d")); // Output: 'a b c d'
console.log(reverseWords("double  spaced  words")); // Output: 'elbuod  decaps  sdrow'
