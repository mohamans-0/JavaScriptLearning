
function percentageOfWorld1(population) {
  return `${(population / 7900) * 100}% `;
}

const population = [1441, 10, 332, 78];

const percentages2 = [];

for (let i = 0; i < population.length; i++) {
  percentages2.push(percentageOfWorld1(population[i]));
}

console.log(percentages2);
