'use strict';
var KEY_ESC_CODE = 27;
var modelOrder = document.querySelector('.modal-order');
var btnOpen = document.querySelector('.page-header__order-btn');
var btnClose = document.querySelector('.modal-order__close-btn');
var btnCloseSuccesses = document.querySelector('.modal-successes__close-btn');
var btnSubmitSuccesses = document.querySelector('.modal-successes__btn');

var layout = document.querySelector('.layout');
var body = document.querySelector('body');
var form = document.querySelector('.modal-order__form')
var userName = document.getElementById('modal-username');
var phone = document.getElementById('modal-phone');
var checkbox = form.querySelector('#modal-agreement');
var errorNameMessage = document.querySelector('.small-name');
var errorPhoneMessage = document.querySelector('.small-phone');
var modalSuccesses = document.querySelector('.modal-successes');

var formDetails = document.querySelector('.details-form__form')
var userNameDetails = document.getElementById('details-username');
var phoneDetails = document.getElementById('details-phone');
// var checkbox = form.querySelector('#modal-agreement');
var errorNameMessageDetails = document.querySelector('.details-form__error-name');
var errorPhoneMessageDetails = document.querySelector('.details-form__error-phone');



var showModal = function() {
  modelOrder.style.display = 'block';
  layout.style.display = 'block';
  body.style.position = 'fixed';
  userName.focus();
  // userName.style.outline = 'none';
  // userName.style.borderColor = '#ffc341';
}

var closeModal = function() {
  modelOrder.style.display = 'none';
  modalSuccesses.style.display = 'none';
  layout.style.display = 'none';
  body.style.position = 'relative';
}

var closeModalSuccesses = function() {
  modalSuccesses.style.display = 'none';
  layout.style.display = 'none';
  body.style.position = 'relative';
}


btnCloseSuccesses.addEventListener('click', function () {
  closeModalSuccesses()
})

btnSubmitSuccesses.addEventListener('click', function () {
  closeModalSuccesses()
})


btnOpen.addEventListener('click', function (evt) {
  evt.preventDefault();
  showModal();
})

btnClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  closeModal();
})

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === KEY_ESC_CODE) {
    closeModal();
  }
});

layout.addEventListener('click', function () {
  closeModal();
  closeModalSuccesses();
});


function setNameFocus () {
  userName.style.border = "2px solid orange";
  errorNameMessage.style.display = 'none';
}

function setPhoneFocus () {
  phone.style.border = "2px solid orange";
  errorPhoneMessage.style.display = 'none';
}

function checkNameField () {
  if(userName.value && userName.value.length > 2) {
    userName.style.border = "2px solid black";
    errorNameMessage.style.display = 'none';
  } else {
    userName.style.border = "2px solid red";
    errorNameMessage.style.display = 'block';
  }
}

function checkPhoneField () {
  if(phone.value && phone.value.length === 17) {
    phone.style.border = "2px solid black";
    errorPhoneMessage.style.display = 'none';
  } else {
    phone.style.border = "2px solid red";
    errorPhoneMessage.style.display = 'block';
  }
}



function validate (evt) {
  evt.preventDefault();
  var count = 0;
  if(!userName.value || userName.value.length < 3) {
    userName.style.border = "2px solid red";
    errorNameMessage.style.display = 'block';
    ++count;
  }

  if (phone.value.length !== 17) {
    phone.style.border = "2px solid red";
    errorPhoneMessage.style.display = 'block';
    ++count;
  }

  if (!checkbox.checked) {
    ++count;
    alert('Подтвердите согласие');
  }

  if (count > 0) {
    return false;
  } else {
    modelOrder.style.display = 'none';
    modalSuccesses.style.display = 'block';
    return true;
  }
}

form.addEventListener('submit', function (evt) {
  validate(evt);
})



function setNameFocusDetails () {
  userNameDetails.style.border = "2px solid orange";
  errorNameMessageDetails.style.display = 'none';
}

function setPhoneFocusDetails () {
  phoneDetails.style.border = "2px solid orange";
  errorPhoneMessageDetails.style.display = 'none';
}

function checkNameFieldDetails () {
  if(userNameDetails.value && userNameDetails.value.length > 2) {
    userNameDetails.style.border = "2px solid black";
    errorNameMessageDetails.style.display = 'none';
  } else {
    userNameDetails.style.border = "2px solid red";
    errorNameMessageDetails.style.display = 'block';
  }
}

function checkPhoneFieldDetails () {
  if(phoneDetails.value && phoneDetails.value.length === 17) {
    phoneDetails.style.border = "2px solid black";
    errorPhoneMessageDetails.style.display = 'none';
  } else {
    phoneDetails.style.border = "2px solid red";
    errorPhoneMessageDetails.style.display = 'block';
  }
}



function validateDetails (evt) {
  evt.preventDefault();
  var count = 0;
  if(!userNameDetails.value || userNameDetails.value.length < 3) {
    userNameDetails.style.border = "2px solid red";
    errorNameMessageDetails.style.display = 'block';
    ++count;
  }

  if (phoneDetails.value.length !== 17) {
    phoneDetails.style.border = "2px solid red";
    errorPhoneMessageDetails.style.display = 'block';
    ++count;
  }

  if (count > 0) {
    return false;
  } else {
    modalSuccesses.style.display = 'block';
    layout.style.display = 'block';
    body.style.position = 'fixed';
    return true;
  }
}

formDetails.addEventListener('submit', function (evt) {
  validateDetails(evt);
})
