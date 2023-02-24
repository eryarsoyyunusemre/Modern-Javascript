try{
  // Produce a ReferenceError
  myFunction()
}catch(e){
  console.log(e)
  // console.log(e.message)
  // console.log(e.name)
  // console.log(e instanceof ReferenceError)
}finally{ //! SONUC NE OLURSA OLSUN BURASI CALISIR
  console.log('Yunus')
}

