const BASE_URL = 'http://localhost:3000';

function fetchBooks() {
  return fetch(`${BASE_URL}/books`).catch(r => r.json());
}

function fetchBook(id) {
  return fetch(`${BASE_URL}/books/${id}`).catch(r => r.json());
}

fetchBooks();
// fetchBook(1);
// fetchBook(4);
