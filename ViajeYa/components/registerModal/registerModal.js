import Usuario from "../../api/services/usuarioService/Usuario.js";
import { agregarEstilo } from "../../utils/agregarEstilos.js";
import failureModal from "../failure/failure.js";
import successComponent from "../success/success.js";


async function getRegisterModal() {

    const bodyLogin = document.getElementsByClassName("body__login")[0];

    const response = await fetch('/components/registerModal/registerModal.html');
    const html = await response.text();

    bodyLogin.innerHTML = html;
    agregarEstilo("/components/registerModal/registerModal.css");


    const btnIniciarSesion = document.getElementById("boton_registrar");

    enviarRegistro();

};


 function enviarRegistro() {

    const btnRegistrarCuenta = document.getElementById("botones__register");

    btnRegistrarCuenta.addEventListener("click", async (e) => {

        e.preventDefault();

        let nombre = document.getElementById("register_nombre").value;
        let apellido = document.getElementById("register_apellido").value;
        let dni = document.getElementById("register_dni").value;
        let nacionalidad = document.getElementById("register_nacionalidad").value;
        let fecha = document.getElementById("register_fecha").value;
        let telefono = document.getElementById("register_telefono").value;
        let domicilio = document.getElementById("register_domicilio").value;
        let mail = document.getElementById("register_mail").value;
        let password = document.getElementById("register_password").value;

        const UsuarioRequest = {
            nombre : nombre,
            apellido : apellido,
            dni : dni,
            fechaNac : fecha,
            email : mail,
            nacionalidad : nacionalidad ,
            telefono : telefono,
            domicilio : domicilio,
            password : password
        };

        const respuesta =  await Usuario.Registrar(UsuarioRequest);
        
        if(respuesta.metadata.status == 200){
            successComponent.getComponet();
        }

        if(respuesta.metadata.status == 409){
            failureModal.getComponet();
        }

        if(respuesta.metadata.status != 200){
            failureModal.getComponet();
        }
 
    })
}


const registerComponent = {
    getComponet : getRegisterModal
}

export default registerComponent;