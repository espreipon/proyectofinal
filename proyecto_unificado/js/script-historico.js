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
                for (var i = 0, iLen = historico.length; i < iLen; i++)
                {
                    html +=
                        "<p>Fecha de compra: "+ historico[i].fecha+"</p>";
                    html +=
                        "<li style='list-style: none;' class='producto' id='prod_" + historico[i].id + "'>" + "<img src='"+historico[i].image+"' width='90'/>" + historico[i].nombre + " <input type='button' class='btn' onClick='anadirProducto(" + historico[i].id + ")' value='Añadir'/> <br> cantidad: " + historico[i].cantidad + "<br> precio unidad: " + historico[i].precio_ud + "€ &nbsp;<br><br>";
                }
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
                alert('No existen unidades disponibles');
            }
        }
    }
    xmlhttp.open('GET', './includes/productos/add_producto.php?id=' + id + '&sid=' + Math.random(), true);
    xmlhttp.send();
};