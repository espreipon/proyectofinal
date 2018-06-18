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
                //alert(productos[i].image);
                html +=
                    "  <div class=\"col-md-3\" id=\"caja\">\n" +
                    "    <div class=\"thumbnail\" >\n" +
                    "      <img src='"+productos[i].image+"' width='120'>" +
                    "      <div class=\"caption\">\n" +
                    "        <h3 class='titulo' id='prod_\"+productos[i].id+\"'>" + productos[i].nombre + "</h3>"+"<p class='descripcion'>"+productos[i].descripcionCorta+"</p>\n";
                if(productos[i].unidades<1){
                    html += "<i class='fas fa-battery-empty unidades' title='Producto agotado' style='color: red'></i>";


                }else if(productos[i].unidades >= 1 && productos[i].unidades <10 ){
                    html += "<i class='fas fa-battery-half unidades' title='Quedan pocas unidades' style='color: orange'></i>" +
                        "<label>¡Quedan&nbsp;"+productos[i].unidades+"&nbsp;unidades!</label>";


                }else{
                    html += "<i class='fas fa-battery-full unidad unidades' title='Producto disponible' style='color: green'></i>";
                }


                    html+= "          <br><label class='precio'>"+ productos[i].precio+"€</label>"+
                    "         <p>\n";

                if (data.loggedin == true) {
                    if(productos[i].unidades>=1){
                        html += "         <input type='button' class='btn btnn' onClick='anadirProducto(" + productos[i].id + ")' value='Añadir'/>";
                    }else{
                        html += "         <input type='button' class='btn btnn' onClick='anadirProducto(" + productos[i].id + ")' disabled value='Añadir'/>";
                    }

                }
                html += "        </p>\n" +
                    "      </div>\n" +
                    "    </div>\n" +
                    "  </div>\n";

                /*
                html += "<li id='prod_"+productos[i].id+"'>" +
                    "<input type='button' onClick='anadirProducto("+productos[i].id+")' value='+'/>"
                    + productos[i].nombre + " - "+productos[i].precio+"€</li>";



                <img data-src="+productos[i].image+" alt=\"...\">\n" +

                */
            }
            document.getElementById('productosContenedor').innerHTML = html;
        }
    }
    xmlhttp.open('GET', './includes/productos/get_productos.php?typeId=' + typeId + '&sid=' + Math.random(), true);
    xmlhttp.send();
}

/*
<div class="row">
  <div class="col-sm-6 col-md-4">
    <div class="thumbnail">
      <img data-src="..." alt="...">
      <div class="caption">
        <h3>Título de la imagen</h3>
        <p>...</p>
        <p>
          <a href="#" class="btn btn-primary" role="button">Botón</a>
          <a href="#" class="btn btn-default" role="button">Botón</a>
        </p>
      </div>
    </div>
  </div>
</div>
 */

function renderCarrito() {
    document.getElementById('carrito').innerHTML = '';
    xmlhttp = getXMLRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.response);
            if(data.list.length == 0){
                alert("Tu carrito está vacío");
                window.location.href="index.html";
            }else{
                if (data.loggedin) {
                    var carrito = data.list,
                        html = "",
                        total = 0;
                    html += "<h1>Carrito</h1><br>";
                    html +=
                        "<ul class='fondo'>" +
                        "   <li class='headCarrito'>" +
                        "       <div class='imagen' >Imagen</div>" +
                        "       <div class='nombre'>NOMBRE</div>" +
                        "       <div class='precio'>PRECIO</div>" +
                        "       <div class='cant'>CANTIDAD</div>" +
                        "       <div class='aniadir'>AÑADIR</div>" +
                        "   </li>" +
                        "</ul><br>";
                    html +=                       "<ul>";
                    for (var i = 0, iLen = carrito.length; i < iLen; i++) {
                        html +=

                            "   <li class='bodyCarrito' id='prod_\" + carrito[i].id + \"'>" +
                            "       <div class='imagenCart' ><img src='"+carrito[i].image+"' width='90'alt=''></div>" +
                            "       <div class='nombreCart' >"+carrito[i].nombre+"</div>" +
                            "       <div class='precioCart'>"+carrito[i].total+"€</div>" +
                            "       <div class='cantCart'>"+carrito[i].cantidad+"</div>" +
                            "       <div class='aniadirCart'><input type='button' class='btn' onClick='anadirProducto(" +carrito[i].id + ")' value='+'/>&nbsp;<input type='button' class='btn' onClick='deleteProducto(" + carrito[i].id + ")' value='-'/></div>" +
                            "   </li>";
                        total += parseFloat(+carrito[i].total);

                        // html+= "<li class='producto' id='prod_" + carrito[i].id + "'>" + carrito[i].nombre + " cantidad: " + carrito[i].cantidad + "precioTotal: " + carrito[i].total + "€ <input type='button' class='btn' onClick='anadirProducto(" +carrito[i].id + ")' value='+'/>&nbsp;<input type='button' class='btn' onClick='deleteProducto(" + carrito[i].id + ")' value='-'/><br><br>";
                        /*
                        html +=
                            // "<li id='prod_" + carrito[i].id + "'><input type='button' onClick='deleteProducto(" + carrito[i].id + ")' value='x'/>" + carrito[i].nombre + " cantidad: " + carrito[i].cantidad + " precioTotal: " + carrito[i].total + "€";
                         "<li class='producto' id='prod_" + carrito[i].id + "'>" + carrito[i].nombre + " cantidad: " + carrito[i].cantidad + "precioTotal: " + carrito[i].total + "€ <input type='button' class='btn' onClick='anadirProducto(" +carrito[i].id + ")' value='+'/>&nbsp;<input type='button' class='btn' onClick='deleteProducto(" + carrito[i].id + ")' value='-'/><br><br>";
                         //var btn = document.createElement('button').button.onclick = deleteProducto(carrito[i].id);
                         total += parseFloat(carrito[i].total);
                        */
                    }
                    html +=  "</ul>";
                    html += "<br><li class='pull-right total' ><b>TOTAL</b>: " + (Math.round(total * 100) / 100) + "€</li>";
                    html += "<br><br><a href='pago.html'><input class='btn botonn pull-right' type='button' onclick='saveCart()' value='Aceptar y pagar'></a>"
                    document.getElementById('carrito').innerHTML = html;
                }else{
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
                renderCarrito();
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
                renderCarrito();
            } else {
                alert('Error');
            }
        }
    }
    xmlhttp.open('GET', './includes/productos/delete_producto.php?id=' + id + '&sid=' + Math.random(), true);
    xmlhttp.send();
};

function saveCart(){
    xmlhttp = getXMLRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.response);
            if (data.loggedin && data.affected_rows === 1) {
                console.log('El producto se ha eliminado del carrito correctamente.');
                renderCarrito();
            } else {
                alert('Error');
            }
        }
    }
    xmlhttp.open('GET', './includes/productos/delete_producto.php?id=' + id + '&sid=' + Math.random(), true);
    xmlhttp.send();
};