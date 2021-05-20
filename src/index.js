import './sass/main.scss';

// import pokeTpl from './templates/pokemon-card.hbs';
// console.log(pokeTpl);

fetch('https://pokeapi.co/api/v2/ability/3')
  .then(response => {
    return response.json();
  })
  .then(pokemon => {
    const markUp = pokeTpl(pokemon);
  })
  .catch(error => {
    console.log(error);
  });
