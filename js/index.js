// https://api.openweathermap.org/data/2.5/forecast?q=tangail&appid=f74593b83563c031a2b9557c7705e26d
// API KEY : f74593b83563c031a2b9557c7705e26d

const searchBarOpening = document.getElementById('search-input');
const searchCity = document.getElementById('search-city');
searchBarOpening.addEventListener('click',() =>{
    searchBarOpening.classList.add('opening');
    searchCity.focus()
})