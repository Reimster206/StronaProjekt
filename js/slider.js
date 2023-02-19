if(screen.width<600){
  window.onload=showSlides;
};

var slider;

let slideIndex = 1;

function plusSlides(n) {
  clearTimeout(slider);
  showSlides(slideIndex += n-1);
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
