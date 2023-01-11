/* eslint-disable no-else-return */
/* eslint-disable no-plusplus */
const slides = document.querySelectorAll('.slider__img');
const leftArrow = document.querySelector('.slider__left-arrow');
const rightArrow = document.querySelector('.slider__right-arrow');

function changeFromPreview(element) {
  const currentBig = document.querySelector('.big');
  const nextBig = element.target;

  nextBig.classList.add('big');
  currentBig.classList.remove('big');
}

function nextSlide(event) {
  const currentBig = document.querySelector('.big');
  let n = +currentBig.dataset.path;
  if (event.target === rightArrow) {
    n++;
    if (n === 6) {
      n = 1;
    }
  } else if (event.target === leftArrow) {
    n--;
    if (n === 0) {
      n = 5;
    }
  }
  const nextBig = document.querySelector(`.slider__img[data-path="${n}"]`);

  nextBig.classList.add('big');
  currentBig.classList.remove('big');
}

slides.forEach((slide) => {
  slide.addEventListener('click', (event) => {
    if (!event.target.classList.contains('big')) {
      changeFromPreview(event);
    }
  });
});

rightArrow.addEventListener('click', (event) => {
  nextSlide(event);
});

leftArrow.addEventListener('click', (event) => {
  nextSlide(event);
});
