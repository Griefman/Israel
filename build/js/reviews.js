'use strict';

const avatars = document.querySelectorAll('.slide__image-reviews');
const texts = document.querySelectorAll('.slide__content-reviews');
const currentSlide = document.querySelector('.controls__count-current');
const buttonPrev = document.querySelector('.controls__arrows-left');
const buttonNext = document.querySelector('.controls__arrows-right');



buttonPrev.addEventListener('click', function () {
  let n = parseInt(currentSlide.textContent, 10) - 1;
  if (n > 0) {
    for (let i = 0; i < avatars.length; i++) {
      let avatar = avatars[i];
      let text = texts[i];
      if ( i === n - 1 && !avatar.classList.contains('slide__image-reviews--active') && !text.classList.contains('slide__content-reviews--active')) {
        avatar.classList.add('slide__image-reviews--active');
        text.classList.add('slide__content-reviews--active');
      } else if ( i === n) {
        avatar.classList.remove('slide__image-reviews--active');
        text.classList.remove('slide__content-reviews--active');
      }
      console.log(avatar);
      console.log(text);
    }
    currentSlide.textContent = (n).toString();
    console.log(`After Click ${currentSlide.textContent}`);

  }
});


buttonNext.addEventListener('click', function () {
  let n = parseInt(currentSlide.textContent, 10) - 1;
  if (n < 5) {
    for (let i = 0; i < avatars.length; i++) {
      let avatar = avatars[i];
      let text = texts[i];
      if ( i === n + 1 && !avatar.classList.contains('slide__image-reviews--active')) {
        avatar.classList.add('slide__image-reviews--active');
        text.classList.add('slide__content-reviews--active');
      } else if ( i === n) {
        avatar.classList.remove('slide__image-reviews--active');
        text.classList.remove('slide__content-reviews--active');
      }
    }
    currentSlide.textContent = (n+2).toString();
    console.log(`After Click ${currentSlide.textContent}`);
  }
});
