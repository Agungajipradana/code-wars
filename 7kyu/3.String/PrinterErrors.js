/*
Di pabrik, printer mencetak label untuk kotak. Untuk satu jenis kotak, printer harus menggunakan warna yang demi kesederhanaan diberi nama dengan huruf dari a sampai m.

Warna yang digunakan oleh printer dicatat dalam string kontrol. Misalnya string kontrol yang "baik" adalah aaabbbbhaijjjm yang berarti printer menggunakan tiga kali warna a, empat kali warna b, satu kali warna h, lalu satu kali warna a...

Terkadang ada masalah: kurangnya warna, kerusakan teknis, dan string kontrol yang "buruk" dihasilkan, misalnya. aaaxbbbbyyhwawiwjjjwwm dengan huruf bukan dari a sampai m.

Anda harus menulis fungsi printer_error yang diberi string akan mengembalikan tingkat kesalahan printer sebagai string yang mewakili rasional yang pembilangnya adalah jumlah kesalahan dan penyebutnya adalah panjang string kontrol. Jangan mereduksi pecahan ini menjadi ekspresi yang lebih sederhana.

String tersebut memiliki panjang lebih besar atau sama dengan satu dan hanya berisi huruf dari ato z.

Examples:
s="aaabbbbhaijjjm"
printer_error(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
printer_error(s) => "8/22"
*/

function printerError(s) {
  const totalChars = s.length;
  const errorChars = s.split("").filter((char) => char > "m").length;
  return `${errorChars}/${totalChars}`;
}

console.log(printerError("aaabbbbhaijjjm")); // Output: "0/14"
console.log(printerError("aaaxbbbbyyhwawiwjjjwwm")); // Output: "8/22"
