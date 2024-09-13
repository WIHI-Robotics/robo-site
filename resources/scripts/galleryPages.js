const folderPath = '/resources/images/gallery/';
const totalImages = 113;
const imagesPerPage = 15;
let currentPage = 0;

const galleryElement = document.querySelector('.gallery-image');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

function generateImageUrls() {
  const images = [];
  for (let i = 1; i <= totalImages; i++) {
    images.push(`${folderPath}image${i}.webp`);
  }
  return images;
}

function displayImages(images) {
  galleryElement.innerHTML = '';

  const start = currentPage * imagesPerPage;
  const end = Math.min(start + imagesPerPage, images.length);

  for (let i = start; i < end; i++) {
    const imgBox = document.createElement('div');
    imgBox.classList.add('img-box');

    const imgElement = document.createElement('img');
    imgElement.src = images[i];
    imgElement.alt = `Image ${i + 1}`;
    imgElement.loading = 'lazy';

    imgBox.appendChild(imgElement);
    galleryElement.appendChild(imgBox);
  }
}

prevButton.addEventListener('click', () => {
  if (currentPage > 0) {
    currentPage--;
    displayImages(generateImageUrls());
  }
});

nextButton.addEventListener('click', () => {
  if ((currentPage + 1) * imagesPerPage < totalImages) {
    currentPage++;
    displayImages(generateImageUrls());
  }
});

displayImages(generateImageUrls());
