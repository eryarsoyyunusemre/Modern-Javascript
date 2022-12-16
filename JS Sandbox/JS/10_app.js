//! DATES & TİMES
let val;

const today= new Date()
let birthday = new Date('9-10-1981 11:25:00')
birthday = new Date('May 10 1981')

val=birthday.getMonth()
val=today.getDate()
val=today.getDay()
val=today.getFullYear()
val=today.getHours()
val=today.getMinutes()
val=today.getSeconds()
val=today.getMilliseconds()
val=today.getTime() // 1 Ocak 1970 ten bu yana geçen zaman

birthday.setMonth(6)
birthday.setDate(20)
birthday.setFullYear(2002)
birthday.setHours(13)
birthday.setMinutes(00)
birthday.setSeconds(55)


console.log(val)
console.log(birthday)