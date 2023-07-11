export default function formatearHora(fechaCompleta) {
    const fecha = new Date(fechaCompleta);
    const hora = fecha.getHours().toString().padStart(2, '0');
    const minutos = fecha.getMinutes().toString().padStart(2, '0');
    return `${hora}:${minutos}`;
  }