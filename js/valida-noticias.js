function validar_noti(){
    var rn = validar_autor();
    if(rn==true){
        alert('todo ok... comentario recibido')
        return true
    }else{
        alert('el formulario tiene errores no sera enviado')
        return false
    }
}
function validar_autor(){
    var autor = document.getElementById('autortxt').value;
    if (autor.length < 3) {
        document.getElementById('autor_span').innerText="*El nombre debe tener al menos 3 caracteres";
        return false;
    }else{
        document.getElementById('nombre_span').innerText="*"
        return true;
    }
}
