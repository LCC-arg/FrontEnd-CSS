
export default function creacionPasaje(viaje){
  return ` 
  <link rel="stylesheet" href="../components/pasaje/pasaje.css">


  <div class="resultado-pasaje">
      <img src="${viaje.transporte.imagen}" alt="logo Empresa">
      <div class="fecha-salida">
          <div class="dia-salida">
              <h4>Sale:</h4>
              <p>${viaje.fechaSalida}</p>
          </div>
          <h4 class="horario">${viaje.horarioSalida}</h4>
          <p>Terminal Dellepiane</p>
      </div>
      <div class="fecha-llegada">
          <div class="dia-llegada">
              <h4>Llega:</h4>
              <p>${viaje.fechaLlegada}</p>
          </div>
          <h4 class="horario">${viaje.horarioLlegada}</h4>
          <p>Terminal Pinamar</p>
      </div>
      <p class="precio">ARS $ <span class="precio-negrita">8600</span></p>
     <div class="tipo-vehiculo border-superior">
      <h4 class="centrar-texto ">Bus</h4>
     </div>
      <div class="recorrido border-superior">
          <h4>Recorrido</h4>
      </div>
      <div class="libre border-superior">
          <h4>Libres</h4>
          <h4 class="cantidad">12</h4>
      </div>
      <button class="button-reset boton-comprar border-superior">Comprar</button>
  
  </div>
  
  `;
}


