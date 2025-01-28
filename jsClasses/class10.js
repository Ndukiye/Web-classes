//objects

const student = {
    firstName: "Victor",
    gender: "Male",
    Age: 30,
    isMarried: false,

    //a method is a function inside an object.

    greet: function () {
        //this is a keyword used to refer to the current object
        console.log("Hi there my name is", this.firstName, this.lastName);
    },
}

console.log(`The name of our student is ${student.firstName}`);
console.log(`The age of our student is ${student.Age}`);
console.log(`The gender of our student is ${student['gender']}`);

const book = {
    title: "The 48 laws of power",
    author: "Robert Greene",
    yearPublished: "2008",
    price: "$10",
    ISBN: 12222235,
        
}

console.log(`The title of this book is ${book.title}`);
console.log(`The book was written by ${book.author}`);
console.log(`The book was published in ${book.yearPublished}`);
console.log(`The ISBN is ${book.ISBN} `);
console.log(`The price of this book is ${book.price}`);

//Updating an object
book.price = "$20"
console.log(`The price of this book is ${book.price}`);

//deleting properties of an object
delete book.ISBN;
console.log(book)

//2 Creating an instance of the global object
const car = new Object;
car.name = "ES350";
car.brand = "Lexus";
car.year = "2020";
car.color = "White";
car.license = false;

//3 The Constructor Function
function bike(name, color, model, year){
    this.name = name;
    this.color = color;
    this.model = model;
    this.year = year;

    //default values
 this.isNew = true;
 this.engine = "V-8 Fuel Engine";
 this.drive = function(){
    console.log(`I am driving my ${this.name} bike now`);
 };
 this.spec = ()=>{
    console.log(`Bike name ${this.name}, ${this.color} color, model ${this.model}, was made in ${this.year}`);
 } ;
};

let bike1 = new bike("Yamaha", "red", "racing");
let bike2 = new bike("Duvati", "white", "luxury", 2020);
let bike3 = new bike("Ducati", "white", "luxury", 2020, 40);



function laptop(name, color, model, year){
    this.brand = name;
    this.color = color;
    this.model = model;

this.isNew = true;
this.processor = "intel core i5";
this.drive = function(){
    console.log(`I am using my ${this.brand} laptop now`);
 };
 this.spec = ()=>{
    console.log(`laptop brand ${this.brand}, ${this.color} color, model ${this.model}`);
 } ;
}

let laptop1 = new laptop("hp", "red", "elitebook");
let laptop2 = new laptop("lenovo", "black", "thinkpad");
let laptop3 = new laptop("toshiba", "white", "x5");

