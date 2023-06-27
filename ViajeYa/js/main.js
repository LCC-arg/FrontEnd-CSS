import footerComponent from "../components/footer/footer.js";
import headerComponent from "../components/header/header.js";
import loginComponent from "../components/loginModal/loginModal.js";

document.addEventListener('DOMContentLoaded', ()=> iniciarApp());

function iniciarApp(){
    footerComponent.GetFooter();
    headerComponent.GetHeader();
    loginComponent.GetLoginModal();
}