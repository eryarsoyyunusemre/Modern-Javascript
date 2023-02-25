const url = 'https://api.openweathermap.org/data/2.5/' ;
const key  = '15f13747816da06d0767cd3cdd813cfe';

const searchBar = document.querySelector('#searchBar')
searchBar.addEventListener('keypress',setQuery)

function setQuery(e){
  if(e.keyCode =='13'){
    getResult(searchBar.value)
  }
}

function getResult(cityName){
 let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
  fetch(query)
  .then(weather =>{
    return weather.json()
  })
  .then(displayResult)
}

function displayResult(result){
 let city = document.querySelector('.city')
 city.innerText = `${result.name},${result.sys.country}`

 let temp = document.querySelector('.temp')
 temp.innerText = `${Math.round(result.main.temp)}°C`
 

 let desc = document.querySelector('.desc')
 desc.innerText = result.weather[0].description;


 let minmax = document.querySelector('.minmax')
 minmax.innerText = `${Math.round(result.main.temp_min)}°C / ${Math.round(result.main.temp_max)}°C `

}


