$(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $("#js_up").slideDown(300);
    } else { // si no
        $("#js_up").slideUp(300);
    }
});

$("#js_up i").on('click', function (e) {
    e.preventDefault();
    $("body,html").animate({
        scrollTop: 0
    }, 700);
    return false;
});

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.response);
        if (data.loggedin === true) {
            $('#loginContainer').html('<span href="" userId="' + data.userId + '">Bienvenido <strong>' + data.username + '</strong>&nbsp;<a href="perfil_usuario.html">Ver Perfil</a>&nbsp;|&nbsp;' + '</span> <a href="includes/login/logout.php">Desconectarse</a>&nbsp;'
                + '<a href="carrito.html" class="btn  carrito  glyphicon glyphicon-shopping-cart" role="button"></a>');
        }
    }
}
xmlhttp.open('GET', './includes/login/getLoginState.php?sid=' + Math.random(), true);
xmlhttp.send();

function showSnackbar(text) {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");

    x.innerHTML = text;

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 1500);
}
