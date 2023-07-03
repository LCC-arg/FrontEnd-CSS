import { getCantidadPasajeros, getDataBoleto,saveViajeSeleccionadoToLocalStorage, loadViajeSeleccionadoFromLocalStorage, resetViajeSeleccionado } from "../pasaje/viajeSeleccionadoStorage.js"

export default function creacionResumenViaje() {
    loadViajeSeleccionadoFromLocalStorage();
    let pasajero= getCantidadPasajeros();
    let data = getDataBoleto();
    return `
    <div class="viaje">
    <p class="viaje-tittle tittle">Viaje de ${data.tipoViaje}</p>
    <p class="origen"> De: ${data.ciudadOrigen}</p>
    <p class="destino">A: ${data.ciudadDestino}</p>
</div>
<div class="horarios">
    <div class="salida">
        <p class="tittle">Salida</p>
        <p class="dia"> ${data.fechaSalida}</p>
        <p class="hora">${data.horaSalida}</p>
    </div>
    <div class="llegada">
        <p class="tittle">Llegada</p>
        <p class="dia">${data.fechaLlegada}</p>
        <p class="hora">${data.horaLlegada}</p>
    </div>
</div>
<div class="transporte">
    <div class="empresa">
        <p class="tittle">Empresa</p>
        <p class="empresa-name">${data.empresa}</p>
    </div>
    <div class="clase">
        <p class="tittle">Clase</p>
        <p class="asiento">${data.asiento}</p>
    </div>
</div>
<div class="precio">
    <div class="pasajeros-price">
        <p class="tittle">Pasajeros</p>
        <p class="pasajerosprice"> ${pasajero}x ${data.precio}</p>
    </div>
    <div class="total">
        <p class="tittle">Total</p>
        <p class="totalprice">$${pasajero * data.precio}</p>
    </div>
</div>
    `;

}

