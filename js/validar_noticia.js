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
    //var file = document.getElementById('imgfile');
    //ar imgdata = getBase64Image(file);

    if ( arch ==''){
        document.getElementById('img_span').innerText="* debe seleccionar al menos 1 imagen"
        return (false);
    }else {
        document.getElementById('img_span').innerText="ok"
       // localStorage.setItem("imagen",imgdata);
       
        return (true)
    }


}

function getBase64Image(img) {
    
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    var dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}



function grabar_noticia(){
    
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
