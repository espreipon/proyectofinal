$( document ).ready(function() {
    $('#botonCalendar').on('click', abreCalendario);

    function abreCalendario(){
        window.open('calendario.html', 'calendario', 'width=250, height=250, left=300px, resizable=false');
    }
});