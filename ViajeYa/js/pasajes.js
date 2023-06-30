import footerComponent from "../components/footer/footer.js";
import headerComponent from "../components/header/header.js";
import pasajeComponent from "../components/pasaje/pasaje.js";


document.addEventListener('DOMContentLoaded', ()=> iniciarApp());

function iniciarApp(){
    footerComponent.GetFooter();
    headerComponent.GetHeader();
    pasajeComponent.GetPasaje();
}



