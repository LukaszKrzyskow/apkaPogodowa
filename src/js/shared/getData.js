import {API_URL, API_KEY} from '../constants/constants.js'

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