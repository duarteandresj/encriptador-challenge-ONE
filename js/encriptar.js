let $textoDeEntrada = document.querySelector("#texto-de-entrada");
let $textoDeSalida = document.querySelector("#texto-de-salida");
const $botonEncriptar = document.querySelector("#boton-encriptar");
const $textareaSalida = document.querySelector("#texto-de-salida");
const $divSinTexto = document.querySelector("#buscador-de-texto");
const $botonDesencriptar = document.querySelector("#boton-desencriptar");
const $botonCopiar=document.querySelector("#boton-copiar");


$botonEncriptar.addEventListener("click", function () {
  if ($textoDeEntrada.value.length > 0&&textoEsValido) {
    encriptar($textoDeEntrada.value);
    $divSinTexto.classList.add("invisible");
    $textareaSalida.classList.remove("invisible");
    $botonCopiar.classList.remove("invisible");
    $textoDeEntrada.value = "";
  } 
  else {
    $botonCopiar.classList.add("invisible");
    $textareaSalida.classList.add("invisible");
    $divSinTexto.classList.remove("invisible");
  }
});


function encriptar(mensaje) {
  let llaveEncriptacion = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  mensaje = mensaje.toLowerCase();
  for (let i = 0; i < llaveEncriptacion.length; i++) {
    if (mensaje.includes(llaveEncriptacion[i][0])) {
      mensaje = mensaje.replaceAll(
        llaveEncriptacion[i][0],
        llaveEncriptacion[i][1]
      );
      $textoDeSalida.value = mensaje;
    }
  }
  return mensaje;
}
