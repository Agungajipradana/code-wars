function betterThanAverage(classPoints, yourPoints) {
  // calculate sum of class points
  let sum = classPoints.reduce((acc, curr) => acc + curr, 0);

  // add your score to the sum
  sum += yourPoints;

  // calculate average score
  let avg = sum / (classPoints.length + 1);

  // compare your score to the average
  return yourPoints > avg;
}

let classPoints = [80, 90, 70, 85, 75];
let yourPoints = 95;

let isBetter = betterThanAverage(classPoints, yourPoints);
console.log(isBetter); // true

// Cara yang lebih simple

function betterThanAverage(classPoints, yourPoints) {
  return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length;
}
