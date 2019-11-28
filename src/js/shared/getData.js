import { API_URL, API_KEY } from "../constants/constants.js";

export const getData = async param => {
  let searchBy =
    param && param.coords
      ? `lat=${param.coords.latitude}&lon=${param.coords.longitude}`
      : `q=${param}`;
  try {
    const response = await fetch(
      `${API_URL}${searchBy}&units=metric&appid=${API_KEY}`
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
