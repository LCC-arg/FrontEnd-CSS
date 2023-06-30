import config from "../../../config/config.js";

const apiUrl =  `${config.microservicioDestino}/api/Pais`;

const conseguirPaises = async  () => {

    //devuelve paises
    let result = [];
    let response = await fetch(apiUrl);
    if (response.ok) {
      result = await response.json();
    }
    return result;
};


const Destino = {
    Get : conseguirPaises
};

export default Destino;