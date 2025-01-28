//Basic Opeartions in javascript
//1) Arithmetic Opeartions

let sum = 8 + 5;
let mul = 2 * 2;
let minus = 5 - 2;
let div = 10 / 2;
let rem = 10 % 3; //Modulus -- remainder of division

console.log(sum, mul, minus, div, rem)

//2) Assignmemt opearator operators(=)
let score = 100;
let color = "green"
let malaria = 5;

//3) Increment/ Decrement Opeartors (--, ++)
--malaria; //malaria = malaria - 1; malaria -=1
score++; //score = score +1; score += 1;
console.log(score);
console.log(malaria);

score += 50; // score = score + 50;
malaria -= 3; // score = score - 3;

console.log(score);
console.log(malaria);

malaria *= 2;
score /= 10;

console.log(score);
console.log(malaria);

//4) Comparison Operators
// i) Equality (== or ===); i.e loosely and strictly equal to respectively.

let a = 5, b = '5';
console.log (a === b); //false
console.log (a == b); // true

// iii) Reklational opearators (>, <, >= <=)

let gt = 10> 5,
lt = 10 < 5,
gtoe = 10 >= 5,
ltoe = 10 <= 6;
console.log(gt, lt, gtoe, ltoe);

//Iv) logical oparators: logical operators are used on true or flase expressions. There are three major logical operators: major logical opearators: AND(&&), OR(||), and NOT(!).

let m = true, n = false;
console.log (m && n);
console.log (m || n);
console.log (!m); //false

