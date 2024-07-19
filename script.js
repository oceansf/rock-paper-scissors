function getComputerChoice() {
    let choice = Math.random();
    if (choice <= 0.33) {
        return choice = 'rock'
    } else if (choice >= 0.66) {
        return choice = 'paper'
    } else {return choice = 'scissors'}
}

function getHumanChoice() {
    let choice = prompt('Choose one: Rock, Paper or Scissors');
    if (choice.toLowerCase() === 'rock') {
        return choice = 'rock'
    } else if (choice.toLowerCase() === 'scissors') {
        return choice = 'scissors'
    } else if (choice.toLowerCase() === 'paper') {
        return choice = 'paper'
    } else {
        console.log('Please enter a valid option: Rock, Paper or Scissors')
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();        
        playRound(humanSelection, computerSelection)
        console.log(`Round ${i} out of 5 ended.`)
    }

    function playRound(humanChoice, computerChoice) {
        // Rock
        if (humanChoice === 'rock' && computerChoice === 'scissors') {
            console.log(`Player wins! ${humanChoice} beats ${computerChoice}.`)
            humanScore++
        } else if (humanChoice === 'rock' && computerChoice === 'paper') {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`)
            computerScore++
        } else if (humanChoice === 'rock' && computerChoice === 'rock') {
            console.log(`It's a tie!`)
        // Scissors
        } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
            console.log(`Player wins! ${humanChoice} beats ${computerChoice}.`)
            humanScore++
        } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`)
            computerScore++
        } else if (humanChoice === 'scissors' && computerChoice === 'scissors') {
            console.log(`It's a tie!`)
        // Paper
        } else if (humanChoice === 'paper' && computerChoice === 'rock') {
            console.log(`Player wins! ${humanChoice} beats ${computerChoice}.`)
            humanScore++
        } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`)
            computerScore++
        } else if (humanChoice === 'paper' && computerChoice === 'paper') {
            console.log(`It's a tie!`)
        }
        console.log(`Player score: ${humanScore} CPU score: ${computerScore}`)
    }

}

playGame()