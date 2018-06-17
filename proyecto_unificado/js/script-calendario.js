var fclass = {
    f: new Date(),
    anio: undefined,/*año con 4 digitos*/
    mes: undefined,/*0-11*/
    diaMes: undefined,/*1-31*/
    diaSemana: undefined/*0-6*/,
    diaIniMonthSemana: undefined,
    updateData: function(){
        this.anio = this.f.getFullYear(); /*año con 4 digitos*/
        this.mes = this.f.getMonth();/*0-11*/
        this.diaMes = this.f.getDate();/*1-31*/
        this.diaSemana = this.f.getDay();/*0-6*/
        var d = new Date(this.f.getTime());
        d.setDate(1);
        this.diaIniMonthSemana = d.getDay();
    },
    setYear: function(year){
        this.f.setFullYear(year);
        this.updateData();
    },
    setMonth: function(month){
        this.f.setMonth(month);
        this.updateData();
    },
    setDay: function(day){
        this.f.setDate(day);
        this.updateData();
    }
};

window.onload = function(){
    
    var fechaActual = Object.assign({}, fclass),
        fechaHoy = Object.assign({}, fclass);
    fechaHoy.updateData();
    fechaActual.updateData();
    
    var btnsDia = document.querySelectorAll('#calendario td');
    for (var i = 0; i < btnsDia.length; i++) {
        btnsDia[i].addEventListener('click', elegirFecha);
    }
    
    document.getElementById('izqAnio').onclick = function(){
        fechaActual.setYear(fechaActual.anio-1);
        actualizaCalendario();
    };
    document.getElementById('derechaAnio').onclick = function(){
        fechaActual.setYear(fechaActual.anio+1);
        actualizaCalendario();
    };
    document.getElementById('izqMes').onclick = function(){
        fechaActual.setMonth(fechaActual.mes-1);
        actualizaCalendario();     
    };
    document.getElementById('derechaMes').onclick = function(){
        fechaActual.setMonth(fechaActual.mes+1);
        actualizaCalendario();
    };
    actualizaCalendario();

    function buscaNombreMes(mes){
        switch(mes){
            case 0:
                document.getElementById('mesActual').innerHTML = "Enero";
                break
            case 1:
                document.getElementById('mesActual').innerHTML = "Febrero";
                break
            case 2:
                document.getElementById('mesActual').innerHTML = "Marzo";
                break
            case 3:
                document.getElementById('mesActual').innerHTML = "Abril";
                break
            case 4:
                document.getElementById('mesActual').innerHTML = "Mayo";
                break
            case 5:
                document.getElementById('mesActual').innerHTML = "Junio";
                break
            case 6:
                document.getElementById('mesActual').innerHTML = "Julio";
                break
            case 7:
                document.getElementById('mesActual').innerHTML = "Agosto";
                break
            case 8:
                document.getElementById('mesActual').innerHTML = "Septiembre";
                break
            case 9:
                document.getElementById('mesActual').innerHTML = "Octubre";
                break
            case 10:
                document.getElementById('mesActual').innerHTML = "Noviembre";
                break
            case 11:
                document.getElementById('mesActual').innerHTML = "Diciembre";
                break
            default:
        }
    }
    
    function colocaDias(){
        var ultimoDia = buscaUltimoDia(fechaActual.mes, fechaActual.anio),
            numCasilla;            
        
        for(var i = 1 ; i <= ultimoDia; i++){
            numCasilla = 6+i;
            if(fechaActual.diaIniMonthSemana !== 0){
                numCasilla = fechaActual.diaIniMonthSemana-1+i;
            } 
            document.getElementById('d'+numCasilla).innerHTML  = i;
            if(fechaHoy.diaMes == i && fechaHoy.mes == fechaActual.mes && fechaHoy.anio == fechaActual.anio){
                document.getElementById('d'+numCasilla).style = "background-color: #a4d5fb";
            }
        }
    }
   
    function buscaUltimoDia(mes, anio){
        var mes = mes,
            anio = anio,
            ultimoDia = 31;
        switch(mes){
        case 3:
        case 5:
        case 8:
        case 10:
            ultimoDia = 30;
            break
        case 1:
            if ((anio % 4 === 0) && ((anio % 100 !== 0) || (anio % 400 === 0))){
                ultimoDia = 29;
            }
            else{
                ultimoDia = 28;
            }
            break
        }
        return ultimoDia;
    }
    
    function actualizaCalendario(){
        buscaNombreMes(fechaActual.mes);
        document.getElementById('anioActual').innerHTML =  fechaActual.anio;
        //Primero vaciamos todas las casillas:
        for(var i=1; i <43; i++){
            document.getElementById('d'+i).innerHTML = "";
            document.getElementById('d'+i).style = "background-color: none";
        }
        //A continuación rellenamos los datos.
        colocaDias();
    };
    
    function elegirFecha(e){
        var dia = this.innerHTML,
            mes = document.getElementById('mesActual').innerHTML,
            anio = document.getElementById('anioActual').innerHTML;
        window.opener.document.getElementById('fechaCal').value = dia + " " + mes + " " + anio;
        window.close();
        //alert(dia + " / " + mes + " / " + anio);
    }

};