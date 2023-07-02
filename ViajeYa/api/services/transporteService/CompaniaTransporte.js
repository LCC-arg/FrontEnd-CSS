import config from "../../../config/config.js";

const apiUrl =  `${config.microservicioTransporte}/api/CompaniaTransporte`;


const crearCompaniaTransporte = async (CompaniaTransporteRequest) =>{

    try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(CompaniaTransporteRequest)
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


const conseguirCompaniaTransporte = async (idCompaniaTransporte) => {

    let result = [];
    let response = await fetch(apiUrl + `/` + idCompaniaTransporte);
    if (response.ok) {
        result = await response.json();
    }
    return result;
};

const conseguirCompaniaTransportes = async  () => {


    //los filtros deben ser opcionales SIEMPRE
    let result = [];
    let response = await fetch(apiUrl);
    if (response.ok) {
      result = await response.json();
    }
    return result;
};


const companiaTransporte = {

    Post : crearCompaniaTransporte,
    Get : conseguirCompaniaTransportes,
    GetById : conseguirCompaniaTransporte ,

}

export default companiaTransporte;