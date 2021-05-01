class coment{
    nombre;
    email;
    comentario;

    setNombre(nombre){
        this.nombre=nombre;
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
    getEmail(){
        return this.email;
    }
    getComentario(){
        return this.comentario;
    }
    print(){
        return 'nombre: '+this.getNombre()+' email:'+this.getEmail+' comentario:'+this.getComentario;
    }

}