// CONSTRUCTOR AND THİS KEYWORD

// Person constructor

function Person(name,dob){
  this.name = name
  // this.age = age
  this.birthday = new Date(dob) 
  this.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime()
    const ageDate = new Date (diff)

    return  Math.abs(ageDate.getUTCFullYear() - 1970 )
  }

  console.log(this)
}

// const brad = new Person('Brad',30)
// const yunus = new Person('Yunus',20)


const brad = new Person ('Brad','9-10-1981')

console.log(brad.calculateAge())
