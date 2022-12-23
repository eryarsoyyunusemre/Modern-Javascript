//* PROTOTYPES EXPLAINED

// Object Prototypes
function Person(Firstname,Lastname,dob){
  this.Firstname = Firstname
  this.Lastname = Lastname
  this.birthday = new Date(dob) 
  // this.calculateAge = function(){
  //   const diff = Date.now() - this.birthday.getTime()
  //   const ageDate = new Date (diff)

  //   return  Math.abs(ageDate.getUTCFullYear() - 1970 )
  // }
}

// Calculate age
Person.prototype.calculateAge = function(){
  const diff = Date.now() - this.birthday.getTime()
  const ageDate = new Date (diff)

  return  Math.abs(ageDate.getUTCFullYear() - 1970 )
}

// Get full name
Person.prototype.getFullName = function(){
  return `${this.Firstname} ${this.Lastname}`
}

// Get Married
Person.prototype.getMarried = function(newLastName){
  this.Lastname=newLastName
}

const jhon = new Person('Jhon','Doe','8-12-90')
const mary = new Person('Mary','Jhonson','March 20 1978')

console.log(mary.getFullName())
console.log(jhon.calculateAge())

mary.getMarried('Smith')
console.log(mary.getFullName())

// Bu özelliğe sahip mi?
console.log(mary.hasOwnProperty('Firstname'))
console.log(mary.hasOwnProperty('getFullName'))