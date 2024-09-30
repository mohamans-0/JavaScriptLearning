function percentageOfWorld1(population) {
  return `${(population / 7900) * 100}% `;
}

const population = [1441, 10, 332, 78];

if (population.length === 4) {
  console.log(true);
} else {
  console.log(false);
}

const percentages = [];
for (let i = 0; i < 4; i++) {
  percentages.push(percentageOfWorld1(population[i]));
}

console.log(percentages);
