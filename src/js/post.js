const BASE_URL = 'http://localhost:3000';

const firstBook = {
  title: 'Алиса в стране чудес',
  author: 'Льюис Кэрролл',
  genres: ['фентези'],
  raiting: 7.1,
};

function addBook(newBook) {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(newBook),
  };

  return fetch(`${BASE_URL}/books`, options).then(r => r.json());
}

addBook(firstBook);

const secondBook = {
  title: 'Гарри Поттер',
  author: 'Джоанн Роулинг',
  genres: ['фентези'],
  raiting: 10,
};

addBook(secondBook);
