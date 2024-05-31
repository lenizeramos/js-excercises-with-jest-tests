/*
In this exercise, we will be converting a normal string into camelCase text.

Case Maker
We will receive a normal string of words separated with spaces as the input. Our job is to convert these strings into camel cased strings.

Instruction
Create a function named camelCase that will convert a string to camel case, and return the result.
*/

const camelCase = function (input) {
  //input = input.trim();
  //console.log(input);

  //input = input.split(" ");
  //console.log(input);

  input = input.trim().split(" ");

  for (let i = 1; i < input.length; i++) {
  input[i] = input[i][0].toUpperCase() + input[i].substring(1)

  //console.log(input[i][0].toUpperCase())
  }

  return input.join("");
};

console.log(camelCase("this is a string")); // thisIsAString
console.log(camelCase("loopy cornerstone")); //loopyCornerstone
console.log(camelCase("supercalifragalisticexpialidocious")); // supercalifragalisticexpialidocious

module.exports = camelCase;
