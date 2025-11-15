const carousel = document.getElementById('imageCarousel');
const contentItems = document.querySelectorAll('#carouselContent .content-item');

carousel.addEventListener('slide.bs.carousel', function(e) {
  contentItems.forEach((item, idx) => {
    item.classList.remove('active');
    if (idx === e.to) {
      item.classList.add('active');
    }
  });
});

