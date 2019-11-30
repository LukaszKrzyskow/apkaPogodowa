import "../css/main.css";
import { displaySuggestions } from "./shared/suggestions.js";
import { getCityFromForm, showData } from "./shared/fomCity.js";
import { geolocation } from "./shared/geolocation.js";
import { getFromLocalStorage } from "./localStorage/localStorage";

const init = () => {
  getFromLocalStorage("city") && showData(getFromLocalStorage("city"));
  const input = document.querySelector("#search");
  const btnSearch = document.querySelector("#btn-search");
  const useCurrentLocation = document.querySelector("#useCurrentLocation");
  btnSearch.addEventListener("click", getCityFromForm);
  // input.addEventListener("keyup", displaySuggestions);
  useCurrentLocation.addEventListener("click", geolocation);
};

init();
