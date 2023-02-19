var prgb = document.querySelector(".kierunek-prg");
    var infb = document.querySelector(".kierunek-inf");
    var mechb = document.querySelector(".kierunek-mech");
    var robb = document.querySelector(".kierunek-rob");
    var autb = document.querySelector(".kierunek-aut");
    var eleb = document.querySelector(".kierunek-ele");

    function reset(){
        prgb.style.display="none";
        infb.style.display="none";
        mechb.style.display="none";
        robb.style.display="none";
        autb.style.display="none";
        eleb.style.display="none";
    }

    function prg(){
        prgb.style.display="block";
        infb.style.display="none";
        mechb.style.display="none";
        robb.style.display="none";
        autb.style.display="none";
        eleb.style.display="none";
    }

    function inf(){
        prgb.style.display="none";
        infb.style.display="block";
        mechb.style.display="none";
        robb.style.display="none";
        autb.style.display="none";
        eleb.style.display="none";
    }
    function mech(){
        prgb.style.display="none";
        infb.style.display="none";
        mechb.style.display="block";
        robb.style.display="none";
        autb.style.display="none";
        eleb.style.display="none";
    }

    function rob(){
        prgb.style.display="none";
        infb.style.display="none";
        mechb.style.display="none";
        robb.style.display="block";
        autb.style.display="none";
        eleb.style.display="none";
    }
    function aut(){
        prgb.style.display="none";
        infb.style.display="none";
        mechb.style.display="none";
        robb.style.display="none";
        autb.style.display="block";
        eleb.style.display="none";
    }

    function ele(){
        prgb.style.display="none";
        infb.style.display="none";
        mechb.style.display="none";
        robb.style.display="none";
        autb.style.display="none";
        eleb.style.display="block";
    }