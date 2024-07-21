function getComputerChoice() {
    let choice = Math.random();
    if (choice <= 0.33) {
        return choice = 'rock'
    } else if (choice >= 0.66) {
        return choice = 'paper'
    } else {return choice = 'scissors'}
}

function getHumanChoice(choice) {
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
    let round = 0;

    const results = document.querySelector('#results');
    const scoreText = document.createElement('p')
    const roundText = document.createElement('p');
    const resultText = document.createElement('p');
    results.appendChild(roundText);

    function checkRound() {
        if (round === 5) {
            checkWinner();
            round = 0;
            humanScore = 0;
            computerScore = 0;
        } else {
            round++;
            roundText.textContent = `Round ${round} out of 5`
        };
    };

    function checkWinner() {
        let winner = '';
        if (humanScore > computerScore) {
            winner = 'You';
        } else if (humanScore < computerScore) {
            winner = 'The computer';
        } else {
            winner = `It's a tie! Nobody`
        };
        scoreText.textContent = `Game over. ${winner} won! Click one of the buttons to start a new game.`
        resultText.textContent = '';
    };

    const btns = document.querySelectorAll('button');
    btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const humanSelection = getHumanChoice(e.target.id);
            const computerSelection = getComputerChoice();
            playRound (humanSelection, computerSelection);
            checkRound();
        });
    });

    function playRound(humanChoice, computerChoice) {
        // Rock
        if (humanChoice === 'rock' && computerChoice === 'scissors') {
            resultText.textContent = `Player wins! ${humanChoice} beats ${computerChoice}.`
            humanScore++
        } else if (humanChoice === 'rock' && computerChoice === 'paper') {
            resultText.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`
            computerScore++
        } else if (humanChoice === 'rock' && computerChoice === 'rock') {
            resultText.textContent = `It's a tie!`;
        // Scissors
        } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
            resultText.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`
            humanScore++
        } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
            resultText.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`
            computerScore++
        } else if (humanChoice === 'scissors' && computerChoice === 'scissors') {
            resultText.textContent = `It's a tie!`;
        // Paper
        } else if (humanChoice === 'paper' && computerChoice === 'rock') {
            resultText.textContent = `Player wins! ${humanChoice} beats ${computerChoice}.`
            humanScore++
        } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
            resultText.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`
            computerScore++
        } else if (humanChoice === 'paper' && computerChoice === 'paper') {
            resultText.textContent = `It's a tie!`;
        } else {console.log('Something went wrong.')}

        scoreText.textContent = `Score - You: ${humanScore} CPU: ${computerScore}`;
        results.appendChild(scoreText);
        results.appendChild(resultText);
    }

}

playGame()