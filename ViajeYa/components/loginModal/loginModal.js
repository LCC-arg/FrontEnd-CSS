const header = document.getElementsByTagName("body");

  async function getLoginModal() {
    const response = await fetch('/components/loginModal/loginModal.html');
    const html = await response.text();
    header.innerHTML = html;
  }

  //logica para hacerlo aparecer
  let btnIngresar = document.getElementById("")
  const loginComponent = {
    GetLoginModal: getLoginModal,
};

export default loginComponent;