let viajeSeleccionado = {
    viaje: ""
};

export const setViajeSeleccionado = (viajeSeleccionadoInput) => {
    viajeSeleccionado = viajeSeleccionadoInput;
};

export const getViajeSeleccionado = () => {
    return viajeSeleccionado;
};

export const setViaje = (viajeInput) => {
    viajeSeleccionado.viaje = viajeInput;
  };
  

  export const getViaje = () => {
    return viajeSeleccionado.viaje;
  };

export const saveViajeSeleccionadoToLocalStorage = () => {
    localStorage.setItem('viajeSeleccionado', JSON.stringify(viajeSeleccionado));
};

const defaultViajeSeleccionado = {
    viaje: ""
};

export const resetViajeSeleccionado = () => {
    viajeSeleccionado = { ...defaultViajeSeleccionado };
};

export const loadViajeSeleccionadoFromLocalStorage = () => {
    const savedViajeSeleccionado = localStorage.getItem('viajeSeleccionado');
    if (savedViajeSeleccionado) {
        viajeSeleccionado = JSON.parse(savedViajeSeleccionado);
    } else {
        resetViajeSeleccionado();
    }
};
