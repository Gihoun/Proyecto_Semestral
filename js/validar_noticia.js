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
    var img1= document.getElementById('imgfile1').value;
    var img2= document.getElementById('imgfile2').value;
    //var file = document.getElementById('imgfile');
    //ar imgdata = getBase64Image(file);

    if ( img1 =='' || img2 ==''){
        document.getElementById('img_span1').innerText="* faltan por subir imagenes";
        document.getElementById('img_span2').innerText="* faltan por subir imagenes";
        return (false);
    
    }else if((img2 =!'') && (img1 =! '')){
        document.getElementById('img_span2').innerText="ok";
        document.getElementById('img_span1').innerText="ok";
        return (true);
    }else{
        return (false);
    }
}



function esconder(){
    var galeria = document.getElementById('gale');
    if(galeria.hidden==true){
        galeria.hidden=false;
        galeria.className = "animate__animated animate__backInDown"
    }else if(galeria.hidden==false){
        galeria.className = "animate__animated animate__fadeOutUp"
        galeria.hidden = true;
        
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
