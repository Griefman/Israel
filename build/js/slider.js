'use strict'
const sliderButtons = document.querySelectorAll('.photos__controls-btn')

sliderButtons.forEach(function (item, index) {
  item.addEventListener('click', function (evt) {
    evt.preventDefault()
    let photos = document.querySelectorAll('.photos__slider-item')
    console.log(photos)
    for (let i = 0; i < sliderButtons.length; i++) {
      if (sliderButtons[i] === evt.target && !sliderButtons[i].classList.contains('photos__controls-btn--active')) {
        sliderButtons[i].classList.add('photos__controls-btn--active')
        photos[i].classList.add('photos__slider-item--active')
      } else if (sliderButtons[i] !== evt.target && sliderButtons[i].classList.contains('photos__controls-btn--active')) {
        sliderButtons[i].classList.remove('photos__controls-btn--active')
        photos[i].classList.remove('photos__slider-item--active')
      }
    }
  })
})
