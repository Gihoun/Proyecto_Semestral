function validar_reg(){
    var rn = validar_nombre();
    var ra = validar_apellido();
    var re = validar_email();
    var rp = validar_pass();
    var rchk = validar_check();
    if(rn==true && ra==true && re==true && rp==true && rchk==true){
        alert('Registrando Nuevo USUARIO')
        grabar_usuario()
        return true
    }else{
        alert('el formulario tiene errores no sera enviado')
        return false
    }
    
}

function validar_nombre(){
    var name = document.getElementById('txtnombre').value;
    if (name.length < 3){
        //alert('*el nombre debe tener al menos 3 caracteres');
        document.getElementById('nombre_span').innerText="* el nombre debe tener al menos 3 caracteres"
        return false;
    
    }else if (name.length >= 3) {
        document.getElementById('nombre_span').innerText="ok"
        return(true)

    }


}
function validar_apellido(){
    var appel = document.getElementById('txtapellido').value;
    if (appel.length < 3){
        document.getElementById('apellido_span').innerText="* el apellido debe tener al menos 3 caracteres"
        return false;
    }else if (appel.length >= 3) {
        document.getElementById('apellido_span').innerText="ok"
        return (true)
    }

}
function validar_email(){
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+.)*$/.test(document.getElementById('txtmail').value))
     {
        document.getElementById('mail_span').innerText="ok"
        return (true)
     
     }
      
       document.getElementById('mail_span').innerText="* invalido: debe contener @ y dominio *.xxx"
       return (false)
}
function validar_pass(){

    var com = document.getElementById('txtpass').value;
    if(com.length < 6){
        document.getElementById('pass_span').innerText="* minimo 6 caracteres"
        return( false)

    }else {
        document.getElementById('pass_span').innerText="* ok"
        return(true)
    }

    
}
function validar_check(){
    var chk= document.getElementById('check_box').checked;
    if(chk==true){
        return true
    }else{
        alert('porfavor acepte los terminos')
    }

}


function limpiar_array(){
    var arr = new Array(5);
    arr= [0,1,2,3,4,5,6,7,8,9]
    for (let index = 0; index < arr.length; index++) {
        localStorage.setItem(arr[index],'vacio');
       
    }

}

function grabar_usuario(){
    
    var arreglo = new Array();
    var cont = 'vacio';
    var ind = 0;
    var nombre = document.getElementById('txtnombre').value;
    var apellido = document.getElementById('txtapellido').value;
    var email = document.getElementById('txtmail').value
    var pass = document.getElementById('txtpass').value;

    for (let i = 0; i < localStorage.length; i++) {
        let valor = localStorage.getItem(i);

        if (valor == cont){
            var key = i.toString();
            user = new new_user();
            user.setNombre(nombre);
            user.setApellido(apellido);
            user.setEmail(email);
            user.setPasswd(pass);
            console.log(user.print());
            arreglo[ind] = JSON.stringify(user);
            localStorage.setItem(key,arreglo);
            
            alert('nuevo usuario registrado');
            return true
        }
        
    }
   
}
