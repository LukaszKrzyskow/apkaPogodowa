import {getData} from './getData.js'

export function  tempCtoF (tempC){
let tempF=(tempC*1.8)+32;
return tempF;
};
export function  tempFtoC (tempF){
let tempC=0.555*(tempF-32);
return tempC;
};

export const temp=tempCtoF(getData.tempr);
//document.----.innerHTML=tempCF(getData.tempr);
