/*
We'll be adding only the numbers in the array which match the given condition.

Instruction
Create a function named conditionalSum that will be given an array of numbers and a condition, in this case odd or even. Given this condition, add up only the values which match that condition. If no values match the condition, return 0.

*/

const conditionalSum = function (values, condition) {
  let totalSum = 0;

  if (values.length === 0) {
    return 0;
    //return "Error: empty array";
  }
  for (let index = 0; index < values.length; index++) {
    if (values[index] % 2 === 0 && condition === "even") {
      totalSum += values[index];
    }
    if (values[index] % 2 === 1 && condition === "odd") {
      values[index] % 2 === 1;
      totalSum += values[index];
    }
  }
  return totalSum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even")); // 6
console.log(conditionalSum([1, 2, 3, 4, 5], "odd")); // 9
console.log(conditionalSum([13, 88, 12, 44, 99], "even")); // 144
console.log(conditionalSum([], "odd")); // 0
// console.log(conditionalSum([-3, 3, -2, 2])); // 0

module.exports = conditionalSum;
