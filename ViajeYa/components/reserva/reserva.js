import reservaService from "../../api/services/reservaService/Reserva.js";
import creacionReserva from "./reservaComponent.js";
import formatearFecha from "../../utils/formatearFecha.js";
import formatearHora from "../../utils/formatearHora.js";





async function getReserva(idReserva,count) {
  const agregarReserva = document.querySelector(".reservations");
  
  const datos = await obtenerDatos(idReserva,count);
  const reserva = creacionReserva(datos);
  console.log(count);
  agregarReserva.innerHTML += reserva;
}

async function obtenerDatos(idReserva,count) {
  let reservaData = await reservaService.GetById(idReserva);
  let pasajeroMap = reservaData.pasajero;
  let tipoTransporteMap = reservaData.viaje.tipoTransporte;
  let destinoNombreMap = reservaData.viaje.ciudadDestinoDescripcion;
  let imagenDestinoMap = reservaData.viaje.ciudadDestinoImagen;
  let precioMap = reservaData.viaje.precio;

  const fechaReservaFormateadaMap = formatearFecha(reservaData.fecha);
  const fechaLlegadaFormateadaMap = formatearFecha(reservaData.viaje.fechaLlegada);
  const fechaSalidaFormateadaMap = formatearFecha(reservaData.viaje.fechaSalida);

const horaReservaMap = formatearHora(reservaData.fecha);
const horaSalidaMap = formatearHora(reservaData.viaje.fechaSalida);
const horaLlegadaMap = formatearHora(reservaData.viaje.fechaLlegada);

 /* 
  let idPasajero = reservaData.pasajero;
  let nombrePasajero= await pasajero.GetById(idPasajero);
*/

  const datos = {
    pasajeros:pasajeroMap,
    fechaReserva: fechaReservaFormateadaMap,
    horaReserva: horaReservaMap,
    fechaLlegada : fechaLlegadaFormateadaMap,
    fechaSalida: fechaSalidaFormateadaMap,
    horaLlegada :horaLlegadaMap,
    horaSalida: horaSalidaMap,
    destino: destinoNombreMap,
    tipoTransporte:tipoTransporteMap,
    imagenDestino: imagenDestinoMap,
    precio : precioMap,
    cant : count
  };
  return datos; 
}

const reservaComponent = {
  GetReserva: getReserva,
};

export default reservaComponent;

