import footerComponent from "../components/footer/footer.js";
import headerComponent from "../components/header/header.js";
import modalMetodoPago from "./Container/pay.js";
import resumenViajePagoComponent from "../components/resumenViajePago/resumenViajePago.js";

document.addEventListener('DOMContentLoaded', ()=> iniciarApp());

async function iniciarApp(){
    await footerComponent.GetFooter();
    await headerComponent.GetHeader();
    await modalMetodoPago();
    await resumenViajePagoComponent.GetResumenViaje();

}