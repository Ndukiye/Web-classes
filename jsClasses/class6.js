// Using loops in javascript
/**
 --we often need to repeat some actions/executions. Loops are used to repeat the same code multiple times.

 #The "while loop": is used when we do not know the number of iterations beforehand.

 syntax:
 while(condition){
 // do some code
 //iteration (increment or decrement)
 }
 */

 let a = 10;
 while (a){
    console.log(`student numder ${a}`)
    a--;
 };
 ;let count = 0;
 while(count <= 100){
    console.log(count);
    count +=5;
 };
 
 //the effect of break and continue statements

 for(let i = 0; i <=10; i++)

    if (i == 5 || i == 3){
        continue;
    } else{
        console.log(`Employee number ${b}`);;
    }
    b--;

    for(let i = 0; i <=10; i++){

        if (i == 5 || i == 3){
            break;
        } else{
            console.log(`Employee number ${b}`);;
        }
        b--;
 };

 //The "for loop": is used when we know the number of iterations

 /**
  syntax: for initialization: condition; iteration{
  //Code to be executed
  }
  */
 for (let i=0; i < 20; i++){
    console.log(`Fruit number ${i}`);
 };
 for (let i = 10; i >= 0; i--){
    console.log(`Car number ${i}`);
 };

 /**
  The do while loop: This is very similar to the while loop, except that it executes the block of code atleast once.
  syntax:
  do{
  //code to be executed
  //iteartion
  }while(condition)
  */

  let score = 20
  do{
    console.log("the score is " + score)
    score += 10;
  }while(score < 100)

    let result = ""
    //Nested Loop
    for(let i = 0; i < 10; i++){
        for (let j = 1; j < 10; j++){
            result += `${i}.${j}`
        };
    };
    console.log(result);

    //Using labels on loops
    //A label is an identifier with colon before a loop

    /*labelname: for (...){
    } */

    outer: for(let i = 0; i < 5; i++){
        inner: for (let j = 0; j < 5; j++){
            if (i == 2 && j == 2){
                continue outer;
            }else{
                console.log(i,j);
            }
            
        };
    };