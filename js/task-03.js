const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryRef = document.querySelector('.gallery');

const makeGallery = images
  .map(image => {
    return `
  <li class='gallery-item'>
    <img src="${image.url}" alt="${image.alt}">
  </li>`;
  })
  .join('');

// const makeGallery = images.map(image => {
//   const listItemEl = document.createElement('li');

//   const galleryImageEl = document.createElement('img');
//   galleryImageEl.classList.add('galleryImage');
//   galleryImageEl.src = image.url;
//   galleryImageEl.alt = image.alt;

//   listItemEl.append(galleryImageEl);
//   return listItemEl;
// });
galleryRef.insertAdjacentHTML('afterbegin', makeGallery);
// console.log(makeGallery);
