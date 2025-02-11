const board = document.querySelectorAll("td");
let spaces = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const win_spaces = ["012", "345", "678", "048", "246", "036", "147", "258"];
let turn_checker = 0;
const player1 = 'url("/jsproject/img/x.png")';
const player2 = 'url("/jsproject/img/o.png")';
let gameOver = false;
let playStyle = 0; // 1 = Player vs Player, 2 = Player vs Computer

// Select Game Mode
function vsPlayer() {
    playStyle = 1;
}

function vsComp() {
    playStyle = 2;
}

// Attach event listeners to each cell
for (let i = 0; i < board.length; i++) {
    board[i].addEventListener("click", playMove);
}

// Handles player moves
function playMove(e) {
    if (gameOver) return; // Stop if the game is over
    if (playStyle === 2 && turn_checker === 1) return; // Prevent Player 1 from playing twice

    let i = Array.from(board).indexOf(e.target);
    if (play(i, e)) { // If player move is valid, check for a win
        checkwin();
        if (playStyle === 2 && !gameOver) {
            setTimeout(compPlay, 500); // Small delay before computer moves
        }
    }
}

// Check turn and return corresponding image
function checkTurn() {
    let playerSign;
    if (turn_checker === 0) {
        playerSign = player1;
        turn_checker = 1;
    } else {
        playerSign = player2;
        turn_checker = 0;
    }
    return playerSign;
}

// Handles playing a move
function play(i, e) {
    if (spaces.includes(i)) {
        e.target.style.backgroundImage = checkTurn();
        spaces.splice(spaces.indexOf(i), 1);
        return true; // Move was successful
    } else {
        return false; // Move was invalid
    }
}

// Check for win conditions
function checkwin() {
    for (let i = 0; i < win_spaces.length; i++) {
        let Player1winCount = 0;
        let Player2winCount = 0;

        for (let j = 0; j < win_spaces[i].length; j++) {
            let splitPlaceholder = parseInt(win_spaces[i][j]);

            if (board[splitPlaceholder].style.backgroundImage === player1) {
                Player1winCount++;
            } else if (board[splitPlaceholder].style.backgroundImage === player2) {
                Player2winCount++;
            }
        }

        if (Player1winCount === 3) {
            alert("Player 1 wins");
            gameOver = true;
        } else if (Player2winCount === 3) {
            alert("Computer wins");
            gameOver = true;
        }
    }

    // Check for a draw (when spaces are empty)
    if (spaces.length === 0 && !gameOver) {
        alert("It's a Draw!");
        gameOver = true;
    }
}

// Restart game
function restart() {
    board.forEach(space => {
        space.style.backgroundImage = "";
    });
    spaces = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    turn_checker = 0;
    gameOver = false;
}

// Smarter Computer AI
function compPlay() {
    if (gameOver) return;

    let bestMove = findBestMove();
    let e = { target: board[bestMove] };
    play(bestMove, e);
    checkwin();
}

// Find the best possible move for the computer
function findBestMove() {
    // 1. Check if computer can win
    for (let i = 0; i < win_spaces.length; i++) {
        let line = win_spaces[i].split("").map(Number);
        let countComp = line.filter(index => board[index].style.backgroundImage === player2).length;
        let emptySpots = line.filter(index => spaces.includes(index));

        if (countComp === 2 && emptySpots.length === 1) {
            return emptySpots[0]; // Play the winning move
        }
    }

    // 2. Check if player is about to win and block
    for (let i = 0; i < win_spaces.length; i++) {
        let line = win_spaces[i].split("").map(Number);
        let countPlayer = line.filter(index => board[index].style.backgroundImage === player1).length;
        let emptySpots = line.filter(index => spaces.includes(index));

        if (countPlayer === 2 && emptySpots.length === 1) {
            return emptySpots[0]; // Block the player
        }
    }

    // 3. Take the center if available
    if (spaces.includes(4)) {
        return 4;
    }

    // 4. Take a corner if available
    let corners = [0, 2, 6, 8].filter(index => spaces.includes(index));
    if (corners.length > 0) {
        return corners[Math.floor(Math.random() * corners.length)];
    }

    // 5. Pick a random available spot
    return spaces[Math.floor(Math.random() * spaces.length)];
}
