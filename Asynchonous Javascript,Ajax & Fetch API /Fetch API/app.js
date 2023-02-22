document.getElementById('button1').addEventListener('click',getText);
document.getElementById('button2').addEventListener('click',getJson);
document.getElementById('button3').addEventListener('click',getExternal);

// Get local text file data
function getText(){
  fetch('test.txt').then(function(res){
    return res.text()
  })
  .then(function(data){
    console.log(data)
    document.getElementById('output').innerHTML = data
  })
   .catch(function(err){
    console.log(err)
  })
}

// Get local JSON data
function getJson(){
  fetch('post.json').then(function(res){
    return res.json()
  })
  .then(function(data){
    console.log(data)
    let output = ''
    data.forEach(function(post){
      output+=`<li>${post.title}</li>`
      output+=`<li>${post.body}</li> <br>`
    })

    document.getElementById('output').innerHTML = output
  })
   .catch(function(err){
    console.log(err)
  })
}
// Get from EXTERNAl API
function getExternal(){
  fetch('https://api.github.com/users').then(function(res){
    return res.json()
  })
  .then(function(data){
    console.log(data)
    let output = ''
    data.forEach(function(user){
      output+=`<li>ID: ${user.id}</li>`
      output+=`<li>LOGIN: ${user.login}</li>`
      output+=`<li>NODE ID: ${user.node_id}</li> <br>`
    })

    document.getElementById('output').innerHTML = output
  })
   .catch(function(err){
    console.log(err)
  })
}