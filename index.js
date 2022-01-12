
let buttons = document.querySelectorAll('button');
buttons.forEach( button => button.addEventListener('click', (e) => playRound(e.target, computerPlay())))

// Results
let computerPoints;
let userPoints;
let roundResult = 0;

// Function that retunrs ramdom result
function computerPlay() {
    const ramdomNumber = Math.random() * 3;
    if (ramdomNumber < 1) return "Rock";
    else if (ramdomNumber < 2 && ramdomNumber >= 1) return "Paper";
    else return "Scissors";
}
let computerChoice = document.querySelector('.computerDesition');
let playerChoice = document.querySelector('.playerDesition');

// Function to play only a round
function playRound(playerSelection, computerSelection) {
    // Variables to store parsed inputs in lower case and accept different words: uppercase & lowercase
    const userChoice = playerSelection.textContent.toLowerCase();
    const compChoice = computerSelection.toLowerCase();

    computerChoice.textContent = compChoice;
    playerChoice.textContent = userChoice;
    
    // Results if players make differents decitions 
    if (userChoice !== compChoice) {
        if (userChoice == 'scissors') {
            if (compChoice == 'paper') {
                roundResult = "p";
                return "You win! scissors cuts paper";
            } else if (compChoice == 'rock') {
                roundResult = "c";
                return "You lose :( rock breaks scissors";
            }
        } else if (userChoice == 'rock') {
            if (compChoice == 'scissors') {
                roundResult = "p";
                return "You win! rock breaks scissors";
            } else if (compChoice == 'paper') {
                roundResult = "c";
                return "You lose :( paper wraps rock";
            }
        } else if (userChoice == 'paper') {
            if (compChoice == 'scissors') {
                roundResult = "c";
                return "You lose :( scissors cuts paper"
            } else if (compChoice == 'rock') {
                roundResult = "p";
                return "You win! paper wraps rock";
            }
        }
        // Result if players choose the same one
    } else if (userChoice == compChoice) {
        roundResult = "n";
        return "Nobody wins, you two choose the same one";
    }
}



// Function to play 5 rounds
function game() {
    let userFinalPoints = 0; compFinalPoints = 0;
    playRound(playerSelection, computerSelection);

    if (roundResult == "p") {
        userFinalPoints++;
    } else if(roundResult == "c"){
        compFinalPoints++;
    }

    console.log(`***Results You: ${userFinalPoints}, Comp: ${compFinalPoints}***`)

    if (userFinalPoints > compFinalPoints) {
        return alert(`Congratulations you win!!! ${userFinalPoints} points`);
    } else if (userFinalPoints < compFinalPoints) {
        return alert(`You lose ${compFinalPoints} to ${userFinalPoints}`)
    } else {
        return alert('Nobody wins, you both are tied')
    }
}