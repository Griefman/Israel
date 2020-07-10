'use strict';

var toggles = document.querySelectorAll('.toggles__item');
var contents = document.querySelectorAll('.content__item');
var slides = document.querySelectorAll('.content__item');
var widthBrowser = window.innerWidth;

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
