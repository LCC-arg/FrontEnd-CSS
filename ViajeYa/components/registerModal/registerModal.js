import { agregarEstilo } from "../../utils/agregarEstilos.js";


async function getRegisterModal() {

    const bodyLogin = document.getElementsByClassName("body__login")[0];

    const response = await fetch('/components/registerModal/registerModal.html');
    const html = await response.text();

    bodyLogin.innerHTML = html;
    agregarEstilo("/components/registerModal/registerModal.css");

};


const registerComponent = {
    getComponet : getRegisterModal
}

export default registerComponent;