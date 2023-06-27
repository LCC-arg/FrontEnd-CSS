import { pasajeroForm } from "../../components/pasajero/pasajero.js";

export const addPasajeroForms = async (num) => {

    var _pasajeroForm = document.getElementsByClassName('container-pasajero-form')[0];

    for (var i = 1; i <= num; i++) {
        _pasajeroForm.innerHTML += pasajeroForm(i);
    }
}

export function toggleAdditionalContent(id) {
    var containerData = document.querySelector(`#container-data-pasajero-form${id}`);
    containerData.classList.toggle('show-content');
}


export const pasajeroFormsExpand = () => {    //Linea que arregla lo de reserva
    document.addEventListener("click", e => {
        if (e.target.matches(".pasajero-tittle")) {
            toggleAdditionalContent(e.target.getAttribute("number"));
        }
    });
};


addPasajeroForms(3);

pasajeroFormsExpand();