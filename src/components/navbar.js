export function setupNavbarDropdown() {
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const dropdown = document.querySelector('.dropdown');
  const burgerToggle = document.getElementById('navbarToggle');
  const menu = document.getElementById('navbarMenu');

  if (dropdownToggle && dropdown) {
    dropdownToggle.addEventListener('click', (e) => {
      e.preventDefault();
      dropdown.classList.toggle('show');
    });

    window.addEventListener('click', (e) => {
      if (
        !dropdown.contains(e.target) &&
        !dropdownToggle.contains(e.target)
      ) {
        dropdown.classList.remove('show');
      }
    });
  }

  if (burgerToggle && menu) {
    burgerToggle.addEventListener('click', () => {
      menu.classList.toggle('is-collapsed');
    });
  }
}
