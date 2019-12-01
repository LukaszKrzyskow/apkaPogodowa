import { getData } from "./getData";
import moment from "moment";
import { addToLocalStorage } from "../localStorage/localStorage";
import { API_ICON } from "../constants/constants";
import { geolocation } from "./geolocation";

export const getGeneral = param => {
  const generalTile = document.querySelector("#general-data");
  generalTile.innerHTML = "";
  getData(param).then(data => {
    const { description, icon } = data.list[0].weather[0];
    const { temp, temp_min, temp_max } = data.list[0].main;
    const { name, country } = data.city;
    const weekday = moment().format("ddd");
    const actualDate = moment().format("DD.MM");
    const actualTime = moment().format("LT");
    const generalTile = document.querySelector("#general-data");
    const localisation = document.createElement("div");
    localisation.classList.add("general-tile-localisation");
    const btnCurrentLocation = document.createElement("button");
    btnCurrentLocation.classList.add("btn");
    btnCurrentLocation.innerHTML = '<i class="fas fa-location-arrow"></i>';
    btnCurrentLocation.addEventListener("click", () => geolocation());
    btnCurrentLocation.title = "Use geolocation";
    const btnSaveCity = document.createElement("button");
    btnSaveCity.classList.add("btn");
    btnSaveCity.innerHTML = '<i class="far fa-star"></i>';
    btnSaveCity.addEventListener("click", () =>
      addToLocalStorage("city", name)
    );
    btnSaveCity.title = "Remember you city";
    localisation.innerHTML = `<span class="general-tile-header">${name}, ${country}</span>`;
    const btns = document.createElement("div");
    btns.classList.add("general-tile-buttons");
    btns.appendChild(btnCurrentLocation);
    btns.appendChild(btnSaveCity);
    localisation.appendChild(btns);
    generalTile.appendChild(localisation);
    const actualDateTime = document.createElement("span");
    actualDateTime.innerHTML = `<span>${weekday}, ${actualDate} ${actualTime}</span>`;
    generalTile.appendChild(actualDateTime);

    const actualTemp = document.createElement("span");
    actualTemp.classList.add("general-tile-temp-now");
    actualTemp.innerHTML = `${temp.toFixed()} &deg;`;
    generalTile.appendChild(actualTemp);

    const descWeather = document.createElement("span");
    descWeather.classList.add("general-tile-conditions");
    descWeather.innerHTML = `<img src="${API_ICON}${icon}.png" alt="${description}" /> ${description}`;
    generalTile.appendChild(descWeather);

    const res = data.list.filter(f =>
      f.dt_txt.includes(moment().format("YYYY-MM-DD"))
    );
    const maxTemp = Math.max(...res.map(f => f.main.temp_max));
    const minTemp = Math.min(...res.map(f => f.main.temp_min));
    const minmax = document.createElement("div");
    minmax.classList.add("general-tile-minmax");
    minmax.innerHTML = `
      <i class="fas fa-arrow-down"></i>
      <span>
         ${minTemp.toFixed()}
      </span>
      <i class="fas fa-arrow-up"></i>
      <span>
         ${maxTemp.toFixed()}
      </span>
    `;
    generalTile.appendChild(minmax);
  });
};
