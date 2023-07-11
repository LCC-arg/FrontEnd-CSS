import config from "../../../config/config.js";

const apiUrl =  `${config.microservicioReserva}/api/Reserva`;
const token = config.claveToken;

const createReserva = async (reservaRequest) => {

    try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(reservaRequest)
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


const getReservaById = async (idReserva) => {

    let result = [];
    let response = await fetch(apiUrl + `/` + idReserva);
    if (response.ok) {
        result = await response.json();
    }
    return result;
}


const getReservaByFilters = async (fecha, clase, usuarioId, orden) => {
    var url = `${apiUrl}?`;
    if(fecha)
    {
        url += `fecha=${fecha}`;
    }
    if(clase)
    {
        if(fecha){url += `&`;}
        url += `clase=${clase}`;
    }
    if(usuarioId)
    {
        if(fecha || clase){url += `&`;}
        url += `usuarioId=${usuarioId}`;
    }
    if(orden)
    {
        if (fecha || clase || usuarioId) {url += `&`;}
        url += `orden=${orden}`;
    }
    let result = []
    let response = await fetch(url);
        if(response.ok){
            result = await response.json();
        }
    return result;    
}


const reserva = {
    Post : createReserva,
    GetById : getReservaById,
    GetFiltrado : getReservaByFilters
}

export default reserva;