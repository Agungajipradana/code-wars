/*
Tulis fungsi yang menghilangkan spasi dari string, lalu kembalikan string yang dihasilkan.

Examples:

Input -> Output
"8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
"8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
"8aaaaa dddd r     " -> "8aaaaaddddr"
*/

// Fungsi noSpace menerima string 'x' yang berisi karakter dan spasi
function noSpace(x) {
  // Menggunakan split untuk memisahkan string 'x' menjadi array berdasarkan spasi
  // Kemudian menggunakan join untuk menggabungkan array menjadi string tanpa spasi
  return x.split(" ").join("");
}

// Contoh penggunaan dan hasil yang diharapkan
console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B")); // "8j8mBliB8gimjB8B8jlB"
console.log(noSpace("8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd")); // "88Bifk8hB8BB8BBBB888chl8BhBfd"
console.log(noSpace("8aaaaa dddd r     ")); // "8aaaaaddddr"
