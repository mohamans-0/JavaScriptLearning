const neighbours = ["iraq", "syria", "lebanon"];
neighbours.push("Utopia");
console.log(neighbours);
neighbours.pop();
console.log(neighbours);

if (!neighbours.includes("Germany"))
  console.log("Probably not a central european country :D");

const indexOfIraq = neighbours.indexOf("iraq");
neighbours[indexOfIraq] = "Republic Of Iraq";
console.log(neighbours);
