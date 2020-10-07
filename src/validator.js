//Verificación del formulario (si el campo esta vacio, si la info es correcta o no).

function validarTodo() {
  let tipoTarjeta = document.getElementById('tt').value;
  let pais = document.getElementById('país').value;
  let numTarjeta = document.getElementById('numberOfCard').value;
  let numMes = document.getElementById('mes').value;
  let año = document.getElementById('año').value;
  let codigoVerifi = document.getElementById('codigoVeri').value;
  let titular = document.getElementById('titular').value;
  let identificacion = document.getElementById('identificacion').value;
  let tipopais = document.getElementById('tipopais').value;
  let direccion = document.getElementById('direccion').value;
  let ciudad = document.getElementById('ciudad').value;
  let coutas = document.getElementById('cuotas').vale;

  if (tipoTarjeta == null) {
    alert('Elegir un tipo de tarjeta.');
  } else if (pais == null) {
    alert('Elegir un tipo de país.');
  } else if (numTarjeta == '') {
    alert('Escriba el número de la tarjeta.');
  } else if (numMes == null) {
    alert('Elegir mes.');
  } else if (año == null) {
    alert('Elegir año.');
  } else if (codigoVerifi == '') {
    alert('Escribir código de verificación.');
  } else if (titular == '') {
    alert('Escribir nombre del titular.');
  } else if (identificacion == '') {
    alert('Escribir número de identificación.');
  } else if (documento == null) {
    alert('Elegir tipo de documento.');
  } else if (tipopais == null) {
    alert('Elegir tipo país.');
  } else if (direccion == '') {
    alert('Escribir dirección.');
  } else if (ciudad == '') {
    alert('Escribir ciudad.');
  } else if (cuotas == null) {
    alert('Elegir cuotas.');
  } else {
    isValidCard()
  }
}

// Creamos función para validar

function isValidCard() {
  let cardNumber = document.getElementById("numberOfCard").value;
  let arrayOfNumberOfCard = [];
  for (i = 0; i < cardNumber.length; i++) {
    let firstNumber = cardNumber.charAt(i);
    console.log(firstNumber)
    arrayOfNumberOfCard.push(firstNumber);
  }
  //El array invertimos para poder usar el algoritmo Luhn
  let arrayOfNumberOfCardReverse = arrayOfNumberOfCard.reverse();
  console.log("arrayNumberOfCard reverse ", arrayOfNumberOfCardReverse)
  let multiplied;  //Creamos bucle que nos permite trabajar solo con los numeros de los indices pares  // 12345678
  for (i = 0; i < arrayOfNumberOfCardReverse.length; i += 2) {
    multiplied = parseInt(arrayOfNumberOfCardReverse[i]) * 2; //Verificamos si es mayor o igual a 10
    if (parseInt(multiplied) >= 10) {
      let multString = multiplied.toString();
      let sumFigure = parseInt(multString[0]) + parseInt(multString[1]);
      arrayOfNumberOfCardReverse.splice(i, 1, sumFigure);
    }
  }
  //Esta variable almacenará la suma de los elementos
  let sumaTotal = 0;//Este bucle nos permite trabajar con todo los elementos de array
  for (i = 0; i < arrayOfNumberOfCardReverse.length; i++) {
    sumaTotal += parseInt(arrayOfNumberOfCardReverse[i]);
  }
  console.log(sumaTotal);  //Evaluamos si la suma cumple la condicion
  if (sumaTotal % 10 === 0) {
    //Retornaremos esta alerta si cumple la condicion
    window.location = "resultadovalidacion.html";
    return alert("Su tarjeta es valida");
  } else {
    //Retornaremos esta alerta si no cumple la condicion
    return alert("Su tarjeta es invalida");
  }
}

