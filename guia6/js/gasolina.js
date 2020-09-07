//al iniciar la aplicacion esta iniciará la funcion init
window.addEventListener('load', init, false);
//Registrar evento click del ratón al presionar botones de envío
function init() {
    mostrar.addEventListener('click', caluloGalones);
}
var totalFin = 0;
function caluloGalones() {
    var galones = document.getElementById("galones").value;
    if (document.getElementById('regular').checked == true) {
        var tipo = document.getElementById("regular").value;
        totalFin = tipo * galones;
        Math.floor(totalFin);
        document.getElementById("total").value = totalFin;
    }
    else if (document.getElementById('especial').checked == true) {
        tipo = document.getElementById("especial").value;
        totalFin = tipo * galones;
        Math.floor(totalFin);
        document.getElementById("total").value = totalFin;
    }
    else if (document.getElementById('diesel').checked == true) {
        tipo = document.getElementById("diesel").value;
        totalFin = tipo * galones;
        Math.floor(totalFin);
        document.getElementById("total").value = totalFin;
    }
}