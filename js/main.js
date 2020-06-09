(() => {
  const main = () => {
    const $slides = document.querySelectorAll(
      '.testimonials-slide .testimonial',
    );

    const changeSlide = ($currentSlide, $to) => {
      $currentSlide.classList.remove('testimonial--active');
      $to.classList.add('testimonial--active');
    };

    $slides.forEach(($slide, key) => {
      const $slidePrevCtrl = $slide.querySelector(
        '.testimonial__controls-btn--prev',
      );
      const $slideNextCtrl = $slide.querySelector(
        '.testimonial__controls-btn--next',
      );
      const $prevSlide = $slides[key - 1] || $slides[$slides.length - 1];
      const $nextSlide = $slides[key + 1] || $slides[0];

      $slidePrevCtrl.addEventListener('click', () =>
        changeSlide($slide, $prevSlide),
      );
      $slideNextCtrl.addEventListener('click', () =>
        changeSlide($slide, $nextSlide),
      );
    });
  };

  window.addEventListener('load', main);
})();
