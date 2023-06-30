import config from "../../../config/config.js";

const apiUrl =  `${config.microservicioDestino}/api/InfoCiudad`;


const crearInfoCiudad = async (infoCiudadRequest) =>{

    try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(infoCiudadRequest)
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


const conseguirInfoCiudad = async (idInfoCiudad) => {

    let result = [];
    let response = await fetch(apiUrl + `/` + idInfoCiudad);
    if (response.ok) {
        result = await response.json();
    }
    return result;
};

const conseguirInfoCiudades = async  () => {


    //los filtros deben ser opcionales SIEMPRE
    let result = [];
    let response = await fetch(apiUrl);
    if (response.ok) {
      result = await response.json();
    }
    return result;
};


const infoCiudad = {

    Post : crearInfoCiudad,
    Get : conseguirInfoCiudades,
    GetById : conseguirInfoCiudad ,

}

export default infoCiudad;