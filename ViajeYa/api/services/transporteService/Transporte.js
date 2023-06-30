import config from "../../../config/config.js";

const apiUrl =  `${config.microservicioTransporte}/api/Transporte`;


const crearTransporte = async (transporteRequest) =>{

    try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(transporteRequest)
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


const conseguirTransporte = async (idTransporte) => {

    let result = [];
    let response = await fetch(apiUrl + `/` + idTransporte);
    if (response.ok) {
        result = await response.json();
    }
    return result;
};

const conseguirTransportes = async  () => {


    //los filtros deben ser opcionales SIEMPRE
    let result = [];
    let response = await fetch(apiUrl);
    if (response.ok) {
      result = await response.json();
    }
    return result;
};


const transporte = {

    Post : crearTransporte,
    Get : conseguirTransportes,
    GetById : conseguirTransporte ,

}

export default transporte;