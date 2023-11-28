/*
Dalam kata ini Anda akan membuat fungsi yang mengambil daftar bilangan bulat dan string non-negatif dan mengembalikan daftar baru dengan string yang disaring.

Example:
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
*/

function filter_list(list) {
  const newArr = [];

  for (let i = 0; i < list.length; i++) {
    if (typeof list[i] === "number") {
      newArr.push(list[i]);
    }
  }
  return newArr;
}

console.log(filter_list([1, 2, "a", "b"])); // Output: [ 1, 2 ]
console.log(filter_list([1, "a", "b", 0, 15])); // Output: [ 1, 0, 15 ]
console.log(filter_list([1, 2, "aasf", "1", "123", 123])); // Output: [ 1, 2, 123 ]

// Menggunakan Array Method filter()

function filterList(list) {
  return list.filter((e) => typeof e == "number");
}

console.log(filterList([1, 2, "a", "b"])); // Output: [ 1, 2 ]
console.log(filterList([1, "a", "b", 0, 15])); // Output: [ 1, 0, 15 ]
console.log(filterList([1, 2, "aasf", "1", "123", 123])); // Output: [ 1, 2, 123 ]
