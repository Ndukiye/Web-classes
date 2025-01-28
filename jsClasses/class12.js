let today= new Date();
console.log(today)
console.log(today.getDate())
console.log(today.getDay())

const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
console.log(`Today is ${days[today.getDay()]}`);

const months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
console.log(`We are in the month of ${months[today.getMonth()]}`);

console.log(today.getHours())
console.log(today.getFullYear())
console.log(today.toDateString())

//Properties
console.log(Math.PI);
console.log(Math.E);

//Methods
console.log(Math.abs(-5));
console.log(Math.sqrt(16));
console.log(Math.random());

//Multiply by 10 for random numbers btw 1 and 10
console.log("Random number")
console.log(Math.random()*10);
let randomNumber = Math.round(Math.random()*10)
console.log(randomNumber);

console.log(Math.floor(3.8));
console.log(Math.ceil(3.1));

function randInt(n){

    let output = ""

    const randInt = []
    for (let i = 0; i < n; i++){
       let randInt = Math.round(Math.random() * 100);
       (i+1 == n) ? output += ` ${randInt}.` : output += `${randInt}, `;
    }
    console.log(output) 

};

console.log("random numbers:")
randInt(5);
