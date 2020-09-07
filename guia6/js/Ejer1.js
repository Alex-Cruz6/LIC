//Al iniciar se ejecuta la funcion init
window.addEventListener('load', init, false);
//declaramos la variable contenido que servira para crear las etiquetas de la tabla
var contenido = "";
var numero;
var fila, columna, tabla, ActFila, ActColumna;
//funcion que se ejecuta al iniciar la ventana de windows
function init() {
    crear.addEventListener('click', crearTabla);
    actuali.addEventListener('click', actualizarValor);
}
//funcion que crea la tabla
function crearTabla() {
    fila = document.getElementById("filas").value;
    columna = document.getElementById("columnas").value;
    tabla = document.getElementById("Tabla");
    contenido += "<table>";
    for (i = 1; i <= fila; i++) {
        contenido += "<tr>";
        for (j = 1; j<= columna; j++) {
            numero = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
            contenido += "<td id=" + i + j + ">"
            contenido += numero;
            contenido += "</td>";
        }
        contenido += "</tr>";
    }
    contenido += "</table>";
    tabla.innerHTML = contenido;
}
//funcion que actualiza la tabla
function actualizarValor() {
    contenido = "";
    if (document.getElementById("filasAct").value <= fila) {
        ActFila = document.getElementById("filasAct").value;
    }
    else {
        alert('Se ha sobrepasado el rango de la Fila');
        return 0;
    }
    if (document.getElementById("columnasAct").value <= columna) {
        ActColumna = document.getElementById("columnasAct").value;
    }
    else {
        alert('Se ha sobrepasado el rango de la columna');
        return 0;
    }
    valor = document.getElementById("ValorAct").value;
    posicion = (ActFila) + (ActColumna);
    Actualizar = document.getElementById(posicion);
    contenido += valor;
    Actualizar.innerHTML = contenido;
}