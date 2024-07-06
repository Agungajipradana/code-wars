/*
Bisakah kamu menemukan jarum di tumpukan jerami?

Tulis fungsi findNeedle() yang mengambil array penuh sampah tetapi berisi satu "jarum"

Setelah fungsi Anda menemukan jarum, ia akan mengembalikan pesan (sebagai string) yang mengatakan:

"menemukan jarum pada posisi" ditambah indeks menemukan jarum, jadi:

Contoh(Input --> Output)

["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 

Catatan: Dalam COBOL, itu harus mengembalikan
"menemukan jarum di posisi 6"
*/

const findNeedle = (haystack) => {
  // Iterasi melalui setiap elemen dalam array haystack
  for (let i = 0; i < haystack.length; i++) {
    // Jika elemen pada posisi i adalah "needle"
    if (haystack[i] === "needle") {
      // Kembalikan string yang menyatakan posisi jarum
      return `found the needle at position ${i}`;
    }
  }
  // Jika tidak ditemukan "needle", kembalikan pesan default
  return "needle not found";
};

// Contoh penggunaan dan hasil yang diharapkan
console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"])); // "found the needle at position 5"
console.log(findNeedle(["3", "123124234", undefined, "needle", "world", "hay", 2, "3", true, false])); // "found the needle at position 3"

// Cara lebih sederhana menggunakan indexof()
function findNeedles(haystack) {
  return "found the needle at position " + haystack.indexOf("needle");
}

console.log(findNeedles(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"])); // "found the needle at position 5"
console.log(findNeedles(["3", "123124234", undefined, "needle", "world", "hay", 2, "3", true, false])); // "found the needle at position 3"
