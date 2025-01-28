/*
//Javascript object methods
1. object.assign(target, source) -- copies properties from a scource object to a target object
2. object.create(object) -- creates an object from an existing object
3. obect.entries(object) -- returns an array of the key/value pairs of an object
4. object.fromEntries(object) -- creates an object from a list of key/values
5. object.keys(object) -- returns an array of the keys of an object
6. object.calues(object) -- returns an array of the property values of an object
*/

//target object
const student1 = {
    firstName: "Victor",
    lastName: "George",
    age: 30,
    course: "chemmistry",
    greet(){
        console.log(`Hello my name is ${this.firstName}`);
    }
}
//source object
const student2 ={
    firstName: "Godwin",
    lastName: "Felix",
    age: 28,

}
console.log(student1)

Object.assign(student1, student2)
console.log("A few moments Later...")
console.log(student1)

const student3 = object.create(student1);
student1.firstName = "Jacob"
console.log(student3)

let studentInfo = object.enteries(student1);
console.log(studentInfo)

let phones = [["infinx", 15], ["tecno", 20], ["samsung", 40]]
const phonesObject = object.fromEntries(phones);
console.log(phonesObject);

console.log(object.keys(phonesObject))
console.log(object.values(student1));