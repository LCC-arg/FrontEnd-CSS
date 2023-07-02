import config from "../../../config/config.js";

const apiUrl =  `${config.microservicioDestino}/api/InfoCiudad`;

const conseguirDestinos = async  () => {

    //devuelve info de ciudades
    let result = [];
    let response = await fetch(apiUrl);
    if (response.ok) {
      result = await response.json();
    }
    return result;
};


const InfoCiudad = {
    Get : conseguirDestinos
};

export default InfoCiudad;