//Registrar evento click del ratón al presionar botones de envío
function iniciar() {
    var btnperim = document.getElementById("perimetro");
    if (btnperim.addEventListener) {
        btnperim.addEventListener("click", calcularpotencia, false);
    }
    else {
        btnperim.attachEvent("onclick", calcularpotencia);
    }
}
function calcularpotencia() {
    var pote = new potencia(document.frmrectangulo.txtbase.value,document.frmrectangulo.txtaltura.value);
    pote.mostrar(pote.cpote(), 'potencia');
    return false;
}
//Creando una clase rectángulo
function potencia(base, potencia) {
    var aux;
    //Propiedades de la clase
    this.base = parseFloat(base);
    this.potencia = parseFloat(potencia);
    this.aux = Math.pow(base,potencia);
    //Métodos de la clase
    //definidos usando el constructor Function()
    this.cpote = new Function("return this.aux");
    this.mostrar = new Function("valor", "tipoc", "alert('El ' + tipoc + ' es: ' + valor)");
}
//Asociando función que manejará el evento load al cargar la página
if (window.addEventListener) {
    window.addEventListener("load", iniciar, false);
}
else if (window.attachEvent) {
    window.attachEvent("onload", iniciar);
}