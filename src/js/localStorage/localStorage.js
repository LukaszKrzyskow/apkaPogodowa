export const addToLocalStorage = (key, value) =>
  localStorage.setItem(key, value);
export const getFromLocalStorage = key => localStorage.getItem(key);
export const removeFromLocalSotrage = key => localStorage.removeItem(key);
