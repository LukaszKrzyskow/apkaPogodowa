const moment = require("moment");
import { getData } from "./getData.js";
import { API_ICON } from "../constants/constants.js";
import { kelvinToCelsius } from "../helpers/kelvinToCelsius.js";

export const getForecast = param => {
  const forecastTile = document.querySelector(".forecast-tile");
  const forecastContainer = document.querySelector(".forecast");
  forecastContainer && forecastContainer.remove();
  getData(param).then(data => {
    const forecastHTML = document.createElement("div");
    forecastHTML.classList.add("forecast");
    const res = data.list.filter(f => f.dt_txt.includes("12:00:00"));
    res.forEach(w => {
      const div = document.createElement("div");
      const icon = `<img src="${API_ICON}/${w.weather[0].icon}.png" alt="${w.weather[0].description}" />`;
      const weekDay = `<span>${moment(w.dt_txt).format("ddd")}</span>`;
      div.innerHTML = `${weekDay} ${icon} <span>${kelvinToCelsius(
        w.main.temp
      )} &#x2103</span>`;
      forecastHTML.appendChild(div);
    });
    forecastTile.appendChild(forecastHTML);
  });
};
