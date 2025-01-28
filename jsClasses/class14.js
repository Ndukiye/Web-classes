//Storing information on a browser: we can do this using local storage, session storage and cookies.

//Local storage: This provides a way to store key-value pairs in the browser with no expiration date.
//The data persists even after the browser is closed and reopened. It provides a much larger storage limit (around 5 - 100mb per domain)

// let firstname = prompt("Enter your first name:");
// let lastname = prompt("Enter your last name");

//The set item method is used to to store and update data in the local storage
// localStorage.setItem("First-Name", firstname);
// localStorage.setItem("Last-Name", lastname);

// let a = prompt("Input your age")
// let last = localStorage.getItem("Last-Name");

// if(a>=18){
//     document.write(`Hi ${last}, you are old enought to vote`)
// }
// else{
//     prompt("sorry you are not old enough to vote")
//     document.getElementById("welcome").textContent = `Hi ${last}, you are welcome`;

// }


//The getItem method is used to access the local storage
//localStorage.getItem()

//clearing the local storage
//localStorage.clear();

/*Session storage: This is similar to the localstorage but persists only for the duration of the page session. Once the browser tab is closed the data is cleared, It is useful for storing temporary data, that we dont need to persist across sessions.
*/
sessionStorage.setItem("age", 30);
sessionStorage.setItem("username", "Emeka115");

//session storage uses the same method as localstorage.

//assignment: what are cookies in javascript?

//JSON
/*
  JSON stands for Javascript Object Notation. It is a text format for storing and transporting data. JSON makes it possibke  to store javascript objects as text. Example
  '{"name";"John", "age";30, "car":null}' // This is an example of a JSON string, it defines an object with three properties: name, age, car and each property has a value.

  The JSON format can be converted to a javascript object using JSON.parse()
  Javascript also has an inbuilt function for converting an object into a string: JSON.stringify(). This process is known as object serialization and deserialization respectively.
*/

// const person = {
//   lastname: "john",
//   age: 40,
//   country: "Nigeria"
// };
// console.log(person)
// console.log(typeof(person))

//Object sterilization -- converting JS Objects to JSON strings
// const jsonString = JSON.stringify(person)
// console.log(jsonString)

//Object desterilization -- converting JSON stings back to JS Objects
// const jsobject = JSON.parse(jsonString);
// console.log(jsobject)

// let a = 5;
// console.log(a);


// function maxPrice(prices){
//   let buyStock, sellStock;
//   let profit = 0;
//   for(let i = 0; i < prices.length; i++){
//       for(let j = i + 1; j < prices.length; j++){
//           buy = prices[i];
//           sell = prices[j];
//           let profitEqn = sell - buy;
//           profit = math.max(profit, profiteqn);
//       }
//   }
//   return profit;
// }
// console.log(maxPrice(prices))
// //console.log(maxPrice(prices2))

let prices = [7,1,5,3,6,4];

function maxprice(prices){
  let buyingday = 0; 
  let sellingday = 1;
  let profit = 0;
  while(sellingday < prices.length){
      if(prices[ buyingday] < prices[sellingday]){
          let profitEqn = prices[ sellingday] - prices[buyingday]
          profit = Math.max(profit, profitEqn)
      }else{
        buyingday =  sellingday
      };
      sellingday++;
  };
  return profit
}

console.log(maxprice(prices))


