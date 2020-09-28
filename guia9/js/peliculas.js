function init() {
    function ajaxRequest() {
        //Crear array() con cadenas para creación de objeto ActiveX
        //en caso de navegadores antiguos de Internet Explorer
        var activexmodes = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP"];
        //Test for support for ActiveXObject in IE first (as XMLHttpRequest in IE7 is broken)
        if (window.ActiveXObject) {
            for (var i = 0; i < activexmodes.length; i++) {
                try {
                    return new ActiveXObject(activexmodes[i]);
                }
                catch (e) {
                    return false;
                }
            }
        }
        // Si se está usando Chrome, Mozilla, Safari, Opera, etc.
        else if (window.XMLHttpRequest) {
            return new XMLHttpRequest();
        }
        else {
            return false;
        }
    }
    var request = new ajaxRequest();
    var pelicula1 = document.getElementById("inters");
    var pelicula2 = document.getElementById("atraccion");
    var pelicula3 = document.getElementById("lagrimas");
    var pelicula4 = document.getElementById("mision");
    var pelicula5 = document.getElementById("rambo");
    var pelicula6 = document.getElementById("robocop");
    var jsondata, rssentries, output, i;
    request.onreadystatechange = function () {
        if (request.readyState == 4) {
            if (request.status == 200 || window.location.href.indexOf("http") == -1) {
                //Recibir resultado como un objeto de JavaScript usando la función eval()
                //var jsondata = eval("("+request.responseText+")");
                //Recibir resultado como un objeto de JavaScript usando el método parse()
                if (pelicula1.addEventListener) {
                    pelicula1.addEventListener("click", function () {
                        i = 0;
                        mostrar(i);
                    }, false);
                }
                if (pelicula2.addEventListener) {
                    pelicula2.addEventListener("click", function () {
                        i = 1;
                        mostrar(i);
                    }, false);
                }
                if (pelicula3.addEventListener) {
                    pelicula3.addEventListener("click", function () {
                        i = 2;
                        mostrar(i);
                    }, false);
                }
                if (pelicula4.addEventListener) {
                    pelicula4.addEventListener("click", function () {
                        i = 3;
                        mostrar(i);
                    }, false);
                }
                if (pelicula5.addEventListener) {
                    pelicula5.addEventListener("click", function () {
                        i = 4;
                        mostrar(i);
                    }, false);
                }
                if (pelicula6.addEventListener) {
                    pelicula6.addEventListener("click", function () {
                        i = 5;
                        mostrar(i);
                    }, false);
                }

            }
            else {
                alert("Ha ocurrido un error mientras se realizaba la petición");
            }
        }
    }
    function mostrar(i) {
        jsondata = JSON.parse(request.responseText);
        rssentries = jsondata.items;
        output = "<ul>";
        output += "<li>";
        if (i == 0) {
            output += "<h3>" + rssentries[i].title1 + "</h3>";
            output += "<p>" + rssentries[i].protagonist1 + "</p>"; output += "<br>";
            output += "<p>" + rssentries[i].description1 + "</p>"; output += "<br>";
            output += "<p>" + rssentries[i].director1 + "</p>"; output += "<br>";
        } else if (i == 1) {
            output += "<h3>" + rssentries[i].title2 + "</h3>";
            output += "<p>" + rssentries[i].protagonist2 + "</p>"; output += "<br>";
            output += "<p>" + rssentries[i].description2 + "</p>"; output += "<br>";
            output += "<p>" + rssentries[i].director2 + "</p>"; output += "<br>";
        } else if (i == 2) {
            output += "<h3>" + rssentries[i].title3 + "</h3>";
            output += "<p>" + rssentries[i].protagonist3 + "</p>"; output += "<br>";
            output += "<p>" + rssentries[i].description3 + "</p>"; output += "<br>";
            output += "<p>" + rssentries[i].director3 + "</p>"; output += "<br>";
        } else if (i == 3) {
            output += "<h3>" + rssentries[i].title4 + "</h3>";
            output += "<p>" + rssentries[i].protagonist4 + "</p>"; output += "<br>";
            output += "<p>" + rssentries[i].description4 + "</p>"; output += "<br>";
            output += "<p>" + rssentries[i].director4 + "</p>"; output += "<br>";
        } else if (i == 4) {
            output += "<h3>" + rssentries[i].title5 + "</h3>";
            output += "<p>" + rssentries[i].protagonist5 + "</p>"; output += "<br>";
            output += "<p>" + rssentries[i].description5 + "</p>"; output += "<br>";
            output += "<p>" + rssentries[i].director5 + "</p>"; output += "<br>";
        } else if (i == 5) {
            output += "<h3>" + rssentries[i].title6 + "</h3>";
            output += "<p>" + rssentries[i].protagonist6 + "</p>"; output += "<br>";
            output += "<p>" + rssentries[i].description6 + "</p>"; output += "<br>";
            output += "<p>" + rssentries[i].director6 + "</p>"; output += "<br>";
        }
        output += "</a>";
        output += "</li>";
        output += "</ul>";
        document.getElementById("descriptions").innerHTML = output;
        return false;
    }
    request.open("GET", "json/peliculas.json", true);
    request.send(null);
}
if (window.addEventListener) {
    window.addEventListener("load", init, false);
}
else if (window.attachEvent) {
    window.attachEvent("load", init);
}