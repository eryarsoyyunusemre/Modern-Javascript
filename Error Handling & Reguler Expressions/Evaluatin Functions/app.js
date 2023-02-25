let re;
re = /hello/i; // i = case insensetive = büyük küçük harf duyarlılıgı kalkar

// console.log(re)
// console.log(re.source)

//? exec() - Return result in an array or null
// const result = re.exec('brad hello world') // kacıncı sırada oldunu verır
// console.log(result)
// console.log(result[0])
// console.log(result.index)
// console.log(result[0].input)

//! test() - Returns true or false - İçinde var mı yok mu
// const result = re.test('Hello')
// console.log(result)

//* match() - Return result array or null
// const str = 'Yunus Hello There'
// const result = str.match(re)
// console.log(result)

//? search() Returns index of the first match if not found returns -1
// const str = 'Yunus Hello There' // varsa ındex yoksa -1
// const result = str.search(re)
// console.log(result)

//! replace() yer değiştirir
const str = 'Hello There'
const newStr = str.replace(re,'Hi')
console.log(newStr)