import {API_URL, API_KEY} from '../constants/constants.js'
const baseURL = 'http://api.openweathermap.org/data/2.5/forecast?q=Szczecin,pl&appid=70e481dfd5113c433d3c6402ec437cda';
export const getData = async (param) =>{
    try{
        const response = await fetch(`${API_URL}q=${param}&appid=${API_KEY}`);
        const data = await response.json();
    return data;
    }
    catch (err){
        console.log(err);
    }
};
export let city;
export const getPressure = async(param) => {
    await getData(param).then((data) => {
        city = data;
  });
  };

  /*export const getPressure = (param) => {
    getData(param).then((data) => {
      const pressure = data.list[0].main.pressure;
      console.log(pressure);
      const htmlPressure = document.getElementById("airpressure");
      const test1 = `<span>${pressure}</span>`;
      htmlPressure.innerHTML = `<span>${pressure} hPa</span>`;
  });
  };*/