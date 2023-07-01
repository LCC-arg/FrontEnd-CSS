import cambiarButton from "../ingresarButton/ingresarButton.js";
import loginComponent from "../loginModal/loginModal.js";


const header = document.getElementById("header");
const ruta = window.location.origin+"/ViajeYa/components"+"/"+"header"+"/"+"header.html";

  async function getHeader() {
    const response = await fetch(ruta);
    const html = await response.text();
    header.innerHTML = html;

    await loginComponent.GetLoginModal();

    let btnIngresar = document.getElementById("perfil-usuario");
    cambiarButton(btnIngresar);
  }

  const headerComponent = {
    GetHeader: getHeader,
};

export default headerComponent;

    