const superHeroToken = "747964616668923";
const baseURL = `https://superheroapi.com/api.php/${superHeroToken}`;

const newHeroButton = document.getElementById("newHeroButton");
const heroImageDiv = document.getElementById("heroImage");
const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");

const getSuperHero = (id, name) => {
  fetch(`${baseURL}/${id}`)
    .then((response) => response.json())
    .then((json) => {
      console.log(json.powerstats);
      const superHero = json;
      showHeroInfo(superHero);
    });
};

const statToEmoji = {
  intelligence: "🧠",
  strength: "💪",
  speed: "⚡",
  durability: "🏋️‍♂️",
  power: "📊",
  combat: "⚔️",
};

const showHeroInfo = (character) => {
  const name = `<h2>${character.name}</h2>`;

  const img = `<img src="${character.image.url}" height=200 width=200/>`;

  const stats = Object.keys(character.powerstats)
    .map((stat) => {
      return `<p>${statToEmoji[stat]} ${stat.toUpperCase()}: ${
        character.powerstats[stat]
      }</p>`;
    })
    .join("");

  heroImageDiv.innerHTML = `${name}${img}${stats}`;
};

const getSearchSuperHero = (name) => {
  //console.log(searchInput.value);
  fetch(`${baseURL}/search/${name}`)
    .then((response) => response.json())
    .then((json) => {
      const hero = json.results[0];
      showHeroInfo(hero);
    });
};

const randomHero = () => {
  const numberOfHeroes = 731;
  return Math.floor(Math.random() * numberOfHeroes) + 1;
};

newHeroButton.onclick = () => getSuperHero(randomHero());
searchButton.onclick = () => getSearchSuperHero(searchInput.value);

searchInput.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    e.preventDefault();
    searchButton.click();
    searchInput.value = ''
  }
});
