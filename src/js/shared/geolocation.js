import { getForecastData } from './getForecastData.js'

export const geolocation = () => {
  navigator.geolocation.getCurrentPosition(getForecastData,error);
}


const error = error => {
    console.log(error);
}