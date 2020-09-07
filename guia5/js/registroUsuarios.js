//Registrar evento click al presionar el botón de envío
function iniciar() {
    var btnenviar = document.getElementById("btnSend");
    //Al producirse un click sobre el botón de envío
    //invocar los métodos del objeto carro que mostrarán
    //los valores ingresados en el formulario
    if (btnenviar.addEventListener) {
        btnenviar.addEventListener("click", function () {
            var chkvalue, selvalue, nuevoalumno;
            var contra = document.getElementById("txtPassword");
            var contra2 = document.getElementById("txtPassword2");
            var radiofield = document.frmmat.elements["chkgender"];
            if (contra.value.length < 8 || contra2.value.length < 8) {
                alert("La contraseña no puede ser menor a 8 caracteres");
            } else {
                if (contra.value == contra2.value) {
                    for (var i = 0; i < radiofield.length; i++) {
                        if (radiofield[i].checked) {
                            chkvalue = radiofield[i].value;
                        }
                    }
                    nuevoalumno = new alumnoUDB(document.frmmat.txtname.value, document.frmmat.txtlastname.value,
                        document.frmmat.txtEmail.value, document.frmmat.txtFechNacimiento.value,
                        document.frmmat.txtPassword.value, document.frmmat.txtPassword2.value,
                        document.frmmat.txtage.value, chkvalue);
                    nuevoalumno.matricular();
                    nuevoalumno.imprimir();
                } else {
                    alert("Las contraseñas no coinciden");
                }
            }
        }, false);
    }
    else {
        btnenviar.attachEvent("onclik", function () {
            var chkvalue, nuevoalumno;
            var contra = document.getElementById("txtPassword");
            var contra2 = document.getElementById("txtPassword2");
            var radiofield = document.frmmat.elements["chkgender"];
            if (contra.value.length < 8 || contra2.value.length < 8) {
                alert("La contraseña no puede ser menor a 8 caracteres");
            } else {
                if (contra.value == contra2.value) {
                    for (var i = 0; i < radiofield.length; i++) {
                        if (radiofield[i].checked) {
                            chkvalue = radiofield[i].value;
                        }
                    }
                    nuevoalumno = new alumnoUDB(document.frmmat.txtname.value, document.frmmat.txtlastname.value,
                        document.frmmat.txtEmail.value, document.frmmat.txtFechNacimiento.value,
                        document.frmmat.txtPassword.value, document.frmmat.txtPassword2.value,
                        document.frmmat.txtage.value, chkvalue);
                    nuevoalumno.matricular();
                    nuevoalumno.imprimir();
                } else {
                    alert("Las contraseñas no coinciden");
                }
            }
        });
    }
}
//Definiendo la clase alumnoUDB haciendo uso de sintaxis de función
function alumnoUDB(nombre, apellido, email, fechaNacimiento, contra, confirContra, edad, genero) {
    //Propiedades de la clase
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.fechaNacimiento = fechaNacimiento;
    this.contra = contra;
    this.confirContra = confirContra;
    this.edad = edad;
    this.genero = genero;
    this.numCarnet = null;
    //Métodos de la clase
    this.matricular = function () {
        var num1 = Math.floor(Math.random() * (9999 - 0000)) + 0000;
        var fecha = new Date();
        var year = fecha.getFullYear();
        this.numCarnet = this.nombre.substring(0, 1) +
            this.apellido.substring(0, 1) + this.formato(year) + this.formato(num1);
    }
    this.imprimir = function () {
        document.write("<!DOCTYPE html>\n");
        document.write("<html lang=\"es\">\n");
        document.write("<head>\n\t");
        document.write("<title>Datos del Usuario</title>\n");
        document.write("<meta charset=\"utf-8\" />");
        document.write("<link rel=\"stylesheet\"href =\"../css/infoalumno.css\"/>\n");
        document.write("</head>\n");
        document.write("<body>\n");
        document.write("<table class=\"carinfo\"><tr>\n");
        document.write("<th colspan=\"2\">Datos del Usuario</th>\n");
        document.write("<tr><td>Indentificador: </td>\n");
        document.write("<td>" + this.numCarnet + "</td></tr>\n");
        document.write("<tr><td>Nombre: </td>\n");
        document.write("<td>" + this.nombre + " " + this.apellido + "</td></tr>\n");
        document.write("<tr><td>E-mail: </td>\n");
        document.write("<td>" + this.email + "</td></tr>\n");
        document.write("<tr><td>Fecha de Nacimiento: </td>\n");
        document.write("<td>" + this.fechaNacimiento + "</td></tr>\n");
        document.write("<tr><td>Edad: </td>\n");
        document.write("<td>" + this.edad + "</td></tr>\n");
        document.write("<tr><td>Género: </td>\n");
        document.write("<td>" + this.genero + "</td></tr>\n");
        document.write("</tr></table>\n");
        document.write("</head>\n");
        document.write("</html>\n");
    }
    this.formato = function (valor) {
        if (valor < 10) valor = "0" + valor;
        return valor;
    }
}
//Asociando función que manejará el evento load al cargar la página
if (window.addEventListener) {
    window.addEventListener("load", iniciar, false);
}
else if (window.attachEvent) {
    window.attachEvent("onload", iniciar);
}