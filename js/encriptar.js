let $textoDeEntrada = document.querySelector("#texto-de-entrada");
let $textoDeSalida = document.querySelector("#texto-de-salida");
const $botonEncriptar = document.querySelector("#boton-encriptar");
const $textareaSalida = document.querySelector("#texto-de-salida");
const $imagenBuscador = document.querySelector("#imagen-munieco");
const $botonDesencriptar = document.querySelector("#boton-desencriptar");

$botonEncriptar.addEventListener("click", function () {
  if ($textoDeEntrada.value.length > 0) {
    encriptar($textoDeEntrada.value);
    $imagenBuscador.classList.add("invisible");
    $textareaSalida.classList.remove("invisible");
    $textoDeEntrada.value = "";
  } else {
    $textareaSalida.classList.add("invisible");
    $imagenBuscador.classList.remove("invisible");
  }
});

$botonDesencriptar.addEventListener("click", function () {
  if ($textoDeEntrada.value.length > 0) {
    desencriptar($textoDeEntrada.value);
    $imagenBuscador.classList.add("invisible");
    $textareaSalida.classList.remove("invisible");
    $textoDeEntrada.value = "";
  } else {
    $textareaSalida.classList.add("invisible");
    $imagenBuscador.classList.remove("invisible");
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
function desencriptar(mensaje) {
  let llaveDesencriptacion = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  mensaje = mensaje.toLowerCase();
  for (let i = 0; i < llaveDesencriptacion.length; i++) {
    if (mensaje.includes(llaveDesencriptacion[i][1])) {
      mensaje = mensaje.replaceAll(
        llaveDesencriptacion[i][1],
        llaveDesencriptacion[i][0]
      );
      $textoDeSalida.value = mensaje;
    }
  }
  return mensaje;
}
