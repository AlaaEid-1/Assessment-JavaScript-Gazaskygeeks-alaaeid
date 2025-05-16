const searchInput = document.getElementById('searchInput');
const quoteList = document.getElementById('quoteList');
const errorDiv = document.getElementById('error');

let quotesData = [];

fetch('https://dummyjson.com/quotes')
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch quotes');
    }
    return response.json();
  })
  .then(data => {
    quotesData = data.quotes;
    displayQuotes(quotesData);
  })
  .catch(error => {
    errorDiv.textContent = error.message;
  });

function displayQuotes(quotes) {
  quoteList.innerHTML = '';
  quotes.forEach(quote => {
    const li = document.createElement('li');
    li.textContent = quote.quote;
    quoteList.appendChild(li);
  });
}


searchInput.addEventListener('input', () => {
  const filter = searchInput.value.toLowerCase();
  const filteredQuotes = quotesData.filter(q =>
    q.quote.toLowerCase().includes(filter)
  );
  displayQuotes(filteredQuotes);
});
                 
