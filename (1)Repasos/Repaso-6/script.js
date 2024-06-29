// otra forma tipo objeto
var miObjeto = new Object(),cadena = "miCadena",aleatorio = Math.random(),objeto = new Object();

// ----- MiObjeto
miObjeto.type = "Sintaxis con punto";
miObjeto["Fecha de creación"] = "Cadena con espacios y acento";
miObjeto[cadena] = "String value";
miObjeto[aleatorio] = "Número Aleatorio";
miObjeto[objeto] = "Objeto";
miObjeto[""] = "Incluso una cadena vacía";
console.log(miObjeto);

// otra forma de crear objetos
// Propiedades y método de encapsulación para Animal
var Animal = {
    tipo: 'Invertebrados',      // valor por defecto de la propiedad
    mostrarTipo: function () {  // Método que mostrará el tipo de Animal
        console.log(this.tipo);
    }
};

// Crear una nuevo objeto de tipo Animal llamado y asignar 'Pescados' a la propiedad tipo
var fish = Object.create(Animal);
console.log(fish.tipo);
console.log(fish);
fish.tipo = 'Pescados';
fish.mostrarTipo(); // Salida: Pescados

// ------- Funciones ----
function mes (numMes){
  var meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
  // meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  return meses[numMes];
}


// Definir el tipo de objeto escribiendo una función constructora
function Auto(marca, modelo, annio, dueño) {
    var fecha = new Date();   // esta no es propiedada es indentificador
    this.marca = marca;       // el uso de this para asignar valores a las propiedades
    this.modelo = modelo;
    this.annio = annio;
    this.mes  = mes(fecha.getMonth());
    this.propietario = dueño;
}

// Definir el objeto Persona
function Persona(nombre, edad, sexo) {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    }
var fer=new Persona("Oda",50,"masculina");
//-----------------------------------Auto

var elAutoFer = new Auto ("byd","s6", 2015, fer);
console.log(elAktutoFer);
console.log(elAutoFer.propietario.nombre);
console.log(elAutoFer.mes);
console.log(fer);

var Oscar=new Persona("Oscar",20,"Variable");
var Tucson= new Auto("A","a",2024,Oscar);
Oscar["LibretaMilitar"]=true;

console.log(Tucson);
console.log(Tucson.propietario.nombre);
console.log(Tucson.mes);
console.log(Oscar);


