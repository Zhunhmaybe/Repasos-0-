let contadorFilas = 0;

function agregarFilas() {
    // Obtener el número de filas a agregar
    let numFilas = 1;


    // Obtener la tabla
    let tabla = document.getElementById('tabla');

    for (let i = 0; i < numFilas; i++) {
        // Crear una nueva fila
        let nuevaFila = tabla.insertRow();

        // Incrementar el contador de filas
        contadorFilas++;

        // Crear la celda con el ID único
        let celdaID = nuevaFila.insertCell(0);
        celdaID.id = 'c' + contadorFilas;
        
        celdaID.textContent = celdaID.id;

        // Crear la celda de valor
        let celdaValor = nuevaFila.insertCell(1);
        let inputValor = document.createElement('input');
        inputValor.type = 'text';
        inputValor.style.width='200px';
        celdaValor.appendChild(inputValor);
    }
}