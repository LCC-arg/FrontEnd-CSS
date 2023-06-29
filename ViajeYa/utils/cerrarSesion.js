import config from "../config/config.js";

//esta funcion se encarga de limpiar las variables que guardan datos sesion
export default function cerrarSesion() {
    sessionStorage.removeItem("userProfile");


    Swal.fire({
        title: 'CERRAR SESION',
        text: "estas seguro de cerrar la sesion?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'cerrar'
      }).then((result) => {
        if (result.isConfirmed) {
            
          Swal.fire(
            'adios',
            'Your file has been deleted.',
            'success'
          )
            
          sessionStorage.removeItem("sesion");
        config.token = null;
        config.idUsuario = null;
        location.reload();

        }
      })

     

}