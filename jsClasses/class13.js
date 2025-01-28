//The Global object: This provides a way to access globally scoped properties and methods

//Common global methods
//1) eval(): evaluates javascript codes represented as strings
console.log(eval('22+6'))

//2) isNaN(): determines if a value is NaN
console.log(isNaN('2+2'));

//3) isFinite(): determines if a value is a finite number
console.log(isFinite(10));

//3) parseFloat(): parse a string and returns a floating-point number.
console.log(parseFloat('3.142'));

//3) parseInt(): parse a string and returns an integer.
console.log( parseInt('3.642'));

// Browser specific-global objects
// methods: alert(), confirm(), prompt(), etc.

//set   Timeout() -- This calls a function after a sppecified amount of time in milliseconds.
setTimeout(() => {console.log('Executed after 3 seconds')}, 3000);

//setInterval
const interval = setInterval(() => {console.log('Executed every 3 seconds')}, 3000);

setTimeout(() => clearInterval(interval), 15000)