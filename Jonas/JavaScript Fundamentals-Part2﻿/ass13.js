function percentageOfWorld1(population) {
  return `${(population / 7900) * 100}% `;
}

const populations = [10, 1441, 332, 83];
const percentages3 = [];
let i = 0;
while (i < populations.length) {
  percentages3.push(percentageOfWorld1(populations[i]));
  i++;
}

console.log("---------- populations ----------");
console.log(populations);
console.log("---------- percentages3 ----------");
console.log(percentages3);
