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
    console.log(suggestions);
  })
  .catch((error) => {
    console.error(error);
  });