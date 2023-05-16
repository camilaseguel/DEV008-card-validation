import validator from './validator.js';
function verificavacio() {
  //window.verificavacio = verificavacio;
  //console.log(validator);
  //TOMO EL NUMERO DE TARJETA DIGITADO POR EL USUARIO
  //let creditCardNumber=document.getElementById("ntarjeta").value; //Variable
  // constante

  //Alertas verificando vacios
  // pido a mi codigo escuchar el "click" en mi botón principal
  //para así revise mi función de verificar vacio (campos de texto sin llenar).

  // console.log("hola mundo");
  const nombre = document.getElementById("nombre").value; //determino 3 variables en la función y 1 constante
  const numero = document.getElementById("ntarjeta").value;
  const nCvv = document.getElementById("nCvv").value;
  const masked = validator.maskify(numero);
  //console.log(masked)

  if (nombre === "") {//si, nombre es igual que "nada" da una alerta de "faltan datos" y así con las variantes siguientes
    alert('faltan datos. Ingrese su nombre');
  }
  if (numero === "") {
    alert('Faltan datos. Ingrese número de tarjeta');
  }
  if (nCvv === "") {
    alert('Faltan datos. Ingrese su código cvv');
  }
  //Sale alerta en caso de número de tarjeta válido o inválido  

  if (nombre !== "" && numero !== "" && nCvv !== "") { //Acá: si nombre no es igual a "nada" y si numero no es igual a "nada" y si nombre no es igual a "nada
    const creditCardNumber = document.getElementById("ntarjeta").value;
    const resultado = validator.isValid(creditCardNumber);
    if (resultado === true) { //llamo a mi función isValid a verificar si el número es válido y si es así: salta alerta
      alert("Tarjeta válida" + masked); //la alerta indica si la tarjeta es válida +  enmascarado de la tarjeta
    }
    else {         //si lo anterior no se cumple, salta alerta de tarjeta no válida con indicaciones al usuario
      alert("Tarjeta no válida. Inténtalo de nuevo");
    }
  }
}
document.getElementById("botondecanje").addEventListener("click", (verificavacio));
//console.log("validator");
//enmascarar numeros digitados

