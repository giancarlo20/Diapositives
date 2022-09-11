var numeroDiapositivas = 1;

let diapositivas = new Map();
diapositivas.set(1, "Diapositiva1.png");
diapositivas.set(2, "Diapositiva2.png");
diapositivas.set(3, "Diapositiva3.png");

function inicializar() {
    var next = document.getElementById("btnAvanzar");
    var back = document.getElementById("btnRetroceder");
    next.addEventListener("click", nextClick);
    back.addEventListener("click", backClick);
    verificarDiapositiva();
}

function inicializarSlide() {
    let slide = document.querySelectorAll("#mySidenav ul li");
    var i = 0;
    slide.forEach((element, indice) => {
        element.addEventListener("click", function () {
            i = indice;
            numeroDiapositivas = i + 1;
            verificarDiapositiva();
            establecerSrc();
            cambiarNumeroPagina();
        })
    });
}

function openNav() {
    document.getElementById("mySidenav").style.width = "15%" //opens side navbar by 15 percent
    document.getElementById('backdrop').style.display = "block" //displays overlay
    inicializarSlide();
    verificarDiapositiva();
}


function closeNav() {
    document.getElementById("mySidenav").style.width = "0"
    document.getElementById('backdrop').style.display = "none"
}

function nextClick() {
    numeroDiapositivas = numeroDiapositivas + 1;
    verificarDiapositiva();
    establecerSrc();
    cambiarNumeroPagina();
}

function backClick() {
    numeroDiapositivas = numeroDiapositivas - 1;
    verificarDiapositiva();
    establecerSrc();
    cambiarNumeroPagina();
}

function verificarDiapositiva() {
    if (numeroDiapositivas <= 1) {
        numeroDiapositivas = 1;
    }
    if (numeroDiapositivas >= 3) {
        numeroDiapositivas = 3;
    }
    deshabilitarBotones();
    habilitarBotones();
}

function deshabilitarBotones() {
    if (numeroDiapositivas == 1) {
        /*deshabilitar boton back*/
        document.getElementById('btnRetroceder').style.background = '#cacaca';
        document.getElementById('btnRetroceder').style.color = '#c0c0c0';
        document.getElementById('btnAvanzar').style.background = '#b4b3b3'
        document.getElementById('btnAvanzar').style.color = 'white'
    } else {
        /*deshabilitar boton next*/
        document.getElementById('btnAvanzar').style.background = '#cacaca';
        document.getElementById('btnAvanzar').style.color = '#c0c0c0';
        document.getElementById('btnRetroceder').style.background = '#b4b3b3';
        document.getElementById('btnRetroceder').style.color = 'white';
    }
}

function establecerSrc() {
    let elemento = document.querySelector('img');
    elemento.setAttribute("src", diapositivas.get(numeroDiapositivas));
}

function cambiarNumeroPagina() {
    let slideActual = document.getElementById('slideActual');
    slideActual.textContent = numeroDiapositivas;
}

function habilitarBotones() {
    if (!(numeroDiapositivas <= 1 || numeroDiapositivas >= 3)) {
        let botones = document.querySelectorAll('.boton-personalizado');
        for (var i = 0; i < botones.length; i++) {
            botones[i].style.background = '#b4b3b3';
            botones[i].style.color = 'white';
        }
    }
}