/*
MEMBANTU! Jason tidak dapat menemukan buku pelajarannya! Ini adalah dua hari sebelum tanggal ujian, dan semua buku pelajaran Jason rusak! Bantu dia mengurutkan daftar (ArrayList di java) yang berisi buku teks berdasarkan mata pelajaran, sehingga dia dapat belajar sebelum ujian.

Penyortiran TIDAK boleh peka huruf besar-kecil
*/

// Fungsi sorter menerima array 'textbooks' yang berisi daftar buku teks
function sorter(textbooks) {
  // Membuat salinan array 'textbooks' untuk menghindari mutasi array asli
  return [...textbooks].sort((a, b) => {
    // Ubah kedua elemen ke huruf kecil untuk perbandingan yang tidak peka huruf besar-kecil
    a = a.toLowerCase();
    b = b.toLowerCase();

    // Menggunakan perbandingan leksikografis untuk mengurutkan elemen
    return (a > b) - (a < b);
  });
}
// Contoh penggunaan dan hasil yang diharapkan
console.log(sorter(["Algebra", "History", "Geometry", "English"])); // ["Algebra", "English", "Geometry", "History"]
console.log(sorter(["Algebra", "history", "Geometry", "english"])); // ["Algebra", "english", "Geometry", "history"]
console.log(sorter(["Alg#bra", "$istory", "Geom^try", "**english"])); // ["$istory", "**english", "Alg#bra", "Geom^try"]
