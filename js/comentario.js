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
        this.setemail=email;
    }
    setComentario(comentario){
        this.setcomentario=comentario;
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