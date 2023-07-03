export default function creacionRecorrido(origen, escalas, destino) {
    if(escalas.length !== 0){
        const escalasText = escalas.map(escala => escala.nombre).join(" <span>→</span> ");
  
        return `
          <div class="tooltip" id="tooltipElemento">
            <p>${origen}(Origen) <span>→</span> ${escalasText} <span>→</span> ${destino}(Destino) </p>
          </div>
        `;
    }
    else{
        return `
          <div class="tooltip" id="tooltipElemento">
          <p>${origen} <span>→</span>  ${destino}</p>
          </div>
        `;
    }
 
  }