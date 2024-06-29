let tarjetasDestapatas=0;
let tarjeta1=null;
let tarjeta2=null;
let resultado1=null;
let resultado2=null;

let movimientos=0,aciertos=0;
let timer=30;
//identificador de tiempo(solo es una variable que contiene al timer)
let timevar=null;   
let temporizador=false;
//enlasar documento con html
let mostrarMovimientos=null;
let mostrarAciertos=null;
let mostrarTiempo=null;

let numeros=[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]
numeros=numeros.sort(()=>{return Math.random()-0.5});

function Destapar(id){

    //temporizador
    if(temporizador==false){
        contarTiempo();
        temporizador=true;
    } 

    tarjetasDestapatas++;
    mostrarMovimientos=document.getElementById("movimientos")
    mostrarAciertos=document.getElementById("aciertos")
    mostrarTiempo=document.getElementById("tiempoRestante")
    console.log(tarjetasDestapatas);

    if(tarjetasDestapatas==1){
        tarjeta1=document.getElementById(id);    
        resultado1=numeros[id];
        tarjeta1.innerHTML=resultado1;
        tarjeta1.disabled=true;
    }    
    else if(tarjetasDestapatas==2){
        tarjeta2=document.getElementById(id);    
        resultado2=numeros[id];
        tarjeta2.innerHTML=resultado2;
        tarjeta2.disabled=true;
        movimientos++;
        mostrarMovimientos.innerHTML=`Movimientos=${movimientos}`;        

        if(resultado1==resultado2){
            tarjetasDestapatas=0;
            aciertos++;            
            mostrarAciertos.innerHTML=`Aciertos=${aciertos}`;

        }
        else{
            setTimeout(()=>{
                tarjeta1.innerHTML=' ';
                tarjeta2.innerHTML=' ';
                tarjeta1.disabled=false;
                tarjeta2.disabled=false;
                tarjetasDestapatas=0;
            },600)    
        }
    }            
}

function contarTiempo(){
    timevar=setInterval(()=>{
        timer--;
        mostrarTiempo.innerHTML=`Tiempo=${timer}s`;
        if(timer==0){
            clearInterval(timevar);
            blockbuttons();
        }
    },1000)
}
function blockbuttons(){
    let tarjetasBloqueadas;
    for(let i=0;i<=15;i++){
        tarjetasBloqueadas =document.getElementById(i);
        //mostrar
        tarjetasBloqueadas.innerHTML=numeros[i];
        tarjetasBloqueadas.disabled=true;
    }
}