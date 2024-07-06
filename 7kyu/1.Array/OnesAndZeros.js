/*
Diberikan array satu dan nol, ubah nilai biner yang setara menjadi bilangan bulat.

Misalnya: [0, 0, 0, 1] diperlakukan sebagai 0001 yang merupakan representasi biner dari 1.

Contoh:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11

Namun, array dapat memiliki panjang yang bervariasi, tidak hanya terbatas pada 4 saja.

*/

const binaryArrayToNumber = (arr) => {
  let result = 0;

  // Iterasi dari digit terakhir ke digit pertama
  for (let i = arr.length - 1, exponent = 0; i >= 0; i--, exponent++) {
    // Menambahkan nilai biner ke hasil dengan mengalikannya dengan 2 pangkat posisi digit
    result += arr[i] * Math.pow(2, exponent);
  }

  return result;
};

// Mengujikan fungsi dengan beberapa contoh
console.log(binaryArrayToNumber([0, 0, 0, 1])); // Output: 1
console.log(binaryArrayToNumber([0, 0, 1, 0])); // Output: 2
console.log(binaryArrayToNumber([0, 1, 0, 1])); // Output: 5
console.log(binaryArrayToNumber([1, 0, 0, 1])); // Output: 9
console.log(binaryArrayToNumber([0, 1, 1, 0])); // Output: 6
console.log(binaryArrayToNumber([1, 1, 1, 1])); // Output: 15
console.log(binaryArrayToNumber([1, 0, 1, 1])); // Output: 11

// contoh menggunakan reduce()
const binaryArrToNumb = (arr) => {
  return arr.reduce((total, cur) => (total = total * 2 + cur), 0);
};

console.log(binaryArrToNumb([0, 0, 0, 1])); // Output: 1
console.log(binaryArrToNumb([0, 0, 1, 0])); // Output: 2
console.log(binaryArrToNumb([0, 1, 0, 1])); // Output: 5
console.log(binaryArrToNumb([1, 0, 0, 1])); // Output: 9
console.log(binaryArrToNumb([0, 1, 1, 0])); // Output: 6
console.log(binaryArrToNumb([1, 1, 1, 1])); // Output: 15
console.log(binaryArrToNumb([1, 0, 1, 1])); // Output: 11
