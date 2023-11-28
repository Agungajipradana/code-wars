/*
Seorang pahlawan sedang dalam perjalanan ke kastil untuk menyelesaikan misinya. Namun, dia diberitahu bahwa kastil tersebut dikelilingi oleh beberapa naga yang kuat! setiap naga membutuhkan 2 peluru untuk dikalahkan, pahlawan kita tidak tahu berapa banyak peluru yang harus dia bawa.. Dengan asumsi dia akan mengambil sejumlah peluru tertentu dan bergerak maju untuk melawan naga lain dalam jumlah tertentu, akankah dia bertahan?

Kembalikan nilai benar jika ya, salah jika sebaliknya 
*/

function hero(bullets, dragons) {
  return bullets >= dragons * 2;
}

console.log(hero(10, 5)); // Output: true
console.log(hero(7, 4)); // Output: false
console.log(hero(100, 40)); // Output: true
console.log(hero(1500, 751)); // Output: false
