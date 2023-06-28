import transporte from "../../api/services/transporteService/Transporte.js"; 
import tipoTransporte from "../../api/services/transporteService/TipoTransporte.js"; 




const agregarPasaje = document.querySelector(".resultados-busqueda-pasajes");

  async function getPasaje() {
    const response = await fetch('../components/pasaje/pasaje.html');
    const html = await response.text();
    agregarPasaje.innerHTML += html;


    botonComprar();


  }



  async function  botonComprar() {
  const botonComprar = document.querySelector(".boton-comprar");
  let resultado= await transporte.Get();
  console.log(resultado);
  botonComprar.addEventListener('click', () => botonComprarAction());

}

const botonComprarAction= () =>{
  console.log(1);
 console.log(transporte.Get);

}




 

function obtenerDatos() {
  const botonComprar = document.querySelector(".boton-comprar");
  console.log(botonComprar);
  botonComprar.addEventListener('click', () => botonComprarAction());

}




  const pasajeComponent = {
    GetPasaje: getPasaje,
};

export default pasajeComponent;

