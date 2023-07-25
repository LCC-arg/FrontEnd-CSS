import config from "../../../config/config.js";

const apiUrl =  `${config.microservicioUsuario}/api/Usuario`;

const logearUsuario = async (UsuarioLoginRequest) => {

  let enpointLogin = apiUrl + "/login"

  const response = await fetch(enpointLogin, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(UsuarioLoginRequest)
  });

  const responseData = await response.json();

  const metadata = {
    status: response.status,
    headers: response.headers
  };

  return {
    data: responseData,
    metadata: metadata
  };
};


const conseguirDatosUsuario = async (idUsuario) => {

  let token = config.token;
  let endpoint = apiUrl+"/"+idUsuario;

  const response = await fetch(endpoint, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });


  const responseData = await response.json();
  // Procesar la respuesta aquí
  return responseData;
};


const registrarUsuario = async (UsuarioRequest) => {

  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(UsuarioRequest)
  });

  const responseData = await response.json();

  const metadata = {
    status: response.status,
    headers: response.headers
  };

  return {
    data: responseData,
    metadata: metadata
  };

};

const obtenerTarjetas = async (usuarioId) =>{

  let token = config.token;
  let endpoint = `${config.microservicioUsuario}/api/Tarjeta/${usuarioId}`;

  const response = await fetch(endpoint, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });


  const responseData = await response.json();
  // Procesar la respuesta aquí
  return responseData;

}


const Usuario = {
  loginUser : logearUsuario ,
  GetById : conseguirDatosUsuario,
  Registrar : registrarUsuario,
  obtenerTarjetas : obtenerTarjetas
}


export default Usuario;