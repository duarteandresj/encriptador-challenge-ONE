let textoEsValido=true;
const $error=document.querySelector("#error-de-entrada");
$textoDeEntrada.addEventListener("input",function(){
    validaTexto($textoDeEntrada.value)
    if(!textoEsValido){
        $error.classList.remove("invisible");
    }else{
        $error.classList.add("invisible")
    }
})

function validaTexto(mensaje){
    if((/^([a-z,\s,])*$/.test(mensaje))){
     return textoEsValido=true;
      }else{
          return textoEsValido=false;

      }
}