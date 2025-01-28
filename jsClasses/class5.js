//Switch statements in javascript
/**
 Javascript switch statements provides a way to execute different blocks of code, based on diffrerent conditions. it is an alternative to using multiple else if..if,
 else if statements, when they are multiple condtions to check for.

 syntax: switch(expression){
 case value1:

 //code;
 break;
case value 2:
    //code;
    break;

case value3:
    //code;
    break;

    ...
    //default code:
}
    expression is the value to be compared,
    case vlaue1, value2, value3. represent the possible values of the expression,
    break statement termintes the switch statement. without it the execution would continue into the next case.
    default specifies the code to run if none of the cases match. N/B: This is optional
    npm i prompt-sync to install the prompt sync package that enables us to use prompt function on the terminal
 */

    let day = prompt("Enter your birth-Day: i.e monday");
    let birthdayMessage = "";
    switch(day.toLowerCase()){
        case "monday":
            birthdayMessage = "Hi there, you were born on a Monday";
            break;
        case "tuesday":
            birthdayMessage = "Hi there, you were born on a Tuesday";
            break;
        case "wednesday":
            birthdayMessage = "Hi there, you were born on a Wednesday";
            break;
        case "thursday":
            birthdayMessage = "Hi there, you were born on a Thursday";
            break;
        case "friday":
            birthdayMessage = "Hi there, you were born a Friday";
            break;
            default:
                birthdayMessage = "Hi there, you weren't born on a working day";

        
    };

    console.log(birthdayMessage);

    let grade = prompt("Enter your grade")
    let result = "";

    switch(true){
        case (grade >= 90):
            result = "Congratulations you got an A";
            break;
        case (grade >= 80 && grade < 90):
            result = "Congratulations you got B";
            break;
        case (grade >= 70 && grade < 80):
            break;
        default:
            result = "Sorry you did not not pass"
    }