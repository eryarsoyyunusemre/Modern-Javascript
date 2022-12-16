//* ARRAYS & ARRAY METHODS

// Create some arrays
const numbers = [43,56,33,23,44,36,5]
const numbers2 = new Array(22,45,33,76,54)
const fruit = ['Apple','Banana','Orange']
const mixed=[22,'Hello',true,undefined,null,{a:1,b:2},new Date()]

// console.log(mixed)

let val;

// Get array length
val=numbers.length
// Check if is array
val=Array.isArray(numbers)
// Get single value
val = numbers[3]
val=numbers[0]
// Insert into array -- sayıyı değiştirir
numbers[2]=100

// Find of index
val=numbers.indexOf(36)

//? MUTATING ARRAYS
numbers.push(31) // sona sayı ekler
numbers.unshift(120) // başa sayı ekler
numbers.pop() // sondan sayıyı sıler
 numbers.shift() // baştan sayı siler
//! Splice values - sayıyı böler 
// numbers.splice(0,2)
// reverse-tersine döner
numbers.reverse

// Concatenate array -- birleştirir
val=numbers.concat(numbers2)

// sorting arrays
val = fruit.sort()
// val=numbers.sort()

// Use the "compare function"
// küçükten büyüğe
val=numbers.sort(function(x,y){
    return x-y
})
// büyükten küçüğe
val=numbers.sort(function(x,y){
    return y-x
})

// Find -- 50 den küçük ilk sayı
function under50(num){
 return num < 50      
}
val=numbers.find(under50)

console.log(numbers)
console.log(val)