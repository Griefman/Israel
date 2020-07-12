'use strict'
const questionButtons = document.querySelectorAll('.question__btn')

questionButtons.forEach(function (item, index) {
  item.addEventListener('click', function (evt) {
    evt.preventDefault()
    let questions = document.querySelectorAll('.questions__item')
    for (let i = 0; i < questionButtons.length; i++) {
      if (questionButtons[i] === evt.target && !questions[i].classList.contains('question__answer--visible')) {
        questions[i].classList.add('question__answer--visible')

      } else if (questionButtons[i] !== evt.target && questions[i].classList.contains('question__answer--visible')) {
        questions[i].classList.remove('question__answer--visible')
      }
    }
  })
})
