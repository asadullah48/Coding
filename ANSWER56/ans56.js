// Q 56
// A mixed bag of items
var mixedArray = [1, "apple", 2, "banana", true, "carrot"];
// Picks out only the words
var stringsArray = mixedArray.filter(function (item) { return typeof item === "string"; });
// Shows the list of just words
console.log(stringsArray); // Output: ["apple", "banana", "carrot"]
// This line checks each item: if it's a word, it goes into the new list.
// Picks out only the numbers
var numbersArray = mixedArray.filter(function (item) { return typeof item === "number"; });
// Shows the list of just numbers
console.log(numbersArray); // Output: [ 1, 2 ]
// This line checks each item: if it's a number, it goes into the new list.
// Picks out only the boolean
var booleanArray = mixedArray.filter(function (item) { return typeof item === "boolean"; });
// Shows the list of just boolean
console.log(booleanArray); // Output: ["apple", "banana", "carrot"]
// This line checks each item: if it's a word, it goes into the new list.
