        function loadDoc() {
            var petValue = document.querySelector('input[name="pet"]:checked').value;
            var weigthValue = document.getElementById("weigth").value;

            var actValue = document.querySelector('input[name="activity"]:checked').value;

            //funciona
            var sel = document.getElementById("age");
            var opt = sel.options[sel.selectedIndex];
            var ageValue = opt.value;
            var ageText = opt.text;

            var xhttp = new XMLHttpRequest();
            xhttp.open("POST", "includes/calculadora.php", true);
            xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    document.getElementById("result").innerHTML = this.responseText;
                    //document.getElementById("result").style.border="2px solid black";
                    //document.getElementById("result").style.padding="10px";
                    //document.getElementById("result").style.borderRadius="10px";
                    document.getElementById("result").style.textAlign = "justify";
                    //document.getElementById("result").style.backgroundColor="#ffd29d";

                }
            };
            xhttp.send('petValue=' + petValue + '&ageValue=' + ageValue + '&ageText=' + ageText + '&weigthValue=' + weigthValue + '&actValue=' + actValue);
        }