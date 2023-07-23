export default function userDataComponent(userData){

    return `<div class="user-data-content">
    <div class="data-basic">
        <p><span class="bolder">NOMBRE: </span>${userData.nombre+" "+userData.apellido}</p>
        <p><span class="bolder">DNI: </span> ${userData.dni}</p>
        <p><span class="bolder">NACIONALIDAD: </span> ${userData.nacionalidad}</p>
    </div>
    
    <div class="data-contac">
        <p><span class="bolder">EMAIL: </span> ${userData.email}</p>
        <p><span class="bolder">TELEFONO: </span> ${userData.telefono}</p>
        <p><span class="bolder">DOMICILIO: </span> ${userData.domicilio}</p>
    </div>
    
</div>`
};