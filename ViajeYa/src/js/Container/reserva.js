import { header } from "../Components/header.js";
import { footer } from "../Components/footer.js";

var _header = document.getElementsByClassName('header')[0];
_header.innerHTML=header();

var _header = document.getElementsByClassName('footer')[0];
_header.innerHTML=footer();