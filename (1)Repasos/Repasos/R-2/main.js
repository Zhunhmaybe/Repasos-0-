let block1,block2,block3,block4;
let fond1;
function Mover(num){
    block1=document.getElementById("A01");
    block2=document.getElementById("A02");
    block3=document.getElementById("A03");
    block4=document.getElementById("A04");
    

    console.log(num)
    const blockX=block1.offsetLeft;
    const blockY=block1.offsetTop;

    const blockX2=block2.offsetLeft;
    const blockY2=block2.offsetTop;

    const blockX3=block3.offsetLeft;
    const blockY3=block3.offsetTop;

    const blockX4=block4.offsetLeft;
    const blockY4=block4.offsetTop;
    
    console.log(block1.offsetLeft+"X");
    console.log(block1.offsetTop+"Y");
    if(num=="1"){
        block1.style.left=(blockX+10)+'px';
        block2.style.left=(blockX2+10)+'px';
        block3.style.left=(blockX3+10)+'px';
        block4.style.left=(blockX4+10)+'px';    
    }
    else if(num=="2"){
        block1.style.top=(blockY+10)+'px';
        block2.style.top=(blockY2+10)+'px';
        block3.style.top=(blockY3+10)+'px';
        block4.style.top=(blockY4+10)+'px';
    }
    else if(num=="3"){
        block1.style.left=(blockX-10)+'px';
        block2.style.left=(blockX2-10)+'px';
        block3.style.left=(blockX3-10)+'px';
        block4.style.left=(blockX4-10)+'px';
    }
    else if(num=="4"){
        block1.style.top=(blockY-10)+'px';
        block2.style.top=(blockY2-10)+'px';
        block3.style.top=(blockY3-10)+'px';
        block4.style.top=(blockY4-10)+'px';
    }
}