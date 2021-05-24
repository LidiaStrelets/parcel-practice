const BASE_URL = 'https://pokeapi.co/api/v2';

function fetchPokemon(id) {
  return fetch(`${BASE_URL}/pokemon/${id}/`).then(response => {
    return response.json();
  });
}
export default { fetchPokemon };
