function getXMLRequest() {
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        return new XMLHttpRequest();
    } else {  // code for IE6, IE5
        return new ActiveXObject('Microsoft.XMLHTTP');
    }
}

function renderProductos(typeId) {
    document.getElementById('productosContenedor').innerHTML = '';
    xmlhttp = getXMLRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.response),
                productos = data.list,
                html = "";
            for (var i = 0, iLen = productos.length; i < iLen; i++) {
                html +=
                    "  <div class=\"col-md-3\" id=\"caja\">\n" +
                    "    <div class=\"thumbnail\" >\n" +
                    "      <img src='" + productos[i].image + "' width='120'>" +
                    "      <div class=\"caption\">\n" +
                    "        <h3 class='titulo' id='prod_\"+productos[i].id+\"'>" + productos[i].nombre + "</h3>" + "<p class='descripcion'>" + productos[i].descripcionCorta + "</p>\n";
                if (productos[i].unidades < 1) {
                    html += "<i class='fas fa-battery-empty unidades' title='Producto agotado' style='color: red'></i>";


                } else if (productos[i].unidades >= 1 && productos[i].unidades < 10) {
                    html += "<i class='fas fa-battery-half unidades' title='Quedan pocas unidades' style='color: orange'></i>" +
                        "<label>¡Quedan&nbsp;" + productos[i].unidades + "&nbsp;unidades!</label>";


                } else {
                    html += "<i class='fas fa-battery-full unidad unidades' title='Producto disponible' style='color: green'></i>";
                }


                html += "          <br><label class='precio'>" + productos[i].precio + "€</label>" +
                    "         <p>\n";

                if (data.loggedin == true) {
                    if (productos[i].unidades >= 1) {
                        html += "         <input type='button' class='btn btnn' onClick='anadirProducto(" + productos[i].id + ")' value='Añadir'/>";
                    } else {
                        html += "         <input type='button' class='btn btnn' onClick='anadirProducto(" + productos[i].id + ")' disabled value='Añadir'/>";
                    }

                }
                html += "        </p>\n" +
                    "      </div>\n" +
                    "    </div>\n" +
                    "  </div>\n";

            }
            document.getElementById('productosContenedor').innerHTML = html;
        }
    }
    xmlhttp.open('GET', './includes/productos/get_productos.php?typeId=' + typeId + '&sid=' + Math.random(), true);
    xmlhttp.send();
}

function renderCarrito() {
    var lastTopScroll = $('.carritoContainer').scrollTop();
    document.getElementById('carrito').innerHTML = '';
    xmlhttp = getXMLRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.response);
            if (data.list.length == 0) {
                alert("Tu carrito está vacío");
                window.location.href = "index.html";
            } else {
                if (data.loggedin) {
                    var carrito = data.list,
                        html = "",
                        total = 0;
                    html +=
                        "<ul class='fondo'>" +
                        "   <li class='headCarrito'>" +
                        "       <div class='imagen' >Imagen</div>" +
                        "       <div class='nombre'>NOMBRE</div>" +
                        "       <div class='precio'>PRECIO</div>" +
                        "       <div class='cant'>CANTIDAD</div>" +
                        "       <div class='stock'>STOCK</div>" +
                        "       <div class='aniadir'>AÑADIR</div>" +
                        "   </li>" +
                        "</ul>";
                    html += "<ul class='carritoContainer'>";
                    for (var i = 0, iLen = carrito.length; i < iLen; i++) {
                        html +=

                            "   <li class='bodyCarrito' id='prod_\" + carrito[i].id + \"'>" +
                            "       <div class='imagenCart' ><img src='" + carrito[i].image + "' width='90'alt=''></div>" +
                            "       <div class='nombreCart' >" + carrito[i].nombre + "</div>" +
                            "       <div class='precioCart'>" + carrito[i].total + "€</div>" +
                            "       <div class='cantCart'>" + carrito[i].cantidad;
                        if(parseInt(carrito[i].cantidad) > parseInt(carrito[i].unidades)) {
                            html += "<div class='noStock'>no stock</div>";
                        }
                        html += "</div>" +
                            "       <div class='stockCart'>" + carrito[i].unidades + "</div>" +
                            "       <div class='aniadirCart'><input type='button' class='btn' onClick='anadirProducto(" + carrito[i].id + ")' value='+'/>&nbsp;<input type='button' class='btn' onClick='deleteProducto(" + carrito[i].id + ")' value='-'/></div>" +
                            "   </li>";
                        total += parseFloat(+carrito[i].total);
                    }
                    html += "</ul>";
                    html += "<a href='pago.html'><input class='btn botonn pull-right' type='button' value='Aceptar y pagar'></a>"
                    html += "<li class='pull-right total' ><b>TOTAL</b>: " + (Math.round(total * 100) / 100) + "€</li>";
                    document.getElementById('carrito').innerHTML = html;
                    $('.carritoContainer').scrollTop(lastTopScroll);
                } else {
                    alert("Inicia sesion");
                }
            }

        }
    }
    xmlhttp.open('GET', './includes/productos/get_carrito.php?sid=' + Math.random(), true);
    xmlhttp.send();
};

function anadirProducto(id) {
    xmlhttp = getXMLRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.response);
            if (data.loggedin && data.affected_rows === 1) {
                console.log('El producto se ha añadido al carrito correctamente.');
                if($('#carrito').length > 0) {
                    renderCarrito();
                } else {
                    showSnackbar('El producto se ha añadido al carrito correctamente.');
                }
            } else {
                alert('No existen unidades disponibles');
            }
        }
    }
    xmlhttp.open('GET', './includes/productos/add_producto.php?id=' + id + '&sid=' + Math.random(), true);
    xmlhttp.send();
};

function deleteProducto(id) {
    xmlhttp = getXMLRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.response);
            if (data.loggedin && data.affected_rows === 1) {
                console.log('El producto se ha eliminado del carrito correctamente.');
                if($('#carrito').length > 0) {
                    renderCarrito();
                }
            } else {
                alert('Error');
            }
        }
    }
    xmlhttp.open('GET', './includes/productos/delete_producto.php?id=' + id + '&sid=' + Math.random(), true);
    xmlhttp.send();
};