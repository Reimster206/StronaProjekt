let slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n-1);
}

function showSlides(n) {
  let i;
  let zdjecia = document.getElementsByClassName("zdjecie-galeria");
  if (slideIndex==zdjecia.length) {slideIndex=0}
  if (n > zdjecia.length) {slideIndex = 0}
  if (n < 0) {slideIndex = zdjecia.length-1}
  for (i = 0; i < zdjecia.length; i++) {
    zdjecia[i].style.display = "none";
  }
  slideIndex++;
  zdjecia[slideIndex-1].style.display = "block";
}
