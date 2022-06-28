// import renderHover from './hover';
import getMenuMobile from './menu';
import createMenuCatalog from './catalog';

let resizeTimeout;

const actualResizeHandler = () => {
  // renderHover();
  getMenuMobile();
  createMenuCatalog();
  window.location.reload();
};

const resizeThrottler = () => {
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(function () {
      resizeTimeout = null;
      actualResizeHandler();
    }, 1000);
  }
};

const addEventResize = () => {
  return window.addEventListener('resize', resizeThrottler, false);
};

export default addEventResize;
