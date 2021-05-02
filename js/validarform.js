function validar_form(){
    var rn = validar_nombre();
    var ra = validar_apellido();
    var re = validar_email();
    var rc = validar_comentario();
    if(rn==true && ra==true && re==true && rc==true){
        alert('Comentario Enviado!!');
        grabar_comentario();
        return true;
    }else{
        alert('Error al ingresar los datos al Formulario.')
        return false;
    }
    
}

function validar_nombre(){
    var name = document.getElementById('txtnombre').value;
    if (name.trim().length < 3){       
        document.getElementById('nombre_span').innerText="* El nombre debe tener al menos 3 caracteres"
        return false;   
    }else if (name.trim().length >= 3) {
        document.getElementById('nombre_span').innerText="*"
        return true;
    }
}
function validar_apellido(){
    var appel = document.getElementById('txtapellido').value;
    if (appel.trim().trim().length < 3){
        document.getElementById('apellido_span').innerText="* El apellido debe tener al menos 3 caracteres"
        return false;
    }else if (appel.trim().length >= 3) {
        document.getElementById('apellido_span').innerText="*"
        return true;
    }

}
function validar_email(){
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+.)*$/.test(document.getElementById('txtmail').value))
     {
        document.getElementById('mail_span').innerText="*"
        return true;
     
     }
      
       document.getElementById('mail_span').innerText="* Invalido: debe contener @ y dominio *.xxx"
       return false;
}
function validar_comentario(){

    var com = document.getElementById('txtcoment').value;
    if(com.trim().length == 0){
        document.getElementById('com_span').innerText="* No puedes dejar la caja de comentarios vacia"
        return false;

    }else {
        document.getElementById('com_span').innerText="*"
        return true;
    }  
}


function grabar_comentario() {
    var arreglo = new Array();
    var ind=0;

    var nombre = document.getElementById('txtnombre').value;
    var apellido = document.getElementById('txtapellido').value;
    var email = document.getElementById('txtmail').value
    var comentario = document.getElementById('txtcoment').value;
    com = new coment();
    com.setNombre(nombre);
    com.setApellido(apellido);
    com.setEmail(email);
    com.setComentario(comentario);
    console.log(com.print());
    arreglo[ind] = JSON.stringify(com);
    localStorage.setItem('registros',arreglo);
    ind++;
}

function limpiar_array(){
    var arr = new Array(5);
    arr= [0,1,2,3,4,5]
    for (let index = 0; index < arr.length; index++) {
        localStorage.setItem(arr[index],'vacio');
       
    }

}
function grabar_coment(){
    
    var arreglo = new Array();
    var cont = 'vacio';
    var ind = 0;
    var nombre = document.getElementById('txtnombre').value;
    var apellido = document.getElementById('txtapellido').value;
    var email = document.getElementById('txtmail').value
    var comentario = document.getElementById('txtcoment').value;

    for (let i = 0; i < localStorage.length; i++) {
        let valor = localStorage.getItem(i);

        if (valor == cont){
            var key = i.toString();
            com = new coment();
            com.setNombre(nombre);
            com.setApellido(apellido);
            com.setEmail(email);
            com.setComentario(comentario);
            console.log(com.print());
            arreglo[ind] = JSON.stringify(com);
            localStorage.setItem(key,arreglo);
            return true
        }
        
    }
}
