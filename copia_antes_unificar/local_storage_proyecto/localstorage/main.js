/* global getElementById, producto */

//crear el array con los elementos agregados al carrito
var arrayCarrito = localstorageGetItem("carritoEspe");
if (arrayCarrito == undefined) arrayCarrito = [];
var arrayProductos = [];

window.onload = function () {
    callUrl('productos.json?sid=' + Math.random(3, 100), 'GET', renderListaProductos, true);
    renderCarrito();
};

function renderListaProductos(callData) {
    arrayProductos = JSON.parse(callData.response);
    var html = '';
    for (var i = 0; i < arrayProductos.length; i++) {
        var producto = arrayProductos[i];
        html += '<li>';
        html += '<span class="id">' + producto.id + '</span>';
        html += '<span class="imagen"><img src="' + producto.pathImg + '" alt="" /></span>';
        html += '<span class="nombre">' + producto['name'] + '</span>';
        html += '<span class="descripcion">' + producto.description + '</span>';
        html += '<span class="precio">' + producto.price + '</span>';
        html += '<span class="boton"><button onclick="agregaProducto(' + producto.id + ')">Añadir</button></span>';
        html += '</li>';
    }
    document.getElementById('tabla').innerHTML += html;
}
/*
function renderListaProductos() {
    var xmlhttp = getXMLRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            arrayProductos = JSON.parse(this.response);
            var html = '';
            for (var i = 0; i < arrayProductos.length; i++) {
                var producto = arrayProductos[i];
                html += '<li>';
                html += '<span class="id">' + producto.id + '</span>';
                html += '<span class="imagen"><img src="' + producto.pathImg + '" alt="" /></span>';
                html += '<span class="nombre">' + producto['name'] + '</span>';
                html += '<span class="descripcion">' + producto.description + '</span>';
                html += '<span class="precio">' + producto.price + '</span>';
                html += '<span class="boton"><button onclick="agregaProducto('+producto.id+')">Añadir</button></span>';
                html += '</li>';
            }
            document.getElementById('tabla').innerHTML += html;
        }
    };
    xmlhttp.open("GET", "productos.json?sid=" + Math.random(3, 100), true);
    xmlhttp.send();
}
*/

function renderCarrito() {
    var carritoContainer = document.getElementById("carritoContainer");
    if (carritoContainer !== undefined) {
        //Borramos el contenido de la etiqueta
        carritoContainer.innerHTML = "";
        //variable para guardar el precio total
        var precioTotal = 0;
        var productosHtml = document.createElement('ul');
        productosHtml.className = 'productosContainer';
        //recorremos el array de elementos del carrito
        for (var i = 0; i < arrayCarrito.length; i++) {
            var producto = arrayCarrito[i];
            //creo el nuevo nodo, que será un parrafo P
            var nuevo_parrafo = document.createElement('li');

            //Creo el contenido que va a tener el nodo
            //Create an input type dynamically.   
            var botonEliminar = document.createElement("input");
            botonEliminar.className = 'btnEliminar';
            botonEliminar.type = 'button';
            botonEliminar.value = 'x'; // Really? You want the default value to be the type string?
            botonEliminar.name = producto.id; // And the name too?
            botonEliminar.onclick = eliminarProducto;
            var precioAcumulado = Math.round(producto.precio * producto.cantidad * 100) / 100;
            var contenido_carro = document.createTextNode(producto.cantidad + " x " + producto.nombre + " " + precioAcumulado);

            //Añado el contenido creado al nodo
            nuevo_parrafo.appendChild(contenido_carro);
            nuevo_parrafo.appendChild(botonEliminar);

            //Incorporo el nuevo nodo dentro del nodo padre 'carrito'
            productosHtml.appendChild(nuevo_parrafo);
            precioTotal += producto.precio * producto.cantidad;
        }
        carritoContainer.appendChild(productosHtml);
        //Pintamos el precio total
        var parrafo_precio = document.createElement('p');
        parrafo_precio.className = 'total';
        var txt_precio_total = document.createTextNode("Total: " + (Math.round(precioTotal * 100) / 100));
        parrafo_precio.appendChild(txt_precio_total);
        carritoContainer.appendChild(parrafo_precio);
    }
};

function agregaProducto(id) {
    var producto = arrayGetElementBy(arrayProductos, "id", id);
    if (producto != undefined) {
        var nuevoProducto = {
            id: producto.id,
            nombre: producto.name,
            precio: parseFloat(producto.price),
            cantidad: 1
        };
        //Comprobar si el producto exite en el array
        var productoEncontrado = arrayGetElementBy(arrayCarrito, "id", id);
        //Si hemos encontrado el producto, aumentamos la cantidad
        if (productoEncontrado !== undefined) {
            productoEncontrado.cantidad++;
        }
        else { //Sino hemos encontrado el producto, añadimos el producto al array
            arrayCarrito.push(nuevoProducto);
        }
        localstorageSetItem("carritoEspe", arrayCarrito);
        //Pintamos el carrito
        renderCarrito();
    }
};

function eliminarProducto(e) {
    var id = e.target.getAttribute("name");
    arrayDeleteElementBy(arrayCarrito, "id", id);
    localstorageSetItem("carritoEspe", arrayCarrito);
    renderCarrito();
};

function vaciarCarrito(e) {
    arrayCarrito = [];
    localstorageSetItem("carritoEspe", arrayCarrito);
    renderCarrito();
}