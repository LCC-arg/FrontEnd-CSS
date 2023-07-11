import creacionResumenPagoViaje from "./resumenViajePagoComponent.js";

async function getResumenViaje() {
  const agregarResumenViaje = document.querySelector(".reserva-details");
  let response = creacionResumenPagoViaje();
  agregarResumenViaje.appendChild(response);
}

const resumenViajePagoComponent = {
  GetResumenViaje: getResumenViaje
};

export default resumenViajePagoComponent;
