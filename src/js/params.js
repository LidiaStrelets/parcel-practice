console.log('kl');

// fetch(
//   'https://pixabay.com/api/?key=21704664-f3a5361496563a8a6716b3b47&q=big+dog&order=latest&image_type=illustration&id=3351291',
// )
//   .then(r => r.json())
//   .then(console.log);

fetch('https://newsapi.org/v2/everything?q=queen&from=2021-05-01&sortBy=publishedAt&language=ru', {
  headers: { 'X-Api-Key': '5bbf58ddc027440e9102045fa5f0f3d2' },
})
  .then(r => r.json())
  .then(console.log);
