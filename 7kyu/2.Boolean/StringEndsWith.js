/*
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:
solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/

function solution(str, ending) {
  // Memeriksa panjang string `ending` agar dapat digunakan untuk memeriksa substring di bagian akhir `str`
  if (ending.length > str.length) {
    return false;
  }

  // Membandingkan substring di bagian akhir `str` dengan `ending`
  for (let i = 0; i < ending.length; i++) {
    if (ending[i] !== str[str.length - ending.length + i]) {
      return false;
    }
  }

  return true;
}

console.log(solution("abc", "bc")); // true
console.log(solution("abc", "d")); // false

// menggunakan method endWith()
function solutions(str, ending) {
  return str.endsWith(ending);
}

console.log(solutions("abc", "bc")); // true
console.log(solutions("abc", "d")); // false
