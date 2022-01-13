let computerPoints = document.querySelector('.computerPoints');
let userPoints = document.querySelector('.userPoints');
let roundResult = document.querySelector('.roundResult');
let finalWinner = document.querySelector('.winner');
let computerChoice = document.querySelector('.computerDesition');
let playerChoice = document.querySelector('.playerDesition');

const userImageSelection = document.querySelector('.userImageSelection');
const computerImageSelection = document.querySelector('.computerImageSelection');

// Event listeners to start the game
let buttons = document.querySelectorAll('button');
for ( let button of buttons ) {
    button.addEventListener('click', (e) => playRound(e.target, computerPlay()));
    button.addEventListener('click', () => defineWinner(userPoints, computerPoints))
}

// Computer Selection
function computerPlay() {
    const ramdomNumber = Math.random() * 3;
    if (ramdomNumber < 1) return "Rock";
    else if (ramdomNumber < 2 && ramdomNumber >= 1) return "Paper";
    else return "Scissors";
}

// Function to play a round
function playRound(playerSelection, computerSelection) {

    const userChoice = playerSelection.textContent.toLowerCase();
    const compChoice = computerSelection.toLowerCase();
    computerChoice.textContent = compChoice;
    playerChoice.textContent = userChoice;

    const rockRoute = './images/rock.png';
    const paperRoute = './images/paper.png';
    const scissorsRoute =  './images/scissors.png'; 
    
    if (userChoice !== compChoice) {
        if (userChoice == 'scissors') {

            userImageSelection.src = scissorsRoute;
            if (compChoice == 'paper') {
                userPoints.textContent ++;
                roundResult.textContent = "You win! scissors cuts paper";
                computerImageSelection.src = paperRoute;
                return
            } else if (compChoice == 'rock') {
                roundResult.textContent = "You lose :( rock breaks scissors";
                computerPoints.textContent++;
                computerImageSelection.src = rockRoute;
                return
            }
        } else if (userChoice == 'rock') {

            userImageSelection.src = rockRoute;
            if (compChoice == 'scissors') {
                userPoints.textContent++;
                roundResult.textContent = "You win! rock breaks scissors";
                computerImageSelection.src = scissorsRoute;
                return
            } else if (compChoice == 'paper') {
                computerPoints.textContent++;
                roundResult.textContent =  "You lose :( paper wraps rock";
                computerImageSelection.src = paperRoute;
                return
            }
        } else if (userChoice == 'paper') {

            userImageSelection.src = paperRoute;
            if (compChoice == 'scissors') {
                computerPoints.textContent++;
                roundResult.textContent = "You lose :( scissors cuts paper";
                computerImageSelection.src = scissorsRoute;
                return
            } else if (compChoice == 'rock') {
                userPoints.textContent++;
                roundResult.textContent = "You win! paper wraps rock";
                computerImageSelection.src = rockRoute;
                return
            }
        }
    } else if (userChoice == compChoice) {
        if (userChoice === 'rock'){
            userImageSelection.src = rockRoute;
            computerImageSelection.src = rockRoute;
            roundResult.textContent = "Nobody wins, you two choose the same one";;
            return 
        } else if(userChoice === 'paper'){
            userImageSelection.src = paperRoute;
            computerImageSelection.src = paperRoute;
            roundResult.textContent = "Nobody wins, you two choose the same one";;
            return
        } else if(userChoice === 'scissors') {
            userImageSelection.src = scissorsRoute;
            computerImageSelection.src = scissorsRoute;
            roundResult.textContent = "Nobody wins, you two choose the same one";;
            return 
        }
    }
}

// Function to define winner;
function defineWinner(userPoints, computerPoints) {
    const userP = parseInt(userPoints.textContent, 10);
    const compP = parseInt(computerPoints.textContent, 10);
    console.log(userP, compP);
    if ( userP > compP && userP > 4){
        finalWinner.textContent = 'You Wins!!'
        setTimeout(()=> restart(), 5000);
    } else if (compP > userP && compP > 4) {
        finalWinner.textContent = 'You lose'
        setTimeout(()=> restart(), 5000);
    }
    return 
}

// Function to restart the Game
function restart() {
    computerPoints.textContent = 0;
    userPoints.textContent = 0;
    roundResult.textContent = '';
    computerChoice.textContent = '';
    playerChoice.textContent = '';
    finalWinner.textContent = '';
    userImageSelection.src = "";
    computerImageSelection.src = "";
}