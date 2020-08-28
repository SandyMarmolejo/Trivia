function inicializarEventos() {
    inicializaKeyPressTextoNombre();
    inicializaBotonesTemas();
    inicializaBotonesRespuestas();
};

function inicializaKeyPressTextoNombre() {
    document.querySelector('#txtNombre').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            aceptarNombre();
        }
    });
};

function inicializaBotonesTemas() {
    var botonesTemas = document.querySelectorAll('.tema');

    for (var i = 0; i < botonesTemas.length; i++) {
        botonesTemas[i].addEventListener('click', function (event) {
            selectTema(this.dataset.tema);
        });
    }
}

function inicializaBotonesRespuestas() {
    var botonesRespuestas = document.querySelectorAll('.respuesta');

    for (var i = 0; i < botonesRespuestas.length; i++) {
        botonesRespuestas[i].addEventListener('click', function (event) {
            switch (this.dataset.respuesta) {
                case "1":
                    responderPregunta1(this.value);
                    break;
                case "2":
                    responderPregunta2(this.value);
                    break;
                case "3":
                    responderPregunta3(this.value);
                    break;
                case "4":
                    responderPregunta4(this.value);
                    break;
                case "5":
                    responderPregunta5(this.value);
                    break;
                case "6":
                    responderPregunta6(this.value);
                    break;

                default:
                    break;
            }
        });
    }
}

function aceptarNombre() {
    let nombre = document.getElementById("txtNombre").value;

    if (nombre === "") {
        document.getElementById('lblError').className = "showLabelError";
    } else {
        document.getElementById("lblSaludaNombre").innerHTML = `Hola ${nombre}`;
        document.getElementById("divTrivia").className = "ocultarElemento";
        document.getElementById("divSeleccioneTema").className = "mostrarElemento";
    }
}

function selectTema(tema) {
    document.getElementById("divSeleccioneTema").className = "ocultarElemento";
    document.getElementById("lblResultado").innerHTML = 0;

    if (tema === "1") {
        document.getElementById("divMusica").className = "ocultarElemento";
        document.getElementById("divCulturaGeneral").className = "mostrarElemento";
        document.getElementById("divPregunta1").className = "mostrarElemento";
    }
    else {
        document.getElementById("divCulturaGeneral").className = "ocultarElemento";
        document.getElementById("divMusica").className = "mostrarElemento";
        document.getElementById("divPregunta4").className = "mostrarElemento";
    }
}


function responderPregunta1(respuesta) {
    if (respuesta == "Antártida") {
        sumarPuntos(20);
    }

    document.getElementById("divPregunta1").className = "ocultarElemento";
    document.getElementById("divPregunta2").className = "mostrarElemento";
}

function responderPregunta2(respuesta) {
    if (respuesta == "Amazonas") {
        sumarPuntos(20);
    }

    document.getElementById("divPregunta2").className = "ocultarElemento";
    document.getElementById("divPregunta3").className = "mostrarElemento";
}

function responderPregunta3(respuesta) {
    if (respuesta == "Tierra") {
        sumarPuntos(20);
    }
    document.getElementById("divPregunta3").className = "ocultarElemento";
    document.getElementById("divResultado").className = "mostrarElemento";
    document.getElementById("divCulturaGeneral").className = "ocultarElemento";
}

function responderPregunta4(respuesta) {
    if (respuesta == "Whitney Houston") {
        sumarPuntos(20);
    }

    document.getElementById("divPregunta4").className = "ocultarElemento";
    document.getElementById("divPregunta5").className = "mostrarElemento";
}

function responderPregunta5(respuesta) {
    if (respuesta == "Céline Dion") {
        sumarPuntos(20);
    }

    document.getElementById("divPregunta5").className = "ocultarElemento";
    document.getElementById("divPregunta6").className = "mostrarElemento";
}

function responderPregunta6(respuesta) {
    if (respuesta == "Adele") {
        sumarPuntos(20);
    }

    document.getElementById("divPregunta6").className = "ocultarElemento";
    document.getElementById("divResultado").className = "mostrarElemento";
    document.getElementById("divMusica").className = "ocultarElemento";
}

function sumarPuntos(puntos) {
    let resultado = parseInt(document.getElementById("lblResultado").innerHTML);
    resultado += puntos;
    document.getElementById("lblResultado").innerHTML = resultado;
}

function volverMenuPrincipal() {
    document.getElementById("divResultado").className = "ocultarElemento";
    document.getElementById("divSeleccioneTema").className = "mostrarElemento";
}

inicializarEventos();