/*
Buat fungsi yang memberikan salam yang dipersonalisasi. Fungsi ini mengambil dua parameter: nama dan pemilik.

Gunakan kondisional untuk mengembalikan pesan yang tepat:

case	                return
name equals owner	    'Hello boss'
otherwise	            'Hello guest'
*/

function greet(name, owner) {
  if (name === owner) {
    return "Hello boss";
  } else {
    return "Hello guest";
  }
}

console.log(greet("John", "John")); // Output: Hello boss
console.log(greet("Alice", "John")); // Output: Hello guest

// Menggunakan ternary operator

function greets(name, owner) {
  return name === owner ? "Hello boss" : "Hello guest";
}

console.log(greets("John", "John")); // Output: Hello boss
console.log(greets("Alice", "John")); // Output: Hello guest
