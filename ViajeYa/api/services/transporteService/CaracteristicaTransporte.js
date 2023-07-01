import config from "../../../config/config.js";

const apiUrl =  `${config.microservicioTransporte}/api/CaracteristicaTransporte`;


const crearCaracteristicaTransporte = async (CaracteristicaTransporteRequest) =>{

    try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(CaracteristicaTransporteRequest)
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


const conseguirCaracteristicaTransporte = async (idCaracteristicaTransporte) => {

    let result = [];
    let response = await fetch(apiUrl + `/` + idCaracteristicaTransporte);
    if (response.ok) {
        result = await response.json();
    }
    return result;
};

const conseguirCaracteristicaTransportes = async  (idTransporte,idCaracteristica) => {


    //los filtros deben ser opcionales SIEMPRE

    let result = [];
    
    let response = await fetch(`${apiUrl}?idTransporte=${idTransporte}&idCaracteristica=${idCaracteristica}`);
    if (response.ok) {
      result = await response.json();
    }
    return result;
};


const caracteristicaTransporte = {

    Post : crearCaracteristicaTransporte,
    Get : conseguirCaracteristicaTransportes,
    GetById : conseguirCaracteristicaTransporte ,

}

export default caracteristicaTransporte;