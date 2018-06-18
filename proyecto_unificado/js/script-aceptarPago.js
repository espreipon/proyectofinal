var metodoActivo = "choice-option-1";
var FormStuff = {
    init: function () {
        this.bindUIActions();
    },
    bindUIActions: function () {
        $("input[type='radio'].check-reveal").on("change", this.applyConditionalRequired);
    },
    applyConditionalRequired: function (e) {
        $(".reveal-if-active.active").removeClass('active');
        $($(this).data("require-pair")).addClass('active');
        metodoActivo = $(this).attr('id');
    }
};

function valida() {
    var regExpEmail = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/;
    var email = document.getElementById("email").value;
    if (!regExpEmail.test(email)) {
        alert("Introduce email correcto");
        email.addEventListener("focus", document.getElementById("email").style.border = "1px solid red", true);
        return;
    }
    var error = 0;
    $(':input[required]').each(function () {
        var el = $(this);
        if (
            (
                el.data("require-pair") == undefined ||
                $(el.data("require-pair"))[0].checked == true
            ) &&
            (
                el.val() == undefined ||
                el.val().trim() == ""
            )
        ) {
            error++;
            el.addClass('errorForm').on('click', function () {
                $(this).removeClass('errorForm');
                $(this).unbind();
            });
        }
    });
    if (error > 0) {
        alert("Completa todos los campos obligatorios");
        return;
    }
    if (metodoActivo == 'choice-option-1') {
        var tarjeta = document.getElementById("tarjeta").value;
        var fecha = document.getElementById("fecha").value;
        var titular = document.getElementById("titular").value;
        var csv = document.getElementById("csv").value;
        var expTarjeta = /^4\d{3}-?\d{4}-?\d{4}-?\d{4}$/;
        var expFecha = /\b(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})\b/;
        if (!expTarjeta.test(tarjeta) && !expFecha.test(fecha) && tarjeta == "" && fecha == "" == titular == "") {
            alert("Introduce datos correcto de la tarjeta de crédito");
            return;
        }
    }
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "includes/productos/save_historico.php", true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.response);

        }
    };
    window.location.href = 'finCompra.html';
    xhttp.send();
}