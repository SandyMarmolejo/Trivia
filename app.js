var resultado = 0;

function aceptarNombre() {

    var name = document.getElementById("txtName").value;

    if (name == "") {
        alert("Ingrese su nombre");
    } else {
        document.getElementById("lblSaludaNombre").innerHTML = `Hola ${name}`;
        document.getElementById("divSeleccioneTema").className = "mostrarDiv";
        document.getElementById("divIngreseNombre").className = "ocultarDiv";
    }
}

function SeleccioneTema1() {
    document.getElementById("divCulturaPregunta2").className = "ocultarDiv";
    document.getElementById("divCulturaPregunta3").className = "ocultarDiv";
    document.getElementById("divCulturaPregunta1").className = "mostrarDiv";
    document.getElementById("divSeleccioneTema").className = "ocultarDiv";
    document.getElementById("divCultura").className = "mostrarDiv";
}

function RespondiendoPregunta1() {
    document.getElementById("divCulturaPregunta1").className = "ocultarDiv";
    document.getElementById("divCulturaPregunta3").className = "ocultarDiv";
    document.getElementById("divIngreseNombre").className = "ocultarDiv";
    document.getElementById("divSeleccioneTema").className = "ocultarDiv";
    document.getElementById("divCulturaPregunta2").className = "mostrarDiv";
    document.getElementById("divCultura").className = "mostrarDiv";

    let alternativas = document.getElementsByName('rdbPregunta1');

    for (let i = 0; i < alternativas.length; i++) {
        if (alternativas[i].checked) {
            let respuesta = alternativas[i].value;

            if (respuesta == "Canada") {
                resultado = resultado + 10;
            }
        }
    }
}

function RespondiendoPregunta2() {
    document.getElementById("divIngreseNombre").className = "ocultarDiv";
    document.getElementById("divSeleccioneTema").className = "ocultarDiv";
    document.getElementById("divCulturaPregunta1").className = "ocultarDiv";
    document.getElementById("divCulturaPregunta2").className = "ocultarDiv";
    document.getElementById("divCulturaPregunta3").className = "mostrarDiv";

    let alternativas = document.getElementsByName('rdbPregunta2');

    for (let i = 0; i < alternativas.length; i++) {
        if (alternativas[i].checked) {
            let respuesta = alternativas[i].value;

            if (respuesta == "Amazonas") {
                resultado = resultado + 10;
            }
        }
    }
}

function RespondiendoPregunta3() {
    document.getElementById("divIngreseNombre").className = "ocultarDiv";
    document.getElementById("divCulturaPregunta1").className = "ocultarDiv";
    document.getElementById("divCulturaPregunta2").className = "ocultarDiv";
    document.getElementById("divSeleccioneTema").className = "ocultarDiv";
    document.getElementById("divCulturaPregunta3").className = "ocultarDiv";
    document.getElementById("divCultura").className = "ocultarDiv";
    document.getElementById("divResultado").className = "mostrarDiv";

    let alternativas = document.getElementsByName('rdbPregunta3');

    for (let i = 0; i < alternativas.length; i++) {
        if (alternativas[i].checked) {
            let respuesta = alternativas[i].value;

            if (respuesta == "Tierra") {
                resultado = resultado + 10;
            }
        }
    }

    document.getElementById("lblResultado").innerHTML = "Tu resultado es " + resultado;

}

function VolverAlMenu() {
    document.getElementById("divSeleccioneTema").className = "mostrarDiv";
    document.getElementById("divCultura").className = "ocultarDiv";
    document.getElementById("divMusica").className = "ocultarDiv";
    document.getElementById("divResultado").className = "ocultarDiv";
    document.getElementById("divIngreseNombre").className = "ocultarDiv";
    document.getElementById("lblSaludaNombre").className = "ocultarDiv";

    resultado = 0;
}

function SeleccioneTema2() {
    document.getElementById("divIngreseNombre").className = "ocultarDiv";
    document.getElementById("divSeleccioneTema").className = "ocultarDiv";
    document.getElementById("divCultura").className = "ocultarDiv";
    document.getElementById("divMusicaPregunta2").className = "ocultarDiv";
    document.getElementById("divMusicaPregunta3").className = "ocultarDiv";
    document.getElementById("divMusica").className = "mostrarDiv";
    document.getElementById("divMusicaPregunta1").className = "mostrarDiv";
}

function RespondiendoPregunta4() {
    document.getElementById("divIngreseNombre").className = "ocultarDiv";
    document.getElementById("divSeleccioneTema").className = "ocultarDiv";
    document.getElementById("divCultura").className = "ocultarDiv";
    document.getElementById("divMusicaPregunta1").className = "ocultarDiv";
    document.getElementById("divMusicaPregunta3").className = "ocultarDiv";
    document.getElementById("divMusica").className = "mostrarDiv";
    document.getElementById("divResultado").className = "ocultarDiv";
    document.getElementById("divMusicaPregunta2").className = "mostrarDiv";

    let alternativas = document.getElementsByName('rdbPregunta4');

    for (let i = 0; i < alternativas.length; i++) {
        if (alternativas[i].checked) {
            let respuesta = alternativas[i].value;

            if (respuesta == "DaddyYankee") {
                resultado = resultado + 10;
            }
        }
    }
}

function RespondiendoPregunta5() {
    document.getElementById("divIngreseNombre").className = "ocultarDiv";
    document.getElementById("divSeleccioneTema").className = "ocultarDiv";
    document.getElementById("divCultura").className = "ocultarDiv";
    document.getElementById("divMusicaPregunta1").className = "ocultarDiv";
    document.getElementById("divMusicaPregunta3").className = "mostrarDiv";
    document.getElementById("divMusica").className = "mostrarDiv";
    document.getElementById("divResultado").className = "ocultarDiv";
    document.getElementById("divMusicaPregunta2").className = "ocultarDiv";

    let alternativas = document.getElementsByName('rdbPregunta5');

    for (let i = 0; i < alternativas.length; i++) {
        if (alternativas[i].checked) {
            let respuesta = alternativas[i].value;

            if (respuesta == "LaFaldita") {
                resultado = resultado + 10;
            }
        }
    }
}

function RespondiendoPregunta6() {
    document.getElementById("divIngreseNombre").className = "ocultarDiv";
    document.getElementById("divSeleccioneTema").className = "ocultarDiv";
    document.getElementById("divCultura").className = "ocultarDiv";
    document.getElementById("divMusica").className = "ocultarDiv";
    document.getElementById("divResultado").className = "mostrarDiv";

    let alternativas = document.getElementsByName('rdbPregunta6');

    for (let i = 0; i < alternativas.length; i++) {
        if (alternativas[i].checked) {
            let respuesta = alternativas[i].value;

            if (respuesta == "Reguetone") {
                resultado = resultado + 10;
            }
        }
    }

    document.getElementById("lblResultado").innerHTML = "Tu resultado es " + resultado;
}