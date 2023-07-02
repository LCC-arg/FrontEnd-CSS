export default function tarjetaDestinoComponent(destinoData){

    return `<div class="columna">
    <button>
        <a href="bariloche.html">
            <img src="${destinoData.imagen}"
                alt="Imagen de galeria">
        </a>
    </button>
    <div class="overlay">
        <div class="image-caption">
            <h3>${destinoData.ciudad}</h3>
        </div>
    </div>
</div>`
}