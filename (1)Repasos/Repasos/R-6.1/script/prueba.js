
// Contadores para generar IDs únicos
var cantidadCounter = 1;
var descripcionCounter = 1;
var unitarioCounter = 1;

// Arreglos para almacenar los IDs de cada tipo de campo
var cantidadIDs = [];
var descripcionIDs = [];
var unitarioIDs = [];


function addProductForm() {
    // Crear un contenedor para el nuevo formulario
    const container = document.createElement('div');
    container.className = 'product-form';

    // Generar IDs únicos para los campos
    const cantidadID = `c${cantidadCounter++}`;
    const descripcionID = `d${descripcionCounter++}`;
    const unitarioID = `u${unitarioCounter++}`;

    // Almacenar los IDs en los arreglos
    cantidadIDs.push(cantidadID);
    descripcionIDs.push(descripcionID);
    unitarioIDs.push(unitarioID);

    // Crear los campos del formulario con los IDs generados
    container.innerHTML = `
        <div class="items">
            <input type="text" id="${cantidadID}" class="quantity ancho" min="0" oninput="calculateTotal(this)">
            <input type="text" id="${descripcionID}" class="description ancho">
            <input type="number" id="${unitarioID}" class="unit-price ancho" min="0" step="0.01" oninput="calculateTotal(this)">
            <input type="number" class="total-price ancho" readonly>
            <input type="button" class="boton" value="Eliminar" onclick="removeProductForm(this)">
        </div>
    `;

    // Agregar el nuevo formulario al contenedor principal
    document.getElementById('productos').appendChild(container);
}

function calculateTotal(element) {
    const form = element.closest('.product-form');
    const quantity = form.querySelector('.quantity').value;
    const unitPrice = form.querySelector('.unit-price').value;
    const totalPrice = form.querySelector('.total-price');

    totalPrice.value = (quantity * unitPrice).toFixed(2);
    calculateGrandTotal();
    calculateGrandTotalIva()
    calculateSubTotal();
}
function calculateGrandTotal() {
    const totalPrices = document.querySelectorAll('.total-price');
    let grandTotal = 0;

    totalPrices.forEach(price => {
        grandTotal += parseFloat(price.value) || 0;
    });

    document.getElementById('grand-total').value = grandTotal.toFixed(2);
  
}
function calculateGrandTotalIva() {
    const grandTotal = parseFloat(document.getElementById('grand-total').value) || 0;
            const d_iva = grandTotal * 0.12;
            document.getElementById('iva').value = d_iva.toFixed(2);
}
function calculateGrandTotalIva() {
    const grandTotal = parseFloat(document.getElementById('grand-total').value) || 0;
            const d_iva = grandTotal * 0.12;
            document.getElementById('iva').value = d_iva.toFixed(2);
}
function calculateSubTotal() {
    const grandTotal = parseFloat(document.getElementById('grand-total').value) || 0;
    const d_iva = parseFloat(document.getElementById('iva').value) || 0;
        const sub_total = grandTotal +d_iva;  
            document.getElementById('sub_total').value = sub_total.toFixed(2);
}
function removeProductForm(button) {
  
    const form = button.closest('.product-form');
    form.remove();
    calculateGrandTotal();
    calculateGrandTotalIva();
    calculateSubTotal();
    
}
//-----------------------------------------------------------------------
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
    almacen=baseDatos.createObjectStore("Registros",{keyPath: "descripcion"})
    //almacen.createIndex("Cantidades","cant",{unique:false});
    
}
function AlmacenarInfo() {
    // Recoger valores de los inputs
    const descriptions = descripcionIDs.map(id => document.querySelector(`#${id}`).value);
    const quantities = cantidadIDs.map(id => document.querySelector(`#${id}`).value);
    const unitPrices = unitarioIDs.map(id => document.querySelector(`#${id}`).value);

    const transaccion = bd.transaction(["Registros"], "readwrite");
    const almacen = transaccion.objectStore("Registros");

    // Almacenar nueva información en la base de datos
    descriptions.forEach((descripcion, index) => {
        almacen.add({
            descripcion,
            cant: quantities[index],
            Unitario: unitPrices[index]
        });
    });

    // Limpiar los inputs
    cantidadIDs.forEach(id => document.querySelector(`#${id}`));
    descripcionIDs.forEach(id => document.querySelector(`#${id}`));
    unitarioIDs.forEach(id => document.querySelector(`#${id}`));
}
window.addEventListener("load",IniciarBaseDatos)