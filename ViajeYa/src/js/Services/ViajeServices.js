const urlBase = "https://localhost:7192/api/Viaje";


export const getMercaderia = async (idViaje) => {
    var url = `${urlBase}/${idViaje}`;
    let result = []
    let response = await fetch(url);
        if(response.ok){
            result = await response.json();
        }
    return result;    
}

export const getMercaderiaByFilters = async (tipo, fechaSalida, fechaLlegada) => {
    var url = `${urlBase}?`;
    if(tipo)
    {
        url += `tipo=${tipo}`;
    }
    if(fechaSalida)
    {
        if(tipo){url += `&`;}
        url += `fechaSalida=${fechaSalida}`;
    }
    if(fechaLlegada)
    {
        if(tipo || fechaSalida){url += `&`;}
        url += `fechaLlegada=${fechaLlegada}`;
    }
    if(orden)
    {
        if (tipo || fechaSalida || fechaLlegada) {url += `&`;}
        url += `orden=${orden}`;
    }
    let result = []
    let response = await fetch(url);
        if(response.ok){
            result = await response.json();
        }
    return result;    
}