import { addToLocalStorage } from "../localStorage/localStorage.js";
export const getCityFromForm = e => {
  e.preventDefault();
  const input = document.querySelector("#search");
  addToLocalStorage("city", input.value);
};
