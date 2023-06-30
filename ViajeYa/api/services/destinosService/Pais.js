import config from "../../../config/config.js";

const apiUrl =  `${config.microservicioDestino}/api/Pais`;


const crearPais = async (paisRequest) =>{

    try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(paisRequest)
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


const conseguirPais = async (idPais) => {

    let result = [];
    let response = await fetch(apiUrl + `/` + idPais);
    if (response.ok) {
        result = await response.json();
    }
    return result;
};

const conseguirPaises = async  () => {


    //los filtros deben ser opcionales SIEMPRE
    let result = [];
    let response = await fetch(apiUrl);
    if (response.ok) {
      result = await response.json();
    }
    return result;
};


const pais = {

    Post : crearPais,
    Get : conseguirPaises,
    GetById : conseguirPais ,

}

export default pais;