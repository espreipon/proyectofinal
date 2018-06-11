function validacion(formulario) {

//letra, numero,
var codequipo = /^([a-zA-Z0-9_ ])+$/ //letra, numero,
var nombreequipo = /^([a-z]|[A-Z]|á|é|í|ó|ú|ñ|ü|\s|\.|-)+$/ //letras, ‘.’ y ‘-’ o vacio
var descripcion = /^([a-zA-Z0-9_ \s])+$/ //letras, ‘.’ y ‘-’ o vacio
//fechas, formato dd/mm/aaaa o d/m/aa
var er_mes31dias = /^([1-3]0|[0-2][1-9]|31|[0-9])\/(1|01|3|03|5|05|7|07|8|08|10|12)\/(1999|20[0-1][0-9]|2020)$/
var er_mes30dias = /^([1-3]0|[0-2][1-9]|[0-9])\/(4|04|6|06|9|09|11)\/(1999|20[0-1][0-9]|2020)$/
var er_mes28dias = /^([1-2]0|[0-2][1-8]|[0-1]9|[0-9])\/(02|2)\/(1999|200[1-3]|200[5-7]|2009|201[0-1]|201[3-5]|201)$/
var er_mes29dias = /^([1-2]0|[0-2][1-9]|[0-9])\/(02|2)\/(2000|2004|2008|2012|2016|2020)$/
for(x = 1; x 50) {
alert(‘La lontitud máxima permitida para cualquier campo es de 10 caracteres.’)
return false
}
}

if(!codequipo.test(formulario.codequipo.value)) {
alert(‘Contenido del campo Codequipo no válido.’)
return false
}
if(!nombreequipo.test(formulario.nombreequipo.value)) {
alert(‘Contenido del campo NOMBRE EQUIPO no válido. Debe contener solo Letras ‘)
return false
}

if(!descripcion.test(formulario.descripcion.value)) {
alert(‘Contenido del campo DESCRIPCION no válido. Debe contener letra y numero’)
return false
}

if (!(er_mes31dias.test(formulario.fechaingreso.value) ||
er_mes29dias.test(formulario.fechaingreso.value) ||
er_mes28dias.test(formulario.fechaingreso.value))) {
alert(‘Contenido del campo FECHA no válido.’)
return false
}

return true

//cambiar por return true para ejecutar la accion del formulario
}