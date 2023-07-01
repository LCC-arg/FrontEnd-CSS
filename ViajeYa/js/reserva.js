import footerComponent from "../components/footer/footer.js";
import headerComponent from "../components/header/header.js";
import filtroViajeComponent from "../components/filtroViaje/filtroViaje.js";
import slider from "./Container/slider.js";

document.addEventListener('DOMContentLoaded', ()=> iniciarApp());

async function iniciarApp(){
    await footerComponent.GetFooter();
    await headerComponent.GetHeader();
}