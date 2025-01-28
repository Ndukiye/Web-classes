//Browser Objects:
//1) Window Objects: The window object represents a window in the browser. Some methods include alert(), prompt(), confirm(), etc

let username = prompt("Please Enter Your Name:")
alert (`Hi ${username} Welcome To Class`)

let test = confirm("Do you want to proceed");
console.log(test);

let color = prompt("Enter your desired color")
document.body.style.backgroundColor = color;

let num1 = prompt("Enter first Number:")
let num2 = prompt("Enter Second Number:")

console.log(typeof(num1));
console.log(num1 + num2);

//Type convsersion
let newNum1 = Number(num1)
let newNum2 = Number(num2)
console.log(typeof(newNum1));
console.log(newNum1 + newNum2);

let num3 = '30.4567'
let num3Int = parseInt(num3)
let num3Float = parseFloat(num3)

console.log(num3Int)
console.log (num3Float)