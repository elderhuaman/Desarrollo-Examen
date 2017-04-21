buenas = 0;
malas = 0;

function respuestaB(){
    buenas = buenas+1;
    alert ("Muy bien!! ,la opcion marcada es correcta")

}


function respuestaM(){
    malas = malas+1;
    alert ("Ouu¡¡ ,la opcion marcada es incorrecta")
}

function resultadoF(){
    alert("su resultado es... Respuestas buenas: "+buenas+" ,Respuestas malas: "+malas)
    buenas = buenas*0;
    malas = malas*0;
}
