const API = 'https://raw.githubusercontent.com/lutangar/cities.json/master/cities.json';
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
  return getCitiesFetch().then(data => {
    return data.filter(({ name }) => {
      const regex = new RegExp(`^${what}`, "gi");
      return name.match(regex);
    });
  });
};

export async function displaySuggestions() {
  if (this.value.length > 3) {
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
}
