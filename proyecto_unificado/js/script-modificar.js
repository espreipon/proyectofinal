var oldPass, newPass, newPass2, phone, email, regExpPass, regExpPhone, regExpEmail, respondePass;

//VALIDACIONES

//Valida Password
function validaPassword() {
    oldPass = document.getElementById("oldPass").value,
        newPass = document.getElementById("newPass").value,
        newPass2 = document.getElementById("newPass2").value,
        regExpPass = /(?=^.{8,20}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

    if(oldPass != "" && newPass != "" && newPass2 != "") {
        if (regExpPass.test(newPass) ) {
            if (newPass == newPass2) {
                updatePassword();
            } else {
                alert("Las nuevas contraseñas no coinciden");
            }
        } else {
            alert("La contraseña no es adecuada. Debe contener al menos una letra mayúscula, una minúscula y un numero. Longitud de 8 a 20 caracteres");
        }
    }else{
        alert("Los campos contraseña no pueden estar vacios");
    }
}

//Valida Teléfono
function validaPhone() {
    phone = document.getElementById("phone").value,
        regExpPhone = /^[9|6|7][0-9]{8}$/;

    if (phone != "") {
        if (regExpPhone.test(phone)) {
            updatePhone();
        } else {
            alert("El campo teléfono no es correcto. Debe comenzar por 9, 7 o 6. La lóngitud máxima son 9 dígitos");
        }
    } else {
        alert("El campo teléfono no puede estar vacio");
    }
}

//Valida Email
function validaEmail() {
    email = document.getElementById("email").value;
    regExpEmail = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/;

    if (email != "") {
        if (regExpEmail.test(email)) {
            updateEmail();
        } else {
            alert("El campo email no es correcto");
        }
    } else {
        alert("El campo email no puede estar vacio");
    }
}

//UPDATE

//Actualiza Password
function updatePassword() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "includes/login/updatePass.php", true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            //document.getElementById("result").innerHTML = this.responseText;
            alert(this.responseText);
        }
    };
    xhttp.send('oldPass=' + oldPass + '&newPass=' + newPass);
}

//Actualiza Teléfono
function updatePhone() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "includes/login/updatePhone.php", true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert(this.responseText);
        }
    };
    xhttp.send('phone=' + phone);
}

//Actualiza Email
function updateEmail() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "includes/login/updateEmail.php", true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert(this.responseText);
        }
    };
    xhttp.send('email=' + email);
}
