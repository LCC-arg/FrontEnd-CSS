const footer = document.getElementById("footer");

  async function getFooter() {
    const ruta = window.location.origin+"/ViajeYa/components"+"/"+"footer"+"/"+"footer.html";
    const response = await fetch(ruta);
    const html = await response.text();
    footer.innerHTML = html;
  }

  const footerComponent = {
    GetFooter: getFooter,
};

export default footerComponent;