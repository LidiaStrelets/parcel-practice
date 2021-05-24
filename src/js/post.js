const BASE_URL = 'http://localhost:3000';

const firstBook = {
  title: 'Алиса в стране чудес',
  author: 'Льюис Кэрролл',
  genres: ['фентези'],
  raiting: 7.1,
};
const secondBook = {
  title: 'Гарри Поттер',
  author: 'Джоанн Роулинг',
  genres: ['фентези'],
  raiting: 10,
};

async function addBook(bookToPost) {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(bookToPost),
  };

  const responce = await fetch(`${BASE_URL}/books`, options);
  const newBook = await responce.json();

  return newBook;
}
addBook(firstBook);
