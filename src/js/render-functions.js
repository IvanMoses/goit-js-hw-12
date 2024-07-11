
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function renderImages(images) {
  const gallery = document.querySelector('.gallery');
  const markup = images.map(image => `
    <a href="${image.largeImageURL}" class="gallery__link">
      <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
      <div class="info">
        <p class="info-item"><b>Likes</b>${image.likes}</p>
        <p class="info-item"><b>Views</b>${image.views}</p>
        <p class="info-item"><b>Comments</b>${image.comments}</p>
        <p class="info-item"><b>Downloads</b>${image.downloads}</p>
      </div>
    </a>
  `).join('');
  
  gallery.insertAdjacentHTML('beforeend', markup);
  
  const lightbox = new SimpleLightbox('.gallery a');
  lightbox.refresh();
}

export function clearGallery() {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';
}

export function showNotification(message, type = 'info') {
  iziToast[type]({
    title: type === 'error' ? 'Error' : 'Success',
    message: message,
    position: 'topRight',
  });
}


