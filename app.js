function aceptarNombre() {
    let nombre = document.getElementById("txtNombre").value;

    if (nombre == "") {
        alert("Ingresa tu nombre");
    } else {
        document.getElementById("lblSaludaNombre").innerHTML = `Hola ${nombre}`;

        document.getElementById("divTrivia").className = "ocultarDiv";
        document.getElementById("divSeleccioneTema").className = "mostrarDiv";
    }
}

function selectTema1() {
    document.getElementById("divSeleccioneTema").className = "ocultarDiv";
    document.getElementById("divMusica").className = "ocultarDiv";
    document.getElementById("divCulturaGeneral").className = "mostrarDiv";
    document.getElementById("divPregunta1").className = "mostrarDiv";
    document.getElementById("lblResultado").innerHTML = 0;
}

function selectTema2() {
    document.getElementById("divSeleccioneTema").className = "ocultarDiv";
    document.getElementById("divCulturaGeneral").className = "ocultarDiv";
    document.getElementById("divMusica").className = "mostrarDiv";
    document.getElementById("divPregunta4").className = "mostrarDiv";
    document.getElementById("lblResultado").innerHTML = 0;
}


function responderPregunta1(respuesta) {
    let resultado = parseInt(document.getElementById("lblResultado").innerHTML);

    if (respuesta == "Antártida") {
        resultado += 20;
    }

    document.getElementById("lblResultado").innerHTML = resultado;

    document.getElementById("divPregunta1").className = "ocultarDiv";
    document.getElementById("divPregunta2").className = "mostrarDiv";
}

function responderPregunta2(respuesta) {
    let resultado = parseInt(document.getElementById("lblResultado").innerHTML);

    if (respuesta == "Amazonas") {
        resultado += 20;
    }

    document.getElementById("lblResultado").innerHTML = resultado;

    document.getElementById("divPregunta2").className = "ocultarDiv";
    document.getElementById("divPregunta3").className = "mostrarDiv";
}

function responderPregunta3(respuesta) {
    let resultado = parseInt(document.getElementById("lblResultado").innerHTML);

    if (respuesta == "Tierra") {
        resultado += 20;
    }

    document.getElementById("lblResultado").innerHTML = resultado;

    document.getElementById("divPregunta3").className = "ocultarDiv";
    document.getElementById("divResultado").className = "mostrarDiv";
    document.getElementById("divCulturaGeneral").className = "ocultarDiv";
}

function responderPregunta4(respuesta) {
    let resultado = parseInt(document.getElementById("lblResultado").innerHTML);

    if (respuesta == "Whitney Houston") {
        resultado += 20;
    }

    document.getElementById("lblResultado").innerHTML = resultado;

    document.getElementById("divPregunta4").className = "ocultarDiv";
    document.getElementById("divPregunta5").className = "mostrarDiv";
}

function responderPregunta5(respuesta) {
    let resultado = parseInt(document.getElementById("lblResultado").innerHTML);

    if (respuesta == "Céline Dion") {
        resultado += 20;
    }

    document.getElementById("lblResultado").innerHTML = resultado;

    document.getElementById("divPregunta5").className = "ocultarDiv";
    document.getElementById("divPregunta6").className = "mostrarDiv";
}

function responderPregunta6(respuesta) {
    let resultado = parseInt(document.getElementById("lblResultado").innerHTML);

    if (respuesta == "Adele") {
        resultado += 20;
    }

    document.getElementById("lblResultado").innerHTML = resultado;

    document.getElementById("divPregunta6").className = "ocultarDiv";
    document.getElementById("divResultado").className = "mostrarDiv";
    document.getElementById("divMusica").className = "ocultarDiv";
}

function volverMenuPrincipal() {
    document.getElementById("divResultado").className = "ocultarDiv";
    document.getElementById("divSeleccioneTema").className = "mostrarDiv";
}