import { header } from "../Components/header.js";
import { footer } from "../Components/footer.js";
import { loginModal } from "../Components/loginModal.js";

document.addEventListener('DOMContentLoaded', ()=> iniciarApp());

function iniciarApp(){
ingresarByLogin();
slider();

}


function slider() {
  var counter = 1;
var _header = document.getElementsByClassName('header')[0];
_header.innerHTML=header();

var _footer = document.getElementsByClassName('footer')[0];
_footer.innerHTML=footer();

var _login = document.getElementsByClassName('login')[0];


var counter = 1;
var interval = 5000;
setInterval(function(){

  document.getElementById('radio1').addEventListener('click', function() {
    if (this.checked) {
      counter = 1;
    }
  });
  document.getElementById('radio2').addEventListener('click', function() {
    if (this.checked) {
      counter = 2;
    }
  });
  document.getElementById('radio3').addEventListener('click', function() {
    if (this.checked) {
      counter = 3;
    }
  });
  document.getElementById('radio4').addEventListener('click', function() {
    if (this.checked) {
      counter = 4;
    }
  });
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 4){
    counter = 1;
  }
}, interval);

}


export const ingresarByLogin = () => {
  let _bodyLogin = document.getElementsByClassName("body__login")[0];

  
  _header.addEventListener("click", e => {
    e.preventDefault();

        if(e.target.matches(".link-right a") || e.target.matches(".misViajes") || e.target.matches(".misDatos"))
        { 
          _login.innerHTML=loginModal(); 
          _login.classList.toggle('active');

        }
    })
}


