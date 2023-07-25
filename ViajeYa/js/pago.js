import footerComponent from "../components/footer/footer.js";
import headerComponent from "../components/header/header.js";
import Factura from "../api/services/reservaService/Factura.js";
import { setResultadoReservas, getResultadoReservas, setReservas, getReservas, saveRequestReservaToLocalStorage, resetResultadoReservas, loadResultadoReservasFromLocalStorage } from "../components/resumenViajePago/reservaStorage.js"

document.addEventListener('DOMContentLoaded', () => iniciarApp());

async function iniciarApp() {
    await footerComponent.GetFooter();
    await headerComponent.GetHeader();
    await factura();
}

async function factura() {
    const numeroFacturaElement = document.getElementById("numero-factura");
    const montoElement = document.getElementById("monto");

    loadResultadoReservasFromLocalStorage();

    let monto = 0;
    let facturaIds = []

    try {
        const response = await Factura.GetAll();
        if (response.length >= getReservas().length) {
            const ultimosElementos = response.slice(-getReservas().length);
            ultimosElementos.forEach(element => {
                monto += element.monto 
                facturaIds.push(element.id)
            });
        } else {
            console.log("La lista no tiene suficientes elementos.");
        }

        // Modificar los valores
        const nuevoNumeroFactura = facturaIds;
        const nuevoMonto = monto;

        numeroFacturaElement.textContent = nuevoNumeroFactura;
        montoElement.textContent = nuevoMonto;
    } catch (error) {
        console.error("Error al obtener las facturas:", error);
    }
}