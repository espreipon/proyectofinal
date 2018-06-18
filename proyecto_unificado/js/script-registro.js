var username, password, password2, firstname, lastname, phone, email;
function valida() {
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    password2 = document.getElementById("password2").value;
    firstname = document.getElementById("firstname").value;
    lastname = document.getElementById("lastname").value;
    phone = document.getElementById("phone").value;
    email = document.getElementById("email").value;

    var regExpUser = /^[a-z\d_]{4,15}$/i,
        regExpPass = /(?=^.{8,20}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
        regExpPhone = /^[9|6|7][0-9]{8}$/,
        regExpEmail = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/;
        regExpName = /^([A-Z]{1}[a-zñ]+[\s]*)+$/;

    if (regExpUser.test(username)) {
        if (regExpPass.test(password)) {
            if (password == password2) {
                if(firstname != "" && lastname != ""){
                    if(regExpName.test(firstname) && regExpName.test(lastname)){
                        if (regExpEmail.test(email)) {
                            if (phone != "") {
                                if (regExpPhone.test(phone)) {
                                    registro();
                                } else {
                                    alert("El campo teléfono no es correcto. Debe comenzar por 9, 7 o 6. La lóngitud máxima son 9 dígitos");
                                }
                            } else {
                                registro();
                            }
                        } else {
                            alert("El campo email no es correcto");
                        }
                    } else {
                        alert("Nombre y Apellido debe comenzar con mayúsculas. No se permiten números o caracteres extraños");
                    }
                }else{
                    alert("El campo Nombre y Apellido deben estar completos");
                }
            } else {
                alert("Las contraseñas no coinciden");
            }
        } else {
            alert("La contraseña no es adecuada. Debe contener al menos una letra mayúscula, una minúscula y un numero. Longitud de 8 a 20 caracteres");
        }
    }
    else {
        alert("El nombre de usuario no es adecuado. Tan solo están permitidos números y letras. Longitud de 4 a 15 caracteres");
    }
}

function registro() {

    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "includes/login/registry.php", true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert(this.responseText);
        }
    };
    xhttp.send('username=' + username + '&password=' + password + '&firstname=' + firstname + '&lastname=' + lastname + '&phone=' + phone + '&email=' + email);
}