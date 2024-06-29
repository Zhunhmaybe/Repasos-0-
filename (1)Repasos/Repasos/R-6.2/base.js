//BASE DE DATOS 

var bd;

//abrir la base de datos
function IniciarBaseDatos(){
    var btnGuardar=document.querySelector("#btnGuardar")
    btnGuardar.addEventListener("click",AlmacenarInfo)
    //solicitud 
    var solicitud=indexedDB.open("Datos-Factura");

    //cuando suceda un erro
    solicitud.addEventListener("error",MostrarError);
    //apertura exitosa
    solicitud.addEventListener("success",Comenzar);
    //cuando abrimos una bd no existente
    solicitud.addEventListener("upgradeneeded",CrearAlmacen);
}
function MostrarError(evento){
    alert("ERROR 404:: "+evento.code+" / "+evento.message);
}
function Comenzar(evento){
    bd=evento.target.result;
}
function CrearAlmacen(evento){
    var baseDatos;
    baseDatos=evento.target.result;
    var almacen;
    almacen=baseDatos.createObjectStore("Registros",{keyPath: "id"})
    almacen.createIndex("BuscarNombre","nombre",{unique:false});
}
function AlmacenarInfo(){
    //recuger valores de los input
    var I=document.querySelector("#id").value;
    var N=document.querySelector("#nombre").value;

    //tansacciones
    var transaccion=bd.transaction(["Registros"],"readwrite");
    var almacen=transaccion.objectStore("Registros");
    //almacenar nueva info
    almacen.add({
        nombre:N,
        id:I
    });

    //limpiar los inputs
    document.querySelector("#id").value="";
    document.querySelector("#nombre").value="";
}
window.addEventListener("load",IniciarBaseDatos)