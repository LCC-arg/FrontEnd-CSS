import loginComponent from "../loginModal/loginModal.js";


const header = document.getElementById("header");

  async function getHeader() {
    const response = await fetch('../components/header/header.html');
    const html = await response.text();
    header.innerHTML = html;

    loginComponent.GetLoginModal();
  }

  const headerComponent = {
    GetHeader: getHeader,
};

export default headerComponent;

    