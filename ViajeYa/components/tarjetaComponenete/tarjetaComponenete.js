import formatoFecha from "../../utils/formatoFecha.js";

export default function generarTarjeta(dataTarjeta) {
    const divTarjeta = document.createElement("div");
    divTarjeta.classList.add("tarjeta");
  
    const img = document.createElement("img");
  
    if (dataTarjeta.entidadTarjeta.toUpperCase() === "VISA") {
      img.src = "/ViajeYa/assets/img/visa.png";
      img.alt = "visa";
    } else if (dataTarjeta.entidadTarjeta.toUpperCase() === "MASTERCARD") {
      img.src = "/ViajeYa/assets/img/mastercard.png";
      img.alt = "master";
    } else {
      img.src = "/ViajeYa/assets/img/genericCard.png"; // tarjeta generica
      img.alt = "generica";
    }
  
    const numeroTarjeta = document.createElement("p");
    numeroTarjeta.style.fontFamily = "monospace";
    const numeroTarjetaVisible = dataTarjeta.numeroTarjeta.slice(-4);
    const espaciosBlanco = dataTarjeta.numeroTarjeta.slice(0, -4).replace(/\S/g, "*"); //oculta los numero de la tarjeta
    numeroTarjeta.textContent = espaciosBlanco + numeroTarjetaVisible;

    
  
    const tipoTarjeta = document.createElement("p");
    tipoTarjeta.textContent = "TIPO: " + dataTarjeta.tipoTarjeta.toUpperCase();
  
    const vencimiento = document.createElement("p");
    vencimiento.textContent = "VENCIMIENTO: " +  formatoFecha(new Date(dataTarjeta.vencimiento));
  
    // agregar los otros elementos al div
    divTarjeta.appendChild(img);
    divTarjeta.appendChild(numeroTarjeta);
    divTarjeta.appendChild(tipoTarjeta);
    divTarjeta.appendChild(vencimiento);
  
    return divTarjeta;
  }
  