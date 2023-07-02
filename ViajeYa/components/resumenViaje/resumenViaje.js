
import creacionResumenViaje from "./resumenViajeComponent.js";


async function getResumenViaje() {
    const agregarResumenViaje = document.querySelector(".reserva-details");  
    let response = creacionResumenViaje();
    agregarResumenViaje.innerHTML = response;
  
  
  }

  

  
const resumenViajeComponent = {
    GetResumenViaje: getResumenViaje
  };
  
  export default resumenViajeComponent ;
  