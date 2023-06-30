import config from "../../../config/config.js";

const apiUrl =  `${config.microservicioDestino}/api/Ciudad`;


const crearCiudad = async (ciudadRequest) =>{

    try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(ciudadRequest)
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


const conseguirCiudad = async (idCiudad) => {

    let result = [];
    let response = await fetch(apiUrl + `/` + idCiudad);
    if (response.ok) {
        result = await response.json();
    }
    return result;
};

const conseguirCiudades = async  () => {


    //los filtros deben ser opcionales SIEMPRE
    let result = [];
    let response = await fetch(apiUrl);
    if (response.ok) {
      result = await response.json();
    }
    return result;
};


const ciudad = {

    Post : crearCiudad,
    Get : conseguirCiudades,
    GetById : conseguirCiudad ,

}

export default ciudad;