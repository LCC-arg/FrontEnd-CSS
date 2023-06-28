import config from "../../../config/config.js";

const apiUrl =  `${config.microservicioReserva}/api/Factura`;

const getFacturaById = async (idFactura) => {

    let result = [];
    let response = await fetch(apiUrl + `/` + idFactura);
    if (response.ok) {
        result = await response.json();
    }
    return result;
}

const getAllFactura = async () => {

    let result = [];
    let response = await fetch(apiUrl);
    if (response.ok) {
        result = await response.json();
    }
    return result;
}

const factura = {
    GetById : getFacturaById,
    GetAll : getAllFactura
}

export default factura;