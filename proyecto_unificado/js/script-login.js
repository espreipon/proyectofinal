var username, password;

function loadDoc() {
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;

    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "includes/login/checklogin.php", true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.response);
            if (data.loggedin === true) {
                //redireccionar a index
                window.location.href = "index.html";
            } else {
                alert(data.error);
            }

        }
    };
    xhttp.send('username=' + username + '&password=' + password);
}

function registro() {
    document.location = "registro.html";
}