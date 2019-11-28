import "../css/main.css";
import { displaySuggestions } from "./shared/suggestions.js";
import { getCityFromForm } from "./shared/fomCity.js";
import { geolocation } from './shared/geolocation.js';
import {getPressure} from './shared/pressure.js';

const init = () => {
  const input = document.querySelector("#search");
  const btnSearch = document.querySelector("#btn-search");
  const useCurrentLocation = document.querySelector("#useCurrentLocation")
  btnSearch.addEventListener("click", getCityFromForm);
  input.addEventListener("keyup", displaySuggestions);
  useCurrentLocation.addEventListener("click", geolocation);

  geolocation();
};
getPressure('Szczecin');
init();
