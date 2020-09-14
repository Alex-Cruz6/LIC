document.onkeydown = keyHit;

var thisPic = 0;

function keyHit(evt) {
    var myPix = new Array(
        "img/camaleon.jpg",
        "img/delfin.jpg",
        "img/hipopotamo.jpg",
        "img/cuarta.jpg",
        "img/jirafas.jpg",
        "img/Mitos-animales-1.jpg",
        "img/netaMeLoJuras.jpeg",
        "img/oso.jpg",
        "img/perro.jpg",
        "img/ultima.png"
    );
    var imgCt = myPix.length - 1;
    var atras = document.getElementById("B2");
    var adelante = document.getElementById("B1");
    if (atras.addEventListener) {
        atras.addEventListener("click", function () {
            chgSlide(-1);
            return false;
        }, false);
    }
    else if (atras.attachEvent) {
        atras.attachEvent("click", function () {
            chgSlide(-1);
            return false;
        });
    }
    if (adelante.addEventListener) {
        adelante.addEventListener("click", function () {
            chgSlide(1);
            return false;
        }, false);
    }
    else if (adelante.attachEvent) {
        adelante.attachEvent("click", function () {
            chgSlide(1);
            return false;
        });
    }
    //37 y 39 son los códigos de las teclas que representan
    //la presión de las teclas de cursor izquierda y derecha
    //respectivamente
    var ltArrow = 37;
    var rtArrow = 39;
    //Manejo del objeto para controlar los eventos del teclado
    //de forma uniforme sin importar el navegador
    var thisKey = (evt) ? evt.which : window.event.keyCode;
    if (thisKey == ltArrow) {
        chgSlide(-1);
    }
    else if (thisKey == rtArrow) {
        chgSlide(1);
    }
    return false;
    
    function chgSlide(direction) {
        thisPic = thisPic + direction;
        if (thisPic > imgCt) {
            thisPic = 0;
        }
        if (thisPic < 0) {
            thisPic = imgCt;
        }
        document.getElementById("myPicture").src = myPix[thisPic];
    }
}
if (window.addEventListener) {
    window.addEventListener("load", keyHit, false);
}
else if (window.attachEvent) {
    window.attachEvent("load", keyHit);
    
}