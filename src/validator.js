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
  }  else {
    isValidCard()
  }
}

// Creamos función para validar

function isValidCard() {
  //variables para evaluar numero ingresado y crear primer array
  let numero = document.getElementById("numberOfCard").value;
  let cadena = (numero.split("")).reverse();
  let cadenaTotal = []; // Todos los numeros pares e impares
  let mayoresDiez = [];
  let menoresDiez = [];

  // for para separar numeros por posicion y multiplicar los numero en posicion par por 2
  for (let i = 0; i < cadena.length; i++) {
    let valor = parseInt(cadena[i]); //cadena number
    if (i % 2 == 0) {
      let resultadoImpar = valor
      cadenaTotal.push(resultadoImpar);
    } //valores impar
    else {
      let resultadoPar = valor * 2
      cadenaTotal.push(resultadoPar);
    } //posiciones pares multiplicadas por 2
  }

  //cadena de numeros menor a diez
  for (let i = 0; i < cadenaTotal.length; i++) {
    let resp = cadenaTotal[i];
    if (resp < 10) {
      menoresDiez.push(resp)
    }
  }
  //Cadena de numeros mayores a diez
  for (let i = 0; i < cadenaTotal.length; i++) {
    let res = cadenaTotal[i];
    if (res >= 10) {
      mayoresDiez.push(res)
    }
  }

  //separar numeros mayores a 10
  let mayorSeparados = [];
  let digitos = mayoresDiez.toString().replace(/,/g, "");
  for (let i = 0; i < digitos.length; i++) {
    mayorSeparados.push(parseInt(digitos.charAt(i)));
  }

  //suma de digitos entre numeros mayores y menores a diez
  let arrayFinal = menoresDiez.concat(mayorSeparados);
  let total = arrayFinal.reduce((a, b) => a + b, 0);

  // Si el residuo es igual a 0 muestra mensaje de Validado con exito , sino muestra mensaje de tarjeta no validada
  if (total % 10 === 0) {
    //Retornaremos esta alerta si cumple la condicion
    window.location = "resultadovalidacion.html";
    return alert("Su tarjeta es valida");
  }
  else {
    //Retornaremos esta alerta si no cumple la condicion
    return alert("Su tarjeta no invalida");
  }
}






