const myCountry = {
  country: "Jordan",
  capital: "Amman",
  language: "Arabic",
  population: 14,
  neighbours: ["Iraq", "Syria", "Lbanon"],

  describe: function () {
    return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`;
  },
};

console.log(myCountry.describe());
