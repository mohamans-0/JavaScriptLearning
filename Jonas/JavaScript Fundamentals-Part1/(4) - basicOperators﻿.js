const country = "Jordan";
const continent = "Asia";
let population = 8;

const isIsland = false;
//isIsland = true; // error , variable const is immutable
let language;

language = "arabic";

let populationFinland = 6;
let populationAverage = 33;

population = population / 2;
population++;

console.log(population);

console.log(population > populationFinland);
console.log(population > populationAverage);

("Portugal is in Europe, and its 11 million people speak portuguese");

console.log(
  country +
    " is in " +
    continent +
    " , and its " +
    population +
    " million people speak " +
    language
);
