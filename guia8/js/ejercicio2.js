var re = null;
// Valida el ingreso del Email
function ValidarEmail(){
    var email = document.entradas.email.value;
    var nombre = document.entradas.nombre.value;
    var mensaje = document.entradas.mensaje.value;
    if (nombre == null || nombre == "" || nombre.length == 0) {
        alert("No se ha ingresado ningún valor en el campo de nombre");
        return 0;
    }
    if (email == null || email == "" || email.length == 0) {
        alert("No se ha ingresado ningún valor en el campo de correo");
        return 0;
    }
    if (mensaje == null || mensaje == "" || mensaje.length == 0) {
        alert("No se ha ingresado ningún valor en el campo de mensaje");
        return 0;
    }
    re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/;
    if (re.test(email)) {
        alert("Los datos ingresados son correctos");
    }else{
        alert("El correo es invalido, Ingrese uno correcto");
    }
}
function inputAlphanumericOnly(e) {
    var evt = e ? e : event;
    var keyCode = (evt.which) ? evt.which : evt.keyCode;
    //alert("Código de tecla presionada " + keyCode);
    if ((keyCode < 65 || keyCode > 90) && (keyCode < 97 || keyCode > 122) && keyCode != 225 &&
        keyCode != 193 && keyCode != 233 && keyCode != 201 && keyCode != 237 && keyCode != 205 && keyCode != 243
        && keyCode != 211 && keyCode != 250 && keyCode != 218 && keyCode != 241 && keyCode != 209 &&
        keyCode != 252 && keyCode != 220 && keyCode != 161 && keyCode != 33 && keyCode != 191 && keyCode != 63
        && keyCode != 34 && keyCode != 46 && keyCode != 44 && keyCode != 59 && keyCode != 8 && keyCode != 13 &&
        keyCode != 27 && keyCode != 32) {
        //Any other input? Prevent the default response:
        alert("Sólo se aceptan caracteres alfabéticos");
        if (evt.preventDefault) evt.preventDefault();
        evt.returnValue = false;
        return false;
    }
    return true;
}
function addEventHandler(elem, eventType, handler) {
    if (elem.addEventListener) {
        //alert("Evento " + eventType + " controlado en el elemento " + elem);
        elem.addEventListener(eventType, handler, false);
    }
    else if (elem.attachEvent) {
        elem.attachEvent('on' + eventType, handler);
    }
    else {
        return 0;
    }
    return 1;
}
// onload: Call the init() function to add event handlers!
function init() {
    addEventHandler(self.document.entradas.nombre, 'keypress', inputAlphanumericOnly);
    //manda a llamar la funcion de verificacion de correo
    var boton = document.getElementById("B2");
    if (boton.addEventListener) {
        boton.addEventListener("click", ValidarEmail, false);
    }
    else if (boton.attachEvent) {
        boton.attachEvent("onclick", ValidarEmail);
    }
}
if (window.addEventListener) {
    window.addEventListener('load', init, false);
}
else if (window.attachEvent) {
    window.attachEvent('load', init);
}