

const getSuperHero = () => {
    fetch('https://superheroapi.com/api.php/747964616668923/245')
    .then(response => response.json())
    .then(json => console.log(json.name))
}
