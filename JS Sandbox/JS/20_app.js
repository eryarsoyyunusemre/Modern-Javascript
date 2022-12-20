// Keyboard & Input Events

const form = document.querySelector('form')
const taskInput = document.getElementById('task')
const heading = document.querySelector('h5')
const select = document.querySelector('select')

// Clear Input
// taskInput.value=''

// form.addEventListener('sumbit',runEvent)


// Keydown - bastığın tuşu alır
// taskInput.addEventListener('keydown',runEvent)
// Keyup - elini çekince tuşu alır
// taskInput.addEventListener('keyup',runEvent)
// Keypress - Bastığın anda ateşler
// taskInput.addEventListener('keypress',runEvent)

// Focus - inputun üstüne tıklayınca gerceklersır
// taskInput.addEventListener('focus',runEvent)
// Blur  - Üstüne tıkladıktan sonra dışarı tıklayınca gerceklesır
// taskInput.addEventListener('blur',runEvent)
// Cut - İçerideki yazıyı kesince gerçekleşir
// taskInput.addEventListener('cut',runEvent)
// Paste - Yapıştırınca gerçekleşir
// taskInput.addEventListener('paste',runEvent)

// Input - yazılan silinen her şeyi alır
// taskInput.addEventListener('input',runEvent)
// Change - her option değişince çalışır
// select.addEventListener('change',runEvent)

function runEvent(e){
  console.log(`EVENT TYPE:${e.type}`)

  console.log(e.target.value)
  
  // Klavyeden değer girdikce h5 e yazar 
  // heading.innerText= e.target.value

  // Get Input Value
  // console.log(taskInput.value)
  
  // e.preventDefault()
}