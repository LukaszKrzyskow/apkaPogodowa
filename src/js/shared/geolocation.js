import { showData } from "./fomCity";

export const geolocation = () => {
  navigator.geolocation.getCurrentPosition(showData, error);
};

const error = error => {
  console.log(error);
};
