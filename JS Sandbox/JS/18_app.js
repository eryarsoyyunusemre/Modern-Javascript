// Event Listeners & The Event Object

// document.querySelector('.clear-tasks').
// addEventListener('click',function(e){
//   console.log('hello')

//   e.preventDefault()
// })

document.querySelector('.clear-tasks').
addEventListener('click',onClick)

function onClick(e){
  //console.log('Clicked')

  let val ;
  val=e

  // Event target element
  val=e.target;
  val = e.target.id
  val=e.target.className
  val =e.target.classList;
  val = e.target.classList.add('a')
  
  // e.target.innerText='Hello'

  // Event type
  val=e.type

  // Timestamp
  val=e.timeStamp

  // Coords event relative to the window ekran üzerinde
  val = e.clientY
  val = e.clientX

  // Coords event relative to the element üzerinde
  val = e.offsetY
  val = e.offsetX


  console.log(val)

}