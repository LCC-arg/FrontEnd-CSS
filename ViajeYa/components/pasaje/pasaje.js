import transporte from "../../api/services/transporteService/Transporte.js";
import caracteristicaTransporte from "../../api/services/transporteService/CaracteristicaTransporte.js";
import ciudad from "../../api/services/destinosService/Ciudad.js";
import creacionPasaje from "./pasajeComponente.js";
import { setViaje,getViaje, saveViajeSeleccionadoToLocalStorage, loadViajeSeleccionadoFromLocalStorage, resetViajeSeleccionado } from "../pasaje/viajeSeleccionadoStorage.js"



async function getPasaje(viajeId) {
  const agregarPasaje = document.querySelector(".resultados-busqueda-pasajes");

  let data = await obtenerDatos(viajeId);
  let response = creacionPasaje(data);
  console.log(response);

  agregarPasaje.appendChild(response);

}



async function obtenerDatos(pasaje) {

  let precioReserva = pasaje.precio //PRECIO
  let idViaje = pasaje.id;
  let idCiudadOrigen = parseInt(pasaje.ciudadOrigen);
  let idCiudadDestino = pasaje.ciudadDestino;
  let idTransporte = pasaje.transporteId;
  let fechaSalidaGeneral = pasaje.fechaSalida;
  let fechaLlegadaGeneral = pasaje.fechaLlegada;

  const fechaSalida = new Date(fechaSalidaGeneral);
  const fechaLlegada = new Date(fechaLlegadaGeneral);

  const diasSemana = ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'];
  const meses = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
  const fechaSalidaFormateada = `${diasSemana[fechaSalida.getDay()]} ${fechaSalida.getDate()} de ${meses[fechaSalida.getMonth()]} de ${fechaSalida.getFullYear()}`; //FECHA SALIDA
  const horaSalida = `${fechaSalida.getHours().toString().padStart(2, '0')}:${fechaSalida.getMinutes().toString().padStart(2, '0')}`; // HORA SALIDA
  const fechaLlegadaFormateada = `${diasSemana[fechaLlegada.getDay()]} ${fechaLlegada.getDate()} de ${meses[fechaLlegada.getMonth()]} de ${fechaLlegada.getFullYear()}`; //FECHA LLEGADA
  const horaLlegada = `${fechaLlegada.getHours().toString().padStart(2, '0')}:${fechaLlegada.getMinutes().toString().padStart(2, '0')}`; //HORA LLEGADA

  let dataTransporte = await transporte.GetById(idTransporte);
  let descripcionTransporte = dataTransporte.tipoTransporteResponse.descripcion; //Tipo Transporte

  let dataCaracteristicaTransporte = await caracteristicaTransporte.Get(idTransporte, 1);
  let asientosDisponible = dataCaracteristicaTransporte[0]['valor']; //Asientos disponibles


  let dataCiudadOrigen = await ciudad.GetById(idCiudadOrigen);
  let dataCiudadDestino = await ciudad.GetById(idCiudadDestino);

  let nombreCiudadOrigen = dataCiudadOrigen.nombre;
  let nombreCiudadDestino = dataCiudadDestino.nombre;

  const datos = {
    precio: precioReserva,
    fechaLlegada: fechaLlegadaFormateada,
    horaLlegada: horaLlegada,
    fechaSalida: fechaSalidaFormateada,
    horaSalida: horaSalida,
    asientosDisponibles: asientosDisponible,
    ciudadOrigen: nombreCiudadOrigen,
    ciudadDestino: nombreCiudadDestino,
    imagen: "",
    descripcion: descripcionTransporte,
    idViaje : idViaje,
    viaje : pasaje
  };
  return datos;
}

const pasajeComponent = {
  GetPasaje: getPasaje,
};

export default pasajeComponent;

