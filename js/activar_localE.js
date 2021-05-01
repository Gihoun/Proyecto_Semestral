function limpiar_array(){
    var arr = new Array(10);
    arr= [0,1,2,3,4,5,6,7,8,9]
    for (let index = 0; index < arr.length; index++) {
        localStorage.setItem(arr[index],'vacio');
       
    }

}