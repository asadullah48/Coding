var userName = "asadullahshafique";
var age = 48;
var isStudent = true;
var randomValue = "https://www.linkedin.com/posts/asadullah48coding-all-45-answers-actitvity-719601859931-ws_o?utm_source=share&utm_medium=member_desktop";
var currentBalance = 100; // it change accordingly
var accountNumber = "123456789"; //it remains constant
var firstCall = 'Asadullah';
var lastCall = 'Shafique';
var finalCall = firstCall + '' + lastCall;
var fullName = "".concat(firstCall).concat(lastCall);
var weightInKg = 70;
var heightInMeter = 1.75;
var bmi = weightInKg / (heightInMeter * heightInMeter);
var a = 5;
var b = 2;
var logicalAnd = (a > 0) && (b > 0);
var logicalOr = (a < 0) || (b > 0);
var logicalNot = !(a > 0);
var isRaining = true;
if (isRaining) {
    console.log("wear a raincoat");
}
else {
    console.log("wear a sunglasses.");
}
console.log(userName);
console.log(age);
console.log(isStudent);
console.log(randomValue);
console.log(currentBalance);
console.log(accountNumber);
console.log(finalCall);
console.log(fullName);
console.log("your BMI is ".concat(bmi));
console.log(logicalAnd);
console.log(logicalOr);
console.log(logicalNot);
