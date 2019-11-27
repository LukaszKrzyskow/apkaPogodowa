import { addToLocalStorage } from "../localStorage/localStorage.js";
import { getPressure } from "./pressure.js";
import { getHumidity } from "./humidity.js";
import { getForecast } from "./getForecast.js";
export const getCityFromForm = e => {
  e.preventDefault();
  const input = document.querySelector("#search");
  addToLocalStorage("city", input.value);
  showData(input.value);
};

const showData = param => {
  getPressure(param);
  getHumidity(param);
  getForecast(param);
};
