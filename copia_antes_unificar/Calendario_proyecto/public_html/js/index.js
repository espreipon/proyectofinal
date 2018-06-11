window.onload = function(){
  document.getElementById('botonCalendar').onclick = abreCalendario;
  
  function abreCalendario(){
      window.open('calendario.html', 'calendario', 'width=250, height=250, left=300px, resizable=false');
  }
};