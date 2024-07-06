/*
Pangram adalah kalimat yang berisi setiap huruf alfabet setidaknya satu kali. Misalnya kalimat “The quick brown fox jumps over the lazy dog” merupakan pangram, karena menggunakan huruf A-Z minimal satu kali (huruf besar tidak relevan).

Diberikan sebuah string, deteksi apakah itu pangram atau bukan. Kembalikan Benar jika ya, Salah jika tidak. Abaikan angka dan tanda baca.

*/

function isPangram(string) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";

  // Ubah string input menjadi huruf kecil dan hapus karakter non-huruf
  string = string.toLowerCase().replace(/[^a-z]/g, "");

  // Set untuk menyimpan huruf yang sudah ada
  let uniqueLetters = new Set();

  // Loop melalui setiap karakter dalam string
  for (let i = 0; i < string.length; i++) {
    // Tambahkan huruf ke dalam set
    uniqueLetters.add(string[i]);
  }

  // Bandingkan jumlah huruf yang ada dengan jumlah total huruf dalam alfabet
  return uniqueLetters.size === alphabet.length;
}

// Contoh penggunaan fungsi dengan string tertentu
console.log(isPangram("The quick brown fox jumps over the lazy dog.")); // Output: true
console.log(isPangram("This is not a pangram.")); // Output: false
