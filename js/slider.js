if(screen.width<600){
  window.onload=showSlides;
};

/*function showSlides() {
  let i;
  let n=0;
  let slideIndex = 1;
  let slides = document.getElementsByClassName("kierunek");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  };
  slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 2000); 
}*/

var slider;

let slideIndex = 2;
showSlides(slideIndex);

function plusSlides(n) {
  clearTimeout(slider);
  showSlides(slideIndex += n-1);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("kierunek");
  if (slideIndex==slides.length) {slideIndex=0}
  if (n > slides.length) {slideIndex = 0}
  if (n < 0) {slideIndex = slides.length-1}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  slides[slideIndex-1].style.display = "block";
  slider = setTimeout(showSlides, 3000); 
}
