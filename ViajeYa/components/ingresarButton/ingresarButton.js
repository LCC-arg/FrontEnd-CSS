import config from "../../config/config.js"
import cerrarSesion from "../../utils/cerrarSesion.js";

let usuario = sessionStorage.getItem("userProfile");
function cambiarButton(elemento) {
      
     let datosUsuario = JSON.parse(usuario);

  if (usuario != null) {
    agregarNombre(elemento, datosUsuario.nombre);

    const divOpciones = document.getElementsByClassName("links-center")[0];

    const enlaceDatos = document.createElement("a");
    enlaceDatos.textContent = "Mis Datos";
    enlaceDatos.href = "/pages/mis-datos.html";

    divOpciones.appendChild(enlaceDatos);



    let btnCerraSesion = document.getElementById("perfil-usuario");

    btnCerraSesion.addEventListener("click", (e) => {
      e.preventDefault();
      cerrarSesion();
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
   