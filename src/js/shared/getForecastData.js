import { API_URL, API_KEY } from '../constants/constants.js'

const degToCard = deg => {
    if (deg>11.25 && deg<33.75){
      return "NNE";
    }else if (deg>33.75 && deg<56.25){
      return "ENE";
    }else if (deg>56.25 && deg<78.75){
      return "E";
    }else if (deg>78.75 && deg<101.25){
      return "ESE";
    }else if (deg>101.25 && deg<123.75){
      return "ESE";
    }else if (deg>123.75 && deg<146.25){
      return "SE";
    }else if (deg>146.25 && deg<168.75){
      return "SSE";
    }else if (deg>168.75 && deg<191.25){
      return "S";
    }else if (deg>191.25 && deg<213.75){
      return "SSW";
    }else if (deg>213.75 && deg<236.25){
      return "SW";
    }else if (deg>236.25 && deg<258.75){
      return "WSW";
    }else if (deg>258.75 && deg<281.25){
      return "W";
    }else if (deg>281.25 && deg<303.75){
      return "WNW";
    }else if (deg>303.75 && deg<326.25){
      return "NW";
    }else if (deg>326.25 && deg<348.75){
      return "NNW";
    }else{
      return "N"; 
    }
  }

export function getForecastData(position) {
  fetch(`${API_URL}lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${API_KEY}`)
    .then(response => {
        return response.json()
    }).then(function(data) {
      const tempr = data.list[0].main.temp;
      const location = data.city.name;
      const infoEl = document.getElementById("info");
      const sunriseEl = document.getElementById("tequilasunrise")
      const sunrise = new Date(data.city.sunrise*1000).toLocaleTimeString();
      const sunset = new Date(data.city.sunset*1000).toLocaleTimeString();
      const speed = data.list[0].wind.speed;
      const windDirection = degToCard(data.list[0].wind.deg);
      const speedEl = document.getElementById("winda");
      
      const icon = `http://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`
      document.querySelector("#wicon").setAttribute('src',icon);


      infoEl.innerHTML= `${location} Current Temperature - ${tempr}°C`;
      sunriseEl.innerHTML= `
      <div class="sundiv">
         <img class="sunicons" src="./src/img/sunrise.png">
         <p>Sunrise: ${sunrise}</p>
      </div>
      <div class="sundiv">
        <img class="sunicons" src="./src/img/sunset.png">
        <p> Sunset: ${sunset} </p>
      </div>`
      speedEl.innerHTML= `Wind Speed: ${speed} m/s Wind Direction: ${windDirection}`;
  });
}
