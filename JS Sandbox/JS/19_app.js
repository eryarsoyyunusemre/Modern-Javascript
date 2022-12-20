// Mouse Event

const clearBtn = document.querySelector('.clear-tasks')
const card = document.querySelector('.card')
const heading = document.querySelector('h5')

// Click
// clearBtn.addEventListener('click',runEvent)
// Double Click
// clearBtn.addEventListener('dblclick',runEvent)

// Mousedown
// clearBtn.addEventListener('mousedown',runEvent)
// Mouseup
// clearBtn.addEventListener('mouseup',runEvent)

// Mouseenter - Üstene gelinc saymaya baslar
// card.addEventListener('mouseenter',runEvent)
// Mouseleave - Üstenden gidin saymaya baslar
// card.addEventListener('mouseleave',runEvent)

// Mouseover
// card.addEventListener('mouseover',runEvent)
// Mouseout
// card.addEventListener('mouseout',runEvent)

// Mousemove - card ın içinde farenın hareketlerını yakalar
card.addEventListener('mousemove',runEvent)


// Event Handler
function runEvent(e){
  console.log(`EVENT TYPE:${e.type}`)

  heading.textContent=`MouseX: ${e.offsetX} MouseY:${e.offsetY}`

  document.body.style.backgroundColor=`rgb(${e.offsetX} ,${e.offsetY},40)`
}
