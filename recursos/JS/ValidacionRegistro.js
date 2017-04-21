function validarRegistro(){
    var registrar = true;
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellido");
    var email = document.getElementById("email");
    var contraseña = document.getElementById("contraseña");
    var contraseña2 = document.getElementById("contraseña2");
    var formulario = document.getElementById("formulario");

    var expresion = /\w+@\w+\.+[a-z]/;

    if(!nombre.value){
        alert("El campo nombre esta vacío.");
        return false;
        nombre.focus();
    }else if(!apellido.value){
       alert("El campo apellido esta vacío.");
        return false;
        nombre.focus();
    }else if(!email.value){
       alert("El campo correo esta vacío.");
        return false;
        nombre.focus();
    }else if(expresion.test(email)){
        alert("El correo no es válido.");
        return false;
        nombre.focus();
    }else if(!contraseña.value){
       alert("Ingresa tu contraseña.");
        return false;
        nombre.focus();
    }else if(!contraseña2.value){
       alert("Repite tu contraseña.");
        return false;
        nombre.focus();
    }


    if(registrar==true){
        document.formulario.submit();
    }
}

window.onload=function(){
    var botonRegistrar = document.getElementById("registrar");
    botonRegistrar.onclick = validarRegistro;

}
