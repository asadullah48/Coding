let userName: string = "asadullahshafique";
let age: number = 48;
let isStudent: boolean = true;
let randomValue: any = "https://www.linkedin.com/posts/asadullah48coding-all-45-answers-actitvity-719601859931-ws_o?utm_source=share&utm_medium=member_desktop";
let currentBalance = 100;// it change accordingly
const accountNumber = "123456789"; //it remains constant
let firstCall:string = 'Asadullah';
let lastCall: string = 'Shafique';
let finalCall: string = firstCall +''+lastCall;
let fullName:string =`${firstCall}${lastCall}`;
let weightInKg = 70;
let heightInMeter = 1.75;
let bmi = weightInKg / (heightInMeter * heightInMeter);
let a = 5;
let b = 2;
let logicalAnd =(a>0) && (b>0);
let logicalOr = (a<0)|| (b>0);
let logicalNot = !(a>0);
let isRaining =true;
if (isRaining){
    console.log("wear a raincoat");
} else {
    console.log("wear a sunglasses.")
}
console.log(userName);
console.log(age);
console.log(isStudent);
console.log(randomValue);
console.log(currentBalance);
console.log(accountNumber);
console.log(finalCall);
console.log(fullName);
console.log(`your BMI is ${bmi}`);
console.log(logicalAnd);
console.log(logicalOr);
console.log(logicalNot);



