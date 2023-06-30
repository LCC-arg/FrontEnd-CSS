import footerComponent from "../components/footer/footer.js";
import headerComponent from "../components/header/header.js";
import pasajeComponent from "../components/pasaje/pasaje.js";


document.addEventListener('DOMContentLoaded', ()=> iniciarApp());

async function iniciarApp(){
    await footerComponent.GetFooter();
    await headerComponent.GetHeader();
   await pasajeComponent.GetPasaje();

}



