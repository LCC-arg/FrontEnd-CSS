async function fechas() {
    // Obtener referencias a los select de meses y años
    var monthSelect = document.getElementById('monthSelect');
    var yearSelect = document.getElementById('yearSelect');

    // Generar las opciones para los meses (1 a 12)
    for (var i = 1; i <= 12; i++) {
        var option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        monthSelect.appendChild(option);
    }

    // Obtener el año actual
    var currentYear = new Date().getFullYear();

    // Generar las opciones para los años (desde el año actual hasta 10 años en el futuro)
    for (var i = currentYear; i <= currentYear + 10; i++) {
        var option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        yearSelect.appendChild(option);
    }
}

export default fechas;