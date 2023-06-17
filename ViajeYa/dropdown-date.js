var daySelect = document.getElementsByClassName("daySelectClass");
for (var j = 0; j < daySelect.length; j++){
  for (var i = 1; i <= 31; i++) {
    var option = document.createElement("option");
    option.value = i;
    option.text = i;
    daySelect[j].appendChild(option);
  }
}
  // Generar opciones para los meses
  var monthSelect = document.getElementsByClassName("monthSelectClass");
  var monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  for (var j = 0; j < daySelect.length; j++){
    for (var i = 0; i < monthNames.length; i++) {
      var option = document.createElement('option');
      option.value = i + 1;
      option.text = monthNames[i];
      monthSelect[j].appendChild(option);
    }
}
  // Generar opciones para los años
  var yearSelect = document.getElementsByClassName('yearSelectClass');
  var currentYear = new Date().getFullYear();
  for (var j = 0; j < daySelect.length; j++){
    for (var i = 1900; i <= currentYear; i++) {
      var option = document.createElement('option');
      option.value = i;
      option.text = i;
      yearSelect[j].appendChild(option);
    }
}


