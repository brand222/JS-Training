//variables and types
console.log("===================variables===================");
console.log(`${true} is a ${typeof true}`);
console.log(`${23} is a ${typeof 23}`);
console.log(`"Hi" is a ${typeof "hi"}`);
let year;
console.log(`an un-assigned variable is a ${typeof year}`);
console.log(`NULL is just like undefined and shows ${typeof null}`);
console.log("===================let, const, and var===================");
let age = 30;
age = 31; // here we 'mutated' a variable (from 30 to 31)
//const is where you declare a variable to isn't going to change
const birthYear = 1990; //birthyear cannot change
//you are unable to create an empty const variable
console.log("===================Type conversion/coercion===================");
const inputYear = "1990";
console.log(inputYear);
console.log(Number(inputYear)); //returns the string as a number
console.log(inputYear + 18);
console.log(Number(inputYear) + 18); //this becomes 2008 because you converted the string to a number and then added 18
console.log(Number("brandon")); //return NaN (not a number) because you are passing in a string which isn't a number
console.log(typeof NaN);
console.log(String(23), 23); //this converts the integer into a string (notice the difference in the log)
//type coercion
console.log("I am " + 23 + " years old"); //the + operator triggers a coercion to strings
// in this case, the integer 23 is converted to a string
console.log("23" - "10" - 3);
console.log("hi");
console.log("27" * "2"); // returns an integer because * can only work with ints
//the same with '/'
console.log("===================Falsy / Truthy Values===================");
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));

const money = 1;
if (money) {
  console.log("Don't spend it all!");
} else {
  console.log("You should get a job");
}
console.log(
  "===================Equality Operators (== vs ===)==================="
);
const minAge = "18";
if (minAge === 18) {
  console.log("You are an adult");
} else {
  console.log("you are NOT an adult");
}
if (minAge == 18) {
  console.log("You are an adult");
} else {
  console.log("You are NOT an adult");
}

const favorite = Number(prompt("Whats your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite == 23) {
  console.log(`Cool! 23 is an amazing number!`);
} else if (favorite === 7) {
  console.log("7 is also a cool number");
} else {
  console.log("Not 23 or 7");
}
console.log("===================SWITCH STATEMENTS===================");
const day = "monday";

switch (day) {
  case "monday": //case means IF this day, then print that to the console.
    console.log("First day of the week... ugh");
    break; //break statements basically provide a division of what each case (day) means for console outputs
  case "tuesday":
    console.log("Okay, mondays over, but second day... ugh");
    break;
  case "wednesday":
    console.log("Hump day!");
    break;
  case "thursday":
    console.log("Almost the weekend! One more day!");
    break;
  case "friday":
  case "saturday":
  case "sunday":
    console.log("Weekend is here!! WOOOO!");
    break;
  default: //default means that if no other cases are met, then do this.
    console.log("Not a valid day");
}
console.log("===================Ternary Operators===================");
let yourAge = 17;
yourAge >= 18 ? console.log("You can vote") : console.log("You CANNOT vote");

console.log(`I'd like to drink ${yourAge >= 18 ? `wine` : `water`}`)(
  "===================FUNCTIONS==================="
);
function sayName(name) {
  console.log(`Hi! My name is ${name}`);
}
sayName("brandon");

function addTwoNumber(num1, num2) {
  return num1 + num2;
}

let addedNums = addTwoNumber(1, 2);
console.log(addedNums);

console.log("===================ARROW FUNCTIONS===================");
//NOTE: Arrow functions DO NOT get the 'this' keyword.
const calcAge3 = (birthYear) => 2022 - birthYear;
console.log(calcAge3(1990));
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2022 - birthYear;
  const retirement = 35 - age;
  return `${firstName} retires in ${retirement} years.`;
};
console.log(yearsUntilRetirement(1990, "brandon"));
console.log(yearsUntilRetirement(1995, "madeline"));

console.log(
  "===================Functions Calling other Functions==================="
);

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
  return juice;
}

console.log(fruitProcessor(2, 3));
