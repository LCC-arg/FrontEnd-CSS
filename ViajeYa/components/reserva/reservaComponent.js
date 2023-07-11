
      export default function creacionReserva(datos){
        return `
        <div class="reservation">
        <img src="${datos.imagenDestino}" alt="Imagen de ${datos.destino}">
        <div class="reservation-details">
          <h2 class="reserva-tittle">Reserva: ${datos.cant}</h2>
          <div class="column-left">

            <p><strong>Pasajero:</strong>${datos.pasajeros}</p>
            <p><strong>Fecha de reserva:</strong> ${datos.fechaReserva}</p>
            <p><strong>Horario de Reserva:</strong> ${datos.horaReserva}</p>
            <p><strong>Destino:</strong> ${datos.destino}</p>
            <p><strong>Transporte:</strong> ${datos.tipoTransporte}</p>

          </div>
          <div class="column-right">
            <p><strong>Fecha de Ida:</strong>${datos.fechaSalida}</p>
            <p><strong>Horario de Ida:</strong> ${datos.horaSalida}</p>
            <p><strong>Fecha de Vuelta:</strong> ${datos.fechaLlegada}</p>
            <p><strong>Horario de Vuelta:</strong> ${datos.horaLlegada}</p>
            <p><strong>Precio: $</strong> ${datos.precio} ARS</p>

          </div>
        </div>
      </div>
        `;
      }




