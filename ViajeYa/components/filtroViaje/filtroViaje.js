/* import viaje from "../../api/services/viajeService/Viaje"; */

const viajeFiltro = document.getElementById("hero-text");
const response = await fetch('/components/filtroViaje/filtroViaje.html');
const html = await response.text();
viajeFiltro.innerHTML = html;

/* let botones = document.querySelectorAll("button");

botones.forEach((boton, index) => {
    boton.addEventListener("click", async function () {
        let viajes;
        if (index === 0) {
            viajes = await viaje.Get();
        }
        if (index === 1) {
            mercaderias = await mercaderiaApi.GetMercaderiaByOrden("desc");
        }
        if (index === 2) {
            mercaderias = await mercaderiaApi.GetMercaderia();
        }
        if (index > 2) {
            mercaderias = await mercaderiaApi.GetMercaderiaByTipo(index - 2);
        }
        imprimirMercaderias(mercaderias);
    });
}); */