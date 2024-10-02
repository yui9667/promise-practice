const myPromise = new Promise((resolve, reject) => {
  fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
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
myPromise
  .then((data) => {
    console.log(data.name);
  })
  .catch((error) => {
    console.error(error);
  });
