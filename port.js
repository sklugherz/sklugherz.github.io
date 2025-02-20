'use strict';

const bioToggle = document.getElementById('bio-toggle');
const bio1 = document.getElementById('sde');
const bio2 = document.getElementById('csp');

bioToggle.addEventListener('change', function() {
  if (this.checked) {
    bio1.style.display = 'none';
    bio2.style.display = 'block';
  } else {
    bio1.style.display = 'block';
    bio2.style.display = 'none';
  }
});


window.addEventListener('load', initSpiral);