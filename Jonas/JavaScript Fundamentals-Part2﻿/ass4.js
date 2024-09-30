function percentageOfWorld1(population) {
  return `${(population / 7900) * 100}% `;
}

function describePopulation(country, population) {
  const per = percentageOfWorld1(population);
  return `${country} has ${population} million people, which is about ${per} of the world`;
}

console.log(describePopulation("China", 1441));
