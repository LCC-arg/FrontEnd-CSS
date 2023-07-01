import { agregarEstilo } from "../../utils/agregarEstilos.js";

async function getFailureModal() {

    const bodyLogin = document.getElementsByClassName("body__login")[0];

    const response = await fetch('/ViajeYa/components/failure/failure.html');
    const html = await response.text();

    bodyLogin.innerHTML = html;
    agregarEstilo("/ViajeYa/components/failure/failure.css");


};

const failureModal = {
    getComponet : getFailureModal
}

export default failureModal;