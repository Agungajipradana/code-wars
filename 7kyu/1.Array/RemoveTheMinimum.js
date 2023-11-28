/*
Tugas
Diberikan array bilangan bulat, hapus nilai terkecil. Jangan mengubah array/daftar asli. Jika ada beberapa elemen dengan nilai yang sama, hapus elemen dengan indeks lebih rendah. Jika Anda mendapatkan array/daftar kosong, kembalikan array/daftar kosong.

Jangan mengubah urutan elemen yang tersisa.

Examples
* Input: [1,2,3,4,5], output = [2,3,4,5]
* Input: [5,3,2,1,4], output = [5,3,2,4]
* Input: [2,2,1,2,1], output = [2,2,2,1]
*/

function removeSmallest(numbers) {
  if (numbers.length === 0) {
    return [];
  }

  const minIndex = numbers.indexOf(Math.min(...numbers)); // Cari indeks elemen terkecil
  return numbers.slice(0, minIndex).concat(numbers.slice(minIndex + 1)); // Gabungkan bagian sebelum dan setelah elemen terkecil
}

console.log(removeSmallest([1, 2, 3, 4, 5])); // Output: [ 2, 3, 4, 5 ]
console.log(removeSmallest([5, 3, 2, 1, 4])); // Output: [ 5, 3, 2, 4 ]
console.log(removeSmallest([2, 2, 1, 2, 1])); // Output: [ 2, 2, 2, 1 ]
console.log(removeSmallest([])); // Output: []
