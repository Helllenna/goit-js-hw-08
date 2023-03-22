import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox = new SimpleLightbox('.gallery a', {
  /* options */
});

// const makeElementOfGallery = ({ preview, original, description }) => {
//   return `
//       <a class="gallery__item" href="${original}">
//         <img class="gallery__image" src="${preview}" alt="${description}" />
//       </a>
//       `;
// };

// const makeElements = galleryItems.map(makeElementOfGallery).join('');

// const galleryEl = document.querySelector('.gallery');
// galleryEl.insertAdjacentHTML('afterbegin', makeElements);

new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });

const galleryEl = document.querySelector('.gallery');
const addGalleryItems = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item"><a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></div>`
  )
  .join('');
galleryEl.insertAdjacentHTML('afterbegin', addGalleryItems);
