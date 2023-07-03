import { agregarEstilo } from "../../utils/agregarEstilos.js";

function mostrarTooltip() {
    var tooltip = document.getElementById('tooltipElemento');
    tooltip.style.display = 'block';
    console.log("holaa")
  }
  
  function ocultarTooltip() {
    var tooltip = document.getElementById('tooltipElemento');
    tooltip.style.display = 'none';
  }

  agregarEstilo("/components/globoDialogo/globo.css");

export default function globoComponente(data){

    return    `<div class="elemento_recorrido">
    <div class="data_recorrido" id="tooltipElemento">
      Buenos Aires (Origen) → NYC → Madrid → Paris
    </div>
  </div>`
}