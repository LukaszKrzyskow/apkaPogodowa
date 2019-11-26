import {getData} from './getData.js';

export const getPressure = (param) => {
    getData(param).then((data) => {
        let i;
        for (i = 0; i < 6; i++) {
            const pressure = data.list[i].main.pressure;
            const pressureTime = (data.list[i].dt_txt).substring(11, 16);
            console.log(pressure, pressureTime);
            const htmlPressure = document.getElementById("airpressure");
            htmlPressure.innerHTML += `<div><span>${pressure}hPa at ${pressureTime}</span></div>`;
        }
    });
};