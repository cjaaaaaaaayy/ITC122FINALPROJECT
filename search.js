const searchForm = document.querySelector('form');
const searchInput = document.querySelector('input[name="search"]');

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchTerm = searchInput.value.trim();
  if (searchTerm === 'wardrobe') {
    window.location.href = 'wardrobe.html';
  } else {
    alert(`No results found for "${searchTerm}"`);
  }
});