const footer = document.querySelector(".resultados-busqueda-pasajes");

  async function getPasaje() {
    const response = await fetch('./components/pasaje/pasaje.html');
    const html = await response.text();
    footer.innerHTML += html;
  }

  const pasajeComponent = {
    GetPasaje: getPasaje,
};

export default pasajeComponent;

