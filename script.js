let slideIndex = 1;
let autoPlay = false;
let autoPlayInterval;

function openSlider() {
  document.getElementById('slider').style.display = "block";
}

function closeSlider() {
  document.getElementById('slider').style.display = "none";
  clearInterval(autoPlayInterval);
}

function showSlide(n) {
  const slides = document.querySelectorAll('.slider-content img');
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  slides.forEach(slide => slide.style.display = "none");
  slides[slideIndex - 1].style.display = "block";
}

function moveSlide(n) {
  showSlide(slideIndex += n);
}

function toggleAutoPlay() {
  if (!autoPlay) {
    autoPlayInterval = setInterval(() => {
      moveSlide(1);
    }, 2000); // Change slide every 2 seconds
    autoPlay = true;
    document.querySelector('.play').textContent = "Pause";
  } else {
    clearInterval(autoPlayInterval);
    autoPlay = false;
    document.querySelector('.play').textContent = "Play";
  }
}

// Open slider when clicking on grid item
const gridItems = document.querySelectorAll('.grid-item');
gridItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    openSlider();
    slideIndex = index + 1;
    showSlide(slideIndex);
  });
});

// Close slider when clicking outside of it
window.addEventListener('click', (event) => {
  if (event.target === document.getElementById('slider')) {
    closeSlider();
  }
});
