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
    graficarRectangulo(gatoX,gatoY,ANCHO_GATO,ALTO_GATO,"red");
}

function graficarComida(){
    graficarRectangulo(comidaX,comidaY-ALTO_COMIDA,ANCHO_COMIDA,ALTO_COMIDA,"green");
}

function graficarRectangulo(x,y,ancho,alto,color){
    ctx.fillStyle=color;
    ctx.fillRect(x,y,ancho,alto);
}