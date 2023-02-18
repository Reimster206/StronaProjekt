var fullImgBox = document.querySelectorAll('.zdj-post')
var fullImg = document.getElementById("fullImg");

function openImg(n) {
    fullImgBox.style.visibility="visible";
    fullImg.src="img/zdj"+n+".jpg";
}

function closeImg(){
    fullImgBox.style.visibility="hidden";
}