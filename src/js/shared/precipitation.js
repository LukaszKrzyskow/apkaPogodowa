import {getData} from './getData.js';

export const getPrecipitation = (param) => {
    const htmlPrecipitation = document.getElementById("precipitation");
    htmlPrecipitation.innerHTML="";
    getData(param).then((data) => {
        let i;
        for (i = 0; i < 5; i++) {
            const precipitationTime = (data.list[i].dt_txt).substring(11, 16);
            if (data.list[i].rain){
                const precipitation = Object.values(data.list[i].rain)[0];
                htmlPrecipitation.innerHTML += `<div><span>${precipitation} mm</span><span>${precipitationTime}</span></div>`;
            }
            else{
                htmlPrecipitation.innerHTML += `<div><span>0 mm</span><span>${precipitationTime}</span></div>`;
            }
        }
    });
};