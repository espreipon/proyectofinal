function getXMLRequest() {
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        return new XMLHttpRequest();
    } else {  // code for IE6, IE5
        return new ActiveXObject('Microsoft.XMLHTTP');
    }
}

function search(typeId) {
    var value = $('#buscar').val().trim();
    if (value == "") {
        alert("Introduce algun valor en el buscador");
    } else {
        var xhttp = getXMLRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var data = JSON.parse(this.response);
                var html = '',
                    productos = data.list;
                for (var i = 0, iLen = productos.length; i < iLen; i++) {
                    //alert(productos[i].image);
                    html +=
                        "  <div class=\"col-md-3\" id=\"caja\">\n" +
                        "    <div class=\"thumbnail\" >\n" +
                        "      <img src='" + productos[i].image + "' width='120'>" +
                        "      <div class=\"caption\">\n" +
                        "        <h3 class='titulo' id='prod_\"+productos[i].id+\"'>" + productos[i].nombre + "</h3>" + "<p class='descripcion'>" + productos[i].descripcionCorta + "</p>\n";
                    if (productos[i].unidades < 1) {
                        html += "<i class='fas fa-battery-empty unidades' title='Producto agotado' style='color: red'></i>";

                    } else if (productos[i].unidades >= 1 && productos[i].unidades < 50) {
                        html += "<i class='fas fa-battery-half unidades' title='Quedan pocas unidades' style='color: orange'></i>";

                    } else {
                        html += "<i class='fas fa-battery-full unidad unidades' title='Producto disponible' style='color: green'></i>";
                    }


                    html += "          <br><label class='precio'>" + productos[i].precio + "€</label>" +
                        "         <p>\n";

                    if (data.loggedin == true) {
                        if (productos[i].unidades >= 1) {
                            html += "         <input type='button' class='btn btnn' onClick='anadirProducto(" + productos[i].id + ")' value='Añadir'/>" +

                                "         <input type='button'class='btn btnn' value='Ver detalle'/>";
                        } else {
                            html += "         <input type='button' class='btn btnn' onClick='anadirProducto(" + productos[i].id + ")' disabled value='Añadir'/>" +

                                "         <input type='button'class='btn btnn' value='Ver detalle'/>";
                        }

                    }
                    html += "        </p>\n" +
                        "      </div>\n" +
                        "    </div>\n" +
                        "  </div>\n";
                }
                if (productos.length == 0) {
                    html = '<div>No hay resultados</div>';
                }
                document.getElementById('productosContenedor').innerHTML = html;
            }
        };
        xhttp.open('GET', './includes/buscador.php?typeId=' + typeId + '&buscar=' + value + '&sid=' + Math.random(), true);
        xhttp.send();
    }
}

function limpiar(typeId) {
    $('#buscar').val('')
    renderProductos(typeId);
}