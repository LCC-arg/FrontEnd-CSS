import { getCantidadPasajeros, getDataBoleto, saveViajeSeleccionadoToLocalStorage, loadViajeSeleccionadoFromLocalStorage, resetViajeSeleccionado } from "../pasaje/viajeSeleccionadoStorage.js";
import Pasajero from "../../api/services/viajeService/Pasajero.js";
import Reserva from "../../api/services/reservaService/Reserva.js";

export default function creacionResumenViaje() {
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
        <button class="boton">Reservar</button>
    </div>
    `;

    const botonReservar = resumenComponente.querySelector(".button-reserva");
    botonReservar.addEventListener('click', () => botonReservarAction());

    function botonReservarAction() {

        var formulariosPasajero = document.querySelectorAll('.pasajero-form');
        validarFormulariosSecuencialmente(formulariosPasajero, 0);
    }

    function validarFormulariosSecuencialmente(formularios, indice) {
        if (indice >= formularios.length) {
            const inputElements = document.querySelectorAll('.Buscador');; // Obtener todos los elementos input

            let pasajeroRequest = {};

            let reservaRequest = {};

            let pasajerosId = [];

            for (let i = 0; i < inputElements.length; i++) {
                const input = inputElements[i];
                const value = input.value;

                // Crear un objeto pasajero cada 9 elementos
                if (i % 7 === 0) {
                    pasajeroRequest = {};
                }

                // Asignar el valor del input a la propiedad correspondiente del pasajero
                switch (i % 7) {
                    case 0:
                        pasajeroRequest.dni = value;
                        break;
                    case 1:
                        pasajeroRequest.nacionalidad = value;
                        break;
                    case 2:
                        pasajeroRequest.nombre = value;
                        break;
                    case 3:
                        pasajeroRequest.apellido = value;
                        break;
                    case 4:
                        pasajeroRequest.numContactoEmergencia = parseInt(value);
                        break;
                    case 5:
                        pasajeroRequest.genero = value;
                        break;
                    case 6:
                        pasajeroRequest.fechaNacimiento = value;
                        break;
                }

                pasajeroRequest.viajeId = data.idViaje;

                // Agregar el objeto pasajero al array pasajeroRequest cada 9 elementos
                if (i % 7 === 6) {
                    Pasajero.Post(pasajeroRequest)
                        .then((response) => {
                            pasajerosId.push(response.id); // Manejar la respuesta de la solicitud Post aquí
                            console.log(response)
                            window.location.href = "../../pages/metodoDePago.html"; // Redireccionar a la página después de la solicitud
                        })
                        .catch((error) => {
                            console.error(error); // Manejar el error de la solicitud Post aquí
                        });
                }
            }
            reservaRequest.clase = "Economico";
            reservaRequest.viajeId = data.idViaje;
            reservaRequest.pasajeros = pasajerosId;

            console.log(reservaRequest);

            setTimeout(function () {
                Reserva.Post(reservaRequest)
                    .then((response) => {
                        console.log(response); // Manejar la respuesta de la solicitud Post aquí
                    })
                    .catch((error) => {
                        console.error(error); // Manejar el error de la solicitud Post aquí
                    });
            }, 5000);
            return;
        }

        var formulario = formularios[indice];
        var numeroPasajero = formulario.querySelector('.pasajero-tittle').getAttribute("number");
        var nombre = formulario.querySelector('.nombre input').value;
        var apellido = formulario.querySelector('.apellido input').value;
        var nacionalidad = formulario.querySelector('.nacionalidad input').value;
        var genero = formulario.querySelector('.genero input').value;
        var contacto = formulario.querySelector('.contacto input').value;
        var fechaNacimiento = formulario.querySelector('.flex input').value;
        var dni = formulario.querySelector('.dni input').value;


        if (isNaN(parseInt(dni))) {
            Swal.fire("El DNI debe ser un número válido (Pasajero " + numeroPasajero + ")")
            return;
        }

        if (dni.trim() === "") {
            Swal.fire("Por favor, ingresa tu DNI (Pasajero " + numeroPasajero + ")")
            return;
        }

        if (nacionalidad.trim() === "") {
            Swal.fire("Por favor, ingresa tu nacionalidad (Pasajero " + numeroPasajero + ")")
            return;
        }

        if (nombre.trim() === "") {
            Swal.fire("Por favor, ingresa tu nombre (Pasajero " + numeroPasajero + ")")
            return;
        }

        if (apellido.trim() === "") {
            Swal.fire("Por favor, ingresa tu apellido (Pasajero " + numeroPasajero + ")")
            return;
        }

        if (isNaN(parseInt(contacto))) {
            Swal.fire("El contacto debe ser un número válido (Pasajero " + numeroPasajero + ")")
            return;
        }

        if (contacto.trim() === "") {
            Swal.fire("Por favor, ingresa tu contacto (Pasajero " + numeroPasajero + ")")
            return;
        }

        if (genero.trim() === "") {
            Swal.fire("Por favor, ingresa tu género (Pasajero " + numeroPasajero + ")")
            return;
        }

        if (fechaNacimiento.trim() === "") {
            Swal.fire("Por favor, ingresa tu fecha de nacimiento (Pasajero " + numeroPasajero + ")")
            return;
        }

        // Llamar recursivamente a la función para validar el siguiente formulario
        validarFormulariosSecuencialmente(formularios, indice + 1);
    }

    return resumenComponente;
}