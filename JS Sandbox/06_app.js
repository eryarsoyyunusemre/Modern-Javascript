//! -- STRİNG METHOD & CONCATENATION --

const firstName = 'Yunus'
const lastName = 'Emre'
const age = 20
const str ='Hello there,my name is Yunus'
const tags = 'web dev,web design,frontend'
 
let val;
val = firstName +' '+ lastName

// Append
val='Yunus '
val+='Emre'

val =`Hello my name is ${firstName} and Im an ${age} `

val = firstName.length;

// birleştirir
val= firstName.concat(' ',lastName)

// Change cas
val=firstName.toUpperCase()
val=firstName.toLowerCase()

val=firstName[1]

// indexOf()
val=firstName.indexOf('u')// içinde 2 var mı dıye bakar baştan
val=firstName.lastIndexOf('u')// sondan bakmaya başlar

// charAt()
val=firstName.charAt(1) //1.indexte ne oldugunu gosterir
// Get last char
val=firstName.charAt(firstName.length-1)

// substring() aralıgı alır
val=firstName.substring(0,4)

//slice() parçayı alır
val=firstName.slice(0,4)

//split()
val=str.split(' ') // içi boş olunca harfe böler içinde bir boşluk olursa kelımere
val=tags.split(',')// virgüle göre ayırır

//replace()
val =str.replace('Yunus','Emre')//yer değiştirir

// includes()
val=str.includes('Hello') // içinde olup olmadıgına

console.log(val)
