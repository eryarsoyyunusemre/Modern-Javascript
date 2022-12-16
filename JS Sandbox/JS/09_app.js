//? OBJECT LİTERALS

const person= {
    firstname:'Yunus',
    lastname:'Eryarsoy',
    age:20,
    email:'eryarsoyyunusemre@gmail.com',
    hobbies:['music','sports'],
    adress:{
        city:'Kocaeli',
        state:'Korfez'
    },
    getBirthyear:function(){
        return 2022-`${this.age}`//this.age;
    }
}

let val;
val = person
// Get specific value
val=person.firstname
val=person['firstname']
val=person.adress.city
val=person.getBirthyear()

console.log(val)

const people=[
    {name:'John',age:30},
    {name:'Mike',age:23},
    {name:'Nancy',age:40}
]

for(let i=0;i<people.length;i++){
    console.log(people[i].name,people[i].age)
}