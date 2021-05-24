import NewsApiService from './pagination/news-service.js';
import articlesTpl from './../templates/news.hbs';
const newsApiServise = new NewsApiService();

const refs = {
  articlesContainer: document.querySelector('.articles'),
  form: document.querySelector('.search-form '),
  loadMoreBtn: document.querySelector('[data-action="load-more"]'),
};

refs.form.addEventListener('submit', handleSearch);

function handleSearch(event) {
  event.preventDefault();
  clearArticlesContainer();
  newsApiServise.query = event.currentTarget.elements.query.value;
  newsApiServise.fetchArticles().then(appendArticlesMarkup);
}

refs.loadMoreBtn.addEventListener('click', handleMorePress);

function handleMorePress() {
  newsApiServise.fetchArticles().then(appendArticlesMarkup);
}

function appendArticlesMarkup(articles) {
  refs.articlesContainer.insertAdjacentHTML('beforeend', articlesTpl(articles));
}

function clearArticlesContainer() {
  refs.articlesContainer.innerHTML = '';
}
