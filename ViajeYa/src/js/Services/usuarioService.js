const urlBase = "https://localhost:7196/api/Usuario";


export const loginUsuario = async (email, password) => {
    var url = `${urlBase}/login`;
    let result = []
    let data = {
        "email": email,
        "password": password
    }
    const response = await fetch(url, {
        method:'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
        if(response.ok){
            result = await response.json();
            localStorage.setItem("token", result.token);
        }  
    return result;
}

export const registrarUsuario = async (nombre, apellido, dni, fechaNac, email, nacionalidad, telefono, domicilio, password) => {
    let result = []
    let data = {
        "nombre": nombre,
        "apellido": apellido,
        "dni": dni,
        "fechaNac":fechaNac,
        "email": email,
        "nacionalidad": nacionalidad,
        "telefono": telefono,
        "domicilio": domicilio,
        "password": password
    }
    let response = await fetch(url, {
        method:"POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
        if(response.ok){
            result = await response.json();
        }
    return result;    
}


export const getUsuarioById = async (idUsuario) => {
    var url = `${urlBase}/${idUsuario}`;
    let result = []
    let response = await fetch(url);
        if(response.ok){
            result = await response.json();
        }
    return result;    
}

export const deleteUsuarioByID = async (idUsuario) => {
    var url = `${urlBase}/${idUsuario}`;
    let result = []
    let response = await fetch(url, {
        method:"DELETE",
        headers: {
            "Autorization": "Bearer" + token
        }
    });
        if(response.ok){
            result = await response.json();
        }
    return result;    
}

