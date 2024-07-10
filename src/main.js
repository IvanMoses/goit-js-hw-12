
import { fetchImages } from './js/pixabay-api.js';
import { renderImages, clearGallery, showNotification } from './js/render-functions.js';

let query = '';
let page = 1;

const searchForm = document.querySelector('#search-form');
const loadMoreBtn = document.querySelector('.load-more');
const loader = document.querySelector('.loader');

searchForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  query = e.currentTarget.elements.searchQuery.value.trim();
  if (!query) {
    showNotification('Please enter a search query', 'error');
    return;
  }

  page = 1;
  clearGallery();
  loadMoreBtn.classList.add('hidden');
  
  try {
    loader.classList.remove('hidden');
    const data = await fetchImages(query, page);
    loader.classList.add('hidden');
    
    if (data.hits.length === 0) {
      showNotification('Sorry, there are no images matching your search query. Please try again!', 'error');
      return;
    }
    
    renderImages(data.hits);
    loadMoreBtn.classList.remove('hidden');
  } catch (error) {
    loader.classList.add('hidden');
    showNotification('Failed to fetch images. Please try again later.', 'error');
  }
});

loadMoreBtn.addEventListener('click', async () => {
  page += 1;
  
  try {
    loader.classList.remove('hidden');
    const data = await fetchImages(query, page);
    loader.classList.add('hidden');
    
    if (data.hits.length === 0) {
      showNotification('No more images available.', 'info');
      loadMoreBtn.classList.add('hidden');
      return;
    }
    
    renderImages(data.hits);
    smoothScroll();
  } catch (error) {
    loader.classList.add('hidden');
    showNotification('Failed to fetch images. Please try again later.', 'error');
  }
});

function smoothScroll() {
  const { height: cardHeight } = document
    .querySelector('.gallery')
    .firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}
