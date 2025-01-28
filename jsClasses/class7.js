/***
  what are arrays?
  arrays are special variables that can hold more than one value.
  syntax:
  const arrayName = [arrayitem1, arrayitem2, ....];
 */
//They can be created using the array literal notation or using an array constructor.

//using the array literal notation
const numbers = [1,2,3,4,5,6];

//using the array constructor
const evenNumbers = new Array(2,4,6,7,8,10);

//Arrays can contain different types as values or items.
const newArray = ["john", "emeka", 1, 34, 50, true, false, null, [3,6,9]];

//An index is the numerical representation of the position of an item in an array, Indexes start from 0. Arrays can be accessed by their index.

//Acessing Arrays
console.log(newArray[1]);
console.log(newArray[5]);
//Acessing sub arrays
console.log(newArray[8][1]);

//Create an array of 6 different colors

const colors = ["red", "black", "yellow", "green", "purple"];
console.table(colors)

//The length property in an array gives the total number of items present in the array, this is different from the index.
console.log(colors.length);

for (let i = 0; i < colors.length; i++){
    console.log(`I love ${colors[i]}.`)
};