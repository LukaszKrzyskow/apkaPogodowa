import { getForecastData } from './getForecastData.js'

export const geolocation = () => {
    console.log('chuj');
    navigator.geolocation.getCurrentPosition(getForecastData,error);
}


const error = error => {
    console.log(error);
}