const createMenuCatalog = () => {
  const btn = document.querySelector('.bottom-nav__button');

  if (btn !== null && window.innerWidth <= 1000) {
    const menu = document.querySelector('.bottom-nav__list');
    btn.addEventListener('click', () => {
      menu.classList.toggle('bottom-nav__list--open');
    });
  }
};

export default createMenuCatalog;
