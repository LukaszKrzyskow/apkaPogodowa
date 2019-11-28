import { addToLocalStorage } from "../localStorage/localStorage.js";
import { getPressure } from "./pressure.js";
import { getHumidity } from "./humidity.js";
import { getForecast } from "./getForecast.js";
import { getGeneral } from "./general.js";
import { getForecastData } from "./getForecastData.js";
export const getCityFromForm = e => {
  e.preventDefault();
  const input = document.querySelector("#search");
  showData(input.value);
};

export const showData = param => {
  getPressure(param);
  getHumidity(param);
  getForecast(param);
  getGeneral(param);
  getForecastData(param);
};
