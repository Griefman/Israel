'use strict';

var toggles = document.querySelectorAll('.toggles__item');
var contents = document.querySelectorAll('.content__item');
var slides = document.querySelectorAll('.content__item');
var widthBrowser = parseInt(window.innerWidth, 10);





  var togglesTabs = function (evt) {
    evt.preventDefault();
    for (var i = 0; i < toggles.length; i++) {
      var tab = toggles[i];
      var content = contents[i];
      if (tab === evt.target && !tab.classList.contains('toggles__item-active')) {
        tab.classList.add('toggles__item-active');
        content.style.display = 'block';
      } else if (tab !== evt.target && tab.classList.contains('toggles__item-active')) {
        tab.classList.remove('toggles__item-active');
        content.style.display = 'none';
      }
    }
  }

  var onClickProgram = function() {
    toggles.forEach(function (item) {
      item.addEventListener('click', function (evt) {
        togglesTabs(evt);
      })
    })
  }

  var onFocusProgram = function() {
    toggles.forEach(function (item) {
      item.addEventListener('focus', function (evt) {
        togglesTabs(evt);
      })
    })
  }

  onClickProgram();
  onFocusProgram();



if (widthBrowser < 768) {
  const tabsList = document.querySelector('.toggles__list')
  const startPoint = tabsList.getBoundingClientRect().left
  const tabsWith = 500
  tabsList.addEventListener('touchstart', handleTouchStart, false);
  tabsList.addEventListener('touchmove', handleTouchMove, false);

  let xDown = null;
  let yDown = null;

  function handleTouchStart(evt) {
    xDown = evt.touches[0].clientX;
    yDown = evt.touches[0].clientY;
  }

  function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
      return;
    }

    let xUp = evt.touches[0].clientX;
    let yUp = evt.touches[0].clientY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
      if ( xDiff > 0) {
        tabsList.style.left = (startPoint - xDiff).toString() + 'px'
        if ((startPoint - xDiff) > startPoint) {
          tabsList.style.left = startPoint.toString()  + 'px'
        }
      } else  {
        tabsList.style.left = (startPoint + xDiff).toString() + 'px'
        if ((startPoint + xDiff) < (startPoint - (tabsWith - widthBrowser))) {
          tabsList.style.left = (startPoint - (tabsWith - widthBrowser)).toString() + 'px'
        }
      }
    }
    xDown = null;
    yDown = null;
  }
}
