const footer = document.getElementById("footer");

  async function getFooter() {
    const response = await fetch('./components/footer/footer.html');
    const html = await response.text();
    footer.innerHTML = html;
  }

  const footerComponent = {
    GetFooter: getFooter,
};

export default footerComponent;