// -- 1.BOLUM--
//Yukarıdan mesaj olarak gelir
// alert('Hello World'); 

// Log to console

/*console.log('Hello World')
console.log(123)
console.log(true)
var greeting = 'Hello'
console.log(greeting)
// Array
console.log([1,2,3,4])
// Object
console.log({a:1,b:2})
// tablo halinde yapar
console.table({a:1,b:2})


// Error verir
console.error('This is some error')
// Consolu temizler
console.clear()
// Warning verir
console.warn('This is some warning')
// timer başlangıç ile bitiş arasındaki süreyi verir
 
console.time('Hello')
console.log('Hello World')
console.log(123)
console.log(true)
var greeting = 'Hello'
console.log(greeting)
console.timeEnd('Hello')

console.clear()
*/

// -- 2.BOLUM --
// var,let const

// var ve lete yenıden deger atanabılır
/*
 
 VAR

var name = 'Yunus Emre';
console.log(name);
name='Yakup';
console.log(name);

var greeting
console.log(greeting)
greeting = 'Hello'
console.log(greeting)

*/
// letter,number,_,$
// Can not start with number

// Multi word variables

// LET

// let ad = 'Yunus Emre';
// console.log(ad);
// ad='Yakup';
// console.log(ad);

// let greeting
// console.log(greeting)
// greeting = 'Hello'
// console.log(greeting)

// CONST

// const name ='Yunus'
// console.log(name)
// Can not reassign
// name = 'Emre'

// Object

// const person ={
//     name:'Yunus',
//     age:20
// }
// person.name='Emre'
// console.log(person)

// Array
// const numbers =[1,2,3,4]
// console.log(numbers)
// numbers.push(6,7)
// console.log('6,7 eklenir',numbers)

// -- 3.BOLUM --

// PRIMITIVE

// String
// const name ='Yunus'
// Number
// const age = 20
// Boolean
// const hasKids= false;
// Null
// const car = null;
// Undefined
// let text;
// Symbol
// const sym =Symbol()

// console.log(typeof name,name)
// console.log(typeof age,age)
// console.log(typeof hasKids,hasKids)
// console.log(typeof car,car)
// console.log(typeof text,text)
// console.log(typeof sym,sym)

// REFERENCES TYPES - Objects
// Array
// const hobbies =['movies','music']
// Object literal
// const adress = {
//     city:'Kocaeli',
//     state:'Korfez'
// }
// const today = new Date()


// console.log(typeof hobbies,hobbies)
// console.log(typeof adress,adress)
// console.log(typeof today,today)

// -- 4.BOLUM --

// let val;

// Number to String
// val=String(555);
// val = String(4+4)

// Bool to string
// val = String(true)

// Date to String
// val = String(new Date())

// Array to String
// val = String([1,2,3,4])

// toString()
// val=(5).toString()
// val=(true).toString()

// String to Number
// val =Number('5')

// Bool to Number
// val = Number(true)
// val = Number(false)
// val = Number(null)
// val=Number('hello')
// val=Number([1,2,3,4])

// val=parseInt('100.10')
// val = parseFloat('100.30')


// Output
// console.log(val)
// console.log(typeof val)
// console.log(val.length)
// console.log(val.toFixed(2))

// const val1 = String(5)
// const val2 = 6
// const sum = val1+val2

// console.log(sum)
// console.log(typeof sum)

// -- 5.BOLUM --

const num1=100
const num2 =50

let val1
// Simple math with number
val1=num1+num2
val1=num1*num2
val1=num1-num2
val1=num1/num2
val1=num1%num2

// Math Object
val1=Math.PI
val1=Math.E
// .5 ve yukarısı ise bir üste yuvarlar
val1=Math.round(2.5)
// bir üste yuvarlar .dan sonra sayı varsa
// val1=Math.ceil(2.4)
// virgülden sonra sayıda olsa 1 alta yuvarlar
val1=Math.floor(2.7)
// karekök alır
val1= Math.sqrt(16)
// sayıyı negatifte pozitif yapar
val1=Math.abs(-3)
// karesını alır
val1=Math.pow(2,4)

val1=Math.min(1,3,5,6,2,45,12)
val1=Math.max(1,3,5,6,2,45,12)
val1=Math.floor(Math.random()*100)

console.log(val1)
