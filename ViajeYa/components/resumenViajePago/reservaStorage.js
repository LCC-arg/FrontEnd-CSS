let resultadoReservas = {
    reservas: [],
};

export const setResultadoReservas = (resultadoReservasInput) => {
    resultadoReservas = resultadoReservasInput;
};

export const getResultadoReservas = () => {
    return resultadoReservas;
};

export const setReservas = (reservas) => {
    if (!Array.isArray(resultadoReservas.reservas)) {
        resultadoReservas.reservas = [];
    }
    resultadoReservas.reservas = reservas;
};

export const getReservas = () => {
    return resultadoReservas.reservas;
};

export const saveRequestReservaToLocalStorage = () => {
    localStorage.setItem('resultadoReservas', JSON.stringify(resultadoReservas));
};

const defaultResultadoReservas = {
    reservas: []
};

export const resetResultadoReservas = () => {
    resultadoReservas = { ...defaultResultadoReservas };
};

export const loadResultadoReservasFromLocalStorage = () => {
    const savedResultadoReservas = localStorage.getItem('resultadoReservas');
    if (savedResultadoReservas) {
        resultadoReservas = JSON.parse(savedResultadoReservas);
    } else {
        resetResultadoReservas();
    }
};
