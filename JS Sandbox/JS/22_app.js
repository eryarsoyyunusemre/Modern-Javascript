// LOCAL & SESSİON STORAGE

//* set local storage item = kodu silsende storagede kalır
// localStorage.setItem('name','Jhon')
// localStorage.setItem('age','30')

//* set session storage item = Kodu silersen storageden gider
// sessionStorage.setItem('name','Yunus')

// remove from storage
// localStorage.removeItem('name');

// get from storage
// const name = localStorage.getItem('name')
// const age = localStorage.getItem('age')

// clear Local Storage
// localStorage.clear()

// console.log(name,age)


document.querySelector('form').addEventListener('submit',function(e){
 const task = document.getElementById('task').value

 let tasks;
 if(localStorage.getItem('tasks') === null){
  tasks=[]
 }
 else{
  tasks = JSON.parse(localStorage.getItem('tasks'))
 }
 tasks.push(task)

 localStorage.setItem('tasks',JSON.stringify(tasks))
 
 alert('Task Saved')

 e.preventDefault()

//! İç kısımda böyle
//  const taskss = JSON.parse(localStorage.getItem(tasks));
//  tasks.forEach(function(task){
//   console.log(task)
//  })

})

//! Dış kısımda böyle
const tasks = JSON.parse(localStorage.getItem('tasks'));
tasks.forEach(function(task){
  console.log(task)
})


