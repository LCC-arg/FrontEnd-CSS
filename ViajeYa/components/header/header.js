import cambiarButton from "../ingresarButton/ingresarButton.js";
import loginComponent from "../loginModal/loginModal.js";


const header = document.getElementById("header");

  async function getHeader() {
    const response = await fetch('../components/header/header.html');
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

    