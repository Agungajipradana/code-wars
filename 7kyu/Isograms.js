/*
Isogram adalah kata yang tidak memiliki huruf berulang, berurutan atau tidak berurutan. Menerapkan fungsi yang menentukan apakah string yang hanya berisi huruf merupakan isogram. Asumsikan string kosong adalah isogram. Abaikan huruf besar-kecil.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false
*/

// Mennggunakan for loop
function isIsogram(str) {
  const lowerStr = str.toLowerCase(); // Mengubah semua huruf kecil
  for (let i = 0; i < lowerStr.length; i++) {
    for (let j = i + 1; j < lowerStr.length; j++) {
      if (lowerStr[i] === lowerStr[j]) {
        return false; // Jika ada huruf yang sama, maka bukan isogram
      }
    }
  }
  return true; // Jika tidak ada huruf yang sama, maka isogram
}

console.log(isIsogram("Dermatoglyphics")); // Output: true
console.log(isIsogram("moose")); // Output: false
console.log(isIsogram("aba")); // Output: false

// Menggunakan struktur data Set()
function isogram(str) {
  return new Set(str.toUpperCase()).size == str.length;
}

console.log(isogram("Dermatoglyphics")); // Output: true
console.log(isogram("moose")); // Output: false
console.log(isogram("aba")); // Output: false

// Menggunakan Regular Expression
function Isogram(str) {
  return !str.match(/([a-z]).*\1/i);
}

console.log(Isogram("Dermatoglyphics")); // Output: true
console.log(Isogram("moose")); // Output: false
console.log(Isogram("aba")); // Output: false
