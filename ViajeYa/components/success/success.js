import { agregarEstilo } from "../../utils/agregarEstilos.js";

async function getSuccessModal() {

    const bodyLogin = document.getElementsByClassName("body__login")[0];

    const response = await fetch('/components/success/success.html');
    const html = await response.text();

    bodyLogin.innerHTML = html;
    agregarEstilo("/components/success/success.css");


};

const successComponent = {
    getComponet : getSuccessModal
}

export default successComponent;