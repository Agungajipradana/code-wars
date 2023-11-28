/*
Alex baru saja mendapat hula hoop baru, dia menyukainya tapi merasa putus asa karena adiknya lebih baik darinya

Tulis sebuah program di mana Alex dapat memasukkan (n) berapa kali lingkaran itu berputar dan itu akan mengembalikannya pesan yang membesarkan hati :)

Jika Alex mendapat 10 lingkaran atau lebih, kembalikan string "Bagus, sekarang lanjutkan ke trik".
Jika dia tidak mendapatkan 10 lingkaran, kembalikan string "Teruskan sampai kamu mendapatkannya".
*/

function hoopCount(n) {
  if (n >= 10) {
    return "Great, now move on to tricks";
  } else {
    return "Keep at it until you get it";
  }
}

console.log(hoopCount(11)); // Output: 'Great, now move on to tricks'
console.log(hoopCount(3)); // Output: 'Keep at it until you get it'

// Menggunakan ternary operator
function hoopCounts(n) {
  return n < 10 ? "Keep at it until you get it" : "Great, now move on to tricks";
}

console.log(hoopCounts(11)); // Output: 'Great, now move on to tricks'
console.log(hoopCounts(3)); // Output: 'Keep at it until you get it'
