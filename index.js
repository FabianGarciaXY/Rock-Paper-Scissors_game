// Events
const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
console.log(rockButton)

rockButton.addEventListener('click', (e) => playRound(e.target, computerPlay()));
paperButton.addEventListener('click', (e) => playRound(e.target, computerPlay()))
scissorsButton.addEventListener('click', (e) => playRound(e.target, computerPlay()))


// Result by round gererated by playRound() function
let roundResult = 0;

// Function that retunrs ramdom result
function computerPlay() {
    const ramdomNumber = Math.random() * 3;
    if (ramdomNumber < 1) return "Rock";
    else if (ramdomNumber < 2 && ramdomNumber >= 1 ) return "Paper";
    else return "Scissors";
}

// Function to play only a round
function playRound(playerSelection, computerSelection) {
    // Variables to store parsed inputs in lower case and accept different words: uppercase & lowercase
    const value = playerSelection.textContent;
    console.log(value)

    const uSel_insensitiveCase = value.toLowerCase();
    const cSel_insensitiveCase = computerSelection.toLowerCase();
    // Results if players make differents decitions 
    if ( uSel_insensitiveCase !== cSel_insensitiveCase){
        if (uSel_insensitiveCase == 'scissors') {
            if (cSel_insensitiveCase == 'paper') {
                roundResult = "p";
                return "You win! scissors cuts paper";
            } else if (cSel_insensitiveCase == 'rock') {
                roundResult = "c";
                return "You lose :( rock breaks scissors";
            }
        } else if (uSel_insensitiveCase == 'rock'){
            if (cSel_insensitiveCase == 'scissors') {
                roundResult = "p";
                return "You win! rock breaks scissors";
            } else if (cSel_insensitiveCase == 'paper') {
                roundResult = "c";
                return "You lose :( paper wraps rock";
            }
        } else if (uSel_insensitiveCase == 'paper') {
            if (cSel_insensitiveCase == 'scissors') {
                roundResult = "c";
                return "You lose :( scissors cuts paper"
            } else if (cSel_insensitiveCase == 'rock') {
                roundResult = "p";
                return "You win! paper wraps rock";
            }
        }
    // Result if players choose the same one
    } else if (uSel_insensitiveCase == cSel_insensitiveCase){
        roundResult = "n";
        return "Nobody wins, you two choose the same one";
    }
}

// Function to play 5 rounds
function game() {
    let userFinalPoints = 0; compFinalPoints = 0;

    const computerSelection = computerPlay();
    const playerSelection = prompt();

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

/*test
game();
*/