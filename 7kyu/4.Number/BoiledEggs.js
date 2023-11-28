/*
Rules
-   you can put at most 8 eggs into the pot at once
-   it takes 5 minutes to boil an egg
-   we assume, that the water is boiling all the time (no time to heat up)
-   for simplicity we also don't consider the time it takes to put eggs into the pot or get them out of it 
*/

/*
Example (Input --> Output)
0 --> 0
5 --> 5
10 --> 10
*/

// menggunakan build in function JavaScript

function cookingTime(eggs) {
  const eggsPerBatch = 8; // Jumlah telur maksimum per batch
  const timePerBatch = 5; // Waktu untuk merebus satu batch telur dalam menit

  // Menghitung jumlah batch yang diperlukan
  // Menggunakan build in function "Math.ceil()" untuk membulatkan angka keatas
  const batches = Math.ceil(eggs / eggsPerBatch);

  // Menghitung total waktu memasak
  const totalTime = batches * timePerBatch;

  return totalTime;
}

console.log(cookingTime(0)); // Output: 0
console.log(cookingTime(5)); // Output: 5
console.log(cookingTime(10)); // Output: 10

// Menggunakan perulangan for dengan arrow function

const cookingTimes = (eggs) => {
  let min = 0; // Inisialisasi variabel min untuk menyimpan waktu memasak dalam menit

  // Perulangan for untuk menghitung waktu memasak berdasarkan jumlah telur (eggs)
  for (let i = 0; i < eggs; i += 8) {
    min += 5; // Setiap batch 8 telur membutuhkan waktu 5 menit untuk dimasak
  }

  return min; // Mengembalikan total waktu memasak
};

console.log(cookingTimes(0)); // Output: 0
console.log(cookingTimes(5)); // Output: 5
console.log(cookingTimes(10)); // Output: 10
