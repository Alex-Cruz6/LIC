function inicializar() {
    //Inicialización de variables
    var max, contenido = "", tdelement;
    var absoluto, redondeo, redondeoUp, redondeoDown, euler,logNatu, aleatorio; 
    //Validación para que el número de elementos del arreglo sea
    //numérico y mayor o igual que 2
    do {
        max = parseFloat(prompt("Ingrese un número cualquiera: ", ""));
    } while (isNaN(max));
    absoluto = Math.abs(max);
    redondeo = Math.round((max *100)/100);
    redondeoUp = Math.ceil(max);
    redondeoDown = Math.floor(max);
    euler = Math.exp(max);
    logNatu = Math.log(max);
    aleatorio = parseInt(Math.random() * (100 - 1) + 1);
    //Obteniendo el elemento donde se cargará el contenido
    //generado dinámicamente desde JavaScript
    var datos = document.getElementById('datos');
    with (document) {
        contenido += "<h1>Número ingresado</h1>\n";
        contenido += "<table>\n\t<tbody>\n\t\t<tr>\n";
        contenido += "\t\t\t<td class=\"Off\">" + max + "</td>\n";
        contenido += "\t\t</tr>\n\t</tbody>\n</table>\n<br />\n\n";
        //Muestra el valor absoluto del numero
        contenido += "<h1>Valor Absoluto del número Ingresado</h1>\n";
        contenido += "<table>\n\t<tbody>\n\t\t<tr>\n";
        contenido += "\t\t\t<td class=\"Off\">" + absoluto + "</td>\n";
        contenido += "\t\t</tr>\n\t</tbody>\n</table>\n<br />\n\n";
        //Muestra el redondeo del numero
        contenido += "<h1>Redondeo con round</h1>\n";
        contenido += "<table>\n\t<tbody>\n\t\t<tr>\n";
        contenido += "\t\t\t<td class=\"Off\">" + redondeo + "</td>\n";
        contenido += "\t\t</tr>\n\t</tbody>\n</table>\n<br />\n\n";
        //Muestra el redondeo del numero ceil
        contenido += "<h1>Redondeo con ceil</h1>\n";
        contenido += "<table>\n\t<tbody>\n\t\t<tr>\n";
        contenido += "\t\t\t<td class=\"Off\">" + redondeoUp + "</td>\n";
        contenido += "\t\t</tr>\n\t</tbody>\n</table>\n<br />\n\n";
        //Muestra el redondeo con floor
        contenido += "<h1>Redondeo con floor</h1>\n";
        contenido += "<table>\n\t<tbody>\n\t\t<tr>\n";
        contenido += "\t\t\t<td class=\"Off\">" + redondeoDown + "</td>\n";
        contenido += "\t\t</tr>\n\t</tbody>\n</table>\n<br />\n\n";
        //Muestra el exponente de euler
        contenido += "<h1>Exponenciación de Euler</h1>\n";
        contenido += "<table>\n\t<tbody>\n\t\t<tr>\n";
        contenido += "\t\t\t<td class=\"Off\">" + euler + "</td>\n";
        contenido += "\t\t</tr>\n\t</tbody>\n</table>\n<br />\n\n";
        //Muestra el logaritmo natural
        contenido += "<h1>Logarítmo Natural del número Ingresado</h1>\n";
        contenido += "<table>\n\t<tbody>\n\t\t<tr>\n";
        contenido += "\t\t\t<td class=\"Off\">" + logNatu + "</td>\n";
        contenido += "\t\t</tr>\n\t</tbody>\n</table>\n<br />\n\n";
        //Muestra el numero aleatorio
        contenido += "<h1>Número aleatorio entre 0 y 100</h1>\n";
        contenido += "<table>\n\t<tbody>\n\t\t<tr>\n";
        contenido += "\t\t\t<td class=\"Off\">" + aleatorio + "</td>\n";
        contenido += "\t\t</tr>\n\t</tbody>\n</table>\n";
    }
    datos.innerHTML = contenido;
    //Capturando los elemento con clase Off
    tdelement = document.getElementsByClassName('Off');
    for (var i = 0; i < tdelement.length; i++) {
        tdelement[i].onmouseover = function () {
            this.className = 'On';
        }
        tdelement[i].onmouseout = function () {
            this.className = 'Off';
        }
    }
}
window.onload = inicializar;