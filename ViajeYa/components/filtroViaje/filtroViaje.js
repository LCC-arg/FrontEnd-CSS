let suggestions = [];

const getCiudadByNombre = async () => {
  let result = [];
  let response = await fetch(`https://localhost:7018/api/Ciudad`);
  if (response.ok) {
	result = await response.json();
  }
  return result;
};

getCiudadByNombre()
  .then((result) => {
	suggestions = result.map((ciudad) => ciudad.nombre);
  })
  .catch((error) => {
	console.error(error);
  });


async function getFiltroViaje(){
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
		console.log(ciudadOrigen.value);
		console.log(ciudadDestino.value);
		console.log(fechaSalida.value);
		console.log(fechaLlegada.value);
		console.log(pasajeros.value);
		console.log(forma);
	});
}

const filtroViajeComponent = {
    GetFiltroViaje: getFiltroViaje,
};

export default filtroViajeComponent;

