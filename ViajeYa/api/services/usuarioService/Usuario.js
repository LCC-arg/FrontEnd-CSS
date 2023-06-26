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


