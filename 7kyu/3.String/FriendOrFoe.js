/*
Buatlah program yang memfilter daftar string dan mengembalikan daftar yang hanya berisi nama teman Anda.

Jika sebuah nama memiliki tepat 4 huruf di dalamnya, yakinlah itu pasti teman Anda! Kalau tidak, bisa dipastikan dia tidak...

Contoh: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
*/

function friend(friends) {
  let result = [];

  for (let i = 0; i < friends.length; i++) {
    if (friends[i].length === 4) {
      result.push(friends[i]);
    }
  }
  return result;
}

console.log(friend(["Ryan", "Kieran", "Jason", "Yous"])); // Output: ["Ryan", "Yous"]
console.log(friend(["Ryan", "Kieran", "Mark"])); // Output:  ["Ryan", "Mark"]

// Menggunakan Array Method filter()

function frd(frnds) {
  return frnds.filter((n) => n.length === 4);
}

console.log(frd(["Ryan", "Kieran", "Jason", "Yous"])); // Output: ["Ryan", "Yous"]
console.log(frd(["Ryan", "Kieran", "Mark"])); // Output:  ["Ryan", "Mark"]
