const choices = ['rock', 'paper', 'scissors']
let outcome;
function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
}

function askForChoice() {
    let playerChoice = prompt("Rock paper or scissors?").toLowerCase()
    while (!choices.includes(playerChoice))
        playerChoice = prompt("Please choose between rock paper or scissors").toLowerCase()
    return playerChoice
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log(`Draw! You both chose ${computerSelection}`)
        outcome = 'draw'
    }
    else if
        (playerSelection === 'scissors' && computerSelection === 'paper'
        || playerSelection === 'rock' && computerSelection === 'scissors'
        || playerSelection === 'paper' && computerSelection === 'rock') {
        console.log(`You won! The computer chose ${computerSelection}`)
        outcome = 'win';
    }
    else {
        console.log(`You lost! The computer chose ${computerSelection}`)
        outcome = 'lose';
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (i = 0; i < 5; i++) {
        playRound(askForChoice(), getComputerChoice());

        if (outcome === 'win') {
            playerScore++;
        }
        else if (outcome === 'lost')
            computerScore++;
        else if (outcome === 'draw') {
            playerScore += 0.5;
            computerScore += 0.5;
        }
        console.log(`Scores:\nPlayer:${playerScore}\nComputer:${computerScore}`)
    }
    if (playerScore > computerScore)
        console.log(`Winner Winner Chicken Dinner!`)
    else if (playerScore < computerScore)
        console.log(`Better luck next time!`)
    else
        console.log(`It's a tie!`)
}

game();