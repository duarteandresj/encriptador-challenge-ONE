function copiar() {
  let $textoACopiar = document.querySelector("#texto-de-salida");
  $textoACopiar.select();
  document.execCommand("copy");
}

document.querySelector("#boton-copiar").addEventListener("click", copiar);
