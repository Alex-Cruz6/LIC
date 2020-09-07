/**/
var num, num2, aux;
var cuadrado;
var msg;
do {
    num = prompt("Ingrese un número: ", "");
} while (isNaN(num) || num === "");
do {
    num2 = prompt("Ingrese un número: ", "");
} while (isNaN(num2) || num2 === "");

var suma = sumador(num);
suma = suma(num2);
var cuadrado = Math.pow(suma, 2);
function sumador(x) {
    return function (y) {
        aux = Number(num) + Number(num2); 
        return aux;
    };
}
msg = "La suma de los números es: " + suma + ".<br/>" + "El cuadrado de la suma es: " + cuadrado;
/*Variable para hacer referencia al elemento DIV
donde se mostrará el total de millas*/
var resultado = document.getElementById('info');
resultado.innerHTML = '<h3>' + msg + '</h3>';