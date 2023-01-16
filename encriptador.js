/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */

const btnEncriptar=document.getElementById("btn1");
const btnDesencriptar=document.getElementById("btn2");
const btnCopiar=document.getElementById("btn3");
const mensaje1=document.getElementById("texto1");
const mensaje2=document.getElementById("texto2");
document.getElementById("copiar").style.display = "none";

function quitarAcentos(cadena){
	const acentos = {'á':'a','é':'e','í':'i','ó':'o','ú':'u','Á':'A','É':'E','Í':'I','Ó':'O','Ú':'U'};
	return cadena.split('').map( letra => acentos[letra] || letra).join('').toString();	
}

function convertirMinuscuas(traer){
    return traer.toLowerCase();
}


function encriptarMensaje(){
    var traer = mensaje1.value;
    traer = quitarAcentos(traer)
    traer = convertirMinuscuas(traer);
    traer = traer.replace(/e/g,'enter');
    traer = traer.replace(/i/g,'imes');
    traer = traer.replace(/a/g,'ai');
    traer = traer.replace(/o/g,'ober');
    traer = traer.replace(/u/g,'ufat');
    mensaje2.innerHTML=traer;
}
btnEncriptar.addEventListener("click",encriptarMensaje);

function DesencriptarMensaje(){
    var traer = mensaje1.value;
    traer = quitarAcentos(traer)
    traer = convertirMinuscuas(traer);
    traer = traer.replace(/enter/g,'e');
    traer = traer.replace(/imes/g,'i');
    traer = traer.replace(/ai/g,'a');
    traer = traer.replace(/ober/g,'o');
    traer = traer.replace(/ufat/g,'u');
    mensaje2.innerHTML=traer;
}
btnDesencriptar.addEventListener("click",DesencriptarMensaje);

function copiar(){
    var copia = mensaje2.value;
    copia = convertirMinuscuas(copia)
    navigator.clipboard.writeText(copia)
    .then(() => {
        document.getElementById('texto1').value=""
    })
}
btnCopiar.addEventListener("click",copiar);

function esconderArea(){
    document.getElementById("rectangulo").style.display = "none";
    document.getElementById("copiar").style.display = "block";
}
btnEncriptar.addEventListener("click",esconderArea)