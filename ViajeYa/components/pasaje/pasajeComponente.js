
export default  function creacionPasaje(datos){
    const pasajeComponente = document.createElement("div");
    pasajeComponente.innerHTML = `
      <link rel="stylesheet" href="../components/pasaje/pasaje.css">
      <div class="resultado-pasaje" data-id-viaje="${datos.idViaje}">
          <img src="${datos.imagen}" alt="logo Empresa">
          <div class="fecha-salida">
              <div class="dia-salida">
                  <h4>Sale:</h4>
                  <p>${datos.fechaSalida}</p>
              </div>
              <h4 class="horario">${datos.horaSalida}</h4>
              <p>${datos.ciudadOrigen}</p>
          </div>
          <div class="fecha-llegada">
              <div class="dia-llegada">
                  <h4>Llega:</h4>
                  <p>${datos.fechaLlegada}</p>
              </div>
              <h4 class="horario">${datos.horaLlegada}</h4>
              <p>${datos.ciudadDestino}</p>
          </div>
          <p class="precio">ARS $ <span class="precio-negrita">${datos.precio}</span></p>
         <div class="tipo-vehiculo border-superior">
          <h4 class="centrar-texto ">${datos.descripcion}</h4>
         </div>
          <div class="recorrido border-superior">
              <h4>Recorrido</h4>
          </div>
          <div class="libre border-superior">
              <h4>Libres</h4>
              <h4 class="cantidad">${datos.asientosDisponibles}</h4>
          </div>
          <button class="button-reset boton-comprar border-superior">Comprar</button>
      </div>
    `;
    
    const botonComprar = pasajeComponente.querySelector(".boton-comprar");
    botonComprar.addEventListener('click', () => botonComprarAction(datos.idViaje));
    
    function botonComprarAction(idViaje) {
     console.log(1);
    }
    
    return pasajeComponente;
}

