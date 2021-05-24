const BASE_URL = 'http://localhost:3000';

function removeBook(id) {
  const options = {
    method: 'DELETE',
  };

  return fetch(`${BASE_URL}/books/${id}`, options).then(r => r.json());
}
removeBook(6);
removeBook(7);
removeBook(9);
