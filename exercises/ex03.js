/*
In this exercise, we will be counting the number of vowels that appear in a given string. 
For this exercise, consider the following to be vowels: a, e, i, o, and u.

Instruction
Create a function named numberOfVowels that will receive a string and return the number of vowels in that string.

*/

const numberOfVowels = function (data) {
  let sum = 0;
  let vowels = "aeiou";

  // for (let i = 0; i < data.length; i++) {
  //   if (vowels.includes(data[i].toLowerCase())) {
  //     sum++;
  //   }
  // }

  for (const letter of data) {
    if (vowels.includes(letter.toLowerCase())) {
      sum++;
    }
  }
  return sum;
};

/*
Space complexity: O(1)
Time Complexity: O(n)  n is the size of data
*/

console.log(numberOfVowels("orange")); // 3
console.log(numberOfVowels("cornerstone college")); // 7
console.log(numberOfVowels("aeiou")); // 5
console.log(numberOfVowels("BRASIL")); // 5
module.exports = numberOfVowels;
