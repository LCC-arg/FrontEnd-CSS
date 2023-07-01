import config from "../../../config/config.js";

const apiUrl =  `${config.microservicioDestino}/api/Ciudad`;

const getCiudad = async () => {
	let result = [];
	let response = await fetch(apiUrl);
	if (response.ok) {
		result = await response.json();
	}
	return result;
};

const getCiudadByNombre = async (nombre) => {
	nombre = nombre.toString();
	let result = [];
	let response = await fetch(apiUrl + `?nombre=${nombre}`);
	if (response.ok) {
		result = await response.json();
	}
	return result;
};

const conseguirCiudad = async (idCiudad) => {

    let result = [];
    let response = await fetch(apiUrl + "/" + idCiudad);
    if (response.ok) {
        result = await response.json();
    }
    return result;
}

const Ciudad = {
  Get : getCiudad,
  GetByNombre : getCiudadByNombre,
  GetById :conseguirCiudad
}

export default Ciudad;