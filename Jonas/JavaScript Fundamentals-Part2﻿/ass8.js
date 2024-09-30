const myCountry = {
  country: "Jordan",
  capital: "Amman",
  language: "Arabic",
  population: 14,
  neighbours: ["Iraq", "Syria", "Lbanon"],
};

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
);

myCountry.population = myCountry.population + 2;
myCountry["population"] = myCountry["population"] - 2;
console.log(myCountry.population);
