/**
 * Recuperamos XMLHTTPRequest para llamadas AJAX sin JQUERY
 */
function getXMLRequest() {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    }
    else {
        // code for old IE browsers
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    return xmlhttp;
}


/**
    * Llamada a url para recoger datos.
    * $url: url de la llamada con las opciones
    * $type: GET/POST
    * $callback: function donde enviará la respuesta
    * $async: si es AJAX o no. true -> AJAX (asincrono) / false -> normal (sincrono)
    * Ejemplo: callUrl('productos.json?sid=' + Math.random(3, 100), 'GET', function(resp){console.log(resp.response);}, true);
    */
function callUrl(url, type, callback, async) {
    var xhttp = getXMLRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            if (callback != undefined) {
                callback(this);
            }
        }
    };
    xhttp.open(type, url, async);
    xhttp.send();
}


/**
 * Buscar elemento en array
 * arrayGetElementBy([1,2,3], undefined, 2)
 * arrayGetElementBy([{id: 1},{id: 2}, {id:3}], 'id', 2)
 */
function arrayGetElementBy(arr, prop, val) {
    for (var i = 0; i < arr.length; i++) {
        if (
            (prop != undefined && arr[i][prop] == val) ||
            (prop == undefined && arr[i] == val)
        ) {
            return arr[i];
        }
    }
    return undefined;
}
/**
 * Eliminar elemento en array
 */
function arrayDeleteElementBy(arr, prop, val) {
    for (var i = 0; i < arr.length; i++) {
        if (
            (prop != undefined && arr[i][prop] == val) ||
            (prop == undefined && arr[i] == val)
        ) {
            return arr.splice(i, 1);
        }
    }
    return undefined;
}
/**
 * Eliminar elemento en array
 * var arr = [1,2,3,2,5,2];
 * [1,3,2,5,2];
 * arrayDeleteElementsBy(arr, undefined, 2);
 */
function arrayDeleteElementsBy(arr, prop, val) {
    var elementsDeleted = [];
    for (var i = 0; i < arr.length; i++) {
        if (
            (prop != undefined && arr[i][prop] == val) ||
            (prop == undefined && arr[i] == val)
        ) {
            elementsDeleted.push(arr.splice(i, 1));
            i--;
        }
    }
    return elementsDeleted;
}
/**
 * LocalStorage: Function que retorna el valor de la variable con nombre name
 */
function localstorageGetItem(name) {
    return JSON.parse(localStorage.getItem(name));
}
/**
 * LocalStorage: Function que setea el valor en la variable con nombre name
 */
function localstorageSetItem(name, data) {
    localStorage.setItem(name, JSON.stringify(data));
}
/**
 * LocalStorage: Function borra la variable con nombre name
 */
function localstorageRemoveItem(name) {
    localStorage.removeItem(name);
}

/******************************************** */

/**
 * Crear una tabla desde un JSON
 */
function creaTabla(myjson){
    var JSONDoc = JSON.parse(myjson.responseText);

    for (var i = 0; i < JSONDoc.tiempo.length; i++) {
        html1 = JSONDoc.tiempo[i].nombre;
        html2 = JSONDoc.tiempo[i].cm;
        html3 = JSONDoc.tiempo[i].pistas;
        html4 = JSONDoc.tiempo[i].calidad;
    
        var td1 = document.createElement('td'),
            td2 = document.createElement('td'),
            td3 = document.createElement('td'),
            td4 = document.createElement('td');
    
        var tr = document.createElement('tr');
        //agregar un id al <tr>
        tr.id = i;
    
        var txt1 = document.createTextNode(html1),
            txt2 = document.createTextNode(html2),
            txt3 = document.createTextNode(html3),
            txt4 = document.createTextNode(html4);
    
        td1.appendChild(txt1);
        td2.appendChild(txt2);
        td3.appendChild(txt3);
        td4.appendChild(txt4);
    
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
    
        table.appendChild(tr);
    }
}


