/*
"Titik refleksi" atau "simetri titik" adalah konsep dasar dalam geometri di mana suatu titik tertentu, P, pada posisi tertentu relatif terhadap titik tengah, Q memiliki titik yang bersesuaian, P1, yang jaraknya sama dari Q tetapi dalam arah sebaliknya.

Tugas

Diberikan dua titik P dan Q, keluaran titik simetris dari titik P terhadap Q. Setiap argumen adalah larik dua elemen bilangan bulat yang mewakili koordinat titik X dan Y. Output harus dalam format yang sama, memberikan koordinat X dan Y dari titik P1. Anda tidak perlu memvalidasi masukan.
*/

function symmetricPoint(p, q) {
  // Menghitung titik simetri P1 terhadap Q
  let p1_x = 2 * q[0] - p[0]; // Koordinat x dari P1
  let p1_y = 2 * q[1] - p[1]; // Koordinat y dari P1

  // Mengembalikan hasil sebagai array
  return [p1_x, p1_y];
}

console.log(symmetricPoint([0, 0], [1, 1])); // [2, 2]
console.log(symmetricPoint([2, 6], [-2, -6])); // [-6, -18]
console.log(symmetricPoint([10, -10], [-10, 10])); // [-30, 30]
console.log(symmetricPoint([1, -35], [-12, 1])); // [-25, 37]
console.log(symmetricPoint([1000, 15], [-7, -214])); // [-1014, -443]
console.log(symmetricPoint([0, 0], [0, 0])); // [0, 0]
