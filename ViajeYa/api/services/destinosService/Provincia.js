import config from "../../../config/config.js";

const apiUrl =  `${config.microservicioDestino}/api/Provincia`;


const crearProvincia = async (provinciaRequest) =>{

    try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(provinciaRequest)
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


const conseguirProvincia = async (idProvincia) => {

    let result = [];
    let response = await fetch(apiUrl + `/` + idProvincia);
    if (response.ok) {
        result = await response.json();
    }
    return result;
};

const conseguirProvincias = async  () => {


    //los filtros deben ser opcionales SIEMPRE
    let result = [];
    let response = await fetch(apiUrl);
    if (response.ok) {
      result = await response.json();
    }
    return result;
};


const provincia = {

    Post : crearProvincia,
    Get : conseguirProvincias,
    GetById : conseguirProvincia ,

}

export default provincia;