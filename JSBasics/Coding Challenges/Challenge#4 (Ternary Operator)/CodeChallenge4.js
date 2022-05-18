/*
Stephen wants to build a very simple tip calculator for whenever
he goes eating in a restaurant. In his country, its usual to tip 15%
if the bill value is between 50 and 300. IF the value is different, the 
tip is 20%.

1. Your task is to calculate the tip, depending on the bill value. Create
a variable called 'tip' for this. It's not allowed to use an if/else statement :)
(If it's easier for you, you can start with an if/else) and then try to convert to a 
ternary operator

2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip).
Example: `The bill was 275, the tip was 41.25, and the total value 316.25

TEST DATA: Test for bill values 275, 40, 430
*/

function calculateTotalValue(billValue) {
  let tip =
    billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;
  console.log(
    `The bill was ${billValue}, the tip was ${tip}, and the total value of ${
      billValue + tip
    }`
  );
  return billValue + tip;
}
calculateTotalValue(275);
calculateTotalValue(40);
calculateTotalValue(430);
calculateTotalValue(40);
