import viaje from "../../api/services/viajeService/Viaje.js";
import transporte from "../../api/services/transporteService/Transporte.js";
import caracteristicaTransporte from "../../api/services/transporteService/CaracteristicaTransporte.js";
import reserva from "../../api/services/reservaService/Reserva.js";
import ciudad from "../../api/services/destinosService/Ciudad.js";
import creacionPasaje from "./pasajeComponente.js";


async function getPasaje() {
const agregarPasaje = document.querySelector(".resultados-busqueda-pasajes");

 let data = await obtenerDatos(4,2);
  let response = creacionPasaje(data);
 agregarPasaje.innerHTML += response;
}



  async function  botonComprar() {
  const botonComprar = document.querySelector(".boton-comprar");

  botonComprar.addEventListener('click', () => botonComprarAction());

}

const botonComprarAction= () =>{
  console.log(1);

}




 

async function obtenerDatos(idPasaje,idReserva) {


  let pasaje = await viaje.GetById(idPasaje);
  let dataReserva = await reserva.GetById(idReserva);

  let precioReserva = dataReserva.precio //PRECIO
  let idCiudadOrigen=parseInt(pasaje.ciudadOrigen);
  let idCiudadDestino= pasaje.ciudadDestino;
  let idTransporte=pasaje.transporteId;
  let fechaSalidaGeneral= pasaje.fechaSalida;  
  let fechaLlegadaGeneral= pasaje.fechaLlegada;

  const fechaSalida = new Date(fechaSalidaGeneral);
  const fechaLlegada = new Date(fechaLlegadaGeneral);

  const diasSemana = ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'];
  const meses = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
  const fechaSalidaFormateada = `${diasSemana[fechaSalida.getDay()]} ${fechaSalida.getDate()} de ${meses[fechaSalida.getMonth()]} de ${fechaSalida.getFullYear()}`; //FECHA SALIDA
  const horaSalida = `${fechaSalida.getHours().toString().padStart(2, '0')}:${fechaSalida.getMinutes().toString().padStart(2, '0')}`; // HORA SALIDA
  const fechaLlegadaFormateada = `${diasSemana[fechaSalida.getDay()]} ${fechaSalida.getDate()} de ${meses[fechaSalida.getMonth()]} de ${fechaSalida.getFullYear()}`; //FECHA LLEGADA
  const horaLlegada = `${fechaSalida.getHours().toString().padStart(2, '0')}:${fechaSalida.getMinutes().toString().padStart(2, '0')}`; //HORA LLEGADA

  let dataTransporte= await transporte.GetById(idTransporte);
  let descripcionTransporte = dataTransporte.tipoTransporteResponse.descripcion; //Tipo Transporte
 
let dataCaracteristicaTransporte= await caracteristicaTransporte.Get(idTransporte,1);
let asientosDisponible=dataCaracteristicaTransporte[0]['valor']; //Asientos disponibles


let dataCiudadOrigen = await ciudad.GetById(idCiudadOrigen);
let dataCiudadDestino= await ciudad.GetById(idCiudadDestino);

let nombreCiudadOrigen= dataCiudadOrigen.nombre;
let nombreCiudadDestino= dataCiudadDestino.nombre;


const datos = {
   precio : precioReserva,
   fechaLlegada : fechaLlegadaFormateada,
   horaLlegada : horaLlegada,
   fechaSalida: fechaSalidaFormateada,
   horaSalida : horaSalida,
   asientosDisponibles : asientosDisponible,
   ciudadOrigen : nombreCiudadOrigen,
   ciudadDestino : nombreCiudadDestino,
   imagen : "",
   descripcion : descripcionTransporte
};



return datos;





}




const pasajeComponent = {
    GetPasaje: getPasaje,
};

export default pasajeComponent;

