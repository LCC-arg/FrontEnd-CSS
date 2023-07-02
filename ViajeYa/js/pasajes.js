import footerComponent from "../components/footer/footer.js";
import headerComponent from "../components/header/header.js";
import pasajeComponent from "../components/pasaje/pasaje.js";
import filtroViajeComponent from "../components/filtroViaje/filtroViaje.js";
import {getViajes,loadResultadoViajesFromLocalStorage } from "../components/filtroViaje/filtroViajeStorage.js"
import { getCantidadPasajeros, getDataBoleto,saveViajeSeleccionadoToLocalStorage, loadViajeSeleccionadoFromLocalStorage, resetViajeSeleccionado } from "../components/pasaje/viajeSeleccionadoStorage.js"


document.addEventListener('DOMContentLoaded', ()=> iniciarApp());

async function iniciarApp(){
    await footerComponent.GetFooter();
    await headerComponent.GetHeader();
    await filtroViajeComponent.GetFiltroViaje(); 
    loadResultadoViajesFromLocalStorage();
    getViajes().forEach(async pasaje => {
        await pasajeComponent.GetPasaje(pasaje);
    })
    loadResultadoViajesFromLocalStorage();
  
    console.log(  getCantidadPasajeros());

}



