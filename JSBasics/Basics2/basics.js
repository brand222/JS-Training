console.log(
  "==============================ARRAYS============================="
);
const friends = ["max", "micah", "parker", "jay", "trey", "jordan"];
console.log(friends);
//getting the first array element
console.log(`the first friend in the array is ${friends[0]}`);
//get # of elements in array
console.log(`The length of the friends array is ${friends.length}`);
//get last element of array
console.log(
  `the last element of friends array is: ${friends[friends.length - 1]}`
);
//mutating elements within the array
friends[2] = "Tommison";
console.log(friends);

//this is the literal syntax behind creating an array
const years = new Array(1991, 1992, 2000, 2020);

const calcAge = (birthYear) => {
  return 2022 - birthYear;
};
//calling a function with an array element
console.log(calcAge(years[0]));
console.log(calcAge(years[years.length - 1]));
//adding elements to an arary
let emptyArray = [];
emptyArray.push("hello");
emptyArray.push("im");
emptyArray.push("brandon");
console.log(emptyArray);
//adding an element to first position of array
emptyArray.unshift("John");
console.log(emptyArray);
//removes first element of array
emptyArray.shift();
console.log(emptyArray);
//returning index of an element in the array
console.log(years.indexOf(1992));
//boolean on whether an element is included in an array
//NOTE: Does NOT do type coercion
console.log(years.includes(1992));
console.log(years.includes(1995));
console.log(
  "==============================Objects============================="
);

//here is an array
//ordering matters here
const brandonArray = [
  "Brandon",
  "McDonald",
  2022 - 1990,
  "Billionaire",
  ["Micah", "Jay", "Trey"],
];

//here is an object (using object-literal syntax)
// this object has 5 properties
//you have key/value pairs here
//ordering does NOT matter in objects
const brandon = {
  firstName: "Brandon",
  lastName: "McDonald",
  birthYear: 1990,
  job: "Billionaire",
  friends: ["Micah", "Jay", "Trey"],
  hasDriversLicense: false,
  //here is a function expression within an object
  //any function attached to an object is a METHOD
  calcAge: function () {
    return 2022 - this.birthYear;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} year-old ${
      this.job
    } who lives in ${this.location}.
    He has ${this.hasDriversLicense ? "a" : "NO"} drivers license.`;
  },
};
//dot notation for accessing object properties
console.log(brandon.firstName);
//bracket notation for access object properties
console.log(brandon["lastName"]);

const nameKey = "Name";
console.log(brandon["first" + nameKey]);
console.log(brandon["last" + nameKey]);

// const interestedIn = prompt(
//   "What do you want to know about brandon? Choose between firstName, lastName, age, job, or friends"
// );

// if (brandon[interestedIn]) {
//   console.log(`Property found! ${brandon[interestedIn]}`);
// } else {
//   console.log("The property you entered doesn't exist!");
// }
//adding properties to an objecting using dot notation
brandon.location = "Austin, TX";
brandon["instagram"] = "brandon_xmcx";

console.log(brandon);
//accessing array properties within an object
console.log(
  `brandon has ${brandon.friends.length} friends and his best friend is ${brandon.friends[1]}`
);

console.log(brandon.calcAge());
console.log(brandon["calcAge"]());
console.log(brandon.getSummary());

//OTHER OBJECT METHODS
