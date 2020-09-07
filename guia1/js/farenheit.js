/******************************************************
* Materia: Desarrollo de Aplicaciones Web con        **
* Software Interpretado en el Cliente                **
* Archivo: farenheit.js                              **
* Uso: Convertir grados Celsius a Farenheit.         **
*******************************************************/
do {
    var celsius = prompt('Introduzca los grados celsius:', '');
} while (isNaN(celsius) || celsius === "");

var temFaren;
temFaren = (celsius * (9/5)) + 32;
if(temFaren<50){
    //clima Frío
    document.write("<header><h1>La Temperatura es: " + temFaren + "° Farenheit " + 
                    "<br/>" +"El Clima es Frío" + "</h1><hr/><br/></header>");
    document.write('<img src="img/frio.jpg">');
    document.getElementById('img');
}else if(temFaren>=50 && temFaren<68){
    //Clima Fresco
    document.write("<header><h1>La Temperatura es: " + temFaren + "° Farenheit " +
        "<br/>" + "El Clima es Fresco" + "</h1><hr/><br/></header>");
    document.write('<img src="img/fresco.jpeg">');
    document.getElementById('img');
}else if(temFaren>=68 && temFaren <78.8){
    //clima normal
    document.write("<header><h1>La Temperatura es: " + temFaren + "° Farenheit " +
        "<br/>" + "El Clima es Normal" + "</h1><hr/><br/></header>");
    document.write('<img src="img/normal.jpg">');
    document.getElementById('img');
}else{
    //Clima Caliente
    document.write("<header><h1>La Temperatura es: " + temFaren + "° Farenheit " +
        "<br/>" + "El Clima es Caliente" + "</h1><hr/><br/></header>");
    document.write('<img src="img/caliente.jpg">');
    document.getElementById('img');
}