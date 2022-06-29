import $ from 'jquery';
import 'slick-carousel';

$(document).ready(function () {
  const slider = $('.slider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  let resizeTimeout;

  const resizeThrottler = () => {
    if (!resizeTimeout) {
      resizeTimeout = setTimeout(function () {
        resizeTimeout = null;
        window.location.reload();
      }, 1000);
    }
  };

  window.addEventListener('resize', resizeThrottler, false);

  $('.slide').on('click', function () {
    if ($(this).hasClass('locked')) {
      $(this).removeClass('locked');
      $('.slick-slide').removeClass('current');
    } else {
      $('.slide').removeClass('locked');
      $(this).addClass('locked');
      $('.slick-slide').removeClass('current');
      $(this).parent().parent().toggleClass('current');
    }
  });

  slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    const colorSlide = $('.current');

    if (colorSlide.length > 0) {
      const index = colorSlide.index();
      const slideList = $('.slick-slide');

      if (currentSlide < nextSlide) {
        $(slideList[index]).insertBefore($(slideList[index + 2]));
      } else {
        $(slideList[index]).insertBefore($(slideList[index - 1]));
      }
    }
  });
});
