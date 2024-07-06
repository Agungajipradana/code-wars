/*
Teman sekelas Anda meminta Anda menyalin beberapa dokumen untuk mereka. Anda tahu bahwa ada 'n' teman sekelas dan dokumennya memiliki halaman 'm'.

Tugas Anda adalah menghitung berapa banyak halaman kosong yang Anda butuhkan.
If n < 0 or m < 0 return 0.

Example:
n= 5, m=5: 25
n=-5, m=5:  0
*/

function paperwork(n, m) {
  if (m < 0 || n < 0) {
    return 0;
  }
  return m * n;
}

console.log(paperwork(5, 5)); // Output: 25
console.log(paperwork(5, -5)); // Output: 0
console.log(paperwork(-5, -5)); // Output: 0
console.log(paperwork(5, 0)); // Output: 0

// Menggunakan ternary operator
function paperworks(n, m) {
  return n < 0 || m < 0 ? 0 : n * m;
}

console.log(paperworks(5, 5)); // Output: 25
console.log(paperworks(5, -5)); // Output: 0
console.log(paperworks(-5, -5)); // Output: 0
console.log(paperworks(5, 0)); // Output: 0
