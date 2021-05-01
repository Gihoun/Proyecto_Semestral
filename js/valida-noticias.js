function validar_noti(){
    var rn = validar_autor();
    var vi = validar_img();
    if(rn==true && vi==true){
        alert('todo ok... comentario recibido')
        return true;
    }else{
        alert('todo mal')
        return false;
    }
}
function validar_autor(){
    var autor = document.getElementById('autortxt').value;
    if (autor.length < 3) {
        document.getElementById('autor_span').innerText="*El nombre debe tener al menos 3 caracteres";
        return false;
    }else if (autor.length >= 3){
        document.getElementById('autor_span').innerText="*"
        return true;
    }
}
function validar_img() {
    var img =document.getElementById("formFileMultiple").files;
    if(img.length ==0){
        alert('Debe subir al menos una Imagen')
        return false;
    }else{
        for (x = 0 ; x<img.length; x ++){
            if(img[x].type!="image/png" && img[x].type!="image/jpg" && img[x].type!="image/jpeg" && img[x].type!="image/bmp" && img[x].type!="image/svg"){
                document.getElementById('img_span').innerText="*Tipo de Imagen incompatible.";
                return false; 
            }       
        }
        
        return true;
    }
    
}