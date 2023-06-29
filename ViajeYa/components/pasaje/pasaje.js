import viaje from "../../api/services/viajeService/Viaje.js"; 
import transporte from "../../api/services/transporteService/Transporte.js"; 
import tipoTransporte from "../../api/services/transporteService/TipoTransporte.js"; 
import caracteristicaTransporte from "../../api/services/transporteService/CaracteristicaTransporte.js"; 




const agregarPasaje = document.querySelector(".resultados-busqueda-pasajes");

  async function getPasaje() {
    const response = await fetch('../components/pasaje/pasaje.html');
    const html = await response.text();
    agregarPasaje.innerHTML += html;


    botonComprar();
    obtenerDatos(2);


  }



  async function  botonComprar() {
  const botonComprar = document.querySelector(".boton-comprar");

  botonComprar.addEventListener('click', () => botonComprarAction());

}

const botonComprarAction= () =>{
  console.log(1);

}




 

async function obtenerDatos(idPasaje) {


  let pasaje = await viaje.GetById(idPasaje);
  let idCiudadOrigen=pasaje.idCiudadOrigen;
  let idCiudadDestino= pasaje.idCiudadDestino;
  let precio="";
  let idTransporte=pasaje.transporteId;
  let fechaSalidaGeneral= pasaje.fechaSalida;  
  let fechaLlegadaGeneral= pasaje.fechaLlegada;

  const fechaSalida = new Date(fechaSalidaGeneral);
  const diasSemana = ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'];
  const meses = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
  const fechaSalidaFormateada = `${diasSemana[fechaSalida.getDay()]} ${fechaSalida.getDate()} de ${meses[fechaSalida.getMonth()]} de ${fechaSalida.getFullYear()}`;
  const horaSalida = `${fechaSalida.getHours().toString().padStart(2, '0')}:${fechaSalida.getMinutes().toString().padStart(2, '0')}`;

  const fechaLlegada = new Date(fechaLlegadaGeneral);

  const fechaLlegadaFormateada = `${diasSemana[fechaSalida.getDay()]} ${fechaSalida.getDate()} de ${meses[fechaSalida.getMonth()]} de ${fechaSalida.getFullYear()}`;
  const horaLlegada = `${fechaSalida.getHours().toString().padStart(2, '0')}:${fechaSalida.getMinutes().toString().padStart(2, '0')}`;

  let dataTransporte= await transporte.GetById(idTransporte);
  let descripcionTransporte = dataTransporte.tipoTransporteResponse.descripcion;
 
 
 


let dataCaracteristicaTransporte= await caracteristicaTransporte.Get(idTransporte,1);
let asientosDisponible=dataCaracteristicaTransporte[0]['valor'];
}




  const pasajeComponent = {
    GetPasaje: getPasaje,
};

export default pasajeComponent;

