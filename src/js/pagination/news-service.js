export default class NewsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }
  fetchArticles() {
    console.log(this);
    const url = `https://newsapi.org/v2/everything?q=${this.searchQuery}&language=ru&pageSize=5&page=${this.page}`;
    const options = {
      headers: { Authorization: '5bbf58ddc027440e9102045fa5f0f3d2' },
    };
    return fetch(url, options).then(r =>
      r.json().then(({ articles }) => {
        this.page += 1;
        return articles;
      }),
    );
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
    this.page = 1;
  }
}
