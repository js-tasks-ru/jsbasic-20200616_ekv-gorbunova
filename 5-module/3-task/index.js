function initCarousel() {
  let currentSlide = 0;
  let slidesAmount = 4;
  let elem = document.querySelector('[data-carousel-holder]');

  let carouselWrapper = elem.querySelector('.carousel__inner');
  let ArrowRight = elem.querySelector('.carousel__arrow_right');
  let ArrowLeft = elem.querySelector('.carousel__arrow_left');



  update();

  elem.onclick = ({ target }) => {
    if (target.closest('.carousel__arrow_right')) {
      next();
    }

    if (target.closest('.carousel__arrow_left')) {
      prev();
    }
  };

  function next() {
    currentSlide++;
    update();
  }

  function prev() {
    currentSlide--;
    update();
  }

  function update() {
    let offset = -carouselWrapper.offsetWidth * currentSlide;
    carouselWrapper.style.transform = `translateX(${offset}px)`;

    if (currentSlide == slidesAmount - 1) {
      ArrowRight.style.display = 'none';
    } else {
      ArrowRight.style.display = '';
    }

    if (currentSlide == 0) {
      ArrowLeft.style.display = 'none';
    } else {
      ArrowLeft.style.display = '';
    }
  }
}
