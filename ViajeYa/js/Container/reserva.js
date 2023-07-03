import { pasajeroForm } from "../../components/pasajero/pasajero.js";
import { getCantidadPasajeros, getDataBoleto,saveViajeSeleccionadoToLocalStorage, loadViajeSeleccionadoFromLocalStorage, resetViajeSeleccionado } from "../../components/pasaje/viajeSeleccionadoStorage.js"


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


export const pasajeroFormsExpand = () => {
    document.addEventListener("click", e => {
        if (e.target.matches(".pasajero-tittle") || e.target.matches(".arrow")) {
            toggleAdditionalContent(e.target.getAttribute("number"));
        }
    });
};

loadViajeSeleccionadoFromLocalStorage();

addPasajeroForms(getCantidadPasajeros());

pasajeroFormsExpand();