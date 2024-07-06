/*
Tulis fungsi untuk mengubah nama menjadi inisial. Kata ini hanya membutuhkan dua kata dengan satu spasi di antaranya.

Outputnya harus berupa dua huruf kapital dengan titik yang memisahkannya.

Seharusnya terlihat seperti ini:

Sam Harris => S.H

patrick feeney => P.F
*/

// Fungsi abbrevName menerima string 'name' yang berisi dua kata
function abbrevName(name) {
  // Memisahkan nama berdasarkan spasi untuk mendapatkan dua kata
  const words = name.split(" ");

  // Mengambil huruf pertama dari setiap kata dan mengubahnya menjadi huruf besar
  const initials = words.map((word) => word[0].toUpperCase());

  // Menggabungkan inisial dengan titik sebagai pemisah
  return initials.join(".");
}

// Contoh penggunaan dan hasil yang diharapkan
console.log(abbrevName("Sam Harris")); // "S.H"
console.log(abbrevName("Patrick Feenan")); // "P.F"
console.log(abbrevName("patrick feeney")); // "P.F"
