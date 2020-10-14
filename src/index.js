
contenedor = []

function detalle(num) {
    let producto = productos[num];  
    let paraNodo = document.createElement("div");
    let htmlTarjeta = `
        <p id='${producto.idBorrar}'>${producto.name} $${producto.valor} 
        <button id="eliminar" onclick="eliminar(`+producto.id+`)">borrar</button></p>
    `
    
    let detallecompra = document.getElementById("eleccion");
    detallecompra.appendChild(paraNodo);
    paraNodo.innerHTML = htmlTarjeta;
}

function calcular(num) {
    let calculo = num;
    contenedor.push(calculo);
}

function total() {
    let total = contenedor;
    let suma = total.reduce((a, b) => a + b, 0);
    let totalSuma = document.getElementById('res');
    totalSuma.innerHTML = suma;
}

const eliminar = (camila) => {
    let idElemento = 'item'+ camila
    let detalle = document.getElementById(idElemento);
    detalle.parentNode.removeChild(detalle);
}
