var closeButton = document.getElementById('closeButton');
var yesButton = document.getElementById('yesButton');
var noButton = document.getElementById('noButton');
var preguntaOriginal = document.getElementById('preguntaOriginal')
var preguntaClose = document.getElementById('preguntaClose');
var preguntaSi = document.getElementById('preguntaSi');

closeButton.addEventListener('click', function(){
    preguntaOriginal.classList.add('oculto');
    preguntaClose.classList.remove('oculto');
    preguntaSi.classList.add('oculto');
    setTimeout(reset, 3000);
});

yesButton.addEventListener('click', function(){
    preguntaOriginal.classList.add('oculto');
    preguntaSi.classList.remove('oculto');
    preguntaClose.classList.add('oculto');
    setTimeout(reset, 3000);
})

noButton.addEventListener('click', function(){
    var random1 = Math.floor(Math.random()*(85 - 1) + 1);
    var random2 = Math.floor(Math.random()*(-100 + 50));
    noButton.style.left = `${random1}px`
    noButton.style.bottom = `${random2}px`
})

function reset(){
    preguntaOriginal.classList.remove('oculto');
    preguntaClose.classList.add('oculto');
    preguntaSi.classList.add('oculto');
}