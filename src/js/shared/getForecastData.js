import { API_URL, API_KEY } from '../constants/constants.js'

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
      const speedEl = document.getElementById("winda");
      const icon = `http://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`
      document.querySelector("#wicon").setAttribute('src',icon);

      infoEl.innerHTML= `${location} Current Temperature - ${tempr}°C`;
      sunriseEl.innerHTML= `Sunrise: ${sunrise} Sunset: ${sunset}`
      speedEl.innerHTML= `Wind Speed: ${speed} m/s`;
  });
}
