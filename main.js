'use strict';
const icons = document.querySelectorAll('#icon i');
console.log(icons);
const img = document.querySelector('#icon img');
console.log(img);


img.addEventListener('mousemove', function() {
  img.style.height = '100px';
});