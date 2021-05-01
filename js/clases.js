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