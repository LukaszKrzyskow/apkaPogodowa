import { KELVIN } from "../constants/constants.js";

export const kelvinToCelsius = param => {
  const result = param - KELVIN;
  return result.toFixed();
};
