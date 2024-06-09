window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.background = '#121423';
  } else {
    document.getElementById("navbar").style.background = "transparent";
  }
}
document.addEventListener('scroll', function() {
    const scrolled = window.scrollY;
    const hero = document.querySelector('.hero__container .hero');
    const rate = -0.6;
    hero.style.backgroundPositionY = `${rate*scrolled}px`;
});

document.addEventListener('DOMContentLoaded', function () {
    new Splide('#image-carousel', {
        type: 'loop',
        arrows: false,
        autoplay: true,
        interval: 3000,
        pauseOnHover: false,
        resetProgress: false

    }).mount();
  });
