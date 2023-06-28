import config from "../../config/config.js"

let usuario = sessionStorage.getItem("userProfile");
function cambiarButton(elemento) {
      
     let datosUsuario = JSON.parse(usuario);

     if(usuario != null){
          agregarNombre(elemento,datosUsuario.nombre);

          let btnCerraSesion = document.getElementsByClassName("link-right")[0];

          btnCerraSesion.addEventListener("click",()=>{
                    sessionStorage.removeItem("userProfile");
                    sessionStorage.removeItem("sesion");
                    config.token = null;
                    config.idUsuario = null;
                    alert("cerrando sesion imbecil")
          });
     }
   }
   

   function agregarNombre(elemento, user) {
     // Crea un nuevo elemento <div> con la clase "link-right" y el id "perfil-usuario"
     const nuevoDiv = document.createElement("div");
     nuevoDiv.className = "link-right";
     nuevoDiv.id = "perfil-usuario";
   
     // Crea un nuevo elemento <a> con el texto proporcionado
     const nuevoEnlace = document.createElement("a");
     nuevoEnlace.href = "index.html";
     nuevoEnlace.textContent = user;
   
     // Agrega el elemento <a> al elemento <div>
     nuevoDiv.appendChild(nuevoEnlace);
   
     // Reemplaza el elemento existente con el nuevo elemento
     elemento.parentNode.replaceChild(nuevoDiv, elemento);
   }
   



   export default cambiarButton;
   