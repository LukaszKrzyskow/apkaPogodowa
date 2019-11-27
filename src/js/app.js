import "../css/main.css";
import { displaySuggestions } from "./shared/suggestions.js";
import { getCityFromForm } from "./shared/fomCity.js";
import { setMap } from "./mapa.js";

const init = () => {
  const input = document.querySelector("#search");
  const btnSearch = document.querySelector("#btn-search");
  btnSearch.addEventListener("click", getCityFromForm);
  //input.addEventListener("keyup", displaySuggestions);
};
document.getElementById("container").innerHTML=setMap;
init();
