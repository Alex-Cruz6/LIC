//Declaración de variables
var producto = new Array();
var precio = new Array();
var opcion = true;
var total = 0, i = 0, aux = 0;
//Mostrar las instrucciones para responder
document.write("<h1 align='center'>Productos Agregados con su precio.</h1 > <hr>");
//Ciclo repetitivo infinito donde se captura producto y precio
//en tanto no se de por terminada el ingreso de estos
while(opcion==true){
    producto[i] = prompt("Ingrese el nombre del producto: ", "");
    do{
        precio[i] = parseFloat(prompt("Ingrese el precio del producto: ", ""));
    }while(isNaN(precio[i]) || precio[i] < 0);
    i++;
    aux++;
    //Se pregunta si se desea terminar la encuesta o continuar
    opcion = confirm('¿Ingresar otro producto s/n?');
}
//Mostrar los resultados de la encuesta
with(document){
    write("<table class=\"zui-table zui-table-rounded\">");
    write("<thead>");
    write("<tr><th>Productos</th>");
    write("<th>Precio</th>");
    write("</thead>");

    write("<tbody>");
    for(i=0; i< aux; i++ ){
        write("<tr><td>" + producto[i] + "</td><td class=\"number\">$" + precio[i] + "</td></tr>");
        total += precio[i];
    }
    write("</tbody>");
    write("<tfoot>");
    write("<tr><th>Total venta</th>");
    write("<th class=\"number\">$" + total + "</th>");
    write("</tfoot>");
    write("</table>");
}