import {getData} from './getData.js'

function  tempCF (tempC){
let tempF=(tempC*1.8)+32;
return tempF;
};
tempCF(getData.tempr);