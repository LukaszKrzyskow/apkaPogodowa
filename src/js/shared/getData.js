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