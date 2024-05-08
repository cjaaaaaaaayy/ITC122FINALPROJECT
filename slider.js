const slider1 = document.querySelector('#glide_1');

if (slider1) {
  const autoplayDelay = 3000; // configurable delay in milliseconds
  new Glide(slider1, {
    type: 'carousel',
    startAt: 0,
    autoplay: autoplayDelay, // enable autoplay with the configured delay
    gap: 0,
    hoverpause: true,
    perView: 1,
    animationDuration: 800,
    animationTimingFunc: 'linear',
  }).mount();
}