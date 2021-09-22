const imgs = document.getElementById('img');
const img = document.querySelectorAll('#img img');
const texto1 = document.getElementById('texto1');
const texto2 = document.getElementById('texto2');
const texto3 = document.getElementById('texto3');
const texto4 = document.getElementById('texto4');
const texto5 = document.getElementById('texto5');
const next = document.getElementById('next');
const retorno = document.getElementById('return');
var Y = screen.width; 


let idx = 0;

function carrossel() {
    idx++;

    if(idx > img.length -1){
        idx = 0;
    }
    if(screen.width <= 506 && screen.width >= 420) {
        imgs.style.transform = `translateX(${-idx * 400}px)`;
    } else if (screen.width <= 419 && screen.width >= 356) {
        imgs.style.transform = `translateX(${-idx * 350}px)`;
    } else if (screen.width <= 355) {
        imgs.style.transform = `translateX(${-idx * 300}px)`;
    } else {
        imgs.style.transform = `translateX(${-idx * 500}px)`;
    }
}

let numb = 0

next.addEventListener('click', () => {
    idx++;
    numb++; 
    if(numb === 1) {
        texto1.style.display = '';
        texto2.style.display = 'none';
        texto3.style.display = 'none';
        texto4.style.display = 'none';
    } else if (numb === 2) {
        texto1.style.display = 'none';
        texto2.style.display = '';
        texto3.style.display = 'none';
        texto4.style.display = 'none';
    } else if (numb === 3) {
        texto1.style.display = 'none';
        texto2.style.display = 'none';
        texto3.style.display = '';
        texto4.style.display = 'none';
    } else if (numb === 4) {
        texto1.style.display = 'none';
        texto2.style.display = 'none';
        texto3.style.display = 'none';
        texto4.style.display = '';
        numb = -1;
    }
    
    if(idx > img.length -1){
        idx = 0;
    }
    if(screen.width <= 506 && screen.width >= 420) {
        imgs.style.transform = `translateX(${-idx * 400}px)`;
    } else if (screen.width <= 419 && screen.width >= 356) {
        imgs.style.transform = `translateX(${-idx * 350}px)`;
    } else if (screen.width <= 355) {
        imgs.style.transform = `translateX(${-idx * 300}px)`;
    } else {
        imgs.style.transform = `translateX(${-idx * 500}px)`;
    }

    
});

let nan = 5;

retorno.addEventListener('click', () => {
    idx--;
  
    if(idx < img.length -5) {
        idx = 4;
    }
    if(screen.width <= 506 && screen.width >= 420) {
        imgs.style.transform = `translateX(${-idx * 400}px)`;
    } else if (screen.width <= 419 && screen.width >= 356) {
        imgs.style.transform = `translateX(${-idx * 350}px)`;
    } else if (screen.width <= 355) {
        imgs.style.transform = `translateX(${-idx * 300}px)`;
    } else {
        imgs.style.transform = `translateX(${-idx * 500}px)`;
    }

});



const central = document.getElementById('central');

central.onclick = () => {
    window.location = 'https://salestelecom.net.br/central_assinante_web/';
}
