/****************************************************
* Materia: Desarrollo de Aplicaciones Web con      **
* Software Interpretado en el Cliente              **
* Archivo: calculodias.js                          **
* Uso: Calcular el número de días transcurridos    **
* desde la fecha de nacimiento hasta la            **
* fecha actual del calendario.                     **
*****************************************************/
do{
    var km = prompt("Ingrese los Kilometros a convertir: ", "");
}while(isNaN(km) || km ==="" || km <0);
var milla = Math.round((km/1.60934) * 100) /100;
var msg = "La conversión es de: " + milla + " Millas.<br/>";
/*Variable para hacer referencia al elemento DIV
donde se mostrará el total de millas*/
var resultado = document.getElementById('info');
resultado.innerHTML = '<h3>' + msg + '</h3>';