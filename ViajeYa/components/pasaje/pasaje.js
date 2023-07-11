import transporte from "../../api/services/transporteService/Transporte.js";
import caracteristicaTransporte from "../../api/services/transporteService/CaracteristicaTransporte.js";
import ciudad from "../../api/services/destinosService/Ciudad.js";
import creacionPasaje from "./pasajeComponente.js";

async function getPasaje(viajeId) {
  const agregarPasaje = document.querySelector(".resultados-busqueda-pasajes");
  let data = await obtenerDatos(viajeId);
  let response = creacionPasaje(data);

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
  let dataCaracteristicaTransporte = pasaje.asientosDisponibles;
  let escalasId=pasaje.escalas;
  let escalas=[]
  escalasId.forEach(async id => {
    let descripcion= await ciudad.GetById(id);
    escalas.push(descripcion);
  });
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
  let imagenEmpresa = dataTransporte.companiaTransporteResponse.imagen;

  let dataCaracteristicaTransporteTipo = await caracteristicaTransporte.Get(idTransporte, 2);
  let tipoViaje ="";
  if (Array.isArray(dataCaracteristicaTransporteTipo) && dataCaracteristicaTransporteTipo.length > 0) {
   tipoViaje = dataCaracteristicaTransporteTipo[0]['valor']; //Asientos disponibles
  }
  else {tipoViaje="Asiento Regular";}

console.log(pasaje);

  let dataCiudadOrigen = await ciudad.GetById(idCiudadOrigen);
  let dataCiudadDestino = await ciudad.GetById(idCiudadDestino);

  let nombreCiudadOrigen = dataCiudadOrigen.nombre;
  let nombreCiudadDestino = dataCiudadDestino.nombre;
  let nombreEmpresa = dataTransporte.companiaTransporteResponse.razonSocial;

  const datos = {
    precio: precioReserva,
    fechaLlegada: fechaLlegadaFormateada,
    horaLlegada: horaLlegada,
    fechaSalida: fechaSalidaFormateada,
    horaSalida: horaSalida,
    asientosDisponibles: dataCaracteristicaTransporte,
    ciudadOrigen: nombreCiudadOrigen,
    ciudadDestino: nombreCiudadDestino,
    imagen: imagenEmpresa,
    descripcion: descripcionTransporte,
    idViaje : idViaje,
    asientoViaje : pasaje.tipoViaje,
    empresa : nombreEmpresa,
    asiento : tipoViaje,
    escalas: escalas
    };
    return datos;
  };


const pasajeComponent = {
  GetPasaje: getPasaje,
};

export default pasajeComponent;

