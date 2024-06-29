
/*
//Forma 1 de declarar objetos
var miObjeto = new Object(),
cadena = "miCadena",
aleatorio = Math.random(),
num=1;
    //propiedades tipo .
miObjeto.num=2;    
miObjeto.cadena="hola";
miObjeto.aleatorio=Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    //propiedades corchetes
miObjeto[num]=3;

console.log(miObjeto.cadena);
console.log(miObjeto[num]);
console.log(miObjeto.num);

// forma 2
    // Propiedades y método de encapsulación para Animal
var Animal = {
    tipo: 'Invertebrados',
    aletas:6,      // valor por defecto de la propiedad
    mostrarTipo: function () {  // Método que mostrará el tipo de Animal
        console.log(this.tipo+" funcion") ;
    }
};

    // Crear una nuevo objeto de tipo Animal llamado y asignar 'Pescados' a la propiedad tipo
var fish = Object.create(Animal);
console.log(fish.tipo);
console.log(fish.aletas);
console.log(fish);
fish.tipo = 'Pescados';
fish.mostrarTipo(); // Salida: Pescados



*/

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

//Conectado con script

