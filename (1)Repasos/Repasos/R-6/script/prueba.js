let contadorFilas = 0;

function AgregarFilas() {
    let numFilas = 1;


    let tabla = document.getElementById('tabla');

    for (let i = 0; i < numFilas; i++) {

        let nuevaFila = tabla.insertRow();

        contadorFilas++;

        //columna1
        let celda1 = nuevaFila.insertCell(0);
        let input1 = document.createElement('input');        
        input1.id = 'c' + contadorFilas;        
        input1.type='text';
        input1.style.width='98.2%';        
        celda1.appendChild(input1);
        //columna2
        let celda2 = nuevaFila.insertCell(1);
        let input2 = document.createElement('input');
        input2.id = 'd' + contadorFilas;                
        input2.type = 'text';
        input2.style.width='98.2%';        
        celda2.appendChild(input2);

        //columna3
        let celda3 = nuevaFila.insertCell(2);
        let input3 = document.createElement('input');
        input3.id = 'p' + contadorFilas;                
        input3.type = 'text';
        input3.style.width='98.2%';
        celda3.appendChild(input3);
        
        //columna4
        let celda4 = nuevaFila.insertCell(3);
        let label4=document.createElement('label');
        label4.id='t'+contadorFilas;               
        celda4.appendChild(label4);

    }
}