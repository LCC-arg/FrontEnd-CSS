import footerComponent from "../components/footer/footer.js";
import headerComponent from "../components/header/header.js";
import reservaComponent from "../components/reserva/reserva.js";
import reservaService from "/ViajeYa/api/services/reservaService/Reserva.js";


document.addEventListener('DOMContentLoaded', ()=> iniciarApp());

async function iniciarApp(){
    await footerComponent.GetFooter();
    await headerComponent.GetHeader();


    const objetoSerializado = sessionStorage.getItem("userProfile");
  const userProfile = JSON.parse(objetoSerializado);
  const usuarioId = userProfile.usuarioId;
  var reservas = await reservaService.GetFiltrado("","",usuarioId,"");
  
reservas.sort((a, b) => {
    const fechaReservaA = new Date(a.fechaReserva);
    const fechaReservaB = new Date(b.fechaReserva);
    return fechaReservaA - fechaReservaB;
  });
  
  let count = 0;
  for (const reserva of reservas) {
    count += 1;
    await reservaComponent.GetReserva(reserva.id, count);
  }
}