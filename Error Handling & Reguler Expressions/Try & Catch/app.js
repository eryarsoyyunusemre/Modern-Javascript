const user = {email:'jdoe@gmail.com'}

try{
  
  // Produce a ReferenceError
  // myFunction()
  if(!user.name){
    throw new SyntaxError('User has no name');
  }
}catch(e){
  console.log(e)
  // console.log(e.message)
  // console.log(e.name)
  // console.log(e instanceof ReferenceError)
}finally{ //! SONUC NE OLURSA OLSUN BURASI CALISIR
  console.log('Yunuss')
}

