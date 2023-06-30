import config from "../../../config/config.js";

const apiUrl =  `${config.microservicioDestino}/api/Ciudad`;


const Ciudad = {
  loginUser : logearUsuario ,
  GetById : conseguirDatosUsuario,
  Registrar : registrarUsuario
}


export default Ciudad;