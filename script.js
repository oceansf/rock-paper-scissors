function getComputerChoice() {
    let choice = Math.random();
    if (choice <= 0.33) {
        return choice = 'rock'
    } else if (choice >= 0.66) {
        return choice = 'paper'
    } else { return choice = 'scissors'}
}

function getHumanChoice() {
    let choice = prompt('Choose one: Rock, Paper or Scissors');
    if (choice.toLowerCase() === 'rock') {
        console.log('player chooses rock')
    } else if (choice.toLowerCase() === 'scissors') {
        console.log('player chooses scissors')
    } else {
        console.log('player chooses paper')
    }
}

console.log(getHumanChoice())