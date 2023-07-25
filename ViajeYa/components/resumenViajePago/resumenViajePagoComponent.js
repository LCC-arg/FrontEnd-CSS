import { getCantidadPasajeros, getDataBoleto, saveViajeSeleccionadoToLocalStorage, loadViajeSeleccionadoFromLocalStorage, resetViajeSeleccionado } from "../pasaje/viajeSeleccionadoStorage.js"
import { setResultadoReservas, getResultadoReservas, setReservas, getReservas, saveRequestReservaToLocalStorage, resetResultadoReservas, loadResultadoReservasFromLocalStorage } from "../resumenViajePago/reservaStorage.js"
import pago from "../../api/services/reservaService/Pago.js";

export default function creacionResumenPagoViaje() {
    loadViajeSeleccionadoFromLocalStorage();
    let pasajero = getCantidadPasajeros();
    let data = getDataBoleto();
    const resumenComponente = document.createElement("div");
    resumenComponente.innerHTML = `
    <div class="viaje-info">
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
        <div class="tipo-transporte">
        <p class="tittle">Transporte</p>
        <p class="classname">${data.descripcion}</p>
    </div>
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
    <div class="button-reserva">
        <button class="boton">Realizar Pago</button>
    </div>
    `;

    const botonReservar = resumenComponente.querySelector(".button-reserva");
    botonReservar.addEventListener('click', () => validarFormulario());

    function validarFormulario() {
        var nombre = document.querySelector('.card-data-form-container .nombre input').value;
        var apellido = document.querySelector('.card-data-form-container .apellido input').value;
        var contacto = document.querySelector('.card-data-form-container .contacto input').value;
        var nroTarjeta = document.querySelectorAll('.card-data-form-container .contacto input')[1].value;
        var mesVencimiento = document.querySelector('.card-data-form-container #monthSelect').value;
        var anioVencimiento = document.querySelector('.card-data-form-container #yearSelect').value;
        var codigoSeguridad = document.querySelectorAll('.card-data-form-container .contacto input')[2].value;

        var container = document.querySelector('.card-data-form-container');
        var containerStyle = window.getComputedStyle(container);
        var displayValue = containerStyle.getPropertyValue('display');

        if (displayValue === 'none') {
            Swal.fire("Por favor, elija una forma de pago")
            return;
        }

        // Validar campos
        if (nombre.trim() === "") {
            Swal.fire("Por favor, ingresa tu nombre")
            return;
        }

        if (apellido.trim() === "") {
            Swal.fire("Por favor, ingresa tu apellido")
            return;
        }


        if (contacto.trim() === "") {
            Swal.fire("Por favor, ingresa tu contacto")
            return;
        }

        if (isNaN(parseInt(contacto))) {
            Swal.fire("El contacto debe ser un número válido")
            return;
        }

        if (nroTarjeta.trim() === "") {
            Swal.fire("Por favor, ingresa el número de tarjeta")
            return;
        }

        if (mesVencimiento === "" || anioVencimiento === "") {
            Swal.fire("Por favor, selecciona el mes y el año de vencimiento")
            return;
        }

        if (codigoSeguridad.trim() === "") {
            Swal.fire("Por favor, ingresa el código de seguridad")
            return;
        }

        loadResultadoReservasFromLocalStorage();

        let reservasIds = [];

        getReservas().forEach(element => {
            reservasIds.push(element.id);
        });

        let pagoRequest = {
            reservas: reservasIds,
            metodoPago: 1,
            numeroTarjeta: nroTarjeta.toString()
        };

        pago.Post(pagoRequest)
            .then((response) => {
                console.log(response);
                window.location.href = "../../pages/pago-nice.html";
            })
    }

    return resumenComponente;
}
