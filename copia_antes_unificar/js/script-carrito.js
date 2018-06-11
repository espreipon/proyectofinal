function getXMLRequest()
{
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        return new XMLHttpRequest();
    } else {  // code for IE6, IE5
        return new ActiveXObject('Microsoft.XMLHTTP');
    }
}
function renderProductos() {
    document.getElementById('productosContenedor').innerHTML='';
    xmlhttp = getXMLRequest();
    xmlhttp.onreadystatechange=function() {
        if (this.readyState==4 && this.status==200) {
            var productos = JSON.parse(this.response);
            var html = "";
            for(var i = 0, iLen = productos.length; i < iLen; i++)
            {
                //alert(productos[i].image);
                html +=
                    "  <div class=\"col-md-4\" id=\"caja\">\n" +
                    "    <div class=\"thumbnail\" >\n" +
                    //"      <img data-src="+productos[i].image+" alt=\"...\">\n" +
                    "      <div class=\"caption\">\n" +
                    "        <h3 id='prod_\"+productos[i].id+\"'>"+ productos[i].nombre + "-" +productos[i].precio+"€</h3>\n" +
                    "        <p>\n" +
                    "         <input type='button' onClick='anadirProducto("+productos[i].id+")' value='Añadir'/>"+
                    "        </p>\n" +
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
            document.getElementById('productosContenedor').innerHTML=html;

        }
    }
    xmlhttp.open('GET','../../php/includes-carrito/get_productos.php?sid='+Math.random(),true);
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




function renderCarrito()
{
    document.getElementById('carrito').innerHTML='';
    xmlhttp = getXMLRequest();
    xmlhttp.onreadystatechange=function() {
        if (this.readyState==4 && this.status==200) {
            var carrito = JSON.parse(this.response);
            var html = "";
            var total = 0;
            html += "<h1>Carrito</h1><br>";
            for(var i = 0, iLen = carrito.length; i < iLen; i++)
            {
                html +=
                    "<li id='prod_"+carrito[i].id+"'><input type='button' onClick='deleteProducto("+carrito[i].id+")' value='x'/>" + carrito[i].nombre + " cantidad: "+carrito[i].cantidad+" precioTotal: "+carrito[i].total+"€";

                //var btn = document.createElement('button').button.onclick = deleteProducto(carrito[i].id);
                total += parseInt(carrito[i].total);
            }
            html += "<li class='total'><b>Total</b>: "+total+"€</li>";
            document.getElementById('carrito').innerHTML=html;
        }
    }
    xmlhttp.open('GET','../../php/includes-carrito/get_carrito.php?sid='+Math.random(),true);
    xmlhttp.send();
};
function anadirProducto(id)
{
    xmlhttp = getXMLRequest();
    xmlhttp.onreadystatechange=function() {
        if (this.readyState==4 && this.status==200) {
            if(parseInt(this.response) === 1)
            {
                console.log('El producto se ha añadido al carrito correctamente.');
                renderCarrito();
            }
            else
            {
                alert('Error');
            }
        }
    }
    xmlhttp.open('GET','../../php/includes-carrito/add_producto.php?id='+id+'&sid='+Math.random(),true);
    xmlhttp.send();
};
function deleteProducto(id)
{
    xmlhttp = getXMLRequest();
    xmlhttp.onreadystatechange=function() {
        if (this.readyState==4 && this.status==200) {
            if(parseInt(this.response) === 1)
            {
                console.log('El producto se ha eliminado del carrito correctamente.');
                renderCarrito();
            }
            else
            {
                alert('Error');
            }
        }
    }
    xmlhttp.open('GET','../../php/includes-carrito/delete_producto.php?id='+id+'&sid='+Math.random(),true);
    xmlhttp.send();
};