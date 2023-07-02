import footerComponent from "../components/footer/footer.js";
import headerComponent from "../components/header/header.js";
import resumemViajeComponent from "../components/resumenViaje/resumenViaje.js";


document.addEventListener('DOMContentLoaded', ()=> iniciarApp());

async function iniciarApp(){
    await footerComponent.GetFooter();
    await headerComponent.GetHeader();
    await resumemViajeComponent.GetResumenViaje();
}