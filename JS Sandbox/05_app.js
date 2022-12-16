//* -- NUMBERS & THE MATH OBJECT --

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
val1=Math.ceil(2.4)
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