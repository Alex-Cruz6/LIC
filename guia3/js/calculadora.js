/*************************************************
** LENGUAJES INTERPRETADOS EN EL CLIENTE        **
** CALCULADORA                                  **
**************************************************/
var operandoa;
var operandob;
var operacion;

function init() {
    //variables
    var resultado = document.getElementById('resultado');
    var borrar = document.getElementById('borrar');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicacion');
    var division = document.getElementById('division');
    var igual = document.getElementById('igual');
    var residuo = document.getElementById('residuo');
    var cuadrado = document.getElementById('cuadrado');
    var inversa = document.getElementById('inversa');
    var raiz = document.getElementById('raiz');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');
}
//Eventos click
uno.onclick = function (e) {
    resultado.textContent = resultado.textContent + "1";
}
dos.onclick = function (e) {
    resultado.textContent = resultado.textContent + "2";
}
tres.onclick = function (e) {
    resultado.textContent = resultado.textContent + "3";
}
cuatro.onclick = function (e) {
    resultado.textContent = resultado.textContent + "4";
}
cinco.onclick = function (e) {
    resultado.textContent = resultado.textContent + "5";
}
seis.onclick = function (e) {
    resultado.textContent = resultado.textContent + "6";
}
siete.onclick = function (e) {
    resultado.textContent = resultado.textContent + "7";
}
ocho.onclick = function (e) {
    resultado.textContent = resultado.textContent + "8";
}
nueve.onclick = function (e) {
    resultado.textContent = resultado.textContent + "9";
}
cero.onclick = function (e) {
    resultado.textContent = resultado.textContent + "0";
}
borrar.onclick = function (e) {
    borrado();
}
suma.onclick = function (e) {
    operandoa = resultado.textContent;
    operacion = "+";
    limpiar();
}
resta.onclick = function (e) {
    operandoa = resultado.textContent;
    operacion = "-";
    limpiar();
}
multiplicacion.onclick = function (e) {
    operandoa = resultado.textContent;
    operacion = "*";
    limpiar();
}
division.onclick = function (e) {
    operandoa = resultado.textContent;
    operacion = "/";
    limpiar();
}
residuo.onclick = function (e) {
    operandoa = resultado.textContent;
    operacion = "%";
    limpiar();
}
cuadrado.onclick = function (e) {
    operandoa = resultado.textContent;
    operacion = "^2";
    limpiar();
}
inversa.onclick = function (e) {
    operandoa = resultado.textContent;
    operacion = "^-1";
    limpiar();
}
raiz.onclick = function (e) {
    operandoa = resultado.textContent;
    operacion = "&#8730;";
    limpiar();
}
igual.onclick = function (e) {
    operandob = resultado.textContent;
    resolver();
}

function limpiar() {
    resultado.textContent = "";
}
function borrado() {
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
}

function resolver() {
    var res = 0;
    switch (operacion) {
        case "+":
            res = parseFloat(operandoa) + parseFloat(operandob);
            break;
        case "-":
            res = parseFloat(operandoa) - parseFloat(operandob);
            break;
        case "*":
            res = parseFloat(operandoa) * parseFloat(operandob);
            break;
        case "/":
            res = parseFloat(operandoa) / parseFloat(operandob);
            break;
        case "%":
            res = parseFloat(operandoa) % parseFloat(operandob);
            break;
        case "^2":
            res = Math.pow(parseFloat(operandoa), 2);
            break;
        case "^-1":
            res = Math.pow(parseFloat(operandoa), -1);
            break;
        case "&#8730;":
            res = Math.sqrt(parseFloat(operandoa));
            break;
    }
    borrado();
    resultado.textContent = res;
}
window.onload = init;