let $textoDeEntrada = document.querySelector("#texto-de-entrada");


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
    }
  }
  return mensaje;
}
function desencriptar(mensaje){
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
        }
      }
      return mensaje; 
}