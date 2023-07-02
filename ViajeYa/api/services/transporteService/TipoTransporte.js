import config from "../../../config/config.js";

const apiUrl =  `${config.microservicioTransporte}/api/TipoTransporte`;


const crearTipoTransporte = async (TipotransporteRequest) =>{

    try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(TipotransporteRequest)
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


const conseguirTipoTransporte = async (idTipoTransporte) => {

    let result = [];
    let response = await fetch(apiUrl + `/` + idTipoTransporte);
    if (response.ok) {
        result = await response.json();
    }
    return result;
};

const conseguirTipoTransportes = async  () => {


    //los filtros deben ser opcionales SIEMPRE
    let result = [];
    let response = await fetch(apiUrl);
    if (response.ok) {
      result = await response.json();
    }
    return result;
};


const tipoTransporte = {

    Post : crearTipoTransporte,
    Get : conseguirTipoTransportes,
    GetById : conseguirTipoTransporte ,

}

export default tipoTransporte;