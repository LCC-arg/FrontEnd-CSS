import { loginUsuario } from "../Services/usuarioService.js"

export const iniciarSesion = async () => {
    document.getElementById("boton_iniciar_sesion").addEventListener("click", async evento => {
        let email = document.getElementById("search_email").value;
        let password = document.getElementById("search_contraseña").value;
        await loginUsuario(email, password);
    });
  }

  iniciarSesion();