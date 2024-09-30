const mark = {
  fullName: "mark Miller's",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this["bmi"] = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullName: "jhon Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this["bmi"] = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

// "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

mark.calcBMI();
john.calcBMI();

// `

//  ${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!

if (mark.bmi > john.bmi) {
  console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`);
} else if (john.bmi > mark.bmi) {
  console.log(` ${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`);
}
