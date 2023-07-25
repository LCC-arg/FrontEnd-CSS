export const pasajeroForm = (id) => `

<link rel="stylesheet" href="/ViajeYa/components/pasajero/reservaStyle.css">
<div class="pasajero-form">
<div class="pasajero-tittle" number="${id}" id="pasajero-title">
    <img src="../assets/img/logo-login.png" alt="">
    <h3>Pasajero ${id}</h3>
    <img id="arrow" class="arrow" src="../assets/img/arrow.png" number="${id}" alt="">
  </div>

    <div class="container-data-pasajero-form" id="container-data-pasajero-form${id}">
        <div class="grid">
            <div class="dni">
                <div class="dni-tittle">
                    Número de documento
                </div>
                <div>
                <input type="search" placeholder="Ingresa tu Dni"   class="Buscador" />
                </div>
            </div>
            <div class="nacionalidad">
                <div class="nacionalidad-tittle">Nacionalidad</div>
                    <div>
                        <input type="search" placeholder="Ingresa tu Nacionalidad"   class="Buscador" />
                    </div>
                </div>
            <div class="nombre">
                <div class="nombre-tittle">
                    Nombre
                </div>
                <div>
                    <input type="search" placeholder="Ingresa tu nombre"   class="Buscador" />
                </div>
                </div>
            <div class="apellido">
                <div class="apellido-tittle">
                    Apellido
                </div>
                <div>
                    <input type="search" placeholder="Ingresa tu apellido"   class="Buscador" />
                </div>
            </div>
            <div class="contacto">
                <div class="contacto-tittle">
                    Contacto
                </div>
                <div>
                    <input type="search" placeholder="Ingresa tu contacto"   class="Buscador" />
                </div>
            </div>
            <div class="genero">
                <div class="genero-tittle">
                    Género
                </div>
                <div>
                    <input type="search" placeholder="Ingresa tu genero"   class="Buscador" />
                </div>
            </div>
        </div>
        
        <div class="flex">
            <div class="grid2">
            <label for="search_fecha_nacimiento">Nacimiento:</label>
            <input type="date" id="search_fecha_nacimiento" class="Buscador" />
            </div>
        </div>
    </div>
</div>
    `