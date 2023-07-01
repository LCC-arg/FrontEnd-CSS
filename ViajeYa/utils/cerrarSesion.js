import config from "../config/config.js";

//esta funcion se encarga de limpiar las variables que guardan datos sesion
export default function cerrarSesion() {

    Swal.fire({
        title: 'CERRAR SESION',
        text: "estas seguro de cerrar la sesion?",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#E77F84',
        cancelButtonText: 'cancelar',
        cancelButtonColor:  '#E77F84',
        confirmButtonText: 'cerrar'
      }).then((result) => {
        if (result.isConfirmed) {
            
        
        sessionStorage.removeItem("sesion");
        sessionStorage.removeItem("userProfile");

        config.token = null;
        config.idUsuario = null;
        location.reload();

        }
      })

     

}