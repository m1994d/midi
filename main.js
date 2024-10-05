function playSonido (idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0

while (contador < 9 ){
    listaDeTeclas[contador].onclick = function(){
        playSonido();
    };
    contador = contador + 1
    console.log('Vuelta' + contador)
}