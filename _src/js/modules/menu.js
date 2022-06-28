// /* eslint-disable import/no-unresolved */
import MmenuLight from 'mmenu-light';

const getMenuMobile = () => {
  const navMenu = document.querySelector('.head-nav');
  if (navMenu !== null && window.innerWidth <= 768) {
    const linkOpen = document.querySelector('.header-top__link--open');
    const linkClose = document.querySelector('.head-nav__link--close');
    const menuMobile = new MmenuLight(navMenu);

    const drawer = menuMobile.offcanvas();

    drawer.close();

    linkOpen.addEventListener('click', (e) => {
      e.preventDefault();
      drawer.open();
    });

    linkClose.addEventListener('click', (e) => {
      e.preventDefault();
      drawer.close();
    });
  }
};

export default getMenuMobile;
