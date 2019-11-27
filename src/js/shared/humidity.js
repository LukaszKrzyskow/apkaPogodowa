import {getData} from './getData.js';

//air humidity
export const getHumidity = (param) => {
    const htmlHumidity = document.getElementById("airhumidity");
    htmlHumidity.innerHTML="";
    getData(param).then((data) => {
        let i;
        for (i = 0; i < 6; i++) {
            const humidity = data.list[i].main.humidity;
            const humidityTime = (data.list[i].dt_txt).substring(11, 16);
            htmlHumidity.innerHTML += `<div><span>${humidity}%</span> <span>${humidityTime}</span></div>`;
        }
    });
};