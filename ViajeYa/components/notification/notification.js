import { agregarEstilo } from "../../utils/agregarEstilos.js";
import generateNotification from "./notificationComponet.js";

async function getNotificaionModal(image,message) {

  const bodyLogin = document.getElementsByClassName("body__login")[0];
  const html = generateNotification(image, message);
  bodyLogin.innerHTML = html;
  agregarEstilo("/components/notification/notification.css");


};


const notificationComponent = {
    getNotification : getNotificaionModal
}

export default notificationComponent;