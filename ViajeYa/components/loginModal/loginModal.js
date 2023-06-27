import { agregarEstilo } from "../../utils/agregarEstilos.js";

const body = document.getElementsByTagName("body")[0];
let loginModal = null;

async function getLoginModal() {

  const response = await fetch('/components/loginModal/loginModal.html');
  const html = await response.text();
 
  body.innerHTML += html;
  loginModal = document.getElementsByClassName("body__login")[0];


  agregarEstilo("/components/header/header.css");


  //logica para hacerlo aparecer
  let btnIngresar = document.getElementsByClassName("link-right")[0];

  btnIngresar.addEventListener("click", function (e) {
    e.preventDefault();

    loginModal.style.display = "flex";

  });

  document.addEventListener("click", (e)=>{
    
    if(e.target == loginModal){
      loginModal.style.display = "none";
    }
  })

};




  
  const loginComponent = {
    GetLoginModal: getLoginModal,
};

export default loginComponent;