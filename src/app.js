import { setupNavbarDropdown } from './components/navbar.js';

document.addEventListener('DOMContentLoaded', () => {
  setupNavbarDropdown();
});


const logo = document.querySelector('.navbar_logo');

  logo.addEventListener('click', () => {
    logo.classList.add('rotation');
    setTimeout(() => {
      logo.classList.remove('rotation');
    }, 600);
  });

