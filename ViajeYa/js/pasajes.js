import footerComponent from "../components/footer/footer.js";
import headerComponent from "../components/header/header.js";
import pasajeComponent from "../components/pasaje/pasaje.js";
import filtroViajeComponent from "../components/filtroViaje/filtroViaje.js";
import {getViajes,loadResultadoViajesFromLocalStorage } from "../components/filtroViaje/filtroViajeStorage.js"


document.addEventListener('DOMContentLoaded', ()=> iniciarApp());

async function iniciarApp(){
    await footerComponent.GetFooter();
    await headerComponent.GetHeader();
    await filtroViajeComponent.GetFiltroViaje(); 
    loadResultadoViajesFromLocalStorage();
    const pasajes = getViajes();

    for (const pasaje of pasajes) {
      await new Promise(resolve => {
        setTimeout(async () => {
          await pasajeComponent.GetPasaje(pasaje);
          resolve();
        }, 10); // Reemplaza 'tiempoEspera' por el tiempo en milisegundos que deseas esperar antes de imprimir cada pasaje
      });
    }
}



