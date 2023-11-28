/*
Mengembalikan jumlah (hitungan) vokal dalam string yang diberikan.

Kita akan menganggap a, e, i, o, u sebagai vokal untuk Kata ini (tetapi bukan y).

String masukan hanya akan terdiri dari huruf kecil dan/atau spasi.
*/

function getCount(str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
      count++;
    }
  }
  return count;
}

console.log(getCount("abracadabra")); // Output: 5

// Menggunakan Metode split() dan filter()

function getCounts(str) {
  return str.split("").filter((c) => "aeiouAEIOU".includes(c)).length;
}

console.log(getCounts("abracadabra")); // Output: 5
