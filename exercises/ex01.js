/*
In this exercise, we will be given an array of 2 or more numbers. 
We will then have to find the two largest numbers in that array, and sum them together.

Instruction
Create a function named sumLargestNumbers that will receive an array of numbers and return the sum of the two largest numbers in that array.
*/

function sumLargestNumbers(data) {
  if (data.length < 2) {
    return 0;
  } else {
    data.sort((a,b) => b-a)
    return (data[0] + data[1])
  }
}

/*
Space complexity: O(1)
Time Complexity: O(nlg n)
*/

// const sumLargestNumbers = function (data) {
//   let biggerNumber = 0;
//   let bigNumber = 0;

//   for (indice = 0; indice < data.length; indice++) {
//     // console.log(indice);
//    if (data.length < 2) {
//     return 0
//    } else if (data[indice] > biggerNumber) {
//       bigNumber = biggerNumber;
//       biggerNumber = data[indice];
//     } else if (data[indice] > bigNumber) {
//       bigNumber = data[indice];
//     }
//   }
//   return biggerNumber + bigNumber;
// };

console.log(sumLargestNumbers([1, 10])); // 11
console.log(sumLargestNumbers([1, 2, 3])); // 5
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2])); // 126
console.log(sumLargestNumbers([-5, -9, -2, -4, -12, -15, -1])) // -3

module.exports = sumLargestNumbers;
