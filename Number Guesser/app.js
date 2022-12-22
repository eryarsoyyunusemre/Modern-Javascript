/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

// Game values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess
guessBtn.addEventListener('click',function(){
  let guess = parseInt(guessInput.value)

  // Validate Input
  if( isNaN(guess)|| guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`,'red')
  }

  // Chechk if won
  if(guess == winningNum){
    //Disable input
    guessInput.disabled = true
    // Change bordor color
    guessInput.style.borderColor = 'green'
    guessBtn.style.backgroundColor = 'green'
    guessBtn.style.color ='white'
    setMessage(`${winningNum} is correct, YOU WIN!`,'green')
  }else{
    
  }
})

// setMessage
function setMessage( msg , color ){
  message.textContent = msg
  message.style.color = color
 
}