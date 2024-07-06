/*
Perangkat lunak pengenalan karakter banyak digunakan untuk mendigitalkan teks cetak. Dengan demikian teks dapat diedit, dicari dan disimpan di komputer.

Ketika dokumen (terutama dokumen lama yang ditulis dengan mesin tik), didigitalkan, perangkat lunak pengenalan karakter sering kali melakukan kesalahan.

Tugas Anda adalah memperbaiki kesalahan dalam teks digital. Anda hanya perlu menangani kesalahan berikut:

- S disalahartikan sebagai 5
- O disalahartikan sebagai 0
- I disalahartikan sebagai 1

Kasus uji berisi angka hanya karena kesalahan.
*/

function correct(string) {
  // Mengganti 'S' dengan '5'
  string = string.split("5").join("S");

  // Mengganti 'O' dengan '0'
  string = string.split("0").join("O");

  // Mengganti 'I' dengan '1'
  string = string.split("1").join("I");

  return string;
}

console.log(correct("L0ND0N")); // Output: "LONDON"
console.log(correct("DUBL1N")); // Output: "DUBLIN"
console.log(correct("51NGAP0RE")); // Output: "SINGAPORE"
