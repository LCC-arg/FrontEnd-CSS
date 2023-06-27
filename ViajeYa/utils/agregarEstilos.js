//esta funcion permite agregar los estilos a algun archivo html

export  const agregarEstilo =  (urlArchivoCss) =>{

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = urlArchivoCss;
    document.head.appendChild(link);

}