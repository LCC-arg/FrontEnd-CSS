import { agregarEstilo } from "../../utils/agregarEstilos.js";
import registerComponent from "../registerModal/registerModal.js";
import Usuario from "../../api/services/usuarioService/Usuario.js";
import config from "../../config/config.js";

const body = document.getElementsByTagName("body")[0];
let loginModal = null;
let btnRegistrarse = null;

async function getLoginModal() {

  const response = await fetch('/components/loginModal/loginModal.html');
  const html = await response.text();
 
  body.innerHTML += html;
  loginModal = document.getElementsByClassName("body__login")[0];


  agregarEstilo("/components/header/header.css");

  //logica de logueo
  loguearUsuario();

  //logica para hacerlo aparecer
  let btnIngresar = document.getElementsByClassName("link-right")[0];

  btnIngresar.addEventListener("click", function (e) {
    e.preventDefault();

    loginModal.style.display = "flex";
    btnRegistrarse = document.getElementById("boton_registrar")

    btnRegistrarse.addEventListener("click", (e) =>{

      e.preventDefault();
      registerComponent.getComponet();
    })


  });

  document.addEventListener("click", (e)=>{
    
    if(e.target == loginModal){
      loginModal.style.display = "none";
    }
  })

};


async function loguearUsuario() {

  let btnIniciarSesion = document.getElementById("boton_iniciar_sesion");

  btnIniciarSesion.addEventListener("click", async (e) => {

    e.preventDefault();
    let mail = document.getElementById("search_email").value;
    let password = document.getElementById("search_password").value;

    const UsuarioLogin = {
      email: mail,
      password: password
    };


    const resultado = await Usuario.loginUser(UsuarioLogin)

    if (resultado.token != null) {

      sessionStorage.setItem("sesion", JSON.stringify(resultado));
   
      const userString = sessionStorage.getItem("sesion");
      const userObject = JSON.parse(userString);

      //el token y el id del usuario se guardan en config
      config.token = userObject.token;
      config.idUsuario = userObject.usuarioId;
      console.log(userObject.usuarioId);
      console.log(config.token);

      //los datos enteros del usuario se guardan en el sessionStorage y en perfilUsuario de config
      let perfil = await Usuario.GetById(config.idUsuario);
      sessionStorage.setItem("userProfile", JSON.stringify(perfil));

      window.location.href = "/index.html"
    }


  });



};

  
  const loginComponent = {
    GetLoginModal: getLoginModal,
};

export default loginComponent;