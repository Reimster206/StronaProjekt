
function openImg(n) {
    let fullImgBox = document.querySelector('.full-img')
    let fullImg = document.getElementById("fullImg");
    fullImgBox.style.visibility="visible";
    fullImg.src="img/zdj"+n+".jpg";
}

function closeImg(){
    let fullImgBox = document.querySelector('.full-img');
    fullImgBox.style.visibility="hidden";
}