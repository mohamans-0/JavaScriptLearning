console.log("---------- function declaration ----------");
function percentageOfWorld1(population) {
  return `${(population / 7900) * 100}% `;
}

let perChina = percentageOfWorld1(1441);
let perJordan = percentageOfWorld1(10);
let perUSA = percentageOfWorld1(150);
console.log(perChina,perJordan,perUSA);


console.log("---------- function expression ----------");
const percentageOfWolrd2 = function (population) {
  return `${(population / 7900) * 100}% `;
};

console.log(percentageOfWolrd2(520) , percentageOfWolrd2(20) , percentageOfWolrd2(17));
