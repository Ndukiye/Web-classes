//Using conditionals enable us handle multiple conditions in our program.

/**
 syntax: 
     if (condition) {
     code block or execution
     };
     or (with "else" statement to executena code when the if condition is false.)
     if (condition){
     code block or execution
     }else{
     code block or execution
     };
     or (with "else if" statements to check for multiple conditions)
     if(condition){
     code block or execution;
     } else if (condition){
      code block or execution;
      } else{
       code block or execution
       };

    write a program that prompts the user for their name and age and then console.log "Hi username you are eligible to vote!" if the user age id greater than or equal 18, and vice versa
 */

    let username = prompt("Please Enter Your Name: ")
    let age = prompt("Please input your age")

    if (age >=18) {
       console.log(`Hi ${username} you are eligible to vote`);
       document.write(`Hi ${username} you are eligible to vote`); 
    } else{
        console.log (` Sorry ${username} you are not eligible to vote`);
        document.write (` Sorry ${username} you are not eligible to vote`);
    };

    /**
     write a program that takes i the user surname, age, sex, (m/f) and according to the users input console.log if the user is a man, boy, girl or woman.
     e.g "Hi John you are 25 yrs old and you're a man"
     */
     let person = prompt("Please enter your name")
     let userage = prompt("please enter your age")
     let sex = prompt("What is your gender")

     if (userage >=18 && sex == 'm') {
        console.log(`Hi ${person}, you are ${userage} years old and you are a man`);

      }else if (userage <18 && sex=='m'){
      console.log(`Hi ${person}, you are ${userage} years old and you are a boy`);

      } else if (userage >=18 && sex == 'f') {
        console.log(`Hi ${person}, you are ${userage} years old and you are a woman`);
      }else {
        console.log(`Hi ${person}, you are ${userage} years old and you are a girl`);
      };


      let day = prompt("please enter the day(monday-sunday)")
      let time = prompt ("what time is it(0-23hrs)")
      let weather = prompt("what is the weather condition today")

      if (time <= 12) {
        console.log(`Hi, its a ${weather} ${day} morning today`);
      }else if(time <=17){
        console.log(`Hi, its a ${weather} ${day} afternoon today`);
      }else if(time <23) {
        console.log(`Hi, its a ${weather} ${day} evening today`);
      }else{
        console.log(`Hi, its a ${weather} ${day} evening today`);
      };

      //Ternary opearators
      (age >=18) ? document.write(`Hi ${username} you are eligible to vote`) : document.write(`sorry ${username} you are eligible to vote`);

      //Nullish colalescing operator (??)-- This provides a convenient way to handle default values. Default/fallback values can be used when the value is null or undefined, but not for other values like 0, false, "".

      //const prompt = require('prompt-sync')(); For using prompt on the terminal
      //This is used to make use of prompts on th terminal.

      const defaultValue = "sorry unknown input"
      let userAge = 30;
      const userInput = null ?? "sorry you have to enter your age";
      console.log("This is your input", userInput, "and", userAge)
       





    //write a program that asks the user to enter the day(i.e saturday) and time of the day (00hrs- 23:00hrs).

