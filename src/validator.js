const validator = {

  isValid: (creditCardNumber) => {
    const convertAndReverse = creditCardNumber.toString().split("").reverse(); //convierto elnumero en cadena (.toString) luego, en un arreglo (.split) y luego lo invierto (.reverse)
    for (let i = 0; i < convertAndReverse.length; i++) { //acá necesito que itere (For) por la longitud de cadena, 
      if (i % 2 === 1) { //multiplicando por 2 la posición par y por 1 la impar, 
        convertAndReverse[i] *= 2; //siempre desde el 0 hasta el último número de la cadena.
      }
      else {
        convertAndReverse[i] *= 1;
      }
    }
    for (let i = 0; i <= convertAndReverse.length; i++) { //Acá doy la indicación de que a los números mayores a nueve,
      if (convertAndReverse[i] > 9) { //les reste 9, para que solo me quede uno número entero.
        convertAndReverse[i] -= 9;
      }
    }
    let total = 0; //solicito la suma de la toda la longitud de cadena
    for (let i = 0; i < convertAndReverse.length; i++) { //retorno debe ser un total multiplo de 10
      total += convertAndReverse[i];
    }

    // Log to console
    return total % 10 === 0;

  },

  maskify: (creditCardNumber) => {
    //console.log(creditCardNumber);
    
    const visibles = 4; //de mi cifra de 12 números, requiero dejar visibles los últimos 4 números
    const numeros = creditCardNumber.slice(0, -visibles).replace(/./g, "#"); //que esos 8 primeros se reemplacen por #
    const ultimos = creditCardNumber.slice(-visibles); // que los últimos sean visibles
    return (numeros + ultimos); //acá returnan unidos los primeros números enmascarados y los visibles (últimos 4)
  }

}
export default validator;
