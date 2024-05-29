/*
We'll be adding only the numbers in the array which match the given condition.

Instruction
Create a function named conditionalSum that will be given an array of numbers and a condition, in this case odd or even. Given this condition, add up only the values which match that condition. If no values match the condition, return 0.

*/
const conditionalSum = function (values, condition) {
  let sum = 0;
  for (let i = 0; i < values.length; i++) {
    
    if (values[i] % 2 === 0 && condition === "even") {
      sum += values[i];

    } else if (values[i] % 2 === 1 && condition === "odd") {
      sum += values[i];
    }
  
  }

  return sum;
};

/*
Space complexity: O(1)
Time Complexity: O(n) n is the size of the array being passed.
*/

console.log(conditionalSum([1, 2, 3, 4, 5], "even")); // 6
console.log(conditionalSum([1, 2, 3, 4, 5], "odd")); // 9
console.log(conditionalSum([13, 88, 12, 44, 99], "even")); // 144
console.log(conditionalSum([], "odd")); // 0
console.log(conditionalSum([-3, 3, -2, 2], "even")); // 0

module.exports = conditionalSum;
