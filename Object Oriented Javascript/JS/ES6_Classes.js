class Person {
  constructor(firstName,lastName,dob){
    this.firstName = firstName
    this.lastName = lastName
    this.birthday = new Date (dob) 
  }

  // Direkt Prototype a eklenir
  greeting(){
    return`Hello there ${this.firstName} ${this.lastName}`
  }

  calculateAge(){
    const diff = Date.now() - this.birthday.getTime()
    const ageDate = new Date(diff)
    return Math.abs(ageDate.getUTCFullYear() - 1970)
  }

  getMarried(newLastName){
    this.lastName = newLastName
  }

  static addNumbers(x,y){
    return x + y
  }
}

const mary = new Person('Maryy','Williams','11-13-1980')

mary.getMarried('Thompson')

console.log(mary)
console.log(mary.calculateAge())
console.log(mary.greeting())

// Static call
console.log(Person.addNumbers(1,2))