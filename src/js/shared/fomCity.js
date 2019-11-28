import { addToLocalStorage } from "../localStorage/localStorage.js";
import { getPressure } from "./pressure.js";
import { getHumidity } from "./humidity.js";
import { getForecast } from "./getForecast.js";
<<<<<<< HEAD
import { getGeneral } from "./general.js";
import { getForecastData } from "./getForecastData.js";
=======
import { getPrecipitation } from "./precipitation.js";
>>>>>>> Edited precipitation tile
export const getCityFromForm = e => {
  e.preventDefault();
  const input = document.querySelector("#search");
  showData(input.value);
};

export const showData = param => {
  getPressure(param);
  getHumidity(param);
  getForecast(param);
<<<<<<< HEAD
  getGeneral(param);
  getForecastData(param);
=======
  getPrecipitation(param);
>>>>>>> Edited precipitation tile
};
