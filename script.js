const slides = Array.from(document.querySelectorAll('.slide'));
const counter = document.getElementById('counter');
let current = 0;

function showSlide(index) {
  current = (index + slides.length) % slides.length;
  slides.forEach((slide, i) => slide.classList.toggle('active', i === current));
  counter.textContent = `${current + 1} / ${slides.length}`;
}

document.getElementById('nextBtn').addEventListener('click', () => showSlide(current + 1));
document.getElementById('prevBtn').addEventListener('click', () => showSlide(current - 1));

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight' || event.key === ' ') showSlide(current + 1);
  if (event.key === 'ArrowLeft') showSlide(current - 1);
});

showSlide(0);
