/*
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement �
GOOD LUCK � 
*/

let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;
let markMass2 = 95;
let markHeight2 = 1.88;
let johnMass2 = 85;
let johnHeight2 = 1.76;
let markHigherBMI = markMass / markHeight ** 2 > johnMass / johnHeight ** 2;
let markHigherBMI2 =
  markMass2 / markHeight2 ** 2 > johnMass2 / johnHeight2 ** 2;

if (markHigherBMI) {
  console.log(
    `Mark's BMI (${markMass / markHeight ** 2})is higher than John's (${
      johnMass / johnHeight ** 2
    })!`
  );
} else {
  console.log(`John's BMI is higher than John's`);
}

if (markHigherBMI2) {
  console.log(
    `Mark's BMI (${markMass2 / markHeight2 ** 2}) is higher than John's! (${
      johnMass / johnHeight ** 2
    })`
  );
} else {
  console.log(
    `John's (${johnMass2 / johnHeight2 ** 2}) BMI is higher than Marks's (${
      markMass2 / markHeight2 ** 2
    })!`
  );
}
