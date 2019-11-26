import "../css/main.css";
import { displaySuggestions } from "./shared/suggestions.js";
import { getCityFromForm } from "./shared/fomCity.js";
import { geolocation } from './shared/geolocation.js';

const init = () => {
  const input = document.querySelector("#search");
  const btnSearch = document.querySelector("#btn-search");
  btnSearch.addEventListener("click", getCityFromForm);
  input.addEventListener("keyup", displaySuggestions);
  geolocation();
};

init();
