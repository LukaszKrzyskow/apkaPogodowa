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

  export const getPressure = (param) => {
    getData(param).then((data) => {
        let i;
        for (i=0; i<6; i++){
            const pressure = data.list[i].main.pressure;
            const pressureTime = (data.list[i].dt_txt).substring(11,16);
            console.log(pressure, pressureTime);
            const htmlPressure = document.getElementById("airpressure");
            htmlPressure.innerHTML += `<div><span>${pressure}hPa at ${pressureTime}</span></div>`;
        }
    //   const pressure = data.list[0].main.pressure;
    //   console.log(pressure);
    //   const htmlPressure = document.getElementById("airpressure");
    //   const test1 = `<span>${pressure}</span>`;
    //   htmlPressure.innerHTML = `<span>${pressure} hPa</span>`;
  });
  };