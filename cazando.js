let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");
let gatoX=canvas.width/2;
let gatoY=canvas.height/2;
let comidaX=0;
let comidaY=canvas.height;
const ALTO_GATO=65;
const ANCHO_GATO=40;
const ALTO_COMIDA=20;
const ANCHO_COMIDA=20;


function iniciarJuego(){
    graficarGato();
    graficarComida();   
}

function graficarGato(){
    ctx.fillStyle="red";
    ctx.fillRect(gatoX,gatoY,ANCHO_GATO,ALTO_GATO);
}

function graficarComida(){
    ctx.fillStyle="green";
    ctx.fillRect(comidaX,comidaY-ALTO_COMIDA,ANCHO_COMIDA,ALTO_COMIDA);
}