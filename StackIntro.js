/**
 * Stack Data Structure commonly known as in LIFO.
 * Methods used are:
 * Push: To add an element
 * Pop: To remove an element
 * Peek: To see the first element
 * Length: To see the length
 * Example of a stack is an array
 * An example to check palindromes using an array stack
 */

var word = "racecar";
var rword = "";
var letters = []; // Stack

for (let i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

for (let j = 0; j < word.length; j++) {
  rword += letters.pop();
}

word == rword
  ? console.log(word + " is a Palindrome")
  : console.log(word + " is Not a Palindrome");
