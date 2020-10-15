
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

const eliminar = (producto) => {
    let idElemento = 'item'+ producto;
    let detalle = document.getElementById(idElemento);
    detalle.parentNode.removeChild(detalle);
    
    let elProducto = productos[producto]
    console.log(elProducto)
    if (elProducto !== '') {
        let valores = contenedor;
        console.log(valores)
        let valorP = elProducto.valor;
        console.log(valorP)
        let posicion = valores.indexOf(valorP);
        console.log(valores.indexOf(valorP))
        valores.splice(posicion,1);
        total()
    }



}
