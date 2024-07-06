/*
Tulis fungsi yang menerima bilangan bulat n dan string s sebagai parameter, dan mengembalikan string s yang diulang tepat n kali.

Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"
*/

// Fungsi repeatStr menerima bilangan bulat 'n' dan string 's' sebagai parameter
function repeatStr(n, s) {
  // Menggunakan metode repeat untuk mengulang string 's' sebanyak 'n' kali
  return s.repeat(n);
}

// Contoh penggunaan dan hasil yang diharapkan
console.log(repeatStr(3, "*")); // "***"
console.log(repeatStr(6, "I")); // "IIIIII"
console.log(repeatStr(5, "Hello")); // "HelloHelloHelloHelloHello"
