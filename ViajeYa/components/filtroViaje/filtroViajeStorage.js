let resultadoViajes = {
    viajes: [],
};

export const setresultadoViajes = (resultadoViajesInput) => {
    resultadoViajes = resultadoViajesInput;
};

export const getResultadoViajes = () => {
    return resultadoViajes;
};

export const setViajes = (viajes) => {
    if (!Array.isArray(resultadoViajes.viajes)) {
        resultadoViajes.viajes = [];
    }
    resultadoViajes.viajes = viajes;
};

export const getViajes = () => {
    return resultadoViajes.viajes;
};

export const saveRequestComandaToLocalStorage = () => {
    localStorage.setItem('resultadoViajes', JSON.stringify(resultadoViajes));
};

const defaultResultadoViajes = {
    viajes: []
};

export const resetResultadoViajes = () => {
    resultadoViajes = { ...defaultResultadoViajes };
};

export const loadResultadoViajesFromLocalStorage = () => {
    const savedResultadoViajes = localStorage.getItem('resultadoViajes');
    if (savedResultadoViajes) {
        resultadoViajes = JSON.parse(savedResultadoViajes);
    } else {
        resetResultadoViajes();
    }
};
