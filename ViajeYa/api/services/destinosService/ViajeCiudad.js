import config from "../../../config/config.js";

const apiUrl =  `${config.microservicioDestino}/api/ViajeCiudad`;


const crearViajeCiudad = async (viajeCiudadRequest) =>{

    try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(viajeCiudadRequest)
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


const conseguirViajeCiudad = async (idViajeCiudad) => {

    let result = [];
    let response = await fetch(apiUrl + `/` + idViajeCiudad);
    if (response.ok) {
        result = await response.json();
    }
    return result;
};

const conseguirViajeCiudades = async  () => {


    //los filtros deben ser opcionales SIEMPRE
    let result = [];
    let response = await fetch(apiUrl);
    if (response.ok) {
      result = await response.json();
    }
    return result;
};


const viajeCiudad = {

    Post : crearViajeCiudad,
    Get : conseguirViajeCiudades,
    GetById : conseguirViajeCiudad ,

}

export default viajeCiudad;