const http = new EasyHTTp;

// Get Users
// const users = http.get('https://jsonplaceholder.typicode.com/users')
// .then(data => console.log(data))
// .catch(err => console.log(err))


// Create User Data
const data = {
  name:'Jhon Doe',
  username:'jhondoe',
  email:'jdoe@gmail.com'
}

// Create Post
// http.post('https://jsonplaceholder.typicode.com/users',data)
// .then(data => console.log(data))
// .catch(err => console.log(err))


// Update Post
// http.put('https://jsonplaceholder.typicode.com/users/2',data)
// .then(data => console.log(data))
// .catch(err => console.log(err))


// Delete Post
http.delete('https://jsonplaceholder.typicode.com/users/2')
.then(data => console.log(data))
.catch(err => console.log(err))
