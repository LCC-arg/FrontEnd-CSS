import userDataComponent from "../components/userData/userDataComponent.js";
import Usuario from "../api/services/usuarioService/Usuario.js";
import generarTarjeta from "../components/tarjetaComponenete/tarjetaComponenete.js";

const userData = await JSON.parse(sessionStorage.getItem("userProfile"));
const userTarjetas = await Usuario.obtenerTarjetas(userData.usuarioId);

let componeneteUser = userDataComponent(userData);

console.log(userTarjetas)

const divData = document.getElementById("container-all-data");

divData.innerHTML += componeneteUser;

/*agregar las tarjetas */

const divTarjetas = document.getElementById("tarjeta-container");

const listaTarjetas = await Array.from(userTarjetas.tarjetasUsuario);

if(listaTarjetas.length == 0){
    

const containerSinTarjeta = document.createElement("h2");
containerSinTarjeta.id = "no-tarjeta";
containerSinTarjeta.textContent = "Aun no tienes tarjetas";
divTarjetas.appendChild(containerSinTarjeta);

let containerData = document.getElementsByClassName("container-datos")[0];
containerData.style.marginBottom = "200px"

}else{

    listaTarjetas.forEach(tarjeta => {
    
        divTarjetas.appendChild(generarTarjeta(tarjeta))
    });

}



