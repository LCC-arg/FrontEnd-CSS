import footerComponent from "../components/footer/footer.js";
import headerComponent from "../components/header/header.js";
import pasajeComponent from "../components/pasaje/pasaje.js";
import {getViajes,loadResultadoViajesFromLocalStorage } from "../components/filtroViaje/filtroViajeStorage.js"


document.addEventListener('DOMContentLoaded', ()=> iniciarApp());

async function iniciarApp(){
    await footerComponent.GetFooter();
    await headerComponent.GetHeader();
    loadResultadoViajesFromLocalStorage();
    getViajes().forEach(async pasaje => {
        await pasajeComponent.GetPasaje(pasaje);
    })
}



