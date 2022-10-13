const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let secretNumber = 5;

let checkGuess = num => {
  if (num > secretNumber) {
    console.log('Too high.')
    return false;
  }

  if (num < secretNumber) {
    console.log('Too low.')
    return false;
  }

  if (num === secretNumber) {
    console.log('Correct!')
    return true;
  }
}

let askGuess = function() {
  rl.question('Enter a guess: ', (answer) => {
    if (checkGuess === true) {
      console.log('You Win!')
      rl.close();
    } else {
      askGuess();
    }
  });
}

askGuess();
