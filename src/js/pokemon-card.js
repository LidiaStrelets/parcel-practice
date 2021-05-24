import pokeTpl from './../templates/pokemon-card.hbs';
import API from './api-service.js';
import getRefs from './getRefs.js';

const refs = getRefs();
refs.form.addEventListener('submit', handleSearch);

function handleSearch(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const userId = form.elements.query.value;

  API.fetchPokemon(userId)
    .then(renderPokemonCard)
    .catch(handleFetchError)
    .finally(() => form.reset());
}

function renderPokemonCard(pokemon) {
  const markUp = pokeTpl(pokemon);
  refs.box.innerHTML = markUp;
}
function handleFetchError(error) {
  alert('Something went wrong');
}
