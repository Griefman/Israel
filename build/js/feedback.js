const input = document.querySelector('.feedback__input')
const button = document.querySelector('.feedback__btn-submit')
const error = document.querySelector('.feedback__error')
const	successPopUp = document.querySelector('.modal-successes')
const bodyLayout = document.querySelector('.layout')
const feedbackForm = document.querySelector('.feedback__form')
const bodyFeedback = document.querySelector('body')


function checkPhoneFieldFeedback () {
  if(input.value && input.value.length === 17) {
    input.style.border = "2px solid black";
    error.style.display = 'none';
  } else {
    input.style.border = "2px solid red";
    error.style.display = 'block';
  }
}

function setPhoneFocusFeedback () {
  input.style.border = "2px solid orange";
  error.style.display = 'none';
}

function validateFeedback (evt) {
  evt.preventDefault();
  var count = 0;

  if (input.value.length !== 17) {
    input.style.border = "2px solid red";
    error.style.display = 'block';
    ++count;
  }
  if (count > 0) {
    return false;
  } else {
    successPopUp.style.display = 'block';
    bodyFeedback.style.position = 'fixed';
    bodyLayout.style.display = 'block';
    return true;
  }
}

feedbackForm.addEventListener('submit', function (evt) {
  validateFeedback(evt);
})




