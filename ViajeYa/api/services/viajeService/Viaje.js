import config from "../../../config/config.js";

const apiUrl =  `${config.microservicioViaje}/api/Viaje`;


const crearViaje = async (viajeRequest) =>{

    try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(viajeRequest)
        });
    
        if (!response.ok) {
          throw new Error('Error en la solicitud POST');
        }
    
        const responseData = await response.json();
        return responseData;
        // Procesar la respuesta aquí
    
      } catch (error) {
        console.error('Error:', error);
      }

};


const conseguirViaje = async (idViaje) => {

    let result = [];
    let response = await fetch(apiUrl + `/` + idViaje);
    if (response.ok) {
        result = await response.json();
    }
    return result;
};


const conseguirViajeFiltrado = async  (tipo ,ciudadOrigen, ciudadDestino, fechaSalida , fechaLlegada, pasajeros) => {

  var url = `${apiUrl}?`;
  if(tipo)
  {
      url += `tipo=${tipo}`;
  }
  if(ciudadOrigen)
  {
      if(tipo){url += `&`;}
      url += `ciudadOrigen=${ciudadOrigen}`;
  }
  if(ciudadDestino)
  {
      if(tipo || ciudadOrigen){url += `&`;}
      url += `ciudadDestino=${ciudadDestino}`;
  }
  if(fechaSalida)
  {
      if (tipo || ciudadOrigen || ciudadDestino) {url += `&`;}
      url += `fechaSalida=${fechaSalida}`;
  }
  if(fechaLlegada)
  {
      if (tipo || ciudadOrigen || ciudadDestino || fechaSalida) {url += `&`;}
      url += `fechaLlegada=${fechaLlegada}`;
  }
  if(pasajeros)
  {
      if (tipo || ciudadOrigen || ciudadDestino || fechaSalida || fechaLlegada) {url += `&`;}
      url += `pasajeros=${pasajeros}`;
  }
  let result = []
  let response = await fetch(url);
      if(response.ok){
          result = await response.json();
      }
  return result; 
};


const conseguirPasajerosDeViaje = async (id) => {

    let urlEnpoint = apiUrl+"/pasajeros/"+id;

    let result = [];
    let response = await fetch(urlEnpoint);
    if (response.ok) {
      result = await response.json();
    }
    return result;
};


const viaje = {

    Post : crearViaje,
    Get : conseguirViajeFiltrado,
    GetById : conseguirViaje ,
    GetPasajeros : conseguirPasajerosDeViaje
}

export default viaje;