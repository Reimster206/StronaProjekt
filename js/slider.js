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


let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("kierunek");
  if (slideIndex==slides.length) {slideIndex=0}
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); 
}