// Q 56
// A mixed bag of items
let mixedArray = [1, "apple", 2, "banana", true, "carrot"];

// Picks out only the words
let stringsArray = mixedArray.filter((item) => typeof item === "string");

// Shows the list of just words
console.log(stringsArray); // Output: ["apple", "banana", "carrot"]
// This line checks each item: if it's a word, it goes into the new list.

// Picks out only the numbers
let numbersArray = mixedArray.filter((item) => typeof item === "number");

// Shows the list of just numbers
console.log(numbersArray); // Output: [ 1, 2 ]
// This line checks each item: if it's a number, it goes into the new list.

// Picks out only the boolean
let booleanArray = mixedArray.filter((item) => typeof item === "boolean");
// Shows the list of just boolean
console.log(booleanArray); // Output: [ true ]
// This line checks each item: if it's a boolean, it goes into the new list.


