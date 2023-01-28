const superHeroToken = "747964616668923";
const baseURL = `https://superheroapi.com/api.php/${superHeroToken}`;

const heroImageDiv = document.getElementById("heroImage");

const getSuperHero = (id, name) => {
  fetch(`${baseURL}/${id}`)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      heroImageDiv.innerHTML = `<img src="${json.image.url}" height=200 width=200/>`;
    });
};
//Taking the button and store it in a variable
const newHeroButton = document.getElementById("newHeroButton");

//Randomly display a hero when the button is clicked
const randomHero = () => {
  const numberOfHeroes = 731;
  return Math.ceil(Math.random() * numberOfHeroes);
};
newHeroButton.onclick = () => getSuperHero(randomHero());
