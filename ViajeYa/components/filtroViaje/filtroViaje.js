initializeSearch('#search-input-box-1', 'input', '#container-suggestions-1');
initializeSearch('#search-input-box-2', 'input', '#container-suggestions-2');
agregarPasajero();

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

function agregarPasajero(){
	let botones = document.querySelectorAll(".num-pasajeros");
	let input = document.getElementById("search_cantidad_pasajeros");
	numero = parseInt(input.value);

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