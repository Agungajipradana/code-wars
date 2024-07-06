/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/

function high(x) {
  // Membagi string menjadi array kata-kata
  const words = x.split(" ");

  let maxScore = 0;
  let highestWord = "";

  // Perulangan untuk setiap kata
  for (const word of words) {
    let score = 0;

    // Menghitung skor dari setiap huruf dalam kata
    for (let i = 0; i < word.length; i++) {
      score += word.charCodeAt(i) - 96; // Menambahkan skor huruf
    }

    // Memeriksa jika kata saat ini memiliki skor tertinggi
    if (score > maxScore) {
      maxScore = score;
      highestWord = word;
    }
  }

  return highestWord;
}

// Contoh penggunaan fungsi high
console.log(high("abad adalah abcd")); // Output: 'abad'
console.log(high("man i need a taxi up to ubud")); // Output: 'taxi'
