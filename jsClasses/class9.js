//Function Expression: This is another way to define a function, here we use a variable and store the returned value in that variable.

let sub = function(a,b){
    return a - b;
}
console.log(sub(20,6));

//Arrow functions
let multiply = (x, y) => x * y;

console.log(multiply(3, 5));

const printNumbers = (n) => {
    for (let i = 1; i <= n; i++){
       console.log(`Phone number ${i}`);
    };
};

//String methods
let str = "welcome to javascript"
console.log(str.length)

let upperStr = str.toLocaleUpperCase();
console.log(upperStr)

//The split method is used to split the string into an array
let splitStr = str.split(" ")
console.log(splitStr)

console.log(splitStr.join(" "));

console.log(str.replace("to", "#"))

