/*
Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples(Operator, value1, value2) --> output

('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7
*/

const basicOp = (operation, value1, value2) => {
  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
    default:
      return "Operation must be one of + - * /";
  }
};

console.log(basicOp("+", 4, 7)); // Menampilkan hasil dari 4 + 7
console.log(basicOp("-", 15, 18)); // Menampilkan hasil dari 15 - 18
console.log(basicOp("*", 5, 5)); // Menampilkan hasil dari 5 * 5
console.log(basicOp("/", 49, 7)); // Menampilkan hasil dari 49 / 7
