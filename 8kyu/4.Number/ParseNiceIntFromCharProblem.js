/*
Anda bertanya kepada seorang gadis kecil, "Berapa umurmu?" Dia selalu mengatakan, "x tahun", dimana x adalah angka acak antara 0 dan 9.

Tulis sebuah program yang mengembalikan usia gadis itu (0-9) sebagai bilangan bulat.

Asumsikan string input pengujian selalu berupa string yang valid. Misalnya, masukan tes mungkin "1 tahun" atau "5 tahun". Karakter pertama dalam string selalu berupa angka.
*/

function getAge(inputString) {
  // Loop through each character in the inputString
  for (let i = 0; i < inputString.length; i++) {
    // Check if the character is a number
    if (!isNaN(inputString[i])) {
      // If it's a number, parse the substring from the current index until the end
      // as an integer and return it
      return parseInt(inputString.substring(i));
    }
  }
}

console.log(getAge("4 years old")); // Output: 4
console.log(getAge("5 years  old")); // Output: 5

// Dapat disederhanakan lagi dengan method changing data type parseInt() dengan merubah string menjadi number
function getAges(inputString) {
  return parseInt(inputString);
}

console.log(getAges("4 years old")); // Output: 4
console.log(getAges("5 years old")); // Output: 5
