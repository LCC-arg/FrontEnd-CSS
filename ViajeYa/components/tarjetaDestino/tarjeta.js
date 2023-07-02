import tarjetaDestinoComponent from "./tarjetaComponent.js";
import InfoCiudad from "../../api/services/destinosService/InfoCiudad.js";

let destinosRecuperados = await InfoCiudad.Get();

let lista = destinosRecuperados.slice(0,8) //ineficiente mejorar


let fila = document.getElementsByClassName("grid-destinos")[0];


lista.forEach(destino => 
    {
    
        fila.innerHTML += tarjetaDestinoComponent(destino);
    
    })