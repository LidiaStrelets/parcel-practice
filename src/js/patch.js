const BASE_URL = 'http://localhost:3000';

function changeBook(id, newInfo) {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(newInfo),
  };

  return fetch(`${BASE_URL}/books/${id}`, options).then(r => r.json());
}

changeBook(11, { title: 'Алиса в зазеркалье' });

changeBook(5, {
  title: 'Грозовой перевал',
  author: 'Эмилия Бронте',
  rating: 5,
  genres: ['мелодрама'],
});
