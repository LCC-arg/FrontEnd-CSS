import config from "../../../config/config.js";

const apiUrl =  `${config.microservicioUsuario}/api/Usuario`;

const logearUsuario = async (UsuarioLoginRequest) => {

    let enpointLogin = apiUrl+"/login"
    try {
        const response = await fetch(enpointLogin, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(UsuarioLoginRequest)
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
  console.log(responseData);


};

const Usuario = {
  loginUser : logearUsuario ,
  GetById : conseguirDatosUsuario
}


export default Usuario;