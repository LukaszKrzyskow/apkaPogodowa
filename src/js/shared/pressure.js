import {getData} from './getData.js';

export const getPressure = (param) => {
    getData(param).then((data) => {
        const htmlPressure = document.getElementById("airpressure");
        htmlPressure.innerHTML = "";
        let i;
        for (i = 0; i < 5; i++) {
            const pressure = data.list[i].main.pressure;
            const pressureTime = (data.list[i].dt_txt).substring(11, 16);
            htmlPressure.innerHTML += `<div><span>${pressure}hPa</span> <span>${pressureTime}</span></div>`;
        }
    });
};