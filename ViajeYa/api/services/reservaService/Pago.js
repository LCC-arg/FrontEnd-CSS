import config from "../../../config/config.js";

const apiUrl =  `${config.microservicioReserva}/api/Pago`;

const createPago = async (pagoRequest) => {

    try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(pagoRequest)
        });
    
        if (!response.ok) {
          throw new Error('Error en la solicitud POST');
        }
    
        const responseData = await response.json();
        return responseData;
    
      } catch (error) {
        console.error('Error:', error);
      }

}


const getPagoById = async (idPago) => {

    let result = [];
    let response = await fetch(apiUrl + `/` + idPago);
    if (response.ok) {
        result = await response.json();
    }
    return result;
}

const getAllPago = async () => {

    let result = [];
    let response = await fetch(apiUrl);
    if (response.ok) {
        result = await response.json();
    }
    return result;
}



const pago = {
    Post : createPago,
    GetById : getPagoById,
    GetAll : getAllPago
}

export default pago;