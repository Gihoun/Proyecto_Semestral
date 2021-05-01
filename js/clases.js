class coment{
    nombre;
    email;
    comentario;
    apellido;

    setNombre(nombre){
        this.nombre=nombre;
    }
    setApellido(apellido){
        this.apellido=apellido;
    }
    setEmail(email){
        this.email=email;
    }
    setComentario(comentario){
        this.comentario=comentario;
    }

    getNombre(){
        return this.nombre;
    }
    getApellido(){
        return this.apellido;
    }
    getEmail(){
        return this.email;
    }
    getComentario(){
        return this.comentario;
    }
    print(){
        return 'nombre: '+this.getNombre()+' apellido:'+this.getApellido()+' email:'+this.getEmail()+' comentario:'+this.getComentario();
    }

}
class new_user{
    nombre;
    email;
    passwd;
    apellido;

    setNombre(nombre){
        this.nombre=nombre;
    }
    setApellido(apellido){
        this.apellido=apellido;
    }
    setEmail(email){
        this.email=email;
    }
    setPasswd(passwd){
        this.passwd=passwd;
    }

    getNombre(){
        return this.nombre;
    }
    getApellido(){
        return this.apellido;
    }
    getEmail(){
        return this.email;
    }
    getPasswd(){
        return this.passwd;
    }
    print(){
        return 'nombre: '+this.getNombre()+' apellido:'+this.getApellido()+' email:'+this.getEmail()+' contraseña:'+this.getPasswd();
    }

}
class noticia{
    nombre;
    imagen;
    categoria;
    texto_noticia;

    setNombre(nombre){
        this.nombre=nombre;
    }
    setImagen(imagen){
        this.imagen=imagen;
    }
    setCategoria(categoria){
        this.email=email;
    }
    setTexto(texto_noticia){
        this.texto_noticia=texto_noticia;
    }

    getNombre(){
        return this.nombre;
    }
    getImagen(){
        return this.imagen;
    }
    getCategoria(){
        return this.categoria;
    }
    getTexto(){
        return this.texto_noticia;
    }
    print(){
        return 'nombre: '+this.getNombre()+' img:'+this.getImagen()+' categoria:'+this.getCategoria()+' texto noticia:'+this.getTexto();
    }

}