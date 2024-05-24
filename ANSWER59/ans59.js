// Q 59
// This program makes a function that adds a specific number
function makeAdder(valueToAdd) {
    // This is the magic box. It takes a number and adds your special number to it
    return function (number) {
        return number + valueToAdd;
    };
}
// Making a magic box that adds 5
var addSeven = makeAdder(7);
console.log(addSeven(14)); // If we put 14 in the box, it gives us 21
// We made a function (magic box) that adds 7 to any number.
function makeAddition(valueToAdd) {
    return function (number) {
        return number + valueToAdd;
    };
}
var addNine = makeAdder(9);
console.log(addNine(18));
