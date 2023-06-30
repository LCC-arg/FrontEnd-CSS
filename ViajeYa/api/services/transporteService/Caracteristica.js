import config from "../../../config/config.js";

const apiUrl =  `${config.microservicioTransporte}/api/Caracteristica`;


const crearCaracteristica = async (CaracteristicaRequest) =>{

    try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(CaracteristicaRequest)
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


const conseguirCaracteristica = async (idCaracteristica) => {

    let result = [];
    let response = await fetch(apiUrl + `/` + idCaracteristica);
    if (response.ok) {
        result = await response.json();
    }
    return result;
};

const conseguirCaracteristicas = async  () => {


    //los filtros deben ser opcionales SIEMPRE
    let result = [];
    let response = await fetch(apiUrl);
    if (response.ok) {
      result = await response.json();
    }
    return result;
};


const caracteristica = {

    Post : crearCaracteristica,
    Get : conseguirCaracteristicas,
    GetById : conseguirCaracteristica ,

}

export default caracteristica;