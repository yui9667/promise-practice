function myPromise() {
  const pokemonName = document
    .getElementById('pokemonName')
    .value.toLowerCase();
  const imgElement = document.getElementById('pokemonSprite');
  imgElement.style.display = 'none';
  if (!pokemonName) {
    alert('Please enter a pokemon name');
    return;
  }

  const fetchPokemon = new Promise((resolve, reject) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        if (!response.ok) {
          reject('Could not found!');
        }
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
  fetchPokemon
    .then((data) => {
      const pokemonSprite = data.sprites.front_default;

      imgElement.src = pokemonSprite;

      imgElement.style.display = 'block';
    })
    .catch((error) => {
      console.error(error);
    });
}
