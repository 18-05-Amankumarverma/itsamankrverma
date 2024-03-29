var labelMenu = document.getElementById('label-menu');
var header = document.getElementById('header');
var firsthide = document.getElementById('firsthide');
var secondhide = document.getElementById('secondhide');

var clickMe = document.getElementById('click-me');

clickMe.addEventListener('click',navbar);

function navbar(){
    
    if(clickMe.checked){

        firsthide.style.display = "block";
        secondhide.style.display = "block";
        header.style.backgroundColor = "#1a1a1a";

    }
    else{
        
        firsthide.style.display = "none";
        secondhide.style.display = "none";
        header.style.backgroundColor = "";
    }
}