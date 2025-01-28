
function guessingGame() {
    let playGame = prompt("Do you want to play my wonderful game? (yes/no)").toLowerCase();

    if (playGame === 'yes'){
        alert("Great, lets start the game");
    }else if (playGame === 'no'){
        alert("Go fuck yourself");
        return;
    }else {
        alert("Invalid Input, please enter 'yes' or 'no'");
        return;
    }
    
  
    

    alert("Great! You have 3 chances to guess a number between 1 and 20.");

    const randomNumber = Math.floor(Math.random() * 20) + 1;
    let attempts = 3; 
  
    while (attempts > 0) {
      let userGuess = parseInt(prompt("Enter your guess (1-20):"), 10);
  
      if (isNaN(userGuess) || userGuess < 1 || userGuess > 20) {
        alert("Please enter a valid number between 1 and 20.");
        continue;
      }
  
      if (userGuess === randomNumber) {
        alert("Congratulations!!! You guessed correctly.");
        return;
      } else if (userGuess > randomNumber) {
        alert("Sorry, the number is too big.");
      } else {
        alert("Sorry, the number is too small.");
      }
  
      attempts--;
  
      if (attempts > 0) {
        alert(`You have ${attempts} attempt(s) left.`);
      } else {
        alert(`Game over! The correct number was ${randomNumber}.`);
      }
    }
  }
  
  guessingGame();
  