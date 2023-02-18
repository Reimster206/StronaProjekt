function wiecej(n){
    let d = document.querySelectorAll(".wiecej");
    let p = document.querySelectorAll(".przycisk1");
    let a = document.querySelectorAll(".to");

    if(d[n].style.display == "inline"){
        d[n].style.display = "none";
        p[n].innerHTML = "czytaj wiecej";
    }else{
        d[n].style.display = "inline";
        p[n].innerHTML = "czytaj mniej";
    }
}
