

document.addEventListener('DOMContentLoaded', ()=> iniciarApp());

function iniciarApp(){
reserva();
}


function reserva(){
    var daySelect = document.getElementById('daySelect');
    for (var i = 1; i <= 31; i++) {
      var option = document.createElement('option');
      option.value = i;
      option.text = i;
      daySelect.appendChild(option);
    }
  
    // Generar opciones para los meses
    var monthSelect = document.getElementById('monthSelect');
    var monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    for (var i = 0; i < monthNames.length; i++) {
      var option = document.createElement('option');
      option.value = i + 1;
      option.text = monthNames[i];
      monthSelect.appendChild(option);
    }
  
    // Generar opciones para los años
    var yearSelect = document.getElementById('yearSelect');
    var currentYear = new Date().getFullYear();
    for (var i = 1900; i <= currentYear; i++) {
      var option = document.createElement('option');
      option.value = i;
      option.text = i;
      yearSelect.appendChild(option);
    }
  
    function toggleAdditionalContent() {
      var containerData = document.querySelector('.container-data-pasajero-form');
      containerData.classList.toggle('show-content');
    }
  
   
    function toggleAdditionalContent2() {
      var containerData2 = document.querySelector('.container-data-pasajero-form2');
      containerData2.classList.toggle('show-content');
    }
  
  
  
  
}

