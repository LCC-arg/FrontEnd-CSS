const agregarPasaje = document.querySelector(".resultados-busqueda-pasajes");
console.log(agregarPasaje);

  async function getPasaje() {
    const response = await fetch('../components/pasaje/pasaje.html');
    const html = await response.text();
    agregarPasaje.innerHTML += html;


    botonComprar();


  }



function botonComprar() {
  const botonComprar = document.querySelector(".boton-comprar");
  console.log(botonComprar);
  botonComprar.addEventListener('click', () => botonComprarAction());

}

const botonComprarAction= () =>{
  console.log("REDIRICCIONAR A HTML COMPRAR BOLETO ");

}

 






  const pasajeComponent = {
    GetPasaje: getPasaje,
};

export default pasajeComponent;

