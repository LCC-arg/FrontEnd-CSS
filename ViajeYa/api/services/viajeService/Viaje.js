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


const conseguirViajeFiltrado = async  (tipo , fechaSalida , fechaLlegada) => {

    //los filtros deben ser opcionales SIEMPRE
    let result = [];
    let response = await fetch(apiUrl + `?tipo=`+tipo+`?fechaSalida=`+fechaSalida+`?fechaLlegada=`+fechaLlegada);
    if (response.ok) {
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