//Definir la matriz o arreglo con los datos
var lista = new Array(
    'abandonado-abandonada', 'abanico', 'abecedario', 'abeja', 'abeto','abogado-abogada',
    'baño', 'babor', 'bacteria', 'bailarín-bailarina', 'baja','baja laboral',
    'cañón', 'caño', 'cabaña', 'caballo', 'cabello', 'cabestrillo', 
    'danzar', 'débil', 'déficit', 'dúplex', 'debate', 'deber', 
    'e-mail', 'ecléctico-ecléctica', 'ecosistema', 'edema', 'edificante', 'edificar', 
    'faba', 'fabada', 'fabricar', 'fabuloso-fabulosa', 'facha', 'fachada',
    'galaxia', 'galeón', 'galleta', 'gallina', 'gallo', 'gamberro-gamberra',
    'haba', 'habichuela', 'habilidad', 'habilitar', 'habitación', 'habitante',
    'icono', 'idea', 'identidad', 'idiosincrasia', 'iglesia', 'ignorante',
    'ja', 'Jaén', 'jabalí-jabalina', 'jabalina', 'jabato-jabata', 'jabón',
    'kafkiano-kafkiana', 'kamikaze', 'karaoke', 'karate', 'karateca', 'karma',
    'laúd', 'laberinto', 'labor', 'laborable', 'laboratorio', 'labrador-labradora',
    'maíz', 'mañana', 'macerar', 'machismo', 'machista', 'madera',
    'nabo', 'nacer'
);
var definiciones = new Array(
    'Que tiene un aspecto descuidado o sucio porque no quiere o no puede arreglarse ni lavarse', 'Objeto que sirve para dar aire', 'Conjunto de letras de un idioma ordenadas por orden alfabético', 'Insecto de color amarillo y negro. Las abejas fabrican miel y cera', 'Árbol de tronco alto y recto. La copa tiene forma de cono y su fruto son las piñas. Puede medir 60', 'Persona que ha estudiado derecho. Da consejo a sus clientes en asuntos legales. También defiende a',
    'Habitación de una casa o de un edificio destinada al aseo. El baño suele tener bañera o ducha', 'Parte izquierda de un barco', 'Organismo muy pequeño que a veces produce enfermedades', 'Persona que tiene como profesión bailar', 'Documento en el que un médico confirma que alguien está enfermo y no puede realizar determinadas', 'Situación de una persona cuando un médico dice que está enferma y no puede ir a trabajar',
    'Arma de gran tamaño con forma de tubo. Dispara proyectiles de hierro con forma de bola', 'Tubo por donde sale al exterior un chorro de un líquido. En general, suele ser de una fuente', 'Casa pequeña hecha de ramas, cañas o troncos que suele estar en el campo', 'Animal mamífero macho de tamaño mediano o grande. Tiene la cabeza alargada y las orejas pequeñas', 'Conjunto de pelos de la cabeza de una persona','Pañuelo o banda que se cuelga del hombro para inmovilizar un brazo o un hombro lesionado',
    'Bailar al ritmo de una música', 'Persona o cosa que tiene poca fuerza o poca resistencia', 'Situación en la que los gastos son mayores que los ingresos', 'Vivienda de 2 plantas unidas por una escalera interior. Ocupa las 2 plantas superiores de un edifici', 'Discusión o intercambio de opiniones entre varias personas sobre un tema', 'Tarea u obligación de hacer algo por la ley o la moral',
    'Correo electrónico', 'Que mezcla diferentes estilos o diferentes ideas. Puedes ser una obra artística o un pensamiento', 'Sistema formado por un conjunto de seres vivos, el territorio en el que viven y el modo que tienen de relacionarse.', 'Inflamación de una parte del cuerpo que se produce por la acumulación de líquido', 'Que es bueno como comportamiento y sirve como ejemplo para los demás', 'Construir un edificio',
    'Judía blanca y gorda', 'Comida típica de Asturias que está hecha con fabas, chorizo, tocino y morcilla.', 'Hacer un producto a partir de otros o de varias piezas que lo forman. Esta actividad necesita ', 'Muy bueno o muy grande. Extraordinario.', 'Aspecto de una persona', 'Parte exterior de un edificio.',
    'Conjunto de estrellas, planetas, polvo interestelar, gases y partículas que giran alrededor de un centro y ocupan una parte del universo.', 'Barco antiguo grande de vela con 3 o 4 palos diseñado por los españoles.', 'Dulce que está hecho con harina, azúcar y huevo de formas diferetes y cocido en el horno.', 'Ave con el pico y las patas cortas. Tiene muchas plumas, una cresta de color rojo y pone huevos.', 'Ave macho. Tiene una cresta roja en la cabeza y muchas plumas. Es un animal doméstico.', 'Poco respetuoso y desconsiderado. Provoca daños y molestias a otras personas.',
    'Planta de huerta con semillas grandes, alargadas y aplastadas que están dentro de una vaina.', 'Judía.', 'Cualidad de la persona que puede hacer cosas bien y con mucha facilidad.', 'Autorizar a alguien para que pueda hacer algo según la ley.', 'Parte de una vivienda o edificio que está separada de las demás por paredes.', 'Persona o ser vivo que vive en un lugar.',
    'Dibujo que tiene un parecido con el objeto que representa.', 'Imagen o representación de algo o alguien en la mente.', 'Conjunto de características de una persona o cosa que la hacen distinta de otra.', 'Rasgos o carácter de una persona o de un grupo que lo diferencia de los demás.', 'Edificio al que las personas van a escuchar misa, a rezar o a celebrar actos religiosos.', 'Persona que ignora o desconoce algo.',
    'Imitación del sonido de la risa. Se suele escribir varias veces seguidas.', 'Provincia de Andalucía. Su capital también se llama Jaén.', 'Cerdo salvaje de color oscuro, con colmillos grandes y pelo duro.', 'Vara parecida a una lanza utilizada en competiciones deportivas.', 'Valiente.', 'Producto que sirve para lavar.',
    'Cosa o situación absurda, muy rara o de pesadilla.', 'Avión que se estrellaba contra su objetivo durante la Segunda Guerra Mundial. También es el piloto.', 'Entretenimiento que consiste en cantar canciones conocidas. La persona que canta escucha la música .', 'Arte marcial japonés que consiste en dar golpes secos con los pies, los codos y el borde de la mano.', 'Persona que practica el kárate.', 'Creencia de la religión hinduista.',
    'Instrumento musical antiguo de cuerda. Está formado por una caja de resonancia y un mástil.', 'Lugar construido con muchas calles o pasillos que se cruzan y en el que es muy difícil orientarse', 'Actividad, tarea.', 'Día en el que las personas trabajan porque no es día de fiesta.', 'Lugar en el que se hacen experimentos y trabajos generalmente relacionados con la ciencia.', 'Que cultiva la tierra.',
    'Planta de tallo largo y hojas grandes. La mazorca es la parte comestible de la planta.', 'Día siguiente al de hoy.', 'Dejar un alimento durante un tiempo en un caldo o una salsa.', 'Actitud de creer que los hombres son superiores a las mujeres.', 'Que discrimina o valora menos a las mujeres porque piensa que son inferiores a los hombres.', 'Parte dura de los árboles. El tronco y las ramas de los árboles son de madera.',
    'Planta de hojas verdes grandes y flores amarillas pequeñas.', 'Salir una persona o animal del vientre de su madre.'
);
//Función iniciar desde donde se controlarán los manejadores de evento
//a utilizar
function iniciar() {
    //Creando el controlador de evento para el evento
    //doble clic sobre los elementos del cuadro de lista
    var lista = document.getElementById("lstsports");
    //Cargando los datos en el cuadro de lista al cargar la página
    cargarLista();
    if (lista.addEventListener) {
        lista.addEventListener("dblclick", function () {
            cargarTexto(this.options[this.selectedIndex].text);
        }, false);
    }
    else if (lista.attachEvent) {
        lista.attachEvent("ondblclick", function () {
            cargarTexto(this.options[this.selectedIndex].text);
        });
    }
    //Capturando el campo de texto sobre el que se ingresan los deportes
    //mediante pulsasión de tecla   
    var texto = document.getElementById("txtsport");
    if (texto.addEventListener) {
        texto.addEventListener("keyup", buscar, false);
    }
    else if (texto.attachEvent) {
        texto.attachEvent("onkeyup", buscar);
    }
}
function cargarLista() {
    // Cargamos el combo
    for (x = 0; x < lista.length; x++)
        document.frmsearchsport.lstsports[x] = new Option(lista[x]);
}
function cargarTexto(elemento) {
    if (elemento != null && elemento != undefined && elemento != "")
        document.frmsearchsport.txtsport.value = elemento;
    var posicion = lista.indexOf(elemento);
    var valor;
    for (valor = posicion; valor < definiciones.length; valor++) {
        document.getElementById("resp").innerHTML = definiciones[valor];
        document.getElementById("resp") = definiciones[valor];
    }
}
function buscar() {
    limpiarLista();
    // Se obtiene el valor del texto
    var str = document.frmsearchsport.txtsport.value;
    // Crear la expresión regular
    var expr = new RegExp("^" + str, "i");
    // Recorrer la lista. Si la expresión regular es OK
    y = 0;
    for (x = 0; x < lista.length; x++) {
        if (expr.test(lista[x])) {
            document.frmsearchsport.lstsports[y] = new Option(lista[x]);
            y++;
        }
    }
}
function limpiarLista() {
    for (x = document.frmsearchsport.lstsports.length; x >= 0; x--)
        document.frmsearchsport.lstsports[x] = null;
}
//Asociando función que manejará el evento load al cargar la página
if (window.addEventListener) {
    window.addEventListener("load", iniciar, false);
}
else if (window.attachEvent) {
    window.attachEvent("onload", iniciar);
}
