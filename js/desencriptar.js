
$botonDesencriptar.addEventListener("click", function () {
    if ($textoDeEntrada.value.length > 0) {
      desencriptar($textoDeEntrada.value);
      $divSinTexto.classList.add("invisible");
      $textareaSalida.classList.remove("invisible");
      $botonCopiar.classList.remove("invisible")
      $textoDeEntrada.value = "";
    } else {
      $textareaSalida.classList.add("invisible");
      $botonCopiar.classList.add("invisible");
      $divSinTexto.classList.remove("invisible");
    }
  });
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
  