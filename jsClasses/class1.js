/*what is javascript?
Javascrpit is a programming language initially designed to interact with elements of web pages.
it allows us to add interactivity to a web page, it is uesd to enhance our html and css, such as validating forms, handling mouse events, adding responsiveness 
to web page, etc

javascript is an object based scripting language which is ligtweight and crosss platform. it is a transalted language and not a compiled langauge
The javascript translator(embedded in the browser) is responsible for transalating the javascript code for the browser.

Applications: client-side validation, dynamic drop down menus, current date and time display, displaying pop-ups and dialog boxes, etc.
 */
//we use coomebts to add more description to our code.
/*This is a multi line comment
*/
//This is a single line comment
/*what are variables?
variables are contianers for storing information
*/

var y;
var x=5;

//Rules for naming variables:
/*
--let and const are the most used to declare a variable while var is outdated.
1) Use a descriptive name
2) start with a letter, an underscore or dollarsign, but not with a number.
3) Avoid reserved keywords. E.g let, var, for, while, const, class, if, etc
4) Use camelCase for multi-word names e.g myBestFriend, userName.
5) Case Sensivity: myVar and MyVar are treated as to different variables.
6) Avoid special characters: e.g @, !, #, %, etc apart from (_ and $)

Case Conventions
1) Camel case: Here the first letter is lowercase and the first letter is lowercase and the first letter of subsequent words are capitalized.
(e.g myBestFriend, customerOrderDetails, etc).
2) Pascal Case: Here the first letter of every word is capitalized. (e.g MyVariableName, MyBestFood, etc)
3) Snake Case: All letters are in lowercase but words are seperated by underscores. (e.g my_best_friend, customer_order_details, etc)
4) Kebab case: All letters are in lowercase but words are seperated by hyphen. e.g (e.g my_best_friend,customer_order_details, etc)
*/

//Decalring a Variable
let userName;
//Initializing a variable
userName = "Herrschaft"
let age = 30;
const sex = "Male";
age = 25;
let country = "Nigeria";

//sex= "Female"; This gives an error, a varaible declared with the const keyword cannot be reassigned another value, that is where let comes in.

console.log("Go fuck yourself");
console.warn("Hello this is a warning");
console.error("This is an error")
console.log(userName);

//Data Types in Javascript
//1) Strings: strings are used to represent text

let lastName = "Lord"
let firstName = "Herrschaft"
// Concatenation: is a way of merging two strings, or a string and a variable.
let greet = "Hi " + lastName + " How are you today?";
let bye = "Alright goodbye " + firstName;

//String Interpolation || Template literal
let sayHello = `Hello ${firstName}, How are you doing`;

console.log(greet)
console.log(bye)
console.log(sayHello)

console.log("The type of sayHello varaible is a ", typeof(sayHello))

//We use the typeof(function) to check the data of the varaible.
// 2) Number: It's used to represent numeric vlaues, whether integers or decimals(floats)

let user_age = 25;
const pi = 3.142;
console.log(age)
console.log(typeof(pi));
console.log(user_age + pi);

//3 Boolean: They are used to represent logical values indicating true or false.
const isClosed = true;
const isOpen = false;

console.log(isClosed);
console.log(typeof(isOpen));

//4) Null: This represents the intentional omission/absense of a value

let course = null;
let user = null;
console.log(typeof(user));

//5) Undefined: This represents a variable that has been declared but not assigned a value.

let a, b, c;
console.log(typeof(a))

//6) Bigint is a numeric data type that can represent integers with arbitary precision.it is denoted by appending 'n' to the end of an integer.
let bigNumber = 123435363666353534453430n;

//7) Object: They are a collection of key-value pairs, where values can be of any data type. Including other objects, arrays, or functions.

const person = {
    name: 'John',
    age: 30,
    isAdmin: false
};