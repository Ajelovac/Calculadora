var numpantalla = 0;
var resultado = 0;
var ch_operacion = 0;

var pantalla = document.getElementsByClassName("c_pantalla")[0];
pantalla.innerHTML = numpantalla;

var numeros = document.querySelectorAll("div.botonera > button");

var operacion = document.querySelectorAll("div.c_teclas > button");

var igual = document.querySelectorAll("div.igual > button")

function botoneraNum() {
    var input = this.innerHTML;
    if (input == "C") {
        numpantalla = 0;
        resultado = 0;
        ch_operacion = 0;
    } else if (numpantalla == "0") {
        if (input == ".") {
            numpantalla = numpantalla + input;
        } else
            numpantalla = input;
    } else if (input == ".") {
        if (numpantalla.includes(".") == false)
            numpantalla = numpantalla + input;
    } else {
        numpantalla = numpantalla + input;
    }
    pantalla.innerHTML = numpantalla;
    if (ch_operacion == "=") ch_operacion = 0;
    if (ch_operacion == "x") ch_operacion = "multi";
    if (ch_operacion == "÷" && numpantalla != 0) ch_operacion = "divi";
}

for (var i = 0; i < numeros.length; i++) {
    numeros[i].addEventListener('click', botoneraNum, false);
}

function operaciones() {
    var input = this.innerHTML;
    switch (ch_operacion) {
        case 0:
            resultado = parseFloat(numpantalla);
            break;
        case "+":
            resultado = parseFloat(numpantalla) + parseFloat(resultado);
            break;
        case "-":
            resultado = parseFloat(resultado) - parseFloat(numpantalla);
            break;
        case "multi":
            resultado = parseFloat(resultado) * parseFloat(numpantalla);
            break;
        case "divi":
            resultado = parseFloat(resultado) / parseFloat(numpantalla);
            break;
        case "=":
            break;
    }
    ch_operacion = input;
    numpantalla = 0;
    if (input == "=") {
        pantalla.innerHTML = resultado;
    }

}

for (var i = 0; i < operacion.length; i++) {
    operacion[i].addEventListener('click', operaciones, false);
}

igual[0].addEventListener('click', operaciones, false);