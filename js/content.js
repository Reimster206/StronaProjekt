function wiecej(){
    let d = document.querySelector(".wiecej");
    let p = document.querySelector(".przycisk1");
    if(d.style.display == "inline"){
        d.style.display = "none";
        p.innerHTML = "czytaj wiecej";
    }else{
        d.style.display = "inline";
        p.innerHTML = "czytaj mniej";
    }
}