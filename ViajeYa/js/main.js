import footerComponent from "../components/footer/footer.js";
import headerComponent from "../components/header/header.js";



document.addEventListener('DOMContentLoaded', ()=> iniciarApp());

function iniciarApp(){
    footerComponent.GetFooter();
    headerComponent.GetHeader();
}