let testoEsValido=true;
function validaTexto(mensaje){
    if((/^([a-z,\s,])*$/.test(mensaje))){
     return testoEsValido=true;
      }else{
          return testoEsValido=false;
      }
}