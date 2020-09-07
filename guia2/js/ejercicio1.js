function inicializar() {
    //Inicialización de variables
    var numeros = new Array();
    var i=0, max, temp, contenido = "", tdelement;
    var pares = 0, impar = 0, sumImpar = 0, sumPares = 0, sumTotal = 0, mayor = 0, menor = 0, total = 0, num = 0;
    //Guardado del numero
    do{
        max = prompt("Ingrese un número positivo: ", "");
    }while(isNaN(max) || max < 0);
    //Obteniendo el elemento donde se cargará el contenido
    //generado dinámicamente desde JavaScript
    var datos = document.getElementById('datos');
    //Lazo que descompone el numero
    num = max;
    do{
        numeros[i] = max%10;
        max = Math.floor(max/10);
        i++;
        total++;
    }while(max>0);
    //Lazo que muestra los elementos del arreglo que han sido
    //ordenados con el método de la burbuja
    menor = numeros[0];
    mayor = numeros[0];
    for (i = 0; i < total; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i];
        }
        if (numeros[i] < menor) {
            menor = numeros[i];
        }
        if (numeros[i] % 2 == 0) {
            sumPares = sumPares + numeros[i];
            pares++;
        } else {
            sumImpar = sumImpar + numeros[i];
            impar++;
        }
        sumTotal += numeros[i];
    }
    with (document) {
        contenido += "<h1>Número ingresado</h1>\n";
        //Lazo para ingresar los elementos ingresados en el arreglo
        contenido += "<table>\n\t<tbody>\n\t\t<tr>\n";
        //Lazo que muestra los elementos del arreglo en una tabla
        contenido += "\t\t\t<td class=\"Off\">" + num + "</td>\n";
        contenido += "\t\t</tr>\n\t</tbody>\n</table>\n<br />\n\n";
        contenido += "<h1>Cantidad de Cifras</h1>\n";
        contenido += "<table>\n\t<tbody>\n\t\t<tr>\n";
        contenido += "\t\t\t<td class=\"Off\">" + total + "</td>\n";
        contenido += "\t\t</tr>\n\t</tbody>\n</table>\n";
        contenido += "<h1>Cantidad de Cifras Impares</h1>\n";
        contenido += "<table>\n\t<tbody>\n\t\t<tr>\n";
        contenido += "\t\t\t<td class=\"Off\">" + impar + "</td>\n";
        contenido += "\t\t</tr>\n\t</tbody>\n</table>\n";
        contenido += "<h1>Cantidad de Cifras Pares</h1>\n";
        contenido += "<table>\n\t<tbody>\n\t\t<tr>\n";
        contenido += "\t\t\t<td class=\"Off\">" + pares + "</td>\n";
        contenido += "\t\t</tr>\n\t</tbody>\n</table>\n";
        contenido += "<h1>Suma de cifras Impares</h1>\n";
        contenido += "<table>\n\t<tbody>\n\t\t<tr>\n";
        contenido += "\t\t\t<td class=\"Off\">" + sumImpar + "</td>\n";
        contenido += "\t\t</tr>\n\t</tbody>\n</table>\n";
        contenido += "<h1>Suma de cifras Pares</h1>\n";
        contenido += "<table>\n\t<tbody>\n\t\t<tr>\n";
        contenido += "\t\t\t<td class=\"Off\">" + sumPares + "</td>\n";
        contenido += "\t\t</tr>\n\t</tbody>\n</table>\n";
        contenido += "<h1>Suma de todas las cifras</h1>\n";
        contenido += "<table>\n\t<tbody>\n\t\t<tr>\n";
        contenido += "\t\t\t<td class=\"Off\">" + sumTotal + "</td>\n";
        contenido += "\t\t</tr>\n\t</tbody>\n</table>\n";
        contenido += "<h1>Cifra Mayor</h1>\n";
        contenido += "<table>\n\t<tbody>\n\t\t<tr>\n";
        contenido += "\t\t\t<td class=\"Off\">" + mayor + "</td>\n";
        contenido += "\t\t</tr>\n\t</tbody>\n</table>\n";
        contenido += "<h1>Cifra Menor</h1>\n";
        contenido += "<table>\n\t<tbody>\n\t\t<tr>\n";
        contenido += "\t\t\t<td class=\"Off\">" + menor + "</td>\n";
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