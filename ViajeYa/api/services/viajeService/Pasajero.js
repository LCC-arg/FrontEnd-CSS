import config from "../../../config/config.js";

const apiUrl =  `${config.microservicioViaje}/api/Pasajero`;

const crearPasajero = async (pasajeroRequest) => {

    try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(pasajeroRequest)
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

const conseguirPasajero = async (idPasajero) => {

    let result = "";
    let response = await fetch(apiUrl + `/` + idPasajero);
    if (response.ok) {
        result = await response.json();
    }
    return result;

};

const conseguirPasajeroFiltrado = async (nombre , apellido , fechaNac , dni , nacionalidad , genero) => {

     //los filtros deben ser opcionales SIEMPRE
     let result = [];
     let response = await fetch(apiUrl + `?nombre=`+tipo+`?fechaNacimiento=`+fechaNac+`?dni=`+dni+`?nacionalidad=`+nacionalidad+`?genero=`+genero);
     if (response.ok) {
       result = await response.json();
     }
     return result;

};


const pasajero = {
    Post : crearPasajero,
    GetById : conseguirPasajero,
    GetFiltrado : conseguirPasajeroFiltrado
};

export default pasajero;