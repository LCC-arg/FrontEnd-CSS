import { header } from "../Components/header.js";
import { footer } from "../Components/footer.js";
import { pasajeroForm } from "../Components/pasajeroForm.js";

let cont = 1;

var _header = document.getElementsByClassName('header')[0];
_header.innerHTML=header();

var _footer = document.getElementsByClassName('footer')[0];
_footer.innerHTML=footer();


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
    e.preventDefault();

        if(e.target.matches(".pasajero-tittle"))
        { 
            toggleAdditionalContent(e.target.getAttribute("number"));
        }
    })
}

addPasajeroForms(3);

pasajeroFormsExpand();