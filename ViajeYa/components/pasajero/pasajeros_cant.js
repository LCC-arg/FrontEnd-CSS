
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
