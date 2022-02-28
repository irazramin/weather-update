// https://api.openweathermap.org/data/2.5/forecast?q=tangail&appid=f74593b83563c031a2b9557c7705e26d
const API_KEY = '3dba3042bbe0f1ea998f5d53ce8b370f';
let cityName = '';
const searchBarOpening = document.getElementById('search-input');
const searchCity = document.getElementById('search-city');
const loader = document.getElementById('loader');
const weatherSituation = document.getElementById('weather-situation');
const weatherIcon = document.getElementById('weather-icon');
const dayTo = document.getElementById('day');
const time = document.getElementById('hour');
const uvIndex = document.getElementById('uv-index');
const windStatus = document.getElementById('wind-status');
const sunrise = document.getElementById('sunrise');
const sunset = document.getElementById('sunset');
const humidity = document.getElementById('humidity');
const visibility = document.getElementById('visibility');
const airQuality = document.getElementById('air-quality');
const todayTemps = document.getElementById('today-temp');
const fullWeekName = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday'];
searchBarOpening.addEventListener('click',() =>{
    searchBarOpening.classList.add('opening');
    searchCity.focus()
});

const getCityName = () =>{
    searchCity.addEventListener('keyup' , (e) =>{
        if(e.keyCode === 13){
            cityName = e.target.value;
            loader.style.display = 'block';
            getWeatherApi(cityName);
        }
    });
    searchCity.value = '';

}
getCityName();

const getWeatherApi = async  (city) =>{
    searchCity.value = '';
    console.log(city);
    try {
        // fetch
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
        );
        const data  = await res.json();
        todayWeatherData(data);
        otherUpdates(data);
        loader.style.display = 'none'
    } catch (error) {
        console.log(error);
        loader.style.display = 'none';
    }
}

getWeatherApi('dhaka');

const todayWeatherData = (data) =>{
  // fetch data
  const weather = data.list[0].weather[0];
  // js date
  const wD = `${data.list[0].dt_txt.slice(0, 10)}`;
  const date = new Date(wD);
  const date2 = new Date();
  const day = date.getDay();
  const temp = Math.round(data.list[0].main.temp);
  // set data to elements
  todayTemps.innerText = `${temp}°`;
  time.innerText = `${date2.getHours()} : ${date2.getMinutes()}`;
  dayTo.innerText = `${fullWeekName[day]},`;
  weatherSituation.innerText = weather.description;
  weatherIcon.src = `http://openweathermap.org/img/w/${weather.icon}.png`;
}

const otherUpdates = (data) =>{
    const weatherData = data.list[0];
    windStatus.innerText = `${weatherData.wind.speed}`;
    console.log(weatherData.wind.speed);
}