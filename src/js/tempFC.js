import {getData} from './getData.js'

function  tempCtoF (tempC){
let tempF=(tempC*1.8)+32;
return tempF;
};
function  tempFtoC (tempF){
let tempC=0.555*(tempF-32);
return tempC;
};

tempCtoF(getData.tempr);
//document.----.innerHTML=tempCF(getData.tempr);
