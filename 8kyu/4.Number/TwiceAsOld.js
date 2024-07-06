/*
Your function takes two arguments:

1. current father's age (years)
2. current age of his son (years)

Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.
*/

function twiceAsOld(dadYearsOld, sonYearsOld) {
  // Menghitung selisih umur saat ayah dua kali lebih tua dari anaknya
  const ageDiff = Math.abs(dadYearsOld - 2 * sonYearsOld);
  return ageDiff;
}

console.log(twiceAsOld(36, 7));
console.log(twiceAsOld(55, 30));
