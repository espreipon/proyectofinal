function getXMLRequest() {
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        return new XMLHttpRequest();
    } else {  // code for IE6, IE5
        return new ActiveXObject('Microsoft.XMLHTTP');
    }
}

function renderHistorico() {
    document.getElementById('historico').innerHTML = '';
    xmlhttp = getXMLRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.response);
            if (data.loggedin) {
                var historico = data.list,
                    html = "";
                html += "<h1>Historico</h1><br>";
                html +=
                    "<ul class='fondo'>" +
                    "   <li class='headCarrito'>" +
                    "       <div class='imagen' >Imagen</div>" +
                    "       <div class='nombre'>NOMBRE</div>" +
                    "       <div class='precio'>PRECIO</div>" +
                    "       <div class='cant'>CANTIDAD</div>" +
                    "       <div class='fecha'>FECHA</div>" +
                    "       <div class='aniadir'>AÑADIR</div>" +
                    "   </li>" +
                    "</ul><br>";
                html += "<ul>";
                for (var i = 0, iLen = historico.length; i < iLen; i++) {
                    html +=

                        "   <li class='bodyCarrito' id='prod_" + historico[i].id + "'>" +
                        "       <div class='imagenCart' ><img src='" + historico[i].image + "' width='90'alt=''></div>" +
                        "       <div class='nombreCart' >" + historico[i].nombre + "</div>" +
                        "       <div class='precioCart'>" + historico[i].precio_ud + "€</div>" +
                        "       <div class='cantCart'>" + historico[i].cantidad + "</div>" +
                        "       <div class='fechaCart'>" + historico[i].fecha + "</div>" +
                        "       <div class='aniadirCart'><input type='button' class='btn' onClick='anadirProducto(" + historico[i].id + ")' value='Añadir'/></div>" +
                        "   </li>";
                }
                html += "</ul>";
                document.getElementById('historico').innerHTML = html;
            }
        }
    }
    xmlhttp.open('GET', './includes/productos/get_historico.php?sid=' + Math.random(), true);
    xmlhttp.send();
};

function anadirProducto(id) {
    xmlhttp = getXMLRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.response);
            if (data.loggedin && data.affected_rows === 1) {
                console.log('El producto se ha añadido al carrito correctamente.');
            } else {
                console.log(data.loggedin);
                console.log(data.affected_rows);
                alert('No existen unidades disponibles');
            }
        }
    }
    xmlhttp.open('GET', './includes/productos/add_producto.php?id=' + id + '&sid=' + Math.random(), true);
    xmlhttp.send();
};