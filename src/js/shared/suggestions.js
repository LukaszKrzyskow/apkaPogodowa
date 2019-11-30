import cities from "../../json/world-cities_json";
const getCitiesFetch = async () => {
  try {
    const response = await fetch(API);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const filterSuggestions = what => {
  return cities.filter(({ name }) => {
    const regex = new RegExp(`^${what}`, "gi");
    return name.match(regex);
  });
};

export async function displaySuggestions() {
  const suggestiosnUl = document.querySelector("#suggestions-list");
  const suggestions = await filterSuggestions(this.value);
  const html = await suggestions
    .map(({ name, country }) => {
      const regex = new RegExp(this.value, "gi");
      const city = name.replace(regex, `${this.value}`);
      return `<li>${city}, ${country}</li>`;
    })
    .join("");

  suggestiosnUl.innerHTML = html;
}
