export default function userDataComponent(userData){

    return `<div class="user-data-content">
    <div class="data-basic">
        <p><span class="nombre">NOMBRE: </span>${userData.nombre+" "+userData.apellido}</p>
        <p><span class="dni">DNI: </span> ${userData.dni}</p>
        <p><span class="email">NACIONALIDAD: </span> ${userData.nacionalidad}</p>
    </div>
    
    <div class="data-contac">
        <p><span class="email">EMAIL: </span> ${userData.email}</p>
        <p><span class="telefono">TELEFONO: </span> ${userData.telefono}</p>
        <p><span class="domicilio">DOMICILIO: </span> ${userData.domicilio}</p>
    </div>
    
</div>`
};