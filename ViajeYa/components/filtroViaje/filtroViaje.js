import viaje from "../../api/services/viajeService/Viaje.js";
import Ciudad from "../../api/services/destinosService/Ciudad.js";
import {setViajes,saveRequestComandaToLocalStorage,loadResultadoViajesFromLocalStorage, resetResultadoViajes} from "../filtroViaje/filtroViajeStorage.js"

let suggestions = [];
Ciudad.Get().then((result) => {suggestions = result.map((ciudad) => ciudad.nombre);})

async function getFiltroViaje() {
	initializeSearch('#search-input-box-1', 'input', '#container-suggestions-1');
	initializeSearch('#search-input-box-2', 'input', '#container-suggestions-2');
	agregarPasajero();
	buscar();
}

function initializeSearch(searchContainerSelector, inputSearchSelector, boxSuggestionsSelector) {
	const searchContainer = document.querySelector(searchContainerSelector);
	const inputSearch = searchContainer.querySelector(inputSearchSelector);
	const boxSuggestions = document.querySelector(boxSuggestionsSelector);
	const allList = boxSuggestions.querySelectorAll('li');

	inputSearch.addEventListener('keyup', handleKeyUp);
	boxSuggestions.addEventListener('click', handleSuggestionClick);

	function handleKeyUp(e) {
		const userData = e.target.value.toLowerCase();
		const emptyArray = suggestions.filter(data =>
			data.toLowerCase().startsWith(userData)
		);

		searchContainer.classList.toggle('active', userData.length > 0);
		updateSuggestions(emptyArray);
	}

	function handleSuggestionClick(e) {
		if (e.target.tagName === 'LI') {
			inputSearch.value = e.target.textContent;
			searchContainer.classList.remove('active');
		}
	}

	function updateSuggestions(suggestionList) {
		const listData = suggestionList.map(data => `<li>${data}</li>`).join('');
		boxSuggestions.innerHTML = listData || `<li>${inputSearch.value}</li>`;

		allList.forEach(li => {
			li.onclick = () => {
				inputSearch.value = li.textContent;
				searchContainer.classList.remove('active');
			};
		});
	}
}

function agregarPasajero() {
	let botones = document.querySelectorAll(".num-pasajeros");
	let input = document.getElementById("search_cantidad_pasajeros");
	let numero = parseInt(input.value);

	botones.forEach((boton, index) => {
		boton.addEventListener("click", async function () {
			if (index === 0 && numero > 1) {
				numero -= 1;
				input.value = numero.toString()
			}
			if (index === 1) {
				numero += 1;
				input.value = numero.toString()
			}
		});
	});
}

function buscar() {
	let botonBuscar = document.getElementById("boton_search");

	let ciudadOrigen = document.getElementById("search_ciudad_origen");
	let ciudadDestino = document.getElementById("search_ciudad_destino");
	let fechaSalida = document.getElementById("search_fecha_salida");
	let fechaLlegada = document.getElementById("search_fecha_regreso");
	let pasajeros = document.getElementById("search_cantidad_pasajeros");

	const botonTipo = document.querySelectorAll(".boton_tipo_viaje");
	let forma = "";

	botonTipo.forEach(boton => {
		boton.addEventListener("click", () => {
			botonTipo.forEach(btn => btn.classList.remove("selected"));
			boton.classList.add("selected");
			forma = boton.dataset.tipo;
		});
	});


	botonBuscar.addEventListener("click", async function () {

		let ciudadOrigenId = await Ciudad.GetByNombre(ciudadOrigen.value);
		let ciudadDestinoId = await Ciudad.GetByNombre(ciudadDestino.value);
	
		let ciudadOrigenSeleccionadaId;
		let ciudadDestinoSeleccionadaId;
	
		for (let i = 0; i < ciudadOrigenId.length; i++) {
			if (ciudadOrigenId[i].nombre === ciudadOrigen.value) {
				ciudadOrigenSeleccionadaId = ciudadOrigenId[i].id;
				break;
			}
		}
	
		for (let i = 0; i < ciudadDestinoId.length; i++) {
			if (ciudadDestinoId[i].nombre === ciudadDestino.value) {
				ciudadDestinoSeleccionadaId = ciudadDestinoId[i].id;
				break;
			}
		}
	
		viaje.Get(forma, ciudadOrigenSeleccionadaId, ciudadDestinoSeleccionadaId, fechaSalida.value, fechaLlegada.value, pasajeros.value
		).then(viajes => {
			console.log(viajes);
			loadResultadoViajesFromLocalStorage();
			setViajes(viajes);
			saveRequestComandaToLocalStorage();
		});

		window.location.href = "../../pages/pasajes.html";
	});
}

const filtroViajeComponent = {
	GetFiltroViaje: getFiltroViaje,
};

export default filtroViajeComponent;