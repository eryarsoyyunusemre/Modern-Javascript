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
    winningNum = getRandomNum(min,max),
    guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message')
      resetBtn = document.querySelector('#restart-btn')

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Restart Btn
resetBtn.addEventListener('click',function(){
  guessInput.disabled = false
  guessBtn.disabled = false

  setMessage('')

  guessInput.style.borderColor = 'black'
  guessBtn.style.backgroundColor = 'white'
  guessBtn.style.color ='black'

  guessInput.value='Enter your guess...'

  guessesLeft=3
})

// Listen for guess
guessBtn.addEventListener('click',function(){
  let guess = parseInt(guessInput.value)

  // Validate Input
  if( isNaN(guess)|| guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`,'red')
  }

  // Chechk if won
  if(guess == winningNum){
    // game over won
    //Disable input
    guessInput.disabled = true
    // Change bordor color
    guessInput.style.borderColor = 'green'
    guessBtn.style.backgroundColor = 'green'
    guessBtn.style.color ='white'
    setMessage(`${winningNum} is correct, YOU WIN!`,'green')
  }else{
    // Wrong number
    guessesLeft -= 1

    if(guessesLeft === 0){
      // game over lost
      guessInput.disabled = true
      guessBtn.disabled = true
      // Change bordor color
      guessInput.style.borderColor = 'gray'
      guessBtn.style.backgroundColor = 'gray'
      guessBtn.style.color ='white'
      setMessage(`Game Over,you lost. The correct number was ${winningNum}`,'red')
    }
    else{
      // game contiuness - answer wrong
      guessInput.style.borderColor = 'red'
      guessBtn.style.backgroundColor = 'red'
      guessBtn.style.color ='white'
      setMessage(`${guessesLeft} lives left!!`,'red')
    }
  }
})

// setMessage
function setMessage( msg , color ){
  message.textContent = msg
  message.style.color = color
}

// Get Winning Num
function getRandomNum(mix,max){
    return Math.floor (Math.random()*(max-min+1)+min)
}