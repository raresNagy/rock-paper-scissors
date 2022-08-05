const choices = ['rock', 'paper', 'scissors']
let playerScore = 0;
let computerScore = 0;
let outcome;
let done = false;
function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
}

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

rockBtn.addEventListener('click', () => {
    if (!done)
        playRound('rock', getComputerChoice())
});
paperBtn.addEventListener('click', () => {
    if (!done)
        playRound('paper', getComputerChoice())
});
scissorsBtn.addEventListener('click', () => {
    if (!done)
        playRound('scissors', getComputerChoice())
});

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        outcome = 'draw'
    }
    else if
        (playerSelection === 'scissors' && computerSelection === 'paper'
        || playerSelection === 'rock' && computerSelection === 'scissors'
        || playerSelection === 'paper' && computerSelection === 'rock') {
        outcome = 'win';
    }
    else {
        outcome = 'lose';
    }
    updateScore();
    if (playerScore >= 5) {
        done = true;
        const body = document.querySelector('body');
        const winner = document.createElement('h1');
        winner.textContent = `Player wins!`
        body.appendChild(winner)

    }
    else if (computerScore >= 5) {
        done = true;
        const body = document.querySelector('body');
        const winner = document.createElement('h1');
        winner.textContent = `Computer wins!`
        body.appendChild(winner);
    }

}

const scores = document.querySelector('#scores');

function updateScore() {

    if (outcome === 'win') {
        playerScore++;
    }
    else if (outcome === 'lose')
        computerScore++;
    else if (outcome === 'draw') {
        playerScore += 0.5;
        computerScore += 0.5;
    }
    const currentScore = document.createElement('li');
    currentScore.textContent = `Player: ${playerScore} CPU: ${computerScore}`;
    scores.appendChild(currentScore);
}
