let slides = document.querySelectorAll('.slide');

let currentIndex = 0;

const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');


nextBtn.addEventListener('click', showNext);

prevBtn.addEventListener('click', showPrev);


function showSlide(index) {

  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}


function showNext() {
  currentIndex = (currentIndex + 1) % slides.length;

  
  showSlide(currentIndex);
}


function showPrev() {

  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}


let autoPlay = setInterval(showNext, 1000);

document.querySelector('.slider').addEventListener('mouseenter', () => {
  clearInterval(autoPlay);
});

document.querySelector('.slider').addEventListener('mouseleave', () => {
  autoPlay = setInterval(showNext, 1000);
});
