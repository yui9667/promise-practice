//* This is week7 assignment

// function myPromise() {
//   const pokemonName = document
//     .getElementById('pokemonName')
//     .value.toLowerCase();
//   //I wanted to not show imgElement before an user add name, but it seems does not work. Can you see what is the problem?
//   const imgElement = document.getElementById('pokemonSprite');
//   imgElement.style.display = 'none';
//   if (!pokemonName) {
//     alert('Please enter a pokemon name');
//     return;
//   }

//   const fetchPokemon = new Promise((resolve, reject) => {
//     fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
//       .then((response) => {
//         if (!response.ok) {
//           reject('Could not found!');
//         }
//         return response.json();
//       })
//       .then((data) => {
//         resolve(data);
//       })
//       .catch((error) => {
//         reject(error);
//       });
//   });
//   fetchPokemon
//     .then((data) => {
//       const pokemonSprite = data.sprites.front_default;

//       imgElement.src = pokemonSprite;

//       imgElement.style.display = 'block';
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }

//*07/10/2024 Week 8: Asynchronous Programming: Async/Await

function myPromise() {
  const pokemonName = document
    .getElementById('pokemonName')
    .value.toLowerCase();
  const imgElement = document.getElementById('pokemonSprite');

  if (!pokemonName) {
    alert('Please enter a pokemon name');
    return;
  }
  imgElement.style.display = 'block';
  const fetchPokemon = async () => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      const data = await response.json();
      const pokemonSprite = data.sprites.front_default;
      imgElement.src = pokemonSprite;
    } catch (error) {
      console.error(error);
      alert('Could not found the pokemon😢Try again!');
    }
  };
  fetchPokemon();
}
