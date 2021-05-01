function validar_noticia(){
    var rn = validar_nombre();
    var rc = validar_categoria();
    var rf = validar_file();
    var rt = validar_txt();
    
    if(rn==true && rc==true && rf==true && rt==true){
        alert('Subiendo Noticia')
        return true
    }else{
        alert('el formulario tiene errores no sera enviado')
        return false
    }
    
}

function validar_nombre(){
    var name = document.getElementById('txtnombre').value;
    if (name.length < 5){
        
        document.getElementById('nombre_span').innerText="* el nombre debe tener al menos 5 caracteres"
        return (false);
    
    }else if (name.length >= 5) {
        document.getElementById('nombre_span').innerText="ok"
        return(true)

    }


}
function validar_categoria(){
    var cate = document.getElementById('txtcategoria').value;
    if ( cate =='Selecciona una Categoria'){
        document.getElementById('categoria_span').innerText="* debe seleccionar 1 categoria"
        return (false);
    }else {
        document.getElementById('categoria_span').innerText="ok"
        return (true)
    }

}

function validar_txt(){

    var noti = document.getElementById('txtnoticia').value;
    if(noti.length == 0){
        document.getElementById('noticia_span').innerText="* su noticia esta vacia"
        return(false)

    }else {
        document.getElementById('noticia_span').innerText="* ok"
        return(true)
    }

    
}

function validar_file(){
    var arch= document.getElementById('imgfile').value;
    if ( arch ==''){
        document.getElementById('img_span').innerText="* debe seleccionar al menos 1 imagen"
        return (false);
    }else {
        document.getElementById('img_span').innerText="ok"
        return (true)
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
