import { getCantidadPasajeros, setDataBoleto, saveViajeSeleccionadoToLocalStorage, loadViajeSeleccionadoFromLocalStorage, resetViajeSeleccionado } from "../pasaje/viajeSeleccionadoStorage.js"
import creacionRecorrido from "../pasaje/recorridoComponent.js"

export default function creacionPasaje(datos) {
    const pasajeComponente = document.createElement("div");
    pasajeComponente.innerHTML = `
      <link rel="stylesheet" href="../components/pasaje/pasaje.css">
      <div class="resultado-pasaje" data-id-viaje="${datos.idViaje}">
          <img src="${datos.imagen}" alt="logo Empresa">
          <div class="fecha-salida">
              <div class="dia-salida">
                  <h4>Sale:</h4>
                  <p>${datos.fechaSalida}</p>
              </div>
              <h4 class="horario">${datos.horaSalida}</h4>
              <p>${datos.ciudadOrigen}</p>
          </div>
          <div class="fecha-llegada">
              <div class="dia-llegada">
                  <h4>Llega:</h4>
                  <p>${datos.fechaLlegada}</p>
              </div>
              <h4 class="horario">${datos.horaLlegada}</h4>
              <p>${datos.ciudadDestino}</p>
          </div>
          <p class="precio">ARS $ <span class="precio-negrita">${datos.precio}</span></p>
         <div class="tipo-vehiculo border-superior">
          <h4 class="centrar-texto ">${datos.descripcion}</h4>
         </div>
          <div class="recorrido border-superior">
              <h4>Recorrido</h4>
          </div>
          <div class="libre border-superior">
              <h4>Libres</h4>
              <h4 class="cantidad">${datos.asientosDisponibles}</h4>
          </div>
          <button class="button-reset boton-comprar border-superior">Comprar</button>
      </div>
    `;

    const botonComprar = pasajeComponente.querySelector(".boton-comprar");
    botonComprar.addEventListener('click', () => botonComprarAction(datos));
    const recorrido = pasajeComponente.querySelector('.recorrido');
    const pasaje = recorrido.parentNode;
    pasaje.appendChild(document.createElement('DIV'));
    recorrido.addEventListener('mouseover', () => recorridoAction())
    recorrido.addEventListener('mouseout', () => recorridoActionBorrar())

    function botonComprarAction(datos) {
        loadViajeSeleccionadoFromLocalStorage();
        setDataBoleto(datos);
        saveViajeSeleccionadoToLocalStorage();
        const ruta = "/ViajeYa/pages/reserva.html";
        window.location.href = window.location.origin + ruta;
    }


    function recorridoAction() {
        if (datos.escalas.length !== 0) {
            const informacionEscla = creacionRecorrido(datos.ciudadOrigen, datos.escalas, datos.ciudadDestino);
            const cartel = document.createElement('div');
            cartel.innerHTML = informacionEscla;
            cartel.classList.add('tooltip');
            const pasaje = recorrido.parentNode;
            pasaje.appendChild(cartel);
        } else {
            const informacionEscla = creacionRecorrido(datos.ciudadOrigen, datos.escalas, datos.ciudadDestino);
            const cartel = document.createElement('div');
            cartel.innerHTML = informacionEscla;
            console.log(informacionEscla);
            cartel.classList.add('tooltip');
            const pasaje = recorrido.parentNode;
            pasaje.appendChild(cartel);
        }

    }

    function recorridoActionBorrar() {
        const pasaje = recorrido.parentNode;
        const cartel = pasaje.querySelector(".tooltip");
        if (cartel) {
            cartel.remove();
        }
    }


    return pasajeComponente;
}

